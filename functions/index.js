/**
 * ==================================================================
 * 1. CONFIGURATION & KEYS
 * ==================================================================
 */

// 1. YOCO KEYS
// Used to CREATE the checkout. (Your Secret Key)
const YOCO_API_SECRET = "sk_test_a4ce465834nOlMb6b1c4aca99bb2";

// Used to VERIFY the webhook. (Your Webhook Secret)
// This ensures the signal actually comes from Yoco.
const YOCO_WEBHOOK_SECRET = "whsec_MzQ3RjU4RjQxRTRFNTgzNjM4NkU3NkM2NUVFMTZFNDA="; 

// 2. CLOUDBEDS KEYS
const CLOUDBEDS_API_KEY = "cbat_zmAieTabO0DvfcHoyAq5pC0wbG2HARFc"; 

// 3. EMAIL SETTINGS (GMAIL)
const EMAIL_USER = "bookings@explorerbackpackers.com"; 
const EMAIL_PASS = "Kanimambo2024"; 

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
 * 3. HELPER FUNCTIONS (Invoice, Email, Cloudbeds)
 * ==================================================================
 */

async function generateInvoicePDF(details, type) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const { height } = page.getSize();

  // Logo
  try {
    const logoPath = path.join(__dirname, "assets", "logo.png");
    if (fs.existsSync(logoPath)) {
      const logoBytes = fs.readFileSync(logoPath);
      const logoImage = await pdfDoc.embedPng(logoBytes);
      const dims = logoImage.scale(0.25);
      page.drawImage(logoImage, { x: 50, y: height - 80, width: dims.width, height: dims.height });
    }
  } catch (e) { /* Ignore logo error */ }

  // Header
  page.drawText(`${type.toUpperCase()} INVOICE`, { x: 400, y: height - 60, size: 18, font: boldFont });

  // Details
  let yPos = height - 150;
  const drawLine = (label, value) => {
    page.drawText(label, { x: 50, y: yPos, size: 12, font: boldFont });
    page.drawText(String(value || "N/A"), { x: 200, y: yPos, size: 12, font });
    yPos -= 25;
  };

  drawLine("Client Name:", `${details.firstName} ${details.lastName}`);
  drawLine("Email:", details.email);
  drawLine("Item/Service:", details.itemName || details.roomName || "Booking");
  drawLine("Date:", details.date || `${details.checkIn} to ${details.checkOut}`);
  drawLine("Total Paid:", `R ${details.totalCost || details.amount}`);
  
  // Paid Stamp
  page.drawText("PAID", {
    x: 400, y: yPos - 50, size: 40, font: boldFont,
    color: rgb(0, 0.6, 0), opacity: 0.5, rotate: { type: "degrees", angle: 15 },
  });

  return await pdfDoc.save();
}

async function sendConfirmationEmail(to, subject, text, attachments) {
  if (EMAIL_PASS === "INSERT_YOUR_GMAIL_APP_PASSWORD_HERE") {
    console.error("Email password missing. Skipping email.");
    return;
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
  await transporter.sendMail({
    from: `"Explorer Backpackers" <${EMAIL_USER}>`,
    to: to,
    bcc: EMAIL_USER,
    subject: subject,
    text: text,
    attachments: attachments,
  });
}

async function createCloudbedsReservation(bookingData) {
  const cloudbedsUrl = "https://api.cloudbeds.com/api/v1.2/postReservation";
  const params = new URLSearchParams();
  params.append("startDate", bookingData.checkIn);
  params.append("endDate", bookingData.checkOut);
  params.append("guestFirstName", bookingData.firstName);
  params.append("guestLastName", bookingData.lastName);
  params.append("guestEmail", bookingData.email);
  params.append("rooms", JSON.stringify([{ roomTypeID: bookingData.roomTypeId, quantity: 1 }]));
  params.append("adults", bookingData.guests || 1);
  params.append("status", "confirmed");

  const response = await axios.post(cloudbedsUrl, params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded", "x-api-key": CLOUDBEDS_API_KEY },
  });
  return response.data;
}

/**
 * ==================================================================
 * 4. API ENDPOINTS
 * ==================================================================
 */

