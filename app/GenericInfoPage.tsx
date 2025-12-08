"use client";
import React from 'react';
import { PageTitle } from './components/PageTitle';
import { HeroSection } from './components/HeroSection'; // This component is used here

// --- NEW: Define the types for the component's props ---
type GenericInfoPageProps = {
  title: string;
  heroImage: string;
  children: React.ReactNode;
};

// --- Generic Page: For Privacy, Terms, etc. (with types applied) ---
export const GenericInfoPage = ({ title, heroImage, children }: GenericInfoPageProps) => {
  return (
    <>
      <PageTitle title={title} />
      <main>
        <HeroSection
          title={title}
          subtitle="Our Commitment"
          emphasis=""
          bgImage={heroImage}
        />
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* 'prose' gives you nice default typography for text pages */}
            <div className="prose prose-lg max-w-none"> 
              <h2 className="text-4xl font-bold text-gray-800 mb-8">{title}</h2>
              {children}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};