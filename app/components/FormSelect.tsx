"use client";
import React from 'react';

// --- NEW: Define the types for the component's props ---
type FormSelectProps = {
  label: React.ReactNode;
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  children: React.ReactNode; // To allow <option> elements
};

// --- Reusable Form Select (with types applied) ---
export const FormSelect = ({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false, 
  children 
}: FormSelectProps) => ( // <-- Types applied here
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white"
    >
      {children}
    </select>
  </div>
);