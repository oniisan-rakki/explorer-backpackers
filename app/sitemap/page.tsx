"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';

// Helper to convert category names to URL slugs
const toSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

export default function SitemapPage() {
  return (
    <>
      <PageTitle title="Sitemap" />
      <main className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-black mb-12">Sitemap</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: General & Info */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-green-500 pb-2">Main Pages</h3>
              <ul className="space-y-3 mb-10">
                <li><Link href="/" className="text-lg text-green-600 hover:underline">Home</Link></li>
                <li><Link href="/accommodation" className="text-lg text-green-600 hover:underline">Accommodation</Link></li>
                <li><Link href="/offers" className="text-lg text-green-600 hover:underline">Offers</Link></li>
                <li><Link href="/groupbookings" className="text-lg text-green-600 hover:underline">Group Bookings</Link></li>
                <li><Link href="/contact" className="text-lg text-green-600 hover:underline">Contact</Link></li>
                <li><Link href="/book" className="text-lg text-green-600 hover:underline">Book Now</Link></li>
              </ul>

              <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-green-500 pb-2">Information</h3>
              <ul className="space-y-3">
                <li><Link href="/termsandconditions" className="text-lg text-green-600 hover:underline">Terms & Conditions</Link></li>
                <li><Link href="/privacypolicy" className="text-lg text-green-600 hover:underline">Privacy Policy</Link></li>
                <li><Link href="/accessibility" className="text-lg text-green-600 hover:underline">Accessibility</Link></li>
              </ul>
            </div>

            {/* Column 2: Tours & Safaris */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-green-500 pb-2">Tours & Safaris</h3>
              <ul className="space-y-3">
                <li><Link href="/experiences" className="text-lg text-green-600 hover:underline font-bold">All Experiences</Link></li>
                <li><Link href={`/tours/${toSlug('City Sightseeing')}`} className="text-lg text-green-600 hover:underline">City Sightseeing</Link></li>
                <li><Link href={`/tours/${toSlug('Johannesburg')}`} className="text-lg text-green-600 hover:underline">Johannesburg Tours</Link></li>
                <li><Link href={`/tours/${toSlug('Soweto')}`} className="text-lg text-green-600 hover:underline">Soweto Tours</Link></li>
                <li><Link href={`/tours/${toSlug('Pretoria')}`} className="text-lg text-green-600 hover:underline">Pretoria Tours</Link></li>
                <li><Link href={`/tours/${toSlug('Pilanesberg')}`} className="text-lg text-green-600 hover:underline">Pilanesberg Safaris</Link></li>
                <li><Link href={`/tours/${toSlug('Kruger National Park')}`} className="text-lg text-green-600 hover:underline">Kruger Safaris</Link></li>
                <li><Link href={`/tours/${toSlug('Cape Town')}`} className="text-lg text-green-600 hover:underline">Cape Town Tours</Link></li>
                <li><Link href={`/tours/${toSlug('Garden Route')}`} className="text-lg text-green-600 hover:underline">Garden Route Tours</Link></li>
                <li><Link href={`/tours/${toSlug('Transfers')}`} className="text-lg text-green-600 hover:underline">Shuttles & Transfers</Link></li>
              </ul>
            </div>

            {/* Column 3: Explore The City */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-green-500 pb-2">Explore The City</h3>
              <ul className="space-y-3">
                <li><Link href="/restaurants" className="text-lg text-green-600 hover:underline">Restaurants</Link></li>
                <li><Link href="/nightlife" className="text-lg text-green-600 hover:underline">Nightlife</Link></li>
                <li><Link href="/cafes" className="text-lg text-green-600 hover:underline">Cafes</Link></li>
                <li><Link href="/malls" className="text-lg text-green-600 hover:underline">Malls</Link></li>
                <li><Link href="/markets" className="text-lg text-green-600 hover:underline">Markets</Link></li>
                <li><Link href="/africanmarkets" className="text-lg text-green-600 hover:underline">African Markets</Link></li>
                <li><Link href="/artgalleries" className="text-lg text-green-600 hover:underline">Art Galleries</Link></li>
                <li><Link href="/localsights" className="text-lg text-green-600 hover:underline">Local Sights</Link></li>
                <li><Link href="/spa" className="text-lg text-green-600 hover:underline">Spas & Wellness</Link></li>
                <li><Link href="/barbers" className="text-lg text-green-600 hover:underline">Barbers & Grooming</Link></li>
                <li><Link href="/coworking" className="text-lg text-green-600 hover:underline">Co-Working</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}