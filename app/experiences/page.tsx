"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { Carousel } from '../components/Carousel';
import { TourCard } from '../components/TourCard';
import { Button } from '../components/Button';
import { getHeroImageForCategory } from '../lib/utils';

// Import Data Files Directly
import { citySightseeingData } from '../data/citySightseeingData';
import { johannesburgData } from '../data/johannesburgData';
import { sowetoData } from '../data/sowetoData';
import { pretoriaData } from '../data/pretoriaData';
import { capeTownData } from '../data/capeTownData';
import { gardenRouteData } from '../data/gardenRouteData';
import { krugerNationalParkData } from '../data/krugerNationalParkData';
import { pilanesbergNationalParkData } from '../data/pilanesbergNationalParkData';
import { transferData } from '../data/transferData';

// Helper to convert category names to URL slugs (e.g. "City Sightseeing" -> "city-sightseeing")
const toSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

export default function ExperiencesPage() {

  // Helper for carousel rendering
  const renderTourCard = (tour: any) => (
    <div className="p-3">
      {/* NOTE: 'navigateTo' has been removed. 
        Please ensure TourCard is updated to use <Link href={`/tours/details/${tour.id}`}> 
        internally for navigation.
      */}
      <TourCard tour={tour} truncateDescription={true} />
    </div>
  );

  return (
    <>
      <PageTitle title="Experiences" />
      <main>
        <HeroSection
          title="Our Experiences"
          subtitle="Tours & Safaris"
          emphasis="with Moafrika"
          buttonText="See All Tours"
          onButtonClick={() => document.getElementById('citysightseeing-section')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={getHeroImageForCategory('General')}
        />
        
        {/* City Sightseeing */}
        <section id="citysightseeing-section" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">City Sightseeing Tours</h2>
            <Carousel items={citySightseeingData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('City Sightseeing')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All City Sightseeing Tours
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Johannesburg */}
        <section id="joburg-section" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Johannesburg Tours</h2>
            <Carousel items={johannesburgData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Johannesburg')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Johannesburg Tours
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Soweto */}
        <section id="soweto-section" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Soweto Tours</h2>
            <Carousel items={sowetoData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
               <Link href={`/tours/${toSlug('Soweto')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Soweto Tours
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pretoria */}
        <section id="pretoria-section" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Pretoria Tours</h2>
            <Carousel items={pretoriaData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Pretoria')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Pretoria Tours
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pilanesberg */}
        <section id="pilanesberg-section" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Pilanesberg National Park Safaris</h2>
            <Carousel items={pilanesbergNationalParkData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Pilanesberg')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Pilanesberg Safaris
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Kruger */}
        <section id="kruger-section" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Kruger National Park Safaris</h2>
            <Carousel items={krugerNationalParkData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Kruger National Park')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Kruger Safaris
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Cape Town */}
        <section id="capetown-section" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Cape Town Tours</h2>
            <Carousel items={capeTownData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Cape Town')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Cape Town Tours
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Garden Route */}
        <section id="gardenroute-section" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Garden Route Tours</h2>
            <Carousel items={gardenRouteData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Garden Route')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Garden Route Tours
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Transfers */}
        <section id="transfers-section" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-black mb-12">Shuttles & Transfers</h2>
            <Carousel items={transferData} renderItem={renderTourCard} />
            <div className="text-center mt-8">
              <Link href={`/tours/${toSlug('Transfers')}`}>
                <Button variant="primary" className="mt-8 text-sm font-semibold">
                  View All Transfers
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}