"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { images } from '../data/images';

export default function ThankYouPage() {
  // This hook will run when the component mounts
  useEffect(() => {
    // Check if the script is already loaded
    if ((window as any).confetti) {
      (window as any).confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      return;
    }

    // Load the confetti script
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js";
    script.async = true;
    script.onload = () => {
      // Trigger confetti once the script is loaded
      // Add a check in case window.confetti is still not available
      if ((window as any).confetti) {
        (window as any).confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <PageTitle title="Thank You!" />
      <main className="flex items-center justify-center min-h-[70vh] bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <img src={images.heroThanks} alt="Thank You" className="max-w-xs mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your reservation was booked successfully.</h2>
          <p className="text-xl text-gray-600 mb-8">
            An email receipt including the details about your reservation has been sent to the email address provided. Please keep it for records.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Replaced navigateTo with Link */}
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
            
            {/* External links can typically remain as onClick or be wrapped in an anchor tag */}
            <Button onClick={() => window.open('https://www.explorertours.com', '_blank')} variant="secondary">Book Tour</Button>
          </div>
        </div>
      </main>
    </>
  );
}