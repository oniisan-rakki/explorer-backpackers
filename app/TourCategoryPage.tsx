"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { TourCard } from '../components/TourCard';
import { PaginationControls } from '../components/PaginationControls';
import { allExperiences, getHeroImageForCategory } from '../lib/utils';

type TourCategoryPageProps = {
  navigateTo: (page: string, props?: any) => void;
  category: string;
};

export const TourCategoryPage = ({ navigateTo, category }: TourCategoryPageProps) => {
  const [sortOption, setSortOption] = useState('default');
  const [filterDuration, setFilterDuration] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 20;

  const tours = useMemo(() => {
    return allExperiences.filter((t: any) => t.category === category);
  }, [category]);
  
  const title = `${category}${category.endsWith('s') ? '' : 's'} Tours`;
  
  useEffect(() => {
    setCurrentPage(1);
  }, [category, sortOption, filterDuration]);

  const processedTours = React.useMemo(() => {
    let filteredTours = [...tours];

    if (filterDuration !== 'all') {
      filteredTours = filteredTours.filter((tour: any) => {
        if (filterDuration === 'half-day') {
          return tour.duration.toLowerCase().includes('hour') || tour.duration.toLowerCase().includes('half');
        }
        if (filterDuration === 'full-day') {
          return tour.duration.toLowerCase().includes('day') && !tour.duration.toLowerCase().includes('days');
        }
        if (filterDuration === 'multi-day') {
          return tour.duration.toLowerCase().includes('days');
        }
        return true;
      });
    }

    switch (sortOption) {
      case 'price-low-high':
        filteredTours.sort((a: any, b: any) => a.basePrice - b.basePrice);
        break;
      case 'price-high-low':
        filteredTours.sort((a: any, b: any) => b.basePrice - a.basePrice);
        break;
      default:
        break;
    }

    return filteredTours;
  }, [tours, sortOption, filterDuration]);

  const totalPages = Math.ceil(processedTours.length / toursPerPage);
  const paginatedTours = processedTours.slice(
    (currentPage - 1) * toursPerPage,
    currentPage * toursPerPage
  );

  if (!category) {
    useEffect(() => navigateTo('experiences'), [navigateTo]);
    return null;
  }

  const heroImage = getHeroImageForCategory(category);

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
              <button onClick={() => navigateTo('experiences')} className="flex items-center text-gray-700 hover:text-green-600">
                <span className="mr-2">❮</span> Back to All Experiences
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label htmlFor="filter-duration" className="block text-sm font-medium text-gray-700 mb-1">Filter by Duration</label>
                  <select
                    id="filter-duration"
                    value={filterDuration}
                    onChange={(e) => setFilterDuration(e.target.value)}
                    className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white"
                  >
                    <option value="all">All Durations</option>
                    <option value="half-day">Half Day / Hours</option>
                    <option value="full-day">Full Day (1 Day)</option>
                    <option value="multi-day">Multi-Day (2+ Days)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
                <select
                  id="sort-by"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="default">Recommended</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedTours.map((tour: any) => (
                <TourCard key={tour.id} tour={tour} navigateTo={navigateTo} />
              ))}
            </div>

            {paginatedTours.length === 0 && (
              <p className="text-center text-lg text-gray-600 mt-8">No tours found matching your filters.</p>
            )}

            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  // Scroll back to top of list instead of page top
                  document.getElementById('tours-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};