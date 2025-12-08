"use client";
import React from 'react';

// --- NEW: Define the types for the component's props ---
type ButtonProps = {
  children: React.ReactNode; // 'children' can be text, other components, etc.
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // A function for when the button is clicked
  variant?: 'primary' | 'secondary' | 'outline'; // Restrict 'variant' to only these strings
  className?: string; // className is optional
  type?: 'button' | 'submit' | 'reset'; // Restrict 'type' to valid button types
  disabled?: boolean; // disabled is optional
};

// --- Reusable Button Component (with types applied) ---
export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button', 
  disabled = false 
}: ButtonProps) => { // <-- The types are applied here
  const styles = {
    primary: 'bg-black text-white hover:bg-green-700 disabled:bg-green-300',
    secondary: 'bg-white text-black hover:bg-green-600 hover:text-white disabled:bg-gray-100',
    outline: 'border border-white text-white hover:bg-white hover:text-gray-900'
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};