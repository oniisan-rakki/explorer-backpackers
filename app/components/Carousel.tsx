"use client";
import React, { useRef } from 'react';

type CarouselProps = {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
};

export const Carousel = ({ items, renderItem }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Scroll by the width of one item (approximate based on first child)
      const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full group">
      {/* Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 gap-0" 
      >
        {items.map((item, index) => (
          // Mobile: w-full (1 item), Tablet: w-1/2 (2 items), Desktop: w-1/3 (3 items)
          <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 snap-center" key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>
      
      {/* Desktop Buttons (Initial Design: Absolute Side Positioning) */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 hidden md:block w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black disabled:opacity-20 hover:bg-green-600"
      >
        ❮
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black disabled:opacity-20 hover:bg-green-600"
      >
        ❯
      </button>

      {/* Mobile Buttons (Below Cards) */}
      <div className="flex justify-center gap-4 mt-4 md:hidden">
        <button
          onClick={() => scroll('left')}
          className="w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/70 hover:bg-green-600"
        >
          ❮
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-[45px] h-[45px] p-[5px] text-white font-bold text-[18px] transition-all duration-[600ms] ease rounded-[5px] select-none border-none bg-black/70 hover:bg-green-600"
        >
          ❯
        </button>
      </div>
    </div>
  );
};