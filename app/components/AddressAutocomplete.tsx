"use client";
import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

interface AddressAutocompleteProps {
  onSelectAddress: (address: string) => void;
  defaultValue?: string;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ onSelectAddress, defaultValue = "" }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "za" }, // Restrict to South Africa
    },
    debounce: 300,
    defaultValue,
  });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    
    // Pass the selected address back to the parent
    onSelectAddress(address);

    // Optional: If you need coordinates in the future
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log("📍 Coordinates:", lat, lng);
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
    }
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSelectAddress(e.target.value); // Update parent even on typing
        }}
        disabled={!ready}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 h-12"
        placeholder="Start typing hotel name or address..."
      />
      
      {/* Dropdown Suggestions */}
      {status === "OK" && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 max-h-60 overflow-y-auto">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description)}
              className="px-4 py-3 hover:bg-green-50 cursor-pointer text-gray-700 text-sm border-b border-gray-100 last:border-0 transition-colors"
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;