"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput'; 
import { PageTitle } from '../components/PageTitle';
import { images } from '../data/images';
import { bookingRoomData } from '../data/bookingRoomData';
import { checkRoomAvailability } from '../lib/api';
import { getInitialDates } from '../lib/utils';

// --- Types ---
type AvailabilityMap = {
  [key: string]: {
    rate: number;
    available: number;
    name: string;
  }
};

type Rate = {
  id: string;
  label: string;
  price: number;
  discount: string;
  originalPrice?: number;
};

type RoomRateOptionsProps = {
  room: any;
  availability: AvailabilityMap | null;
  searchParams: any;
};

type RoomBookingCardProps = {
  room: any;
  availability: AvailabilityMap | null;
  searchParams: any;
};

type RateRadioOptionProps = {
  rate: Rate;
};

export default function BookingPage() {
  const router = useRouter();
  const [today, setToday] = useState(getInitialDates().checkIn);
  
  const [search, setSearch] = useState({
    room: 'All',
    guests: '1',
    checkIn: getInitialDates().checkIn,
    checkOut: getInitialDates().checkOut,
    promoCode: ''
  });
  
  const [availability, setAvailability] = useState<AvailabilityMap | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedRate, setSelectedRate] = useState<any>(null);

  const getCheckOutMin = () => {
    const checkInDate = new Date(search.checkIn);
    checkInDate.setDate(checkInDate.getDate() + 1); 
    return checkInDate.toISOString().split('T')[0];
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'checkIn') {
      const newCheckInDate = new Date(value);
      const currentCheckOutDate = new Date(search.checkOut);
      if (newCheckInDate >= currentCheckOutDate) {
        const newCheckOutDate = new Date(newCheckInDate);
        newCheckOutDate.setDate(newCheckOutDate.getDate() + 1);
        setSearch(prev => ({ 
          ...prev, 
          checkIn: value,
          checkOut: newCheckOutDate.toISOString().split('T')[0]
        }));
      } else {
        setSearch(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setSearch(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setAvailability(null);
    setSelectedRate(null);

    const date1 = new Date(search.checkIn);
    const date2 = new Date(search.checkOut);
    if (date2 <= date1) {
      setError("Check-out date must be after check-in date.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await checkRoomAvailability(search.checkIn, search.checkOut, search.guests, search.promoCode);
      const availabilityMap: AvailabilityMap = {};
      if (Array.isArray(data)) {
        data.forEach((room: any) => {
          availabilityMap[room.roomTypeID.toString()] = { 
            rate: room.roomRate,
            available: room.roomsAvailable,
            name: room.roomTypeName,
          };
        });
      }
      setAvailability(availabilityMap);
    } catch (err) {
      setError('Failed to fetch room availability. Please try again.');
      console.error(err);
    }
    setIsLoading(false);
  };

  const handleRateSelect = (rateData: any) => {
    setSelectedRate(rateData);
  };
  
  const handleCheckout = () => {
    if (selectedRate) {
      // Convert the selectedRate object to URL query parameters
      const params = new URLSearchParams();
      Object.entries(selectedRate).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
      router.push(`/checkout?${params.toString()}`);
    }
  };

  // --- Helper Components (Kept inside to access state/handlers) ---

  const RoomRateOptions = ({ room, availability, searchParams }: RoomRateOptionsProps) => {
    const availabilityInfo = availability ? availability[room.roomTypeId] : null;
    const guests = parseInt(searchParams.guests, 10);

    const date1 = new Date(searchParams.checkIn);
    const date2 = new Date(searchParams.checkOut);
    
    if (date2 <= date1) {
      return null;
    }

    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    if (!availabilityInfo || availabilityInfo.available < 1) {
      if (availability) {
        return <p className="text-red-500 p-4">Sorry, this room is not available for these dates.</p>;
      }
      return null;
    }

    const totalBasePrice = availabilityInfo.rate;
    const rates: Rate[] = []; 
    let bestAvailableRate: Rate;

    if (differenceInDays >= 14) {
      bestAvailableRate = {
        id: '2week',
        label: 'Long Stay (2 Weeks+)',
        price: totalBasePrice * 0.70, 
        discount: '30% Off - 2 Week+ Stay'
      };
    } else if (differenceInDays >= 7) {
      bestAvailableRate = {
        id: '1week',
        label: 'Long Stay (1 Week+)',
        price: totalBasePrice * 0.75, 
        discount: '25% Off - 1 Week+ Stay'
      };
    } else if (differenceInDays >= 4) {
      bestAvailableRate = {
        id: '4day',
        label: 'Long Stay (4 Nights+)',
        price: totalBasePrice * 0.80, 
        discount: '20% Off - 4+ Night Stay'
      };
    } else {
      bestAvailableRate = {
        id: 'website',
        label: 'Website Booking Discount',
        price: totalBasePrice * 0.85, 
        discount: '15% Off - Automatic Website Deal'
      };
    }
    
    bestAvailableRate.originalPrice = totalBasePrice;
    rates.push(bestAvailableRate);

    rates.push({ 
      id: 'student', 
      label: 'Student Rate (10% Off)', 
      price: totalBasePrice * 0.90, 
      originalPrice: totalBasePrice, 
      discount: '10% Off - Student' 
    });
    
    rates.push({ 
      id: 'elderly', 
      label: 'Elderly Rate (15% Off)', 
      price: totalBasePrice * 0.85, 
      originalPrice: totalBasePrice, 
      discount: '15% Off - Elderly (60+)' 
    });
    
    const RateRadioOption = ({ rate }: RateRadioOptionProps) => {
      const rateData = {
        roomTypeId: room.roomTypeId,
        roomName: room.name,
        guests: guests,
        checkIn: searchParams.checkIn,
        checkOut: searchParams.checkOut,
        totalCost: rate.price.toFixed(2),
        discount: rate.discount,
        nights: differenceInDays,
      };
      
      const isSelected = selectedRate && 
                         selectedRate.roomTypeId === room.roomTypeId && 
                         selectedRate.discount === rate.discount;
      
      return (
        <div 
          className={`border-2 rounded-lg mb-2 p-4 transition-all cursor-pointer ${isSelected ? 'border-green-600 bg-green-50 shadow-md' : 'border-gray-200 hover:bg-gray-50'}`}
          onClick={() => handleRateSelect(rateData)}
        >
          <label className="flex items-center cursor-pointer">
            <input 
              type="radio" 
              name={`rate_${room.id}`} 
              checked={isSelected}
              readOnly
              className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300" 
            />
            <span className="ml-3 text-gray-800 text-sm md:text-base">
              <b>{rate.label}:</b> {guests} Guest(s) | <b>Total: R{rate.price.toFixed(2)}</b>
              {rate.originalPrice && rate.price < rate.originalPrice && (
                <span className="text-gray-500 line-through ml-2 text-xs md:text-sm">R{rate.originalPrice.toFixed(2)}</span>
              )}
            </span>
          </label>
        </div>
      );
    };

    return (
      <div className="p-4 bg-gray-50 rounded-b-lg">
        <p className="text-sm font-semibold text-gray-700 mb-2">Select a rate for {differenceInDays} night(s):</p>
        {rates.map(rate => <RateRadioOption key={rate.id} rate={rate} />)}
      </div>
    );
  };

  const RoomBookingCard = ({ room, availability, searchParams }: RoomBookingCardProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => setCurrentImage(i => (i === room.images.length - 1 ? 0 : i + 1));
    const prevImage = () => setCurrentImage(i => (i === 0 ? room.images.length - 1 : i - 1));

    const showRoom = search.room === 'All' || search.room === room.name;
    if (!showRoom) return null;

    return (
      <div id={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img src={room.images[currentImage]} alt={room.name} className="w-full h-[30vh] md:h-[40vh] object-cover" />
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/50 disabled:opacity-20 hover:bg-green-600">❮</button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/50 disabled:opacity-20 hover:bg-green-600">❯</button>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-black mb-4">{room.name}</h3>
            <p className="text-sm text-black leading-relaxed">{room.description}</p>
          </div>
        </div>
        {availability && (
          <RoomRateOptions 
            room={room}
            availability={availability}
            searchParams={searchParams}
          />
        )}
      </div>
    );
  };

  // --- Main Render ---

  return (
    <>
      <PageTitle title="Book Your Stay" />
      <header className="bg-white shadow-md py-4 px-5 sticky top-0 z-40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            {/* Replaced button/navigateTo with Link */}
            <Link href="/" className="flex items-center text-gray-700 hover:text-green-600 inline-flex">
              <img src={images.iconBack} alt="Back" className="h-4 w-4 mr-2" /> Back
            </Link>
            <img src={images.logo} alt="Logo" className="h-12 md:h-15" />
            <div className="w-16"></div>
          </div>
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
              <select
                name="room"
                value={search.room}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white h-12"
              >
                <option value="All">All Rooms</option>
                <option value="Female Six Bed Dorm">Female Six Bed Dorm</option>
                <option value="Female Four Bed Dorm">Female Four Bed Dorm</option>
                <option value="Mixed Eight Bed Dorm">Mixed Eight Bed Dorm</option>
                <option value="Mixed Eight Bed Dorm (Cottage)">Mixed Eight Bed Dorm (Cottage)</option>
                <option value="Private Queen Room">Private Queen Room</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <select
                name="guests"
                value={search.guests}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white h-12"
              >
                {[1,2,3,4].map(n => <option key={n} value={n}>{n} Guest{n>1?'s':''}</option>)}
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input 
                name="checkIn" 
                type="date" 
                value={search.checkIn} 
                onChange={handleSearchChange} 
                min={today} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input 
                name="checkOut" 
                type="date" 
                value={search.checkOut} 
                onChange={handleSearchChange}
                min={getCheckOutMin()} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
              />
            </div>
            
            <div className="flex flex-col col-span-2 md:col-span-3 lg:col-span-1">
              <label className="block text-sm font-medium text-transparent mb-1 select-none">Search</label>
              <Button type="submit" disabled={isLoading} className="w-full h-12 flex items-center justify-center text-sm font-semibold">
                {isLoading ? 'Checking...' : 'Show Availability'}
              </Button>
            </div>
          </form>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </header>

      <main className="bg-gray-100 pb-32 lg:pb-8">
        <div className="container mx-auto py-8 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            
            {/* Room List */}
            <div className="lg:col-span-9">
              {isLoading && (
                <p className="text-center text-lg text-gray-600 p-8 bg-white rounded-lg shadow">Loading available rooms...</p>
              )}
              
              {!isLoading && !availability && (
                <p className="text-center text-lg text-gray-600 p-8 bg-white rounded-lg shadow">Please select your dates to check availability.</p>
              )}

              {!isLoading && availability && (
                <>
                  {bookingRoomData.map(room => (
                    <RoomBookingCard 
                      key={room.id} 
                      room={room} 
                      availability={availability} 
                      searchParams={search}
                    />
                  ))}
                  
                  {Object.keys(availability).length === 0 && (
                    <p className="text-center text-lg text-gray-600 p-8 bg-white rounded-lg shadow">No rooms are available for the selected dates. Please try different dates.</p>
                  )}
                </>
              )}
            </div>
            
            {/* Desktop Sidebar (Hidden on mobile) */}
            <aside className="hidden lg:block lg:col-span-3 relative">
              <div className="bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-[240px]">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Reservation</h3>
                {selectedRate ? (
                  <div className="space-y-2">
                    <FormInput label="Room Selection" name="roomName" value={selectedRate.roomName} readOnly />
                    <div className="grid grid-cols-2 gap-4">
                        <FormInput label="Guests" name="guests" value={selectedRate.guests} readOnly />
                        <FormInput label="Nights" name="nights" value={selectedRate.nights} readOnly />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <FormInput label="Arrival" name="checkIn" value={selectedRate.checkIn} readOnly />
                        <FormInput label="Departure" name="checkOut" value={selectedRate.checkOut} readOnly />
                    </div>
                    <FormInput label="Discount" name="discount" value={selectedRate.discount} readOnly />
                    <FormInput label="Total" name="totalCost" value={`R${selectedRate.totalCost}`} readOnly />
                    <Button onClick={handleCheckout} className="w-full text-sm bg-black">Checkout</Button>
                  </div>
                ) : (
                  <p className="text-gray-500">Please select a room and rate to continue.</p>
                )}
              </div>
            </aside>

            {/* Mobile Fixed Bottom Bar (Visible only on mobile when rate selected) */}
            {selectedRate && (
              <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-[60] border-t border-gray-200 animate-in slide-in-from-bottom duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">{selectedRate.nights} Night(s) | {selectedRate.guests} Guest(s)</p>
                    <h4 className="font-bold text-gray-800 text-lg">{selectedRate.roomName}</h4>
                    <p className="font-bold text-green-600">R{selectedRate.totalCost}</p>
                  </div>
                  <Button onClick={handleCheckout} className="px-6 py-2 text-sm bg-black">Checkout</Button>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </>
  );
}