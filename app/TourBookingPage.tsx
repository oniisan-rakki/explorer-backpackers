"use client";
import React, { useState, useEffect, useRef } from 'react';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import { images } from '../data/images';
import { processYocoTourPayment } from '../lib/api';

type TourBookingData = {
  tour: any;
  date: string;
  guests: number;
  totalPrice: number;
  selectedTier?: any;
};

type TourBookingPageProps = {
  navigateTo: (page: string, props?: any) => void;
  bookingData: TourBookingData | null;
};

export const TourBookingPage = ({ navigateTo, bookingData }: TourBookingPageProps) => {
  const pickupInputRef = useRef<HTMLInputElement>(null);

  // Extract tour data safely
  const tourAny = bookingData?.tour as any;
  const hasPickup = tourAny?.hotelPickupAvailable || tourAny?.localHotelPickup || tourAny?.isHotelPickupAvailable;

  // --- Logic to determine Departure Point if no pickup ---
  let departurePoint = "Central Meeting Point";
  if (tourAny && !hasPickup) {
      // Try to find departure info in itinerary
      if (tourAny.itinerary && tourAny.itinerary.length > 0) {
         const firstStop = tourAny.itinerary[0];
         if (firstStop.title && (firstStop.title.includes("Depart") || firstStop.title.includes("Start"))) {
             departurePoint = firstStop.description ? firstStop.description.split('.')[0] : firstStop.title;
         } else if (firstStop.description) {
             // Fallback to first stop title
             departurePoint = firstStop.title;
         }
      }
      // Override if explicit additional info exists about departure
      if (tourAny.additionalInfo) {
          const departureInfo = tourAny.additionalInfo.find((info: string) => info.includes("starts from") || info.includes("Depart") || info.includes("Meeting point"));
          if (departureInfo) departurePoint = departureInfo;
      }
  }
  // -------------------------------------------------------

  const [guestDetails, setGuestDetails] = useState({
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Phone': '',
    'Special Request': '',
    // Initialize with departure point if no pickup available
    'Pickup Address': !hasPickup ? departurePoint : '' 
  });

  const [result, setResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Effect to handle navigation protection
  useEffect(() => {
    if (!bookingData) {
      navigateTo('experiences');
    }
  }, [bookingData, navigateTo]);

  // Effect to update departure point if data changes (and no pickup)
  useEffect(() => {
    if (!hasPickup) {
      setGuestDetails(prev => ({ ...prev, 'Pickup Address': departurePoint }));
    }
  }, [hasPickup, departurePoint]);

  // Load Google Maps Script & Init Autocomplete (Only if pickup is available)
  useEffect(() => {
    if (!hasPickup) return; // Skip if no pickup

    const scriptId = 'google-maps-script';
    // Only load if not already present
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      // REPLACE YOUR_GOOGLE_MAPS_API_KEY WITH YOUR ACTUAL API KEY
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        initAutocomplete();
      };
    } else if ((window as any).google && (window as any).google.maps) {
        // If script already loaded, init immediately
        initAutocomplete();
    }
  }, [bookingData, hasPickup]); 

  const initAutocomplete = () => {
      if (pickupInputRef.current && (window as any).google) {
          const autocomplete = new (window as any).google.maps.places.Autocomplete(pickupInputRef.current, {
              types: ['establishment', 'geocode'], 
          });

          autocomplete.addListener('place_changed', () => {
              const place = autocomplete.getPlace();
              const address = place.formatted_address || place.name || '';
              setGuestDetails(prev => ({ ...prev, 'Pickup Address': address }));
          });
      }
  };

  if (!bookingData) return null;
  const { tour, date, guests, totalPrice } = bookingData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGuestDetails({ ...guestDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setResult('');

    // Check unavailable days
    const unavailableDays = tour.unavailableDays || [];
    const selectedDate = new Date(date);
    selectedDate.setMinutes(selectedDate.getMinutes() + selectedDate.getTimezoneOffset());
    const dayOfWeek = selectedDate.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (unavailableDays.includes(dayOfWeek)) {
      setResult(`This tour is not available on ${dayNames[dayOfWeek]}s. Please go back and select a different date.`);
      setIsProcessing(false);
      return;
    }

    // Validation: Only check empty pickup if pickup IS available
    if (hasPickup && !guestDetails['Pickup Address'].trim()) {
         setResult(`Please provide a pickup address in ${tour.pickupProvinceRestriction || 'the tour region'}.`);
         setIsProcessing(false);
         return;
    }

    const fullTourBookingDetails = {
      totalCost: totalPrice,
      firstName: guestDetails['First Name'],
      lastName: guestDetails['Last Name'],
      email: guestDetails['Email'],
      phone: guestDetails['Phone'],
      tourName: tour.title,
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
      <header className="bg-white shadow-md py-4 px-4 sticky top-0 z-40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => navigateTo('tourDetails', { tourId: tour.id })} 
              className="flex items-center text-gray-700 hover:text-green-600"
            >
              <img src={images.iconBack} alt="Back" className="h-4 w-4 mr-2" /> Back
            </button>
            <img src={images.logo} alt="Logo" className="h-16" />
            <div className="w-16"></div> {/* Spacer */}
          </div>
        </div>
      </header>

      <main className="bg-gray-100 py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Complete Your Booking</h2>
            
            {/* Booking Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8 space-y-3">
              <FormInput label="Tour" name="Tour Name" value={tour.title} onChange={() => {}} readOnly />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                <FormInput label="Date" name="Tour Date" value={date} onChange={() => {}} readOnly />
                <FormInput label="Guests" name="Guests" value={guests} onChange={() => {}} readOnly />
                <FormInput label="Total Price" name="Total Price" value={`R ${totalPrice.toFixed(2)}`} onChange={() => {}} readOnly />
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

              {/* --- Dynamic Location Field (Pickup OR Departure) --- */}
              <div className={`p-4 rounded-md border ${hasPickup ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'}`}>
                  <h4 className={`font-semibold mb-2 ${hasPickup ? 'text-blue-800' : 'text-gray-800'}`}>
                    {hasPickup ? 'Hotel Pickup Required' : 'Departure Point'}
                  </h4>
                  <p className={`text-xs mb-3 ${hasPickup ? 'text-blue-600' : 'text-gray-600'}`}>
                      {hasPickup 
                        ? `This tour includes pickup from ${tour.pickupProvinceRestriction || 'selected local areas'}. Please start typing your hotel name or address.`
                        : `This tour does not include hotel pickup. Please make your way to the following location:`
                      }
                  </p>
                  
                  <div className="mb-4">
                    <label htmlFor="Pickup Address" className="block text-sm font-medium text-gray-700 mb-1">
                      {hasPickup ? 'Pickup Address / Hotel Name' : 'Meeting Point'}
                    </label>
                    <input
                      type="text"
                      id="Pickup Address"
                      name="Pickup Address"
                      // Only attach ref if pickup is enabled to activate Google Autocomplete
                      ref={hasPickup ? pickupInputRef : null}
                      placeholder={hasPickup ? "e.g. Radisson Blu, Sandton, Johannesburg" : ""}
                      value={guestDetails['Pickup Address']}
                      onChange={handleChange}
                      required
                      // If no pickup, make it read-only and greyed out
                      readOnly={!hasPickup}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${!hasPickup ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-white'}`}
                    />
                  </div>
              </div>
              
              <FormTextarea label="Message or Special Request" name="Special Request" placeholder="Dietary requirements, flight details, etc." value={guestDetails['Special Request']} onChange={handleChange} />
              
              <p className="text-sm text-gray-600 !mt-6">By clicking 'Pay Now', you will be redirected to Yoco to complete your payment.</p>

              <Button type="submit" disabled={isProcessing} className="w-full text-lg !mt-8">
                {isProcessing ? 'Processing...' : `Pay Now R ${totalPrice.toFixed(2)}`}
              </Button>
              {result && <p className="mt-4 text-center text-red-500">{result}</p>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
};