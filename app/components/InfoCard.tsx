"use client";
import React from 'react';
import { Button } from './Button';

// --- NEW: Define the types for the component's props ---
type InfoCardProps = {
  item: {
    img: string;
    title: string;
    description: string;
    mapLink: string;
    // Add other optional properties if they exist
    category?: string; 
  };
};

// --- UPDATED: Info Card Component (with types applied) ---
export const InfoCard = ({ item }: InfoCardProps) => ( // <-- Types applied here
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
    <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-black mb-4 flex-grow text-sm">{item.description}</p>
      <Button 
        onClick={() => window.open(item.mapLink, '_blank')} 
        className="mt-auto w-full text-xs"
      >
        View on Google Maps
      </Button>
    </div>
  </div>
);