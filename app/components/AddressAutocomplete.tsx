"use client";
import React, { useEffect, useRef, useState } from "react";

interface AddressAutocompleteProps {
  onSelectAddress: (address: string) => void;
  defaultValue?: string;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ onSelectAddress, defaultValue = "" }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    // 1. Wait for Google Maps to load
    const checkForGoogle = setInterval(() => {
      if ((window as any).google && (window as any).google.maps && (window as any).google.maps.places) {
        clearInterval(checkForGoogle);
        initAutocomplete();
      }
    }, 500);

    return () => clearInterval(checkForGoogle);
  }, []);

  const initAutocomplete = () => {
    if (!inputRef.current) return;

    console.log("🚀 Initializing Google Maps Widget...");

    // 2. Attach Google's official Autocomplete widget
    const autocomplete = new (window as any).google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "za" }, // Restrict to South Africa
      fields: ["formatted_address", "name"],    // Fetch only what we need
      types: ["establishment", "geocode"],      // Allow hotels and addresses
    });

    // 3. Listen for selection
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log("📍 Place selected:", place);

      const address = place.formatted_address || place.name;
      if (address) {
        setInputValue(address);
        onSelectAddress(address);
      }
    });
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onSelectAddress(e.target.value);
      }}
      placeholder="Start typing hotel name or address..."
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
      autoComplete="off"
    />
  );
};

export default AddressAutocomplete;