"use client";
import React from 'react';

// --- NEW: Define the types for the component's props ---
type FormTextareaProps = {
  label: React.ReactNode;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
};

// --- Reusable Form Textarea (with types applied) ---
export const FormTextarea = ({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false 
}: FormTextareaProps) => ( // <-- Types applied here
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={4}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
    />
  </div>
);