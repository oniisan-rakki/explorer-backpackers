"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/Button';
import { images } from '../data/images';
import { accommodationPageData } from '../data/accommodationPageData';

export default function AccommodationPage() {
  return (
    <>
      <PageTitle title="Accommodation" />
      <main>
        <HeroSection
          title="Dorms & Rooms"
          subtitle="Accommodation"
          emphasis="At Explorer Backpackers"
          buttonText="See Rooms"
          onButtonClick={() => document.getElementById('accommodationOffers')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={images.heroAccommodation}
        />
        
        <section id="accommodationOffers" className="py-16 lg:py-24 bg-white space-y-16">
          {accommodationPageData.map((room, index) => (
            <div key={index} className="container mx-auto px-4 space-y-8">
              {/* Info + Image 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="text-black text-sm font-semibold">{room.details}</span>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 my-4">{room.title}</h2>
                  <p className="text-black leading-relaxed mb-15 text-base mt-7.5">{room.description}</p>
                  
                  {/* Replaced navigateTo with Link */}
                  <Link href="/book" className="mt-auto w-full inline-block">
                    <Button className="w-full text-sm font-semibold">Book Now</Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="rounded-lg shadow-xl overflow-hidden">
                    <img src={room.img1.src} alt={room.img1.alt} className="w-full h-[60vh] object-cover" />
                    <p className="text-sm text-white bg-black p-5 text-center font-semibold h-[7.5vh] flex items-center justify-center">{room.img1.caption}</p>
                  </div>
                </div>
              </div>
              {/* Image 2 + Image 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-15">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <img src={room.img2.src} alt={room.img2.alt} className="w-full h-[45vh] object-cover" />
                  <p className="text-sm text-white bg-black p-5 text-center font-semibold h-[7.5vh] flex items-center justify-center">{room.img2.caption}</p>
                </div>
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <img src={room.img3.src} alt={room.img3.alt} className="w-full h-[45vh] object-cover" />
                  <p className="text-sm text-white bg-black p-5 text-center font-semibold h-[7.5vh] flex items-center justify-center">{room.img3.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}