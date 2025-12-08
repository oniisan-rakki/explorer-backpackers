"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/Button';
import { images } from '../data/images';
import { promosData } from '../data/promosData';

export default function OffersPage() {
  return (
    <>
      <PageTitle title="Special Offers" />
      <main>
        <HeroSection
          title="Discounts & Weekly Rates"
          subtitle="Special Offers"
          emphasis="At Explorer Backpackers"
          buttonText="See Offers"
          onButtonClick={() => document.getElementById('specialOffersPage')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={images.heroOffers}
        />
        <section id="specialOffersPage" className="py-16 lg:py-24 bg-white">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Special Offers</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promosData.map((promo: any) => (
              <div key={promo.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={promo.img} alt={promo.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.title}</h3>
                  <p className="text-black mb-4 flex-grow text-sm">{promo.description}</p>
                  
                  {/* Replaced navigateTo with Link */}
                  <Link 
                    href={promo.page === 'home' ? '/' : `/${promo.page}`} 
                    className="mt-auto w-full"
                  >
                    <Button className="w-full text-xs">
                      {promo.page === 'book' ? 'Book Now' : 'Learn More'}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}