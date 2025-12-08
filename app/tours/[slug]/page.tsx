"use client";
import React, { useState, useMemo, use } from 'react';
import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';
import { HeroSection } from '../../components/HeroSection';
import { TourCard } from '../../components/TourCard';
import { PaginationControls } from '../../components/PaginationControls';
import { allExperiences, getHeroImageForCategory } from '../../lib/utils';

// Helper to map URL slugs back to exact Data Category names
const getCategoryFromSlug = (slug: string) => {
  const map: { [key: string]: string } = {
    'city-sightseeing': 'City Sightseeing',
    'johannesburg': 'Johannesburg',
    'soweto': 'Soweto',
    'pretoria': 'Pretoria',
    'pilanesberg': 'Pilanesberg',
    'kruger-national-park': 'Kruger National Park',
    'cape-town': 'Cape Town',
    'garden-route': 'Garden Route',
    'transfers': 'Transfers'
  };
  // Fallback to Johannesburg only if no match found
  return map[slug] || 'Johannesburg'; 
};

export default function TourCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise
  const { slug } = use(params);
  
  const category = getCategoryFromSlug(slug);
  
  const [sortOption, setSortOption] = useState('default');
  const [filterDuration, setFilterDuration] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 20;

  // Filter tours by category
  const tours = useMemo(() => {
    return allExperiences.filter((t: any) => t.category === category);
  }, [category]);
  
  const title = `${category} Tours`;
  const heroImage = getHeroImageForCategory(category);

  // Sorting and Filtering Logic
  const processedTours = useMemo(() => {
    let filteredTours = [...tours];

    if (filterDuration !== 'all') {
      filteredTours = filteredTours.filter((tour: any) => {
        const d = tour.duration.toLowerCase();
        if (filterDuration === 'half-day') return d.includes('hour') || d.includes('half');
        if (filterDuration === 'full-day') return d.includes('day') && !d.includes('days');
        if (filterDuration === 'multi-day') return d.includes('days');
        return true;
      });
    }

    switch (sortOption) {
      case 'price-low-high': filteredTours.sort((a: any, b: any) => a.basePrice - b.basePrice); break;
      case 'price-high-low': filteredTours.sort((a: any, b: any) => b.basePrice - a.basePrice); break;
      default: break;
    }
    return filteredTours;
  }, [tours, sortOption, filterDuration]);

  // Pagination Logic
  const totalPages = Math.ceil(processedTours.length / toursPerPage);
  const paginatedTours = processedTours.slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage);

  return (
    <>
      <PageTitle title={title} />
      <main>
        <HeroSection
          title={title}
          subtitle="Explore"
          emphasis={category}
          buttonText="View Tours"
          onButtonClick={() => document.getElementById('tours-list')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={heroImage} 
        />
        
        <section id="tours-list" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/experiences" className="flex items-center text-gray-700 hover:text-green-600">
                <span className="mr-2">❮</span> Back to All Experiences
              </Link>
            </div>

            {/* Filter & Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Duration</label>
                <select
                  value={filterDuration}
                  onChange={(e) => setFilterDuration(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
                >
                  <option value="all">All Durations</option>
                  <option value="half-day">Half Day / Hours</option>
                  <option value="full-day">Full Day (1 Day)</option>
                  <option value="multi-day">Multi-Day (2+ Days)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
                >
                  <option value="default">Recommended</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Tour Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedTours.map((tour: any) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            
            {paginatedTours.length === 0 && <p className="text-center text-gray-600 mt-8">No tours found.</p>}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  document.getElementById('tours-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}