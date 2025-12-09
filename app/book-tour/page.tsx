"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script'; // Robust script loading
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import AddressAutocomplete from '../components/AddressAutocomplete'; // Import new component
import { images } from '../data/images';
import { processYocoTourPayment } from '../lib/api';
import { getTourById } from '../lib/utils'; 

// --- Types ---
type TourBookingData = {
  tour: any;
  date: string;
  guests: number;
  totalPrice: number;
  selectedTier?: any;
};

// --- Helper to safely parse price strings ---
const parsePrice = (priceStr: string | null) => {
  if (!priceStr) return 0;
  const cleanStr = priceStr.toString().replace(/[^0-9.]/g, '');
  const num = parseFloat(cleanStr);
  return isNaN(num) ? 0 : num;
};

function TourBookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- 1. Reconstruct Booking Data from URL ---
  const tourId = searchParams.get('tourId');
  const tour = tourId ? getTourById(tourId) : null;
  
  const bookingData: TourBookingData | null = tour ? {
    tour: tour,
    date: searchParams.get('date') || '',
    guests: parseInt(searchParams.get('guests') || '1', 10),
    totalPrice: parsePrice(searchParams.get('totalPrice')), 
    selectedTier: searchParams.get('tier') ? { type: searchParams.get('tier') } : undefined
  } : null;

  // --- 2. State & Logic ---
  const [guestDetails, setGuestDetails] = useState({
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Phone': '',
    'Special Request': '',
    'Pickup Address': '' 
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false); // Checkbox state
  const [result, setResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false); // Track if Maps API is ready

  const tourAny = bookingData?.tour as any;
  const hasPickup = tourAny?.hotelPickupAvailable || tourAny?.localHotelPickup || tourAny?.isHotelPickupAvailable;

  // Default departure logic
  useEffect(() => {
    if (tourAny && !hasPickup) {
        let point = "Central Meeting Point";
        if (tourAny.itinerary && tourAny.itinerary.length > 0) {
           const firstStop = tourAny.itinerary[0];
           if (firstStop.title && (firstStop.title.includes("Depart") || firstStop.title.includes("Start"))) {
               point = firstStop.description ? firstStop.description.split('.')[0] : firstStop.title;
           } else if (firstStop.description) {
               point = firstStop.title;
           }
        }
        if (tourAny.additionalInfo) {
            const departureInfo = tourAny.additionalInfo.find((info: string) => info.includes("starts from") || info.includes("Depart") || info.includes("Meeting point"));
            if (departureInfo) point = departureInfo;
        }
        setGuestDetails(prev => ({ ...prev, 'Pickup Address': point }));
    }
  }, [tourAny, hasPickup]);

  // Navigation protection
  useEffect(() => {
    if (!tourId || !bookingData) {
      router.push('/experiences');
    }
  }, [tourId, bookingData, router]);

  if (!bookingData) return <div className="p-20 text-center">Loading booking details...</div>;
  
  const { date, guests, totalPrice } = bookingData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGuestDetails({ ...guestDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setResult('');

    // 1. Validation: Terms & Conditions
    if (!agreedToTerms) {
      setResult("Please accept the Terms & Conditions to proceed.");
      setIsProcessing(false);
      return;
    }

    // 2. Validation: Unavailable Days
    const unavailableDays = tourAny.unavailableDays || [];
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (unavailableDays.includes(dayOfWeek)) {
      setResult(`This tour is not available on ${dayNames[dayOfWeek]}s. Please go back and select a different date.`);
      setIsProcessing(false);
      return;
    }

    // 3. Validation: Pickup Address
    if (hasPickup && !guestDetails['Pickup Address'].trim()) {
         setResult(`Please provide a pickup address.`);
         setIsProcessing(false);
         return;
    }

    const fullTourBookingDetails = {
      amount: totalPrice, 
      firstName: guestDetails['First Name'],
      lastName: guestDetails['Last Name'],
      email: guestDetails['Email'],
      phone: guestDetails['Phone'],
      tourName: tourAny.title,
      tourDate: date,
      guests: guests,
      note: `${hasPickup ? 'Pickup' : 'Departure Point'}: ${guestDetails['Pickup Address']} | Note: ${guestDetails['Special Request']}`,
    };
    
    try {
      const yocoUrl = await processYocoTourPayment(fullTourBookingDetails);
      if (yocoUrl) {
        window.location.href = yocoUrl;
      } else {
        throw new Error("Did not receive a Yoco URL.");
      }
    } catch (error) {
      console.error(error);
      setResult('An error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <>
      <PageTitle title="Book Tour" />
      
      {/* Load Google Maps Script Robustly */}
      {hasPickup && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`}
          strategy="beforeInteractive" // Load early but don't block hydration
          onLoad={() => setMapsLoaded(true)}
        />
      )}

      <header className="bg-white shadow-md py-4 px-4 sticky top-0 z-40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <Link 
              href={`/tours/details/${tourAny.id}`}
              className="flex items-center text-gray-700 hover:text-green-600 inline-flex"
            >
              <img src={images.iconBack} alt="Back" className="h-4 w-4 mr-2" /> Back
            </Link>
            <img src={images.logo} alt="Logo" className="h-16" />
            <div className="w-16"></div> 
          </div>
        </div>
      </header>

      <main className="bg-gray-100 py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Complete Your Booking</h2>
            
            {/* Booking Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8 space-y-3">
              <FormInput label="Tour" name="Tour Name" value={tourAny.title} readOnly />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                <FormInput label="Date" name="Tour Date" value={date} readOnly />
                <FormInput label="Guests" name="Guests" value={guests} readOnly />
                <FormInput label="Total Price" name="Total Price" value={`R ${totalPrice.toFixed(2)}`} readOnly />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Guest Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormInput label="First Name" name="First Name" placeholder="e.g. Kat" value={guestDetails['First Name']} onChange={handleChange} required />
                <FormInput label="Last Name" name="Last Name" placeholder="e.g. Jones" value={guestDetails['Last Name']} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormInput label="Email" name="Email" type="email" placeholder="e.g. example@email.com" value={guestDetails['Email']} onChange={handleChange} required />
                <FormInput label="Phone" name="Phone" type="tel" placeholder="e.g. +27 71 137 0207" value={guestDetails['Phone']} onChange={handleChange} required />
              </div>

              {/* --- Robust Location Field --- */}
              <div className={`p-4 rounded-md border ${hasPickup ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'}`}>
                  <h4 className={`font-semibold mb-2 ${hasPickup ? 'text-blue-800' : 'text-gray-800'}`}>
                    {hasPickup ? 'Hotel Pickup Required' : 'Departure Point'}
                  </h4>
                  <p className={`text-xs mb-3 ${hasPickup ? 'text-blue-600' : 'text-gray-600'}`}>
                      {hasPickup 
                        ? `This tour includes pickup from ${tourAny.pickupProvinceRestriction || 'selected local areas'}. Please start typing your hotel name or address.`
                        : `This tour does not include hotel pickup. Please make your way to the following location:`
                      }
                  </p>
                  
                  <div className="mb-4">
                    <label htmlFor="Pickup Address" className="block text-sm font-medium text-gray-700 mb-1">
                      {hasPickup ? 'Pickup Address / Hotel Name' : 'Meeting Point'}
                    </label>
                    
                    {hasPickup ? (
                        // NEW ROBUST AUTOCOMPLETE
                        mapsLoaded ? (
                            <AddressAutocomplete 
                                defaultValue={guestDetails['Pickup Address']}
                                onSelectAddress={(addr) => setGuestDetails(prev => ({...prev, 'Pickup Address': addr}))}
                            />
                        ) : (
                            <div className="h-12 bg-gray-100 animate-pulse rounded border border-gray-300"></div>
                        )
                    ) : (
                        <input
                          type="text"
                          name="Pickup Address"
                          value={guestDetails['Pickup Address']}
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 text-gray-600 cursor-not-allowed h-12"
                        />
                    )}
                  </div>
              </div>
              
              <FormTextarea label="Message or Special Request" name="Special Request" placeholder="Dietary requirements, flight details, etc." value={guestDetails['Special Request']} onChange={handleChange} />
              
              {/* --- Terms & Conditions Checkbox --- */}
              <div className="flex items-start mt-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I accept Explorer Backpackers'{" "}
                    <Link href="/termsandconditions" target="_blank" className="text-green-600 hover:text-green-500 underline">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-2">By clicking 'Pay Now', you will be redirected to Yoco to complete your payment.</p>

              <Button type="submit" disabled={isProcessing} className="w-full text-lg !mt-6">
                {isProcessing ? 'Processing...' : `Pay Now R ${totalPrice.toFixed(2)}`}
              </Button>
              {result && <p className="mt-4 text-center text-red-500 font-semibold">{result}</p>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

// --- MAIN PAGE EXPORT ---
export default function TourBookingPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading tour booking...</div>}>
      <TourBookingContent />
    </Suspense>
  );
}