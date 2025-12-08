"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { images } from '../data/images';

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const toSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isRestaurantsOpen, setIsRestaurantsOpen] = useState(false);
  const [isNightlifeOpen, setIsNightlifeOpen] = useState(false);

  // Helper to generate Href
  const getHref = (item: any) => {
    if (item.type === 'category') return `/tours/${toSlug(item.value)}`;
    if (item.type === 'page') return `/${item.value}`;
    if (item.page) return item.page === 'home' ? '/' : `/${item.page}`;
    return '#';
  };

  const navLinks = [
    { name: 'Home', page: 'home', href: '/' },
    { name: 'Accommodation', page: 'accommodation', href: '/accommodation' },
    { 
      name: 'Experiences', 
      page: 'experiences', 
      dropdown: [
        { name: 'Tours & Safaris', type: 'header' },
        { name: 'City Sightseeing', type: 'category', value: 'City Sightseeing' },
        { name: 'Johannesburg Tours', type: 'category', value: 'Johannesburg' },
        { name: 'Soweto Tours', type: 'category', value: 'Soweto' },
        { name: 'Pretoria Tours', type: 'category', value: 'Pretoria' },
        { name: 'Pilanesberg Safaris', type: 'category', value: 'Pilanesberg' },
        { name: 'Kruger Safaris', type: 'category', value: 'Kruger National Park' },
        { name: 'Cape Town Tours', type: 'category', value: 'Cape Town' },
        { name: 'Garden Route Tours', type: 'category', value: 'Garden Route' },
        { name: 'Transfers', type: 'category', value: 'Transfers' },
        
        { name: 'Explore The City', type: 'header' },
        { 
          name: 'Restaurants', 
          type: 'page', 
          value: 'restaurants', 
          subItems: [
            { name: 'All Restaurants', type: 'page', value: 'restaurants' },
            { name: 'African Food', type: 'page', value: 'restaurants' },
            { name: 'Fine Dining', type: 'page', value: 'restaurants' },
            { name: 'Italian', type: 'page', value: 'restaurants' },
            { name: 'Asian', type: 'page', value: 'restaurants' },
            { name: 'Mediterranean', type: 'page', value: 'restaurants' },
            { name: 'Local Flavors', type: 'page', value: 'restaurants' },
            { name: 'Casual', type: 'page', value: 'restaurants' },
          ]
        },
        { 
          name: 'Nightlife', 
          type: 'page', 
          value: 'nightlife', 
          subItems: [
            { name: 'All Nightlife', type: 'page', value: 'nightlife' },
            { name: 'Bars & Pubs', type: 'page', value: 'nightlife' },
            { name: 'Nightclubs', type: 'page', value: 'nightlife' }
          ]
        },
        { name: 'Cafes', type: 'page', value: 'cafes' },
        { name: 'Malls', type: 'page', value: 'malls' },
        { name: 'African Markets', type: 'page', value: 'africanMarkets' },
        { name: 'Markets', type: 'page', value: 'markets' },
        { name: 'Art Galleries', type: 'page', value: 'artGalleries' },
        { name: 'Local Sights', type: 'page', value: 'localSights' },
        { name: 'Spas & Wellness', type: 'page', value: 'spa' },
        { name: 'Barbers & Grooming', type: 'page', value: 'barbers' },
        { name: 'Co-Working', type: 'page', value: 'coworking' }
      ] 
    },
    { name: 'Offers', page: 'offers', href: '/offers' },
    { name: 'Group Bookings', page: 'groupbookings', href: '/groupbookings' },
    { name: 'Contact', page: 'contact', href: '/contact' },
  ];

  if (!isOpen) return null;

  return (
    // Z-index [60] ensures it is above the Header (z-50)
    <div className="fixed inset-0 z-[60] bg-black/50 lg:hidden" onClick={() => setIsOpen(false)}>
      <div 
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={images.logo} alt="Explorer Backpackers Logo" className="h-16" />
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <img src={images.iconClose} alt="Close" className="h-8 w-8" />
          </button>
        </div>
        
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.dropdown ? (
                 <button
                    onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                    className="flex w-full justify-between items-center text-lg font-bold text-gray-700 hover:text-green-600"
                  >
                    {link.name}
                    <span className={`transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`}>▾</span>
                 </button>
              ) : (
                  <Link
                    href={link.href || '#'}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center text-lg font-bold text-gray-700 hover:text-green-600"
                  >
                    {link.name}
                  </Link>
              )}
              
              {link.dropdown && isExperienceOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {link.dropdown.map((item: any) => {
                    if (item.type === 'header') {
                      return (
                        <li key={item.name}>
                          <span className="block pt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {item.name}
                          </span>
                        </li>
                      );
                    }
                    
                    if (item.subItems) {
                      const isOpen = item.name === 'Restaurants' ? isRestaurantsOpen : (item.name === 'Nightlife' ? isNightlifeOpen : false);
                      const setSubOpen = item.name === 'Restaurants' ? setIsRestaurantsOpen : (item.name === 'Nightlife' ? setIsNightlifeOpen : () => {});
                      
                      return (
                        <li key={item.name}>
                          <button
                            onClick={() => setSubOpen(!isOpen)}
                            className="flex w-full justify-between items-center text-base text-gray-600 hover:text-green-600"
                          >
                            {item.name}
                            <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
                          </button>
                          
                          {isOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                              {item.subItems.map((subItem: any) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={getHref(subItem)}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm text-gray-500 hover:text-green-600"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    }
                    
                    return (
                      <li key={item.name}>
                        <Link
                          href={getHref(item)}
                          onClick={() => setIsOpen(false)}
                          className="block text-base text-gray-600 hover:text-green-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-4">
            <Link href="/book" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full text-lg">Book Now</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};