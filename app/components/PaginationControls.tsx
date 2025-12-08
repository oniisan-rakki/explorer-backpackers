"use client";
import React from 'react';
import { Button } from './Button';

// --- NEW: Define the types for the component's props ---
type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

// --- NEW: Pagination Controls Component (with types applied) ---
export const PaginationControls = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationControlsProps) => {
  const handlePrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex justify-between items-center mt-12">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        variant="primary"
      >
        ❮ Previous
      </Button>
      <span className="text-gray-700 font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="primary"
      >
        Next ❯
      </Button>
    </div>
  );
};