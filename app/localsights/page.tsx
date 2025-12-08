"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { InfoCard } from '../components/InfoCard';
import { images } from '../data/images';
import { localSightsData } from '../data/localSightsData';

export default function LocalSightsPage() {
  
  const hikingSpots = localSightsData.filter(s => 
    s.category === 'Sports & Outdoors'
  );
  
  const natureAndParks = localSightsData.filter(s => 
    s.category === 'Nature & Parks'
  );

  const sunsetSpots = localSightsData.filter(s => 
    s.category === 'Viewpoint & Outdoors'
  );

  const cultureAndMuseums = localSightsData.filter(s => 
    ['Museums & Culture', 'History Museum', 'Transport Museum', 'Cultural Site', 'Arts & Culture Precinct', 'Museums & Science', 'Archaeology Museum', 'History & Culture', 'Soweto Culture', 'Historical Landmark', 'Neighbourhoods'].includes(s.category || '')
  );

  return (
    <>
      <PageTitle title="Local Sights" />
      <main>
        <HeroSection
          title="Local Sights & Spots"
          subtitle="Explorer's Picks"
          emphasis="Around Johannesburg"
          buttonText="View Sights"
          onButtonClick={() => document.getElementById('local-sights-list')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={images.heroExperiences}
        />
        
        <section id="local-sights-list" className="py-16 lg:py-24 bg-white space-y-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              {/* Replaced navigateTo with Link */}
              <Link href="/experiences" className="flex items-center text-gray-700 hover:text-green-600 inline-flex">
                <span className="mr-2">❮</span> Back to All Experiences
              </Link>
            </div>

            {/* Hiking & Outdoor Activities */}
            {hikingSpots.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sports & Outdoors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {hikingSpots.map((item: any) => <InfoCard key={item.title} item={item} />)}
                </div>
              </div>
            )}

            {/* Parks & Nature */}
            {natureAndParks.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Parks & Nature</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {natureAndParks.map((item: any) => <InfoCard key={item.title} item={item} />)}
                </div>
              </div>
            )}

            {/* Viewpoints & Sunsets */}
            {sunsetSpots.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Viewpoints & Sunsets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sunsetSpots.map((item: any) => <InfoCard key={item.title} item={item} />)}
                </div>
              </div>
            )}

            {/* Culture & Museums */}
            {cultureAndMuseums.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Culture & Museums</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cultureAndMuseums.map((item: any) => <InfoCard key={item.title} item={item} />)}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>
    </>
  );
}