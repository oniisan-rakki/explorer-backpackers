"use client";
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { InfoCard } from '../components/InfoCard';
import { cafesData } from '../data/cafesData';
import { getHeroImageForCategory } from '../lib/utils';

// --- Sub-component to handle search params safely ---
function CafesContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter'); // Reads ?filter=X from the URL
  
  // Safe check - Ensure data exists before mapping
  const safeData = cafesData || [];

  const allCategories = ['All', ...new Set(safeData.map((item: any) => item.category || 'Cafe'))];
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (filter) {
      setActiveFilter(filter);
    } else {
      setActiveFilter('All');
    }
  }, [filter]);

  const displayedCafes = useMemo(() => {
    if (activeFilter === 'All') {
      return safeData;
    }
    return safeData.filter((item: any) => (item.category || 'Cafe') === activeFilter);
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
        title="Cafes & Coffee" 
        subtitle="Explorer's Picks" 
        emphasis="Get Your Fix" 
        buttonText="View Cafes"
        onButtonClick={() => document.getElementById('cafes-list')?.scrollIntoView({ behavior: 'smooth' })}
        // Fallback check for the util function
        bgImage={getHeroImageForCategory ? getHeroImageForCategory('Cafes') : ''} 
      />
      
      <section id="cafes-list" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            {/* Replaced navigateTo with Link */}
            <Link href="/experiences" className="flex items-center text-gray-700 hover:text-green-600 inline-flex">
              <span className="mr-2">❮</span> Back to Experiences
            </Link>
          </div>

          {allCategories.length > 2 && (
            <div className="flex justify-center flex-wrap gap-3 mb-12">
              {allCategories.map(category => (
                <FilterButton key={String(category)} category={String(category)} />
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCafes.length > 0 ? (
              displayedCafes.map((item: any, index: number) => (
                <InfoCard key={item.title || index} item={item} />
              ))
            ) : (
              <p className="text-center text-lg text-gray-600 mt-8">No cafes found.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// --- MAIN PAGE EXPORT ---
export default function CafesPage() {
  return (
    <>
      <PageTitle title="Cafes" />
      <Suspense fallback={<div className="p-20 text-center">Loading cafes...</div>}>
        <CafesContent />
      </Suspense>
    </>
  );
}