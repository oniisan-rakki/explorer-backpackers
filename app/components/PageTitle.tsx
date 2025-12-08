"use client";
import React, { useEffect } from 'react';

// --- NEW: Define the types for the component's props ---
type PageTitleProps = {
  title: string;
};

// --- Page Title Component (with types applied) ---
export const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    document.title = `${title} - Explorer Backpackers`;
  }, [title]);
  return null;
};