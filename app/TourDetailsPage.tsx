"use client";
import React, { useState, useEffect } from 'react';
import { getTourById, calculateTourPrice, getInitialDates } from './lib/utils';
import { PageTitle } from './components/PageTitle';
// FormInput and FormSelect removed to use raw HTML for consistent styling
import { Button } from './components/Button';
import { images } from './data/images';

type TourDetailsPageProps = {
  navigateTo: (page: string, props?: any) => void;
  tourId: string;
};

export const TourDetailsPage = ({ navigateTo, tourId }: TourDetailsPageProps) => {
  const tour = getTourById(tourId);
  
  const [currentImage, setCurrentImage] = useState(0);
  const [bookingDate, setBookingDate] = useState(getInitialDates().checkIn);
  const [guestCount, setGuestCount] = useState(1);
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // --- FIX: Handle inconsistent data naming across files ---
  const tourAny = tour as any;
  
  const hasPickup = tourAny?.hotelPickupAvailable || tourAny?.localHotelPickup || tourAny?.isHotelPickupAvailable;
  const pickupRegion = tourAny?.pickupProvinceRestriction || tourAny?.pickupRegion || 'local';
  
  // Logic to determine departure point if no pickup
  let departurePoint = "Central Meeting Point";
  if (!hasPickup) {
      // Try to find departure info in itinerary or additional info
      if (tourAny.itinerary && tourAny.itinerary.length > 0) {
         const firstStop = tourAny.itinerary[0];
         if (firstStop.title && (firstStop.title.includes("Depart") || firstStop.title.includes("Start"))) {
             departurePoint = firstStop.description ? firstStop.description.split('.')[0] : firstStop.title;
         } else if (firstStop.description) {
             departurePoint = firstStop.title;
         }
      }
      // Override if explicit additional info exists about departure
      if (tourAny.additionalInfo) {
          const departureInfo = tourAny.additionalInfo.find((info: string) => info.includes("starts from") || info.includes("Depart") || info.includes("Meeting point"));
          if (departureInfo) departurePoint = departureInfo;
      }
  }
  // ---------------------------------------------------------

  useEffect(() => {
    if (tour && tourAny.pricingTiers && tourAny.pricingTiers.length > 0) {
      const sharingTier = tourAny.pricingTiers.find((t: any) => t.type === 'sharing');
      const singleTier = tourAny.pricingTiers.find((t: any) => t.type === 'single');
      
      if (sharingTier) setSelectedTier(sharingTier);
      else if (singleTier) setSelectedTier(singleTier);
    }
  }, [tour, tourAny]);

  useEffect(() => {
    if (tour) {
      const newTotal = calculateTourPrice(tour, guestCount, selectedTier);
      setTotalPrice(newTotal);
    }
  }, [guestCount, tour, selectedTier]);

  if (!tour) {
    useEffect(() => { navigateTo('404'); }, [navigateTo]);
    return null;
  }

  const nextImage = () => setCurrentImage(i => (i === (tourAny.gallery?.length || 0) - 1 ? 0 : i + 1));
  const prevImage = () => setCurrentImage(i => (i === 0 ? (tourAny.gallery?.length || 0) - 1 : i - 1));

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo('tourBooking', {
      tour,
      date: bookingDate,
      guests: guestCount,
      totalPrice: totalPrice,
      selectedTier: selectedTier // Pass tier info to booking page
    });
  };

  // --- NEW: Handle Back Navigation Logic ---
  const handleBackClick = () => {
    if (tour.category) {
      // Navigate to the specific category page
      navigateTo('tourCategory', { category: tour.category });
    } else {
      // Fallback to all experiences
      navigateTo('experiences');
    }
  };
  
  const priceSubtitle = tourAny.priceType === 'per-vehicle' 
    ? `per vehicle` 
    : 'per person';

  const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white h-12";

  return (
    <>
      <PageTitle title={tour.title} />
      <main className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header with Dynamic Breadcrumb */}
          <div className="mb-6">
            <button onClick={handleBackClick} className="flex items-center text-gray-700 hover:text-green-600 mb-2">
              <img src={images.iconBack} alt="Back" className="h-4 w-4 mr-2" /> 
              {/* Dynamic Text: Back to All [Category] Tours */}
              Back to All {tour.category} Tours
            </button>
            <h1 className="text-4xl font-extrabold text-black mb-2.5">{tour.title}</h1>
            <span className="text-base text-black">{tour.category} &bull; {tour.region}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
               {/* Gallery */}
               {tourAny.gallery && tourAny.gallery.length > 0 ? (
                <div className="relative mb-6">
                    <img src={tourAny.gallery[currentImage]} alt={tour.title} className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                    {tourAny.gallery.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black disabled:opacity-20 hover:bg-green-600">❮</button>
                            <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black disabled:opacity-20 hover:bg-green-600">❯</button>
                        </>
                    )}
                </div>
               ) : (
                   <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center mb-6">No Image Available</div>
               )}

              <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
                {/* Hotel Pickup Status */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-md border border-blue-100">
                    <span className="text-2xl">🚐</span>
                    <div>
                        <h4 className="font-bold text-blue-800">Hotel Pickup</h4>
                        <p className="text-blue-600 text-sm">
                            {hasPickup 
                                ? `Available included from selected ${pickupRegion} hotels.` 
                                : "Not included. Please meet at the designated departure point."}
                        </p>
                    </div>
                </div>

                <section>
                  <h2 className="text-2xl font-extrabold text-black mb-4">Overview</h2>
                  <p className="text-gray-700 leading-relaxed">{tourAny.overview || tour.description}</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-extrabold text-black mb-4">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      {tourAny.whatIsIncluded && tourAny.whatIsIncluded.map((item: string) => (
                        <li key={item} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2">✔</span> <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {tourAny.whatIsNotIncluded && tourAny.whatIsNotIncluded.map((item: string) => (
                        <li key={item} className="flex items-start text-gray-700">
                          <span className="text-red-500 mr-2">✖</span> <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {tourAny.itinerary && (
                    <section>
                    <h2 className="text-xl font-extrabold text-black mb-4">Itinerary</h2>
                    <ul className="space-y-4 border-l-2 border-green-500 pl-4">
                        {tourAny.itinerary.map((stop: any) => (
                        <li key={stop.title}>
                            <h3 className="font-semibold text-gray-800">{stop.title}</h3>
                            <p className="text-gray-700">{stop.description}</p>
                        </li>
                        ))}
                    </ul>
                    </section>
                )}
              </div>
            </div>

            {/* Booking Widget */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Your Tour</h3>
                
                <form onSubmit={handleBookingSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      min={getInitialDates().checkIn}
                      required
                      className={inputClass}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                      required
                      className={inputClass}
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n} value={n}>{n} Traveler{n>1?'s':''}</option>)}
                    </select>
                  </div>

                  {!hasPickup && (
                    <div className="mb-4">
                       <label className="block text-sm font-medium text-gray-700 mb-1">Departure Point</label>
                       <div className={`flex items-center text-sm text-gray-600 bg-gray-50 px-4 border border-gray-300 rounded-md ${inputClass} h-auto py-3`}>
                          <span className="mr-2">📍</span>
                          <span>{departurePoint}</span>
                       </div>
                    </div>
                  )}

                  {tourAny.pricingTiers && tourAny.pricingTiers.some((t: any) => t.type) && (
                      <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Rate Type</label>
                          <div className="space-y-2">
                              {tourAny.pricingTiers.map((tier: any) => (
                                  <label key={tier.type} className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                                      <input 
                                          type="radio" 
                                          name="pricingTier"
                                          checked={selectedTier === tier}
                                          onChange={() => setSelectedTier(tier)}
                                          className="h-4 w-4 text-green-600 focus:ring-green-500"
                                      />
                                      <div className="ml-3 flex justify-between w-full">
                                          <span className="capitalize font-medium text-gray-900">{tier.type}</span>
                                          <span className="text-gray-500">R {tier.price}</span>
                                      </div>
                                  </label>
                              ))}
                          </div>
                      </div>
                  )}
                  
                  <div className="bg-gray-100 p-4 rounded-md my-4">
                    <span className="block text-sm text-gray-500 mb-1">Total Price ({priceSubtitle})</span>
                    <span className="block text-3xl font-bold text-green-600">
                      R {totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <Button type="submit" className="w-full text-lg">Book Now</Button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};