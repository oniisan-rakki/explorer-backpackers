import { pilanesbergNationalParkData } from '../data/pilanesbergNationalParkData';
import { johannesburgData } from '../data/johannesburgData';
import { sowetoData } from '../data/sowetoData';
import { pretoriaData } from '../data/pretoriaData';
import { capeTownData } from '../data/capeTownData';
import { gardenRouteData } from '../data/gardenRouteData';
import { krugerNationalParkData } from '../data/krugerNationalParkData';
import { citySightseeingData } from '../data/citySightseeingData';
import { transferData } from '../data/transferData';
import { images } from '../data/images';

// --- AGGREGATE ALL TOURS ---
// This replaces experiencesData.ts references
export const allExperiences = [
  ...pilanesbergNationalParkData,
  ...johannesburgData,
  ...sowetoData,
  ...pretoriaData,
  ...capeTownData,
  ...gardenRouteData,
  ...krugerNationalParkData,
  ...citySightseeingData,
  ...transferData
];

// --- Helper to get specific tour by ID ---
export const getTourById = (id: string) => {
  return allExperiences.find((tour) => tour.id === id);
};

// --- Helper to get default dates ---
export const getInitialDates = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  
  return {
    checkIn: formatDate(today),
    checkOut: formatDate(tomorrow)
  };
};

// --- Helper to calculate tour price (UPDATED FOR TIERS) ---
export const calculateTourPrice = (tour: any, guestCount: number, selectedTier?: any) => {
  if (!tour || guestCount <= 0) {
    return 0;
  }

  // 1. Check if a specific Tier (e.g. Single vs Sharing) is selected
  if (selectedTier) {
    return selectedTier.price * guestCount;
  }

  // 2. Check for Volume/Count based tiers (e.g. 1 pax = R1000, 2 pax = R800)
  if (tour.pricingTiers && tour.pricingTiers.length > 0 && !tour.pricingTiers[0].type) {
     const matchingTier = tour.pricingTiers.find(
      (tier: any) => guestCount >= (tier.minGuests || tier.count) && guestCount <= (tier.maxGuests || tier.count)
    );
    
    // If per-vehicle pricing
    if (tour.priceType === 'per-vehicle') {
        return matchingTier ? matchingTier.price : tour.basePrice;
    }
    
    // If per-person pricing with volume discounts
    if (matchingTier) {
      return matchingTier.price * guestCount;
    }
  }
  
  // 3. Default Base Price calculation
  if (tour.priceType === 'per-vehicle') {
      return tour.basePrice;
  }

  return tour.basePrice * guestCount;
};

// --- Helper for Dynamic Hero Images ---
export const getHeroImageForCategory = (category: string) => {
    switch (category) {
        case 'Cape Town': return images.heroCapeTown; // Replace with specific Cape Town image if available
        case 'Pilanesberg': return images.heroPilanesberg; // Replace with Pilanesberg image
        case 'Kruger National Park': return images.heroKruger;
        case 'Garden Route': return images.heroGardenRoute; // Replace with Garden Route image
        case 'Johannesburg': return images.heroJohannesburg;
        case 'Soweto': return images.heroSoweto;
        case 'Pretoria': return images.heroPretoria;
        case 'Restaurants': return images.heroRestaurants; // Use a food image
        case 'Nightlife': return images.heroNightlife; // Use a party image
        case 'Transfers': return images.heroTransfers; 
        case 'African Markets': return images.heroAfricanMarkets;
        case 'Local Sights': return images.heroLocalSights;
        case 'Malls': return images.heroMalls;
        case 'CoWorking': return images.heroCoWorking;
        case 'Art Galleries': return images.heroArtGalleries;
        case 'Cafes': return images.heroCafes;
        case 'Markets': return images.heroMarkets;
        case 'Barber': return images.heroBarbers;
        case 'Spa': return images.heroSpa;
        case 'City Sightseeing': return images.heroCitySightSeeing;
        default: return images.heroExperiences;
    }
};