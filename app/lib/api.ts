import { addDoc, collection } from "firebase/firestore";
// UPDATE THIS PATH: Point to wherever you initialized your firebase app
import { db } from "./firebase"; 

// --- TYPES ---
type AccommodationBookingDetails = {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  estimatedArrivalTime: string;
  note: string;
  roomTypeId: string;
  numberOfGuests: number;
  checkIn: string;
  checkOut: string;
};

type TourBookingDetails = {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tourName: string;
  tourDate: string;
  guests: number;
  note: string;
};

// --- HELPER: Availability Check ---
export const checkRoomAvailability = async (
  startDate: string, 
  endDate: string, 
  adults: string | number, 
  promoCode: string
) => {
  const firebaseFunctionUrl = `https://us-central1-explorer-backpackers.cloudfunctions.net/checkRoomAvailability`;
  const params = new URLSearchParams({
    startDate: startDate,
    endDate: endDate,
    adults: adults.toString(),
    promoCode: promoCode || ''
  });

  try {
    const response = await fetch(`${firebaseFunctionUrl}?${params.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Error checking availability');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching room availability:", error);
    throw error;
  }
};

// --- UNIFIED PAYMENT FUNCTION ---
async function initiateCheckout(amount: number, bookingId: string, bookingType: 'tour' | 'accommodation') {
  // 1. URL to your Cloud Function
  const url = `https://us-central1-explorer-backpackers.cloudfunctions.net/processYocoPayment`;

  try {
    // 2. Send the ID and Amount to Yoco
    const response = await fetch(url, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        bookingId: bookingId,
        bookingType: bookingType,
        currency: 'ZAR'
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Checkout Error: ${err}`);
    }

    // 3. Return the Yoco Redirect URL
    const data = await response.json();
    
    // --- CRITICAL FIX: Return the string, not the object ---
    return data.redirectUrl; 
    
  } catch (error) {
    console.error('Error initiating checkout:', error);
    throw error;
  }
}

// --- 1. PROCESS ACCOMMODATION BOOKING ---
export async function processYocoPayment(bookingDetails: AccommodationBookingDetails) {
  try {
    // A. Create the "Pending" Booking in Firestore
    const docRef = await addDoc(collection(db, "accommodation_bookings"), {
      ...bookingDetails,
      status: "Pending Payment",
      createdAt: new Date(),
    });

    // B. Initiate Payment with the new ID
    return await initiateCheckout(bookingDetails.amount, docRef.id, 'accommodation');

  } catch (error) {
    console.error("Accommodation Booking Failed:", error);
    throw error;
  }
}

// --- 2. PROCESS TOUR BOOKING ---
export async function processYocoTourPayment(tourBookingDetails: TourBookingDetails) {
  try {
    // A. Create the "Pending" Booking in Firestore
    const docRef = await addDoc(collection(db, "tours_bookings"), {
      ...tourBookingDetails,
      status: "Pending Payment",
      createdAt: new Date(),
    });

    // B. Initiate Payment with the new ID
    return await initiateCheckout(tourBookingDetails.amount, docRef.id, 'tour');

  } catch (error) {
    console.error("Tour Booking Failed:", error);
    throw error;
  }
}