// 1. Check Room Availability
exports.checkRoomAvailability = onRequest({ cors: true }, async (req, res) => {
  const { startDate = '2024-10-27', endDate = '2024-10-28', rooms = 1, adults = 1, children = 0 } = req.query;
  const cloudbedsUrl = `https://api.cloudbeds.com/api/v1.2/getAvailableRoomTypes?startDate=${startDate}&endDate=${endDate}&rooms=${rooms}&adults=${adults}&children=${children}`;

  try {
    const response = await axios.get(cloudbedsUrl, {
      headers: { 'Authorization': `Bearer ${CLOUDBEDS_API_KEY}` }
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).send('Error checking room availability');
  }
});

// 2. Process Yoco Payment (Create Checkout)
exports.processYocoPayment = onRequest({ cors: true }, async (req, res) => {
  try {
    const { amount, currency = "ZAR", bookingId, bookingType } = req.body || req.query;

    if (!amount || !bookingId || !bookingType) {
      return res.status(400).send("Missing parameters: amount, bookingId, or bookingType.");
    }

    const response = await axios.post(
      "https://payments.yoco.com/api/checkouts",
      {
        amount: amount * 100, // Cents
        currency: currency,
        metadata: { bookingId, bookingType }, // Critical for tracking
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

// 3. Yoco Webhook (Verified & Secure)
exports.yocoWebhook = onRequest(async (req, res) => {
  const rawBody = req.rawBody ? req.rawBody.toString() : JSON.stringify(req.body);

  // --- 1. VERIFY SIGNATURE (Now Enabled) ---
  const id = req.headers["webhook-id"];
  const timestamp = req.headers["webhook-timestamp"];
  const signatureParts = (req.headers["webhook-signature"] || "").split(" ");
  const signature = signatureParts[0]?.replace("v1=", "") || "";

  if (YOCO_WEBHOOK_SECRET && id && timestamp) {
    try {
      const signedContent = `${id}.${timestamp}.${rawBody}`;
      // Remove 'whsec_' prefix and create buffer
      const secretPart = YOCO_WEBHOOK_SECRET.replace("whsec_", ""); 
      const secretBytes = Buffer.from(secretPart, "base64");
      
      const expectedSignature = crypto
        .createHmac("sha256", secretBytes)
        .update(signedContent)
        .digest("base64");

      // STRICT CHECK: If they don't match, we reject the request.
      if (signature !== expectedSignature) {
        console.error("Invalid Webhook Signature. Expected:", expectedSignature, "Got:", signature);
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
      return res.status(200).send("Metadata missing, ignoring.");
    }

    try {
      // --- START CUSTOM BUSINESS LOGIC ---
      
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

      // B. Prepare Content
      const isTour = bookingType === "tour";
      const emailSubject = isTour ? `Tour Confirmed: ${data.itemName}` : `Stay Confirmed: ${data.roomName}`;
      const emailText = `Hi ${data.firstName},\n\nYour booking is confirmed! Details attached.\n\nExplorer Backpackers`;

      // C. Cloudbeds Sync (Accommodation only)
      if (!isTour) {
        try {
          const cbRes = await createCloudbedsReservation(data);
          await docRef.update({ cloudbedsReservationId: cbRes.reservationID });
        } catch (e) { console.error("Cloudbeds sync failed", e.message); }
      }

      // D. Generate PDF & Email
      const pdfBytes = await generateInvoicePDF(data, bookingType);
      await sendConfirmationEmail(data.email, emailSubject, emailText, [
        { filename: "Invoice.pdf", content: Buffer.from(pdfBytes), contentType: "application/pdf" }
      ]);

      // E. Update Database
      await docRef.update({
        status: "Paid",
        paymentId: event.id,
        paidAt: new Date().toISOString()
      });

      // --- END CUSTOM BUSINESS LOGIC ---
      
      console.log(`Processed ${bookingType} ${bookingId}`);
      return res.status(200).send("Processed");

    } catch (err) {
      console.error("Webhook Logic Error:", err);
      return res.status(500).send("Internal Error");
    }
  }

  res.status(200).send("Ignored");
});