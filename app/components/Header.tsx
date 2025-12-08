"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { MobileMenu } from './MobileMenu'; // <--- IMPORT ADDED
import { images } from '../data/images';

// Helper to convert category names to URL slugs
const toSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

export const Header = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  
  // State to control the Mobile Menu
  const [isMobileOpen, setIsMobileOpen] = useState(false); 

  const pathname = usePathname();
  
  // --- Scroll Behavior ---
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollUpDistance = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 0) return;

      const diff = currentScrollY - lastScrollY.current;
      const isScrollingDown = diff > 0;
      const isScrollingUp = diff < 0;

      if (currentScrollY < 150) {
        setIsVisible(true);
        scrollUpDistance.current = 0;
      } else if (isScrollingDown) {
        scrollUpDistance.current = 0;
        if (isVisible && currentScrollY > 150) setIsVisible(false);
      } else if (isScrollingUp) {
        scrollUpDistance.current += Math.abs(diff);
        if (!isVisible && scrollUpDistance.current > 100) setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Helper to generate Href based on item type
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
      href: '/experiences',
      columns: [
        [
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
        ],
        [
          { name: 'Explore The City', type: 'header' },
          { 
            name: 'Restaurants', 
            type: 'page', 
            value: 'restaurants',
            subItems: [
              { name: 'All Restaurants', type: 'page', value: 'restaurants' },
              { name: 'African Food', type: 'page', value: 'restaurants', query: { filter: 'African Food' } },
              { name: 'Fine Dining', type: 'page', value: 'restaurants', query: { filter: 'Fine Dining' } },
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
          { name: 'African Markets', type: 'page', value: 'africanmarkets' },
          { name: 'Markets', type: 'page', value: 'markets' },
          { name: 'Art Galleries', type: 'page', value: 'artgalleries' },
          { name: 'Local Sights', type: 'page', value: 'localsights' },
          { name: 'Spas & Wellness', type: 'page', value: 'spa' },
          { name: 'Barbers & Grooming', type: 'page', value: 'barbers' },
          { name: 'Co-Working', type: 'page', value: 'coworking' }
        ]
      ] 
    },
    { name: 'Offers', page: 'offers', href: '/offers' },
    { name: 'Group Bookings', page: 'groupbookings', href: '/groupbookings' },
    { name: 'Contact', page: 'contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
     if (path === '/' && pathname !== '/') return false;
     return pathname.startsWith(path);
  };

  // Check for hidden pages
  if (pathname === '/book' || pathname === '/checkout') {
    return null;
  }

  return (
    <>
      <header 
        className={`fixed top-0 z-50 bg-white shadow-md w-full transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Bar */}
        <div className="hidden md:block bg-black text-white text-xs font-semibold px-4 py-2">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <ul className="flex space-x-3">
              <li><a href="tel:+27711370207" className="hover:text-green-400">+27 71 137 0207</a></li>
              <li>|</li>
              <li><a href="mailto:bookings@explorerbackpackers.com" className="hover:text-green-400">bookings@explorerbackpackers.com</a></li>
            </ul>
            <ul className="flex space-x-4 mt-2 md:mt-0">
              <li>
                  <Link href="/experiences">
                      <Button variant="secondary" className="px-1 py-1 text-xs font-semibold">Book Tour</Button>
                  </Link>
              </li>
              <li>
                  <Link href="/contact">
                      <Button variant="secondary" className="px-1 py-1 text-xs font-semibold">Find Us</Button>
                  </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/">
              <img src={images.logo} alt="Explorer Backpackers Logo" className="h-12 md:h-15 cursor-pointer" />
          </Link>
          
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <li 
                key={link.name}
                className="relative"
                onMouseEnter={() => (link.columns) && setIsExperienceOpen(true)}
                onMouseLeave={() => {
                  (link.columns) && setIsExperienceOpen(false);
                  (link.columns) && setActiveSubMenu(null); 
                }}
              >
                <Link
                  href={link.href}
                  className={`font-600 text-sm pb-1 flex items-center ${isActive(link.href) ? 'text-black border-b-1 border-black' : 'text-gray-700 hover:text-green-600'}`}
                >
                  {link.name}
                  {link.columns && <span className="ml-1">▾</span>}
                </Link>
                
                {/* Mega Menu */}
                {link.columns && isExperienceOpen && (
                  <div 
                    className="absolute top-full left-0 mt-0 pt-4"
                    onMouseLeave={() => setActiveSubMenu(null)} 
                  >
                    <div className="bg-white shadow-lg rounded-md pb-2 z-50 relative flex flex-row">
                      {link.columns.map((column, colIndex) => (
                        <ul key={colIndex} className={`py-2 ${colIndex > 0 ? 'border-l border-gray-100' : ''} min-w-[250px]`}>
                          {column.map((item: any) => (
                            <li key={item.name} className="relative">
                              {item.type === 'header' ? (
                                <span className="block px-6 py-2 text-xs font-bold text-black uppercase tracking-wider mt-2 first:mt-0">
                                  {item.name}
                                </span>
                              ) : (
                                <Link
                                  href={getHref(item)}
                                  onMouseEnter={() => item.subItems ? setActiveSubMenu(item.name) : setActiveSubMenu(null)}
                                  className="flex justify-between items-center px-6 py-2 text-gray-700 text-sm hover:bg-gray-100 hover:text-green-600 whitespace-nowrap"
                                  onClick={() => setIsExperienceOpen(false)}
                                >
                                  {item.name}
                                  {item.subItems && <span>▸</span>}
                                </Link>
                              )}

                              {item.subItems && activeSubMenu === item.name && (
                                <ul className="absolute top-0 left-full ml-0.5 bg-white shadow-lg rounded-md py-1 w-56 z-60">
                                  {item.subItems.map((subItem: any) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={getHref(subItem)}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 text-sm"
                                        onClick={() => setIsExperienceOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/book">
                  <Button className="text-xs px-4 py-0" variant="primary">Book Now</Button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button - Triggers state change */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileOpen(true)} className="text-gray-800 p-2">
              <img src={images.iconMenu} alt="Menu" className="h-8 w-8" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- RENDER MOBILE MENU --- */}
      {/* This was missing in the previous step. It actually renders the menu when state is true. */}
      <MobileMenu isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
    </>
  );
};