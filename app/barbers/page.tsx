"use client";
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { InfoCard } from '../components/InfoCard';
import { barbersData } from '../data/barbersData';
import { getHeroImageForCategory } from '../lib/utils';

// --- Sub-component to handle search params safely ---
function BarbersContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter'); // Reads ?filter=X from the URL
  
  // Safe check: Ensure data exists before mapping
  const safeData = barbersData || [];

  const allCategories = ['All', ...new Set(safeData.map((item: any) => item.category || 'General'))];
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (filter) {
      setActiveFilter(filter);
    } else {
      setActiveFilter('All');
    }
  }, [filter]);

  const displayedBarbers = useMemo(() => {
    if (activeFilter === 'All') {
      return safeData;
    }
    return safeData.filter((item: any) => (item.category || 'General') === activeFilter);
  }, [activeFilter, safeData]);

  const FilterButton = ({ category }: { category: string }) => (
    <button
      onClick={() => setActiveFilter(category)}
      className={`px-4 py-2 rounded-full font-medium transition-all ${
        activeFilter === category 
          ? 'bg-green-600 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {category}
    </button>
  );

  return (
    <main>
      <HeroSection
        title="Barbers"
        subtitle="Grooming"
        emphasis="Look Sharp"
        buttonText="View Barbers"
        onButtonClick={() => document.getElementById('barbers-list')?.scrollIntoView({ behavior: 'smooth' })}
        // Fallback check for the util function
        bgImage={getHeroImageForCategory ? getHeroImageForCategory('Barber') : ''} 
      />
      
      <section id="barbers-list" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            {/* Replaced navigateTo with Link */}
            <Link href="/experiences" className="flex items-center text-gray-700 hover:text-green-600 inline-flex">
              <span className="mr-2">❮</span> Back to All Experiences
            </Link>
          </div>

          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {allCategories.map(category => (
              <FilterButton key={category} category={String(category)} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBarbers.length > 0 ? (
              displayedBarbers.map((item: any, index: number) => (
                <InfoCard key={item.title || index} item={item} />
              ))
            ) : (
              <p className="text-center text-lg text-gray-600 mt-8">No barbers found for this category.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// --- MAIN PAGE EXPORT ---
export default function BarberPage() {
  return (
    <>
      <PageTitle title="Barbers & Grooming" />
      <Suspense fallback={<div className="p-20 text-center">Loading barbers...</div>}>
        <BarbersContent />
      </Suspense>
    </>
  );
}