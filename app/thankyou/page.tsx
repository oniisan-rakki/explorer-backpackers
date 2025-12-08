"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../lib/firebase'; // Ensure this points to your firebase config
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { images } from '../data/images';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');
  const bookingType = searchParams.get('bookingType');

  const [status, setStatus] = useState<'loading' | 'success' | 'manual_check'>('loading');

  useEffect(() => {
    // If no ID is provided, just show success (fallback for direct visits)
    if (!bookingId || !bookingType) {
      setStatus('success');
      return;
    }

    // Determine collection name
    const collectionName = bookingType === 'tour' ? 'tours_bookings' : 'accommodation_bookings';
    
    // Listen to the document in real-time
    const unsub = onSnapshot(doc(db, collectionName, bookingId), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        if (data.status === 'Paid') {
          setStatus('success');
          triggerConfetti();
        }
      }
    });

    // Timeout: If it takes longer than 15 seconds, show a "Check Email" message
    const timer = setTimeout(() => {
      setStatus((prev) => prev === 'success' ? 'success' : 'manual_check');
    }, 15000);

    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, [bookingId, bookingType]);

  const triggerConfetti = () => {
    if ((window as any).confetti) {
      (window as any).confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
      // Load script if missing
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js";
      script.async = true;
      script.onload = () => {
        if ((window as any).confetti) {
          (window as any).confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
      };
      document.body.appendChild(script);
    }
  };

  if (status === 'loading') {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] bg-white py-16 px-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-800">Verifying Payment...</h2>
        <p className="text-gray-500 mt-2 text-center">Please wait while we confirm your booking with the bank.</p>
      </main>
    );
  }

  return (
    <>
      <PageTitle title={status === 'success' ? "Thank You!" : "Payment Processing"} />
      <main className="flex items-center justify-center min-h-[70vh] bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <img src={images.heroThanks} alt="Status" className="max-w-xs mx-auto mb-8" />
          
          {status === 'success' ? (
            <>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Your reservation is confirmed!</h2>
              <p className="text-xl text-gray-600 mb-8">
                We have received your payment. An email receipt including your reservation details has been sent to you.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Completed</h2>
              <p className="text-xl text-gray-600 mb-8">
                We are finalizing your booking. If you don't receive a confirmation email within 5 minutes, please contact us.
              </p>
            </>
          )}

          <div className="flex justify-center space-x-4">
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}