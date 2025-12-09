"use client";
import React, { useState, useEffect, useRef } from "react";

interface AddressAutocompleteProps {
  onSelectAddress: (address: string) => void;
  defaultValue?: string;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ onSelectAddress, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const autocompleteService = useRef<any>(null);

  useEffect(() => {
    // Try to initialize immediately
    initService();

    // Retry if Google Maps isn't loaded yet (e.g. slight race condition)
    const interval = setInterval(() => {
      if (!autocompleteService.current) {
        initService();
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const initService = () => {
    if ((window as any).google && (window as any).google.maps && (window as any).google.maps.places) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onSelectAddress(val);

    if (!val) {
      setSuggestions([]);
      return;
    }

    if (!autocompleteService.current) {
      initService(); // Try init again just in case
      if (!autocompleteService.current) return;
    }

    // Fetch predictions
    autocompleteService.current.getPlacePredictions({
      input: val,
      componentRestrictions: { country: "za" }, // Restrict to South Africa
    }, (predictions: any[], status: any) => {
      if (status === (window as any).google.maps.places.PlacesServiceStatus.OK && predictions) {
        setSuggestions(predictions);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
      }
    });
  };

  const handleSelect = (description: string) => {
    setValue(description);
    onSelectAddress(description);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Start typing hotel name or address..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
        autoComplete="off"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion.description)}
              className="px-4 py-3 hover:bg-green-50 cursor-pointer text-gray-700 text-sm border-b border-gray-100 last:border-0 transition-colors"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;