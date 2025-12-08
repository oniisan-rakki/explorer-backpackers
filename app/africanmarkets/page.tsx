"use client";
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Ensure these paths match your folder structure exactly
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { InfoCard } from '../components/InfoCard';
import { africanMarketsData } from '../data/africanMarketsData';
import { getHeroImageForCategory } from '../lib/utils';

// --- Sub-component to handle search params safely ---
function AfricanMarketsContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter'); 
  
  // Safe check: Ensure data exists before mapping
  const safeData = africanMarketsData || []; 
  
  const allCategories = ['All', ...new Set(safeData.map((item: any) => item.category || 'General'))];
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (filter) {
      setActiveFilter(filter);
    } else {
      setActiveFilter('All');
    }
  }, [filter]);

  const displayedMarkets = useMemo(() => {
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
        title="African Markets" 
        subtitle="Explorer's Picks" 
        emphasis="Curios & Crafts" 
        buttonText="View Markets"
        onButtonClick={() => document.getElementById('african-markets-list')?.scrollIntoView({ behavior: 'smooth' })}
        // Fallback image if util fails
        bgImage={getHeroImageForCategory ? getHeroImageForCategory('African Markets') : ''} 
      />
      
      <section id="african-markets-list" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/experiences" className="flex items-center text-gray-700 hover:text-green-600 inline-flex">
              <span className="mr-2">❮</span> Back to Experiences
            </Link>
          </div>

          {/* Categories Filter */}
          {allCategories.length > 2 && (
            <div className="flex justify-center flex-wrap gap-3 mb-12">
              {allCategories.map(category => (
                <FilterButton key={category} category={String(category)} />
              ))}
            </div>
          )}

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedMarkets.length > 0 ? (
              displayedMarkets.map((item: any, index: number) => (
                <InfoCard key={item.title || index} item={item} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                <p>No markets found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// --- MAIN PAGE EXPORT ---
// This default export is REQUIRED for Next.js to render the page
export default function AfricanMarketsPage() {
  return (
    <>
      <PageTitle title="African Markets" />
      <Suspense fallback={<div className="p-20 text-center">Loading markets...</div>}>
        <AfricanMarketsContent />
      </Suspense>
    </>
  );
}