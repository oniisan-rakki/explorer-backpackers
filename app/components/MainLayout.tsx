"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  // --- UPDATED: Added '/book-tour' to the hidden list ---
  const isHiddenPage = pathname === '/book' || pathname === '/checkout' || pathname === '/book-tour';

  return (
    <>
      {/* Only show Header if NOT on specific pages */}
      {!isHiddenPage && <Header />}

      {/* Conditionally apply the top padding. */}
      <div className={`${isHiddenPage ? '' : 'pt-20 md:pt-32'} flex-grow flex flex-col`}>
        {children}
      </div>
    </>
  );
};