"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle'; // Adjust path based on file location (e.g. '../components/PageTitle' if in a subdir)
import { Button } from '../components/Button';
import { images } from '../data/images';

export default function NotFound() {
  return (
    <>
      <PageTitle title="404 - Page Not Found" />
      <main className="flex items-center justify-center min-h-[70vh] bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <img src={images.hero404} alt="404 Error" className="max-w-xs mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops, Sorry!</h2>
          <p className="text-xl text-gray-600 mb-8">The page you are looking for does not exist. Return back to the previous page or go home.</p>
          <div className="flex justify-center space-x-4">
            {/* Replaced navigateTo with Link */}
            <Link href="/">
              <Button>Home</Button>
            </Link>
            
            {/* Client-side history back navigation */}
            <Button onClick={() => window.history.back()} variant="secondary">Go Back</Button>
          </div>
        </div>
      </main>
    </>
  );
}