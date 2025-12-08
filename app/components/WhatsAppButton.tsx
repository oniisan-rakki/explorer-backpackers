"use client";
import React from 'react';
import { images } from '../data/images'; // <-- THIS IS THE FIX

// --- Component: WhatsAppButton ---
export const WhatsAppButton = () => (
  <button 
    className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all"
    onClick={() => window.open('https://wa.me/27711370207', '_blank')}
  >
    <img src={images.iconWhatsapp} alt="Contact Explorer Backpackers on Whatsapp!" className="h-8 w-8" />
  </button>
);