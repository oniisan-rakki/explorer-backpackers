"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

type TourCardProps = {
  tour: any;
  truncateDescription?: boolean;
};

export const TourCard = ({ tour, truncateDescription = false }: TourCardProps) => {
  // Determine the display price
  let priceDisplay = 'Price Varies';
  if (tour.basePrice) {
    priceDisplay = `From R ${tour.basePrice}`;
  } else if (tour.pricingTiers && tour.pricingTiers.length > 0) {
    const prices = tour.pricingTiers.map((t: any) => t.price);
    const minPrice = Math.min(...prices);
    priceDisplay = `From R ${minPrice}`;
  }

  // Handle description truncation
  const description = truncateDescription && tour.description.length > 100 
    ? `${tour.description.substring(0, 100)}...` 
    : tour.description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56">
        <img 
          src={tour.gallery && tour.gallery[0] ? tour.gallery[0] : '/images/placeholder.jpg'} 
          alt={tour.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow">
          {tour.duration}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-bold text-green-600 uppercase tracking-wide">
            {tour.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Price per person</span>
            <span className="text-lg font-bold text-gray-900">{priceDisplay}</span>
          </div>
          
          {/* Link to the Details Page */}
          <Link href={`/tours/details/${tour.id}`}>
            <Button size="sm" className="px-6">View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};