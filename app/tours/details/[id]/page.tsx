"use client";
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getTourById, calculateTourPrice, getInitialDates } from '../../../lib/utils';
import { PageTitle } from '../../../components/PageTitle';
import { Button } from '../../../components/Button';
import { images } from '../../../data/images';

export default function TourDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  
  // Unwrap params using React.use()
  const { id } = use(params);
  const tourId = id;
  
  const tour = tourId ? getTourById(tourId) : undefined;
  
  const [currentImage, setCurrentImage] = useState(0);
  const [bookingDate, setBookingDate] = useState(getInitialDates().checkIn);
  const [guestCount, setGuestCount] = useState(1);
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const tourAny = tour as any;

  // Pickup / Departure Logic
  const hasPickup = tourAny?.hotelPickupAvailable || tourAny?.localHotelPickup || tourAny?.isHotelPickupAvailable;
  const pickupRegion = tourAny?.pickupProvinceRestriction || tourAny?.pickupRegion || 'local';
  let departurePoint = "Central Meeting Point";
  if (!hasPickup && tourAny) {
      if (tourAny.itinerary && tourAny.itinerary.length > 0) {
         const firstStop = tourAny.itinerary[0];
         departurePoint = firstStop.title;
      }
      if (tourAny.additionalInfo) {
          const departureInfo = tourAny.additionalInfo.find((info: string) => info.includes("starts from") || info.includes("Depart"));
          if (departureInfo) departurePoint = departureInfo;
      }
  }

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
      setTotalPrice(calculateTourPrice(tour, guestCount, selectedTier));
    }
  }, [guestCount, tour, selectedTier]);

  if (!tourId) return <div className="p-20 text-center">Loading...</div>;
  if (!tour) return <div className="p-20 text-center">Tour not found. (ID: {tourId})</div>;

  const nextImage = () => setCurrentImage(i => (i === (tourAny.gallery?.length || 0) - 1 ? 0 : i + 1));
  const prevImage = () => setCurrentImage(i => (i === 0 ? (tourAny.gallery?.length || 0) - 1 : i - 1));

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Query Params
    const query = new URLSearchParams({
        tourId: tour.id,
        date: bookingDate,
        guests: guestCount.toString(),
        totalPrice: totalPrice.toString(),
        tier: selectedTier ? selectedTier.type : ''
    }).toString();
    
    // --- FIX: Ensure this matches the folder name 'app/book-tour' ---
    router.push(`/book-tour?${query}`);
  };

  const toSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

  return (
    <>
      <PageTitle title={tour.title} />
      <main className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          
          <div className="mb-6">
            <Link href={tour.category ? `/tours/${toSlug(tour.category)}` : '/experiences'} className="flex items-center text-gray-700 hover:text-green-600 mb-2">
              <img src={images.iconBack} alt="Back" className="h-4 w-4 mr-2" /> 
              Back to {tour.category || 'All'} Tours
            </Link>
            <h1 className="text-4xl font-extrabold text-black mb-2.5">{tour.title}</h1>
            <span className="text-base text-black">{tour.category} &bull; {tour.region}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
               <div className="relative mb-6">
                    <img src={tourAny.gallery && tourAny.gallery[currentImage] ? tourAny.gallery[currentImage] : '/images/placeholder.jpg'} alt={tour.title} className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                    {tourAny.gallery && tourAny.gallery.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black">❮</button>
                            <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black">❯</button>
                        </>
                    )}
                </div>

              <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-md border border-blue-100">
                    <span className="text-2xl">🚐</span>
                    <div>
                        <h4 className="font-bold text-blue-800">Hotel Pickup</h4>
                        <p className="text-blue-600 text-sm">
                            {hasPickup ? `Available from ${pickupRegion} hotels.` : "Meet at designated departure point."}
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
                      {tourAny.whatIsIncluded?.map((item: string) => (
                        <li key={item} className="flex items-start text-gray-700"><span className="text-green-500 mr-2">✔</span> {item}</li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {tourAny.whatIsNotIncluded?.map((item: string) => (
                        <li key={item} className="flex items-start text-gray-700"><span className="text-red-500 mr-2">✖</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <aside className="lg:w-1/3">
              <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Your Tour</h3>
                <form onSubmit={handleBookingSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} min={getInitialDates().checkIn} required className="w-full px-4 py-2 border rounded-md h-12" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                    <select value={guestCount} onChange={(e) => setGuestCount(parseInt(e.target.value))} className="w-full px-4 py-2 border rounded-md h-12 bg-white">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>

                  {tourAny.pricingTiers && (
                      <div className="mb-4 space-y-2">
                          {tourAny.pricingTiers.map((tier: any) => (
                              <label key={tier.type} className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                                  <input type="radio" name="pricingTier" checked={selectedTier === tier} onChange={() => setSelectedTier(tier)} className="h-4 w-4 text-green-600" />
                                  <div className="ml-3 flex justify-between w-full">
                                      <span className="capitalize font-medium">{tier.type}</span>
                                      <span>R {tier.price}</span>
                                  </div>
                              </label>
                          ))}
                      </div>
                  )}
                  
                  <div className="bg-gray-100 p-4 rounded-md my-4">
                    <span className="block text-sm text-gray-500">Total Price</span>
                    <span className="block text-3xl font-bold text-green-600">R {totalPrice.toFixed(2)}</span>
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
}