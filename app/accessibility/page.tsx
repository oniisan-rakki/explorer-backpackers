"use client";
import React from 'react';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { images } from '../data/images';

// --- Types for the internal helper component ---
type GenericInfoPageProps = {
  title: string;
  heroImage: string;
  children: React.ReactNode;
};

// --- Helper Component: Generic Page Layout ---
const GenericInfoPage = ({ title, heroImage, children }: GenericInfoPageProps) => (
  <>
    <PageTitle title={title} />
    <main>
      <HeroSection
        title={title}
        subtitle="Our Policies"
        emphasis=""
        bgImage={heroImage}
      />
      <section className="py-16 lg:py-15 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-7">{title}</h2>
            {children}
          </div>
        </div>
      </section>
    </main>
  </>
);

// --- MAIN PAGE EXPORT ---
export default function AccessibilityPage() {
  return (
    <GenericInfoPage title="Accessibility" heroImage={images.heroAccess}>
      <p className="text-base text-black leading-relaxed mb-5">At Explorer Backpackers, we want to ensure the services offered on our website and apps are accessible to everyone. Our goal is to prioritise accessibility and usability throughout the development and release of our digital media. We have a team monitoring the accessibility of our website and apps and to coordinate training, testing and consulting.</p>
      <p className="text-base text-black leading-relaxed mb-5">As we continue to enhance our usability, we’ll provide updates as they become available.</p>          
      <p className="text-base text-black leading-relaxed mb-5">If you have any questions about any accessibility features or require assistance, please get in touch at <a href="mailto:bookings@explorerbackpackers.com" className="text-green-600 hover:underline">bookings@explorerbackpackers.com</a>.</p>       
      <p className="text-base text-black leading-relaxed mb-5">August 2024</p>
    </GenericInfoPage>
  );
}