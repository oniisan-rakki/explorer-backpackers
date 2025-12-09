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
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const { height, width } = page.getSize();

  // 1. LOAD LOGO
  try {
    const logoPath = path.join(__dirname, "assets", "logo.png");
    if (fs.existsSync(logoPath)) {
      const logoBytes = fs.readFileSync(logoPath);
      const logoImage = await pdfDoc.embedPng(logoBytes);
      const dims = logoImage.scale(0.25);
      page.drawImage(logoImage, { x: 50, y: height - 100, width: dims.width, height: dims.height });
    }
  } catch (e) { /* Ignore logo error */ }

  // 2. HEADER DETAILS
  page.drawText(type === 'tour' ? "TAX INVOICE" : "SALES INVOICE", { x: 400, y: height - 60, size: 18, font: boldFont });
  
  page.drawText("Explorer Backpackers", { x: 50, y: height - 120, size: 12, font: boldFont });
  page.drawText("27 7th Street, Parkhurst", { x: 50, y: height - 135, size: 10, font });
  page.drawText("Randburg, 2193", { x: 50, y: height - 148, size: 10, font });
  page.drawText("VAT Nr: 4940316674", { x: 50, y: height - 161, size: 10, font });

  // 3. CUSTOMER & INVOICE INFO
  let yPos = height - 200;
  
  const invoiceNum = data.invoiceNumber || `INV-${Math.floor(Math.random() * 100000)}`;
  const dateStr = new Date().toISOString().split('T')[0];
  
  page.drawText("INVOICE NO:", { x: 400, y: yPos, size: 10, font: boldFont });
  page.drawText(invoiceNum, { x: 500, y: yPos, size: 10, font });
  page.drawText("DATE:", { x: 400, y: yPos - 15, size: 10, font: boldFont });
  page.drawText(dateStr, { x: 500, y: yPos - 15, size: 10, font });

  page.drawText("ISSUED TO:", { x: 50, y: yPos, size: 10, font: boldFont });
  page.drawText(`${data.firstName} ${data.lastName}`, { x: 50, y: yPos - 15, size: 12, font });
  page.drawText(data.email, { x: 50, y: yPos - 30, size: 10, font });

  // 4. TABLE HEADERS
  yPos -= 60;
  page.drawRectangle({ x: 40, y: yPos - 5, width: 515, height: 20, color: rgb(0.9, 0.9, 0.9) });
  page.drawText("DESCRIPTION", { x: 50, y: yPos, size: 10, font: boldFont });
  page.drawText("QTY/NIGHTS", { x: 300, y: yPos, size: 10, font: boldFont });
  page.drawText("AMOUNT", { x: 450, y: yPos, size: 10, font: boldFont });

  // 5. TABLE ROWS
  yPos -= 25;
  const description = data.itemName || data.roomName || data.tourName || "Booking";
  const qty = data.nights || data.guests || 1;
  const originalAmount = data.originalTotal || data.totalCost || data.amount; 
  
  page.drawText(description.substring(0, 40), { x: 50, y: yPos, size: 10, font });
  page.drawText(String(qty), { x: 310, y: yPos, size: 10, font });
  page.drawText(`R ${parseFloat(originalAmount).toFixed(2)}`, { x: 450, y: yPos, size: 10, font });

  // 6. TOTALS & DISCOUNT
  yPos -= 40;
  
  if (type === 'group') {
    // Show Discount Row
    page.drawText("DISCOUNT (25%)", { x: 50, y: yPos, size: 10, font: boldFont, color: rgb(0.8, 0, 0) });
    page.drawText(`- R ${parseFloat(data.discountAmount).toFixed(2)}`, { x: 450, y: yPos, size: 10, font: boldFont, color: rgb(0.8, 0, 0) });
    yPos -= 20;
  }

  // Grand Total Line
  page.drawLine({ start: { x: 400, y: yPos + 10 }, end: { x: 550, y: yPos + 10 }, thickness: 1 });
  page.drawText("TOTAL", { x: 350, y: yPos - 5, size: 14, font: boldFont });
  page.drawText(`R ${parseFloat(data.finalTotal || data.amount).toFixed(2)}`, { x: 450, y: yPos - 5, size: 14, font: boldFont });

  // 7. FOOTER & CLAUSES
  yPos -= 80;

  if (type === 'tour') {
    // TOUR: PAID Stamp
    const stampText = "PAID";
    page.drawText(stampText, {
      x: 200, y: yPos, size: 60, font: boldFont,
      color: rgb(0, 0.6, 0), opacity: 0.3,
      rotate: { type: "degrees", angle: 25 },
    });
    page.drawText("Thank you for your business!", { x: 200, y: 50, size: 10, font, color: rgb(0.5, 0.5, 0.5) });
  
  } else if (type === 'group') {
    // GROUP: Clause, NO BANK DETAILS
    page.drawText("TERMS & CONFIRMATION:", { x: 50, y: yPos, size: 10, font: boldFont });
    yPos -= 15;
    page.drawText("Bookings will be confirmed upon confirmation as in we will check our space", { x: 50, y: yPos, size: 9, font });
    yPos -= 12;
    page.drawText("and if it is available we can service you.", { x: 50, y: yPos, size: 9, font });
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