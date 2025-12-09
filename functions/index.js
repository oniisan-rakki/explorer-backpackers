/* eslint-disable */
/**
 * ==================================================================
 * 1. CONFIGURATION & KEYS
 * ==================================================================
 */

// 1. YOCO KEYS (Loaded from .env)
const YOCO_API_SECRET = process.env.YOCO_API_SECRET;
const YOCO_WEBHOOK_SECRET = process.env.YOCO_WEBHOOK_SECRET;

// 2. CLOUDBEDS KEYS
const CLOUDBEDS_API_KEY = process.env.CLOUDBEDS_API_KEY;

// 3. EMAIL SETTINGS
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// 4. SITE URL
const SITE_URL = process.env.SITE_URL;

/**
 * ==================================================================
 * 2. IMPORTS & SETUP
 * ==================================================================
 */
const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const axios = require("axios");
const nodemailer = require("nodemailer");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { Buffer } = require("buffer");

admin.initializeApp();
const db = getFirestore();

/**
 * ==================================================================
 * 3. HELPER FUNCTIONS
 * ==================================================================
 */

// --- UNIVERSAL EMAIL SENDER ---
async function sendEmail(to, subject, text, attachments = []) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });

  await transporter.sendMail({
    from: `"Explorer Backpackers" <${EMAIL_USER}>`, // <--- Uses EMAIL_USER now
    to: to,
    bcc: EMAIL_USER, // You always get a copy
    subject: subject,
    text: text,
    attachments: attachments,
  });
}

