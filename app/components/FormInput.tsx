"use client";
import React from 'react';

// --- NEW: Define the types for the component's props ---
type FormInputProps = {
  label: React.ReactNode;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'time';
  placeholder?: string;
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // <-- THIS IS THE FIX (added '?')
  required?: boolean;
  min?: string | number;
  max?: string | number;
  readOnly?: boolean;
};

// --- Reusable Form Input (with types applied) ---
export const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, // This can now be undefined
  required = false, 
  min, 
  max, 
  readOnly = false 
}: FormInputProps) => ( // <-- Types applied here
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      max={max}
      readOnly={readOnly}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${readOnly ? 'bg-gray-100' : ''}`}
    />
  </div>
);