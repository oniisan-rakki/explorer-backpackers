"use client";
import React from 'react';

// --- Updated: Added 'size' to the props definition ---
type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg'; // NEW: Allow different sizes
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', // Default to medium if not specified
  className = '', 
  type = 'button', 
  disabled = false 
}: ButtonProps) => {
  
  // Color styles
  const styles = {
    primary: 'bg-black text-white hover:bg-green-700 disabled:bg-green-300',
    secondary: 'bg-white text-black hover:bg-green-600 hover:text-white disabled:bg-gray-100',
    outline: 'border border-white text-white hover:bg-white hover:text-gray-900'
  };

  // NEW: Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // Combine variant style + size style + custom className
      className={`rounded-md font-semibold transition-all duration-300 ${styles[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};