// --- ADVANCED INVOICE GENERATOR ---
async function generateInvoicePDF(data, type) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 Size
  const { height, width } = page.getSize();

  // 1. EMBED CUSTOM FONTS (Poppins)
  let font, boldFont;
  
  try {
    const fontPath = path.join(__dirname, "assets", "Poppins-Regular.ttf");
    const boldFontPath = path.join(__dirname, "assets", "Poppins-Bold.ttf");

    if (fs.existsSync(fontPath) && fs.existsSync(boldFontPath)) {
      const fontBytes = fs.readFileSync(fontPath);
      const boldFontBytes = fs.readFileSync(boldFontPath);
      font = await pdfDoc.embedFont(fontBytes);
      boldFont = await pdfDoc.embedFont(boldFontBytes);
    } else {
      console.warn("Poppins font not found, falling back to Helvetica");
      font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    }
  } catch (e) {
    console.error("Font loading error:", e);
    font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  }

  // 2. LOAD LOGO
  try {
    const logoPath = path.join(__dirname, "assets", "logo.png");
    if (fs.existsSync(logoPath)) {
      const logoBytes = fs.readFileSync(logoPath);
      const logoImage = await pdfDoc.embedPng(logoBytes);
      const dims = logoImage.scale(0.75); 
      page.drawImage(logoImage, { x: 50, y: height - 100, width: dims.width, height: dims.height });
    }
  } catch (e) { /* Ignore logo error */ }

  // 3. HEADER DETAILS
  // Both Tour and Group use "SALES INVOICE" now
  page.drawText("SALES INVOICE", { x: 400, y: height - 60, size: 18, font: boldFont });
  
  // Company Info (With Spacing & No VAT)
  let yPos = height - 130; 
  const textSpacing = 15;

  page.drawText("Explorer Backpackers", { x: 50, y: yPos, size: 12, font: boldFont });
  yPos -= textSpacing;
  page.drawText("27 7th Street, Parkhurst", { x: 50, y: yPos, size: 10, font });
  yPos -= textSpacing;
  page.drawText("Randburg, 2193", { x: 50, y: yPos, size: 10, font });
  yPos -= textSpacing;
  page.drawText("bookings@explorerbackpackers.com", { x: 50, y: yPos, size: 10, font });
  yPos -= textSpacing;
  page.drawText("+27 71 137 0207", { x: 50, y: yPos, size: 10, font });

  // 4. CUSTOMER & INVOICE META
  yPos = height - 200; // Reset Y for right side meta
  
  const invoiceNum = data.invoiceNumber || `INV-${Math.floor(Math.random() * 100000)}`;
  const dateStr = new Date().toISOString().split('T')[0];
  
  // Right Side: Meta
  page.drawText("INVOICE NO:", { x: 400, y: yPos, size: 10, font: boldFont });
  page.drawText(invoiceNum, { x: 500, y: yPos, size: 10, font });
  
  yPos -= textSpacing;
  page.drawText("DATE:", { x: 400, y: yPos, size: 10, font: boldFont });
  page.drawText(dateStr, { x: 500, y: yPos, size: 10, font });

  // Status
  yPos -= textSpacing;
  const status = type === 'tour' ? "PAID" : "UNPAID";
  const statusColor = type === 'tour' ? rgb(0, 0.6, 0) : rgb(0.8, 0, 0);
  page.drawText("STATUS:", { x: 400, y: yPos, size: 10, font: boldFont });
  page.drawText(status, { x: 500, y: yPos, size: 10, font: boldFont, color: statusColor });

  // Left Side: Bill To
  yPos -= 40; 
  // Separator Line
  page.drawLine({ start: { x: 50, y: yPos }, end: { x: 545, y: yPos }, thickness: 1, color: rgb(0.85, 0.85, 0.85) });
  
  yPos -= 20;
  page.drawText("BILL TO:", { x: 50, y: yPos, size: 10, font: boldFont, color: rgb(0.5, 0.5, 0.5) });
  yPos -= 20;
  page.drawText(`${data.firstName} ${data.lastName}`, { x: 50, y: yPos, size: 14, font: boldFont });
  yPos -= 15;
  page.drawText(data.email, { x: 50, y: yPos, size: 10, font });
  if (data.phone) {
    yPos -= 15;
    page.drawText(data.phone, { x: 50, y: yPos, size: 10, font });
  }

  // 5. TABLE HEADERS
  yPos -= 60;
  
  // Gray Background
  page.drawRectangle({ x: 40, y: yPos - 8, width: 515, height: 24, color: rgb(0.96, 0.96, 0.96) });

  const col1 = 50;  // Description
  const col4 = 480; // Amount (Base position for alignment)

  if (type === 'group') {
      // Group Columns: Qty, Rate, Nights, Amount
      const col2 = 300; // Qty
      const col2b = 350; // Rate
      const col3 = 420; // Nights

      page.drawText("DESCRIPTION", { x: col1, y: yPos, size: 9, font: boldFont });
      page.drawText("QUANTITY", { x: col2 - 10, y: yPos, size: 9, font: boldFont });
      page.drawText("RATE", { x: col2b, y: yPos, size: 9, font: boldFont });
      page.drawText("NIGHTS", { x: col3 - 5, y: yPos, size: 9, font: boldFont });
      page.drawText("AMOUNT", { x: 500, y: yPos, size: 9, font: boldFont }); // Manually aligned right

      // Separator
      yPos -= 10;
      page.drawLine({ start: { x: 50, y: yPos }, end: { x: 545, y: yPos }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });

      // ROW DATA
      yPos -= 20;
      const qty = data.guests || 1;
      const nights = data.nights || 1;
      const rate = data.rate || 345; 
      const originalTotal = data.originalTotal || (qty * nights * rate);

      page.drawText("Group Booking", { x: col1, y: yPos, size: 10, font });
      page.drawText(String(qty), { x: col2 + 15, y: yPos, size: 10, font });
      page.drawText(`R ${rate}`, { x: col2b, y: yPos, size: 10, font });
      page.drawText(String(nights), { x: col3 + 10, y: yPos, size: 10, font });
      page.drawText(`R ${parseFloat(originalTotal).toFixed(2)}`, { x: 500, y: yPos, size: 10, font });

  } else {
      // Tour Columns: Description, Qty, Amount
      const colQty = 400; 

      page.drawText("DESCRIPTION", { x: col1, y: yPos, size: 9, font: boldFont });
      page.drawText("QUANTITY", { x: colQty, y: yPos, size: 9, font: boldFont });
      page.drawText("AMOUNT", { x: 500, y: yPos, size: 9, font: boldFont });

      // Separator
      yPos -= 10;
      page.drawLine({ start: { x: 50, y: yPos }, end: { x: 545, y: yPos }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });

      // ROW DATA
      yPos -= 20;
      const tourName = data.itemName || data.tourName || "Tour Booking";
      const qty = 1; 
      const amount = data.amount || data.totalCost;

      page.drawText(`Tour Booking: ${tourName}`, { x: col1, y: yPos, size: 10, font });
      page.drawText(String(qty), { x: colQty + 15, y: yPos, size: 10, font });
      page.drawText(`R ${parseFloat(amount).toFixed(2)}`, { x: 500, y: yPos, size: 10, font });
  }

  // Separator
  yPos -= 15;
  page.drawLine({ start: { x: 50, y: yPos }, end: { x: 545, y: yPos }, thickness: 1, color: rgb(0.9, 0.9, 0.9) });

  // 6. TOTALS SECTION
  yPos -= 30;
  
  if (type === 'group') {
    // Discount Row
    const discount = parseFloat(data.discountAmount || 0).toFixed(2);
    page.drawText("Discount (25%)", { x: 350, y: yPos, size: 10, font });
    page.drawText(`- R ${discount}`, { x: 500, y: yPos, size: 10, font, color: rgb(0, 0, 0) });
    yPos -= 20;
    
    // Grand Total Line
    page.drawLine({ start: { x: 350, y: yPos + 10 }, end: { x: 545, y: yPos + 10 }, thickness: 1 });
    
    const finalTotal = parseFloat(data.finalTotal || data.amount).toFixed(2);
    page.drawText("TOTAL", { x: 350, y: yPos - 5, size: 14, font: boldFont });
    page.drawText(`R ${finalTotal}`, { x: 500, y: yPos - 5, size: 14, font: boldFont });

  } else {
    // Tour Totals: Amount Paid
    const amountPaid = parseFloat(data.amount || data.totalCost).toFixed(2);
    
    page.drawText("Amount Paid", { x: 350, y: yPos, size: 10, font: boldFont });
    page.drawText(`R ${amountPaid}`, { x: 500, y: yPos, size: 10, font: boldFont });
    
    yPos -= 20;
    page.drawLine({ start: { x: 350, y: yPos + 10 }, end: { x: 545, y: yPos + 10 }, thickness: 1 });
    
    page.drawText("TOTAL DUE", { x: 350, y: yPos - 5, size: 14, font: boldFont });
    page.drawText("R 0.00", { x: 500, y: yPos - 5, size: 14, font: boldFont });
  }

  // 7. FOOTER / STAMPS / TERMS
  yPos -= 100;

  if (type === 'tour') {
    // Footer Contact Info
    const footerText = "tel: +27 71 137 0207 / Email: bookings@explorerbackpackers.com / www.explorerbackpackers.com";
    const textWidth = font.widthOfTextAtSize(footerText, 9);
    const centerX = (width - textWidth) / 2;
    page.drawText(footerText, { x: centerX, y: 50, size: 9, font, color: rgb(0, 0, 0) });
  
  } else if (type === 'group') {
    // GROUP TERMS
    page.drawText("TERMS & CONDITIONS:", { x: 50, y: yPos, size: 10, font: boldFont });
    
    const terms = [
        "1. Confirmation: This booking is subject to availability and will be confirmed upon receipt of a 50% deposit.",
        "2. Payment: Full payment is required 7 days prior to arrival.",
        "3. Cancellation: Cancellations made less than 7 days before arrival are non-refundable.",
        "4. Rules: Guests are expected to adhere to the hostel's code of conduct."
    ];

    let termY = yPos - 20;
    for (const term of terms) {
        page.drawText(term, { x: 50, y: termY, size: 9, font, color: rgb(0, 0, 0) });
        termY -= 15;
    }
    
    // Add Footer Contact Info for Group too
    const footerText = "tel: +27 71 137 0207 / Email: bookings@explorerbackpackers.com / www.explorerbackpackers.com";
    const textWidth = font.widthOfTextAtSize(footerText, 9);
    const centerX = (width - textWidth) / 2;
    page.drawText(footerText, { x: centerX, y: 50, size: 9, font, color: rgb(0, 0, 0) });
  }

  return await pdfDoc.save();
}

