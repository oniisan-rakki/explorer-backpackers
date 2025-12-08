"use client";
import React from 'react';
import Link from 'next/link';
import { images } from '../data/images';

type LinkItem = {
  name: string;
  href: string;
};

export const Footer = () => { 
  const socialLinks = [
    { alt: 'Instagram', img: images.iconInsta, href: 'https://www.instagram.com/explorer.backpackers/' },
    { alt: 'Facebook', img: images.iconFB, href: 'https://www.facebook.com/explorerbackpackers/' },
    { alt: 'Twitter', img: images.iconTwitter, href: 'https://www.twitter.com/@explorer.backpackers' },
    { alt: 'TikTok', img: images.iconTiktok, href: 'https://www.tiktok.com/@explorer.backpackers' },
  ];
  
  const quickLinks: LinkItem[] = [ 
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Offers', href: '/offers' },
    { name: 'Group Bookings', href: '/groupbookings' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/book' },
  ];
  
  const infoLinks: LinkItem[] = [ 
    { name: 'Terms & Conditions', href: '/termsandconditions' },
    { name: 'Privacy Policy', href: '/privacypolicy' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const renderLinks = (links: LinkItem[]) => (
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15 mb-12">
          {/* Column 1 */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-extrabold uppercase text-white mb-4">Explorer Backpackers</h5>
            <p className="text-gray-400 text-sm">
              Your peaceful home away from home. Experience ultimate comfort, vibrant social activities, and personalized tours.
            </p>
            <div className="flex space-x-4 mt-6 socialIcons">
              {socialLinks.map(link => (
                <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white border-none cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={link.img} alt={link.alt} className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h5 className="text-lg font-extrabold uppercase text-white mb-4">Quick Links</h5>
            {renderLinks(quickLinks)}
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-extrabold uppercase text-white mb-4">Information</h5>
            {renderLinks(infoLinks)}
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-lg font-extrabold uppercase text-white mb-4">Contact Us</h5>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="mr-1.5 mt-0">📍</span>
                <a 
                  href="https://maps.google.com/?q=27+7th+Street,Parkhurst,Randburg,Johannesburg,South+Africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white text-sm"
                >
                  27 7th Street, Parkhurst, Randburg, Johannesburg, South Africa
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-1.5 mt-0">📞</span>
                <a href="tel:+27711370207" className="hover:text-white text-sm">+27 71 137 0207</a>
              </li>
              <li className="flex items-start">
                <span className="mr-1.5 mt-0">✉️</span>
                <a href="mailto:bookings@explorerbackpackers.com" className="hover:text-white text-sm">bookings@explorerbackpackers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Explorer Backpackers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};