"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

type TourCardProps = {
  tour: {
    id: string;
    img: string;
    title: string;
    category: string;
    description: string;
    basePrice: number;
    [key: string]: any; 
  };
  // navigateTo prop removed
  truncateDescription?: boolean;
};

export const TourCard = ({ tour, truncateDescription = false }: TourCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
    <Link href={`/tours/details/${tour.id}`}>
        <img src={tour.img} alt={tour.title} className="w-full h-56 object-cover cursor-pointer" />
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <span className="text-sm text-green-600 font-extrabold mb-1 uppercase">{tour.category}</span>
      
      <Link href={`/tours/details/${tour.id}`}>
        <h3 className="text-xl font-bold text-black mb-2 hover:text-green-600 cursor-pointer">{tour.title}</h3>
      </Link>
      
      <p className={`text-black mb-4 flex-grow text-sm ${truncateDescription ? 'line-clamp-5' : ''}`}>
        {tour.description}
      </p>
      
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        <span className="text-lg font-bold text-gray-800">
          R {tour.basePrice.toFixed(2)}
        </span>
        <Link href={`/tours/details/${tour.id}`}>
             <Button className="px-4 py-2 text-xs font-bold">
                View Details
             </Button>
        </Link>
      </div>
    </div>
  </div>
);