async function sendConfirmationEmail(to, subject, text, attachments) {
  // GMAIL CONFIGURATION (Using App Password)
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: EMAIL_USER, 
      pass: EMAIL_PASS, 
    },
  });

  await transporter.sendMail({
    from: `"Explorer Backpackers" <${EMAIL_USER}>`,
    to: to,
    bcc: EMAIL_USER, // Receive a copy yourself
    subject: subject,
    text: text,
    attachments: attachments,
  });
}

// 2. Process Group Booking (Updated Calculation & Logic)
exports.processGroupBooking = onRequest({ cors: true }, async (req, res) => {
  try {
    const data = req.body;
    
    // VALIDATION: Guests 5 - 35
    const guests = parseInt(data.guests) || 0;
    if (guests < 5 || guests > 35) {
      return res.status(400).json({ error: "Group size must be between 5 and 35 guests." });
    }

    // CALCULATION: Flat rate R345 with 25% discount
    const baseRate = 345; 
    const nights = parseInt(data.nights) || 1;
    
    const originalTotal = baseRate * guests * nights;
    const discountAmount = originalTotal * 0.25; // 25% Discount
    const finalTotal = originalTotal - discountAmount;

    const invoiceData = {
      ...data,
      originalTotal,
      discountAmount,
      finalTotal,
      invoiceNumber: `GRP-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: "Unpaid"
    };

    // Save to Database
    await db.collection("group_bookings").add(invoiceData);

    // Generate Invoice
    const pdfBytes = await generateInvoicePDF(invoiceData, 'group');

    // Email Client
    await sendEmail(
      data.email, 
      "Your Group Booking Invoice", 
      `Hi ${data.firstName},\n\nPlease find your group booking invoice attached.\n\nNote: Bookings will be confirmed upon confirmation of space availability.\n\nKind regards,\nExplorer Backpackers`, 
      [{ filename: "Invoice.pdf", content: Buffer.from(pdfBytes), contentType: "application/pdf" }]
    );

    res.status(200).json({ success: true, message: "Invoice sent" });

  } catch (error) {
    console.error("Group Booking Error:", error);
    res.status(500).send(error.message);
  }
});

// --- CLOUDBEDS API HELPERS ---

async function createCloudbedsReservation(bookingData) {
  const cloudbedsUrl = "https://api.cloudbeds.com/api/v1.2/postReservation";
  const params = new URLSearchParams();
  
  params.append("startDate", bookingData.checkIn);
  params.append("endDate", bookingData.checkOut);
  params.append("guestFirstName", bookingData.firstName);
  params.append("guestLastName", bookingData.lastName);
  params.append("guestEmail", bookingData.email);
  params.append("guestCountry", bookingData.country || 'ZA'); 
  params.append("guestPhone", bookingData.phone || '');       
  
  // Rooms & Guests (Correctly formatted as Arrays)
  params.append("rooms", JSON.stringify([{ roomTypeID: bookingData.roomTypeId, quantity: 1 }]));
  
  const numAdults = Number(bookingData.numberOfGuests || bookingData.guests || 1);
  params.append("adults", JSON.stringify([{ roomTypeID: bookingData.roomTypeId, quantity: numAdults }]));
  
  params.append("children", JSON.stringify([{ roomTypeID: bookingData.roomTypeId, quantity: 0 }]));
  
  // FIX: Re-added Payment Method (Required by Cloudbeds)
  params.append("paymentMethod", "YOCO");

  params.append("status", "confirmed");

  try {
    const response = await axios.post(cloudbedsUrl, params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded", "x-api-key": CLOUDBEDS_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Cloudbeds createReservation Error:", error.response?.data || error.message);
    throw error;
  }
}

async function getCloudbedsReservation(reservationID) {
  const url = `https://api.cloudbeds.com/api/v1.2/getReservation?reservationID=${reservationID}`;
  try {
    const response = await axios.get(url, {
      headers: { "x-api-key": CLOUDBEDS_API_KEY },
    });
    return response.data.data;
  } catch (error) {
    console.error("Cloudbeds getReservation Error:", error.response?.data || error.message);
    throw error;
  }
}

async function postCloudbedsAdjustment(reservationID, amount, description) {
  const url = "https://api.cloudbeds.com/api/v1.2/postAdjustment";
  const params = new URLSearchParams();
  params.append("reservationID", reservationID);
  params.append("type", "discount"); 
  params.append("amount", amount); 
  params.append("description", description);

  try {
    await axios.post(url, params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded", "x-api-key": CLOUDBEDS_API_KEY },
    });
  } catch (error) {
    console.error("Cloudbeds postAdjustment Error:", error.response?.data || error.message);
    throw error;
  }
}

async function postCloudbedsPayment(reservationID, amount) {
  const url = "https://api.cloudbeds.com/api/v1.2/postPayment";
  const params = new URLSearchParams();
  params.append("reservationID", reservationID);
  params.append("type", "YOCO"); 
  params.append("amount", amount);

  try {
    await axios.post(url, params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded", "x-api-key": CLOUDBEDS_API_KEY },
    });
  } catch (error) {
    console.error("Cloudbeds postPayment Error:", error.response?.data || error.message);
    throw error;
  }
}

/**
 * ==================================================================
 * 4. API ENDPOINTS
 * ==================================================================
 */

// 1. Send Contact Form Email (Admin Notification + Customer Auto-reply)
exports.sendContactMessage = onRequest({ cors: true }, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Send Notification to Admin (YOU)
    const adminText = `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    await sendEmail(
      "bookings@explorerbackpackers.com", 
      `New Website Inquiry: ${subject}`, 
      adminText
    );

    // 2. Send Confirmation to Customer (THEM)
    const userText = `Hi ${name},\n\nThank you for contacting Explorer Backpackers. We have received your message regarding "${subject}" and will get back to you shortly.\n\nKind regards,\nThe Explorer Backpackers Team`;
    await sendEmail(
      email, // Sends to the customer's email address
      "We received your message - Explorer Backpackers", // Subject
      userText
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    res.status(500).send("Error sending message");
  }
});
// 1. Check Room Availability

exports.checkRoomAvailability = onRequest({ cors: true }, async (req, res) => {
  const { startDate, endDate, rooms = 1, adults = 1, children = 0 } = req.query;
  const cloudbedsUrl = `https://api.cloudbeds.com/api/v1.2/getAvailableRoomTypes?startDate=${startDate}&endDate=${endDate}&rooms=${rooms}&adults=${adults}&children=${children}`;

  try {
    // Added User-Agent to avoid 503 errors from Cloudbeds
    const response = await axios.get(cloudbedsUrl, {
      headers: { 
        'Authorization': `Bearer ${CLOUDBEDS_API_KEY}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ExplorerBackpackers/1.0'
      }
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error fetching rooms:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Error checking room availability');
  }
});

// 2. Process Yoco Payment
exports.processYocoPayment = onRequest({ cors: true }, async (req, res) => {
  try {
    const { amount, currency = "ZAR", bookingId, bookingType } = req.body || req.query;

    if (!amount || !bookingId || !bookingType) {
      return res.status(400).send("Missing parameters: amount, bookingId, or bookingType.");
    }

    const successUrl = `${SITE_URL}/thankyou?bookingId=${bookingId}&bookingType=${bookingType}`;

    const response = await axios.post(
      "https://payments.yoco.com/api/checkouts",
      {
        amount: amount * 100, // Cents
        currency: currency,
        successUrl: successUrl,
        metadata: { bookingId, bookingType }, 
      },
      {
        headers: {
          Authorization: `Bearer ${YOCO_API_SECRET}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Yoco Checkout Error:", error.response?.data || error.message);
    res.status(500).send("Error creating checkout");
  }
});

// 3. Yoco Webhook
exports.yocoWebhook = onRequest(async (req, res) => {
  const rawBody = req.rawBody ? req.rawBody.toString() : JSON.stringify(req.body);

  // --- 1. SIGNATURE PARSING ---
  const id = req.headers["webhook-id"];
  const timestamp = req.headers["webhook-timestamp"];
  const signatureHeader = req.headers["webhook-signature"] || "";
  let signature = signatureHeader;
  
  if (signature.startsWith("v1,")) {
    signature = signature.replace("v1,", "");
  } else if (signature.startsWith("v1=")) {
    signature = signature.replace("v1=", "");
  }
  signature = signature.trim();

  if (YOCO_WEBHOOK_SECRET && id && timestamp) {
    try {
      const signedContent = `${id}.${timestamp}.${rawBody}`;
      const secretPart = YOCO_WEBHOOK_SECRET.replace("whsec_", "").trim();
      const secretBytes = Buffer.from(secretPart, "base64");
      
      const expectedSignature = crypto.createHmac("sha256", secretBytes).update(signedContent).digest("base64");

      if (signature !== expectedSignature) {
        console.error(`Signature Mismatch! Exp: ${expectedSignature}, Rec: ${signature}`);
        return res.status(403).send("Invalid Signature");
      }
    } catch (err) {
      console.warn("Signature check failed:", err.message);
      return res.status(400).send("Verification failed");
    }
  }

  // --- 2. PROCESS EVENT ---
  let event;
  try {
    event = JSON.parse(rawBody);
  } catch (e) {
    return res.status(400).send("Invalid JSON");
  }

  if (event.type === "payment.succeeded") {
    const { bookingId, bookingType } = event.payload.metadata;

    if (!bookingId || !bookingType) {
      console.error("Metadata missing in Yoco event");
      return res.status(200).send("Metadata missing");
    }

    try {
      // A. Select Database
      const collectionName = bookingType === "tour" ? "tours_bookings" : "accommodation_bookings";
      const docRef = db.collection(collectionName).doc(bookingId);
      const docSnap = await docRef.get();

      if (!docSnap.exists) {
        console.error(`Booking ${bookingId} missing in ${collectionName}`);
        return res.status(200).send("Doc not found");
      }
      
      const data = docSnap.data();
      if (data.status === "Paid") return res.status(200).send("Already Paid");

      // B. Cloudbeds Sync (Accommodation Only)
      if (bookingType !== "tour") {
        try {
          console.log("Creating Cloudbeds Reservation...");
          
          // 1. Create the Reservation
          const cbRes = await createCloudbedsReservation(data);
          
          // DEBUG: Log Cloudbeds Response to see why it fails if it does
          console.log("Cloudbeds Response:", JSON.stringify(cbRes));

          if (!cbRes.success || !cbRes.reservationID) {
             throw new Error(`Cloudbeds Failed: ${cbRes.message}`);
          }
          
          const reservationID = cbRes.reservationID;
          console.log(`Reservation Created: ${reservationID}`);
          
          // 2. Get the actual balance Cloudbeds charged
          const resDetails = await getCloudbedsReservation(reservationID);
          if (!resDetails) throw new Error("Failed to get reservation details for balance check");

          const currentBalance = parseFloat(resDetails.balance);
          const paidAmount = parseFloat(data.amount || data.totalCost);
          
          // 3. Calculate Difference (Discount needed)
          const difference = currentBalance - paidAmount;
          
          if (difference > 0) {
            console.log(`Applying Discount Adjustment of: ${difference}`);
            await postCloudbedsAdjustment(reservationID, difference, "Online Booking Discount");
          }

          // 4. Post the Payment
          console.log(`Posting Payment of: ${paidAmount}`);
          await postCloudbedsPayment(reservationID, paidAmount);

          await docRef.update({ cloudbedsReservationId: reservationID });

        } catch (e) { 
          console.error("Cloudbeds sync failed:", e.message); 
        }
      }

      // C. Generate PDF & Email
      try {
        const isTour = bookingType === "tour";
        const emailSubject = isTour ? `Tour Confirmed: ${data.itemName || data.tourName}` : `Stay Confirmed: ${data.roomName}`;
        const emailText = `Hi ${data.firstName},\n\nYour booking is confirmed! Details attached.\n\nExplorer Backpackers`;
        
        const pdfBytes = await generateInvoicePDF(data, bookingType);
        
        await sendConfirmationEmail(data.email, emailSubject, emailText, [
          { filename: "Invoice.pdf", content: Buffer.from(pdfBytes), contentType: "application/pdf" }
        ]);
        console.log("Email sent successfully.");
      } catch (emailError) {
        console.error("EMAIL FAILED (Ignored):", emailError.message);
      }

      // D. Update Database
      await docRef.update({
        status: "Paid",
        paymentId: event.id,
        paidAt: new Date().toISOString()
      });
      
      console.log(`Successfully Processed ${bookingType} ${bookingId}`);
      return res.status(200).send("Processed");

    } catch (err) {
      console.error("Webhook Logic Error:", err);
      return res.status(500).send("Internal Error");
    }
  }

  res.status(200).send("Ignored");
});