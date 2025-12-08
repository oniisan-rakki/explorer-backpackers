import { images } from './images';

// --- Kruger National Park Safaris Data ---
export const krugerNationalParkData = [

  { 
    id: 'k1', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama River Lodge Fly-In Safari from Cape Town', 
    description: 'Fly into Hoedspruit Eastgate Airport from Cape Town and be met by your friendly guide for transport to the exclusive Kapama River Lodge. Enjoy morning and afternoon game drives, all meals, and selected local drinks. Experience the Big Five and other plains game.', 
    priceType: 'per-person',
    basePrice: 28850, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownOne,
    gallery: [images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownTwo, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownThree, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownFour, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownFive, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownSix, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownSeven, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownEight, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownNine, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownTen, images.twoDayKapamaRiverLodgeFlyInSafariFromCapeTownEleven],
    overview: 'This is a luxury 2-day fly-in safari package to Kapama River Lodge from Cape Town, including return flights and daily game drives.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama River Lodge',
      '1 Night accommodation at Kapama River Lodge',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Kapama Game Reserve', description: 'Depart from Cape Town, arrive at Hoedspruit and transfer to Kapama River Lodge. Enjoy lunch and the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve - Cape Town', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,850 sharing'
    ]
  },
  { 
    id: 'k2', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama Southern Camp Fly-In Safari in Cape Town', 
    description: 'A 2-day breakaway to the exclusive Kapama Southern Camp from Cape Town. This package includes flights, airport transfers, 1 night luxury accommodation, and 2 game drives. Enjoy the Big 5 in style.', 
    priceType: 'per-person',
    basePrice: 27350, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaSouthernCampFlyInSafariInCapeTownOne,
    gallery: [images.twoDayKapamaSouthernCampFlyInSafariInCapeTownTwo, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownThree, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownFour, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownFive, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownSix, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownSeven, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownEight, images.twoDayKapamaSouthernCampFlyInSafariInCapeTownNine],
    overview: 'Experience 2 days of luxury safari at Kapama Southern Camp, flying in from Cape Town.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Southern Camp',
      '1 Night accommodation at Kapama Southern Camp',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Kapama Game Reserve', description: 'Depart from Cape Town, arrive at Hoedspruit and transfer to Kapama Southern Camp. Lunch and afternoon game drive included.' },
      { title: 'Day 2: Kapama Game Reserve - Cape Town', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 27,350 sharing'
    ]
  },
  { 
    id: 'k3', 
    category: 'Kruger National Park', 
    subCategory: 'Road Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama River Lodge Safari', 
    description: 'A quick two-day road safari to the world-renowned Kapama Private Game Reserve. Includes transfers from Johannesburg, accommodation, and two game drives.', 
    priceType: 'per-person',
    basePrice: 17900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKapamaRiverLodgeSafariOne,
    gallery: [images.twoDayKapamaRiverLodgeSafariTwo , images.twoDayKapamaRiverLodgeSafariThree , images.twoDayKapamaRiverLodgeSafariFour , images.twoDayKapamaRiverLodgeSafariFive , images.twoDayKapamaRiverLodgeSafariSix , images.twoDayKapamaRiverLodgeSafariSeven, images.twoDayKapamaRiverLodgeSafariEight, images.twoDayKapamaRiverLodgeSafariNine, images.twoDayKapamaRiverLodgeSafariTen, images.twoDayKapamaRiverLodgeSafariEleven, images.twoDayKapamaRiverLodgeSafariTwelve ],
    overview: 'This is a 2-day road trip from Johannesburg to Kapama River Lodge for a luxury safari experience.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return road transfers from Johannesburg (JNB) to Kapama River Lodge',
      '1 Night accommodation at Kapama River Lodge',
      'All meals and 2 game drives',
      'Snacks and local drinks during game drives'
    ],
    whatIsNotIncluded: [
      'Airport taxes and travel insurance',
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Kapama River Lodge', description: 'Depart from JNB, transfer to Kapama, check-in, enjoy lunch, and the afternoon game drive.' },
      { title: 'Day 2: Kapama River Lodge to Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,900 sharing'
    ]
  },
  { 
    id: 'k4', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama Karula Luxury Fly-In Safari From Johannesburg', 
    description: 'Fly into Hoedspruit Eastgate Airport from Johannesburg and be met by your friendly guide for transport to the exclusive Kapama Karula Lodge. Enjoy 2 game drives and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 28850, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgOne,
    gallery: [images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTwo, images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgThree, images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFour, images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFive, images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSix, images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSeven, images.twoDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgEight],
    overview: 'A luxury 2-day fly-in safari to Kapama Karula Lodge from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Karula Lodge',
      '1 Night accommodation at Kapama Karula Lodge',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals, local drinks, and gratuities'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Depart from Johannesburg, arrive at Hoedspruit, transfer to Kapama Karula Lodge, enjoy lunch and the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve - Johannesburg', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,850 sharing'
    ]
  },
  { 
    id: 'k5', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama Buffalo Camp Safari Fly-in From Cape Town', 
    description: 'Fly into Hoedspruit Eastgate Airport from Cape Town and be met by your friendly guide for transport to the exclusive Kapama Buffalo Camp. Includes 1 night luxury accommodation, all meals, local drinks, and 2 game drives.', 
    priceType: 'per-person',
    basePrice: 32500, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownOne,
    gallery: [images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownTwo, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownThree, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownFour, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownFive, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownSix, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownSeven, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownEight, images.twoDayKapamaBuffaloCampSafariFlyInFromCapeTownNine],
    overview: 'A 2-day luxury fly-in safari to Kapama Buffalo Camp from Cape Town.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Buffalo Camp',
      '1 Night accommodation at Kapama Buffalo Camp',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Kapama Game Reserve', description: 'Depart from Cape Town, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, enjoy lunch and the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve - Cape Town', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 32,500 sharing'
    ]
  },
  { 
    id: 'k6', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama River Lodge Fly-In Safari from Johannesburg', 
    description: 'Fly into Hoedspruit Eastgate Airport from Johannesburg and be met by your friendly guide for transport to the exclusive Kapama River Lodge. Enjoy morning and afternoon game drives, all meals, and selected local drinks.', 
    priceType: 'per-person',
    basePrice: 19350, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgOne,
    gallery: [ images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgTwo, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgThree, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgFour, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgFive, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgSix, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgSeven, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgEight, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgNine, images.twoDayKapamaRiverLodgeFlyInSafariFromJohannesburgTen],
    overview: 'A luxury 2-day fly-in safari to Kapama River Lodge from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama River Lodge',
      '1 Night accommodation at Kapama River Lodge',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Kapama Game Reserve', description: 'Depart from Johannesburg, arrive at Hoedspruit, transfer to Kapama River Lodge, enjoy lunch and the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve - Johannesburg', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,350 sharing'
    ]
  },
  { 
    id: 'k7', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama Buffalo Camp Fly-In Safari From Johannesburg', 
    description: 'Fly into Hoedspruit Eastgate Airport from Johannesburg and be met by your friendly guide for transport to the exclusive Kapama Buffalo Camp. Includes 1 night luxury accommodation, all meals, local drinks, and 2 game drives.', 
    priceType: 'per-person',
    basePrice: 26400, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgOne,
    gallery: [images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwo, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgThree, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgFour, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgFive, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgSix, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgSeven, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgEight, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgNine, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgTen, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgEleven, images.twoDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwelve],
    overview: 'A 2-day luxury fly-in safari to Kapama Buffalo Camp from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Buffalo Camp',
      '1 Night accommodation at Kapama Buffalo Camp',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Depart from Johannesburg, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, enjoy lunch and the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve - Johannesburg', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 26,400 sharing'
    ]
  },
  { 
    id: 'k8', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama Karula Luxury Fly-In Safari From Cape Town', 
    description: 'Fly into Hoedspruit Eastgate Airport from Cape Town and be met by your friendly guide for transport to the exclusive Kapama Karula Lodge. Enjoy 2 game drives and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 32350, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownOne,
    gallery: [images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTwo, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownThree, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFour, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFive, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSix, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSeven, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownEight, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownNine, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTen, images.twoDayKapamaKarulaLuxuryFlyInSafariFromCapeTownEleven],
    overview: 'A luxury 2-day fly-in safari to Kapama Karula Lodge from Cape Town.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Karula Lodge',
      '1 Night accommodation at Kapama Karula Lodge',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals, local drinks, and gratuities'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town - Kapama Game Reserve', description: 'Depart from Cape Town, arrive at Hoedspruit, transfer to Kapama Karula Lodge, enjoy lunch and the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve - Cape Town', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 32,350 sharing'
    ]
  },
  { 
    id: 'k9', 
    category: 'Kruger National Park', 
    subCategory: 'Road Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '2 Day Classic Chalet Kruger Safari', 
    description: 'A classic 2-day road safari from Johannesburg to the Southern Kruger National Park. Includes open safari vehicle game drives and accommodation in a Classic Chalet.', 
    priceType: 'per-person',
    basePrice: 4810, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayClassicChaletKrugerSafariOne,
    gallery: [images.twoDayClassicChaletKrugerSafariTwo, images.twoDayClassicChaletKrugerSafariThree, images.twoDayClassicChaletKrugerSafariFour, images.twoDayClassicChaletKrugerSafariFive, images.twoDayClassicChaletKrugerSafariSix ],
    overview: 'An affordable 2-day safari package to the Kruger National Park from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return road transfers from Johannesburg (JNB) to Kruger National Park',
      '1 Night accommodation in a Classic Chalet',
      '1 Sunset and 1 Sunrise game drive in an open safari vehicle',
      'Breakfast and dinner daily',
      'Park Entrance Fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights and airport transfers',
      'Lunches, alcoholic beverages, and personal items'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Kruger National Park', description: 'Depart from JNB, transfer to the Lodge/Rest Camp, check-in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Kruger National Park to Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 4,810 sharing'
    ]
  },
  { 
    id: 'k11', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2 Day Kapama Southern Camp Fly-In Safari in Johannesburg', 
    description: 'A 2-day breakaway to the exclusive Kapama Southern Camp, flying in from Johannesburg. This package includes flights, airport transfers, 1 night luxury accommodation, and 2 game drives.', 
    priceType: 'per-person',
    basePrice: 20850, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgOne,
    gallery: [images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgTwo, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgThree, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgFour, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgFive, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgSix, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgSeven, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgEight, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgNine, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgTen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgEleven, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgTwelve, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgThirteen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgFourteen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgFifteen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgSixteen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgSeventeen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgEighteen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgNineteen, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgTwenty, images.twoDayKapamaSouthernCampFlyInSafariInJohannesburgTwentyOne],
    overview: 'Experience 2 days of luxury safari at Kapama Southern Camp, flying in from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Southern Camp',
      '1 Night accommodation at Kapama Southern Camp',
      '1 Morning game drive and 1 afternoon game drive',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Kapama Game Reserve', description: 'Depart from Johannesburg, arrive at Hoedspruit and transfer to Kapama Southern Camp. Lunch and afternoon game drive included.' },
      { title: 'Day 2: Kapama Game Reserve - Johannesburg', description: 'Early morning game drive, breakfast, and transfer back to Hoedspruit for your flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,850 sharing'
    ]
  },
  { 
    id: 'k12', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '2 Day Kruger Classic Camping Safari', 
    description: 'An affordable 2-day camping safari to the Kruger National Park. Guests stay in spacious 2-man Meru safari tents, including game drives and all park fees.', 
    priceType: 'per-person',
    basePrice: 7484, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKrugerClassicCampingSafariOne,
    gallery: [images.twoDayKrugerClassicCampingSafariTwo, images.twoDayKrugerClassicCampingSafariThree, images.twoDayKrugerClassicCampingSafariFour, images.twoDayKrugerClassicCampingSafariFive, images.twoDayKrugerClassicCampingSafariSix, images.twoDayKrugerClassicCampingSafariSeven, images.twoDayKrugerClassicCampingSafariEight, images.twoDayKrugerClassicCampingSafariNine, images.twoDayKrugerClassicCampingSafariTen, images.twoDayKrugerClassicCampingSafariEleven, images.twoDayKrugerClassicCampingSafariTwelve, images.twoDayKrugerClassicCampingSafariThirteen, images.twoDayKrugerClassicCampingSafariFourteen, images.twoDayKrugerClassicCampingSafariFifteen],
    overview: 'A budget-friendly 2-day camping adventure in the heart of Kruger National Park.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB)',
      '1 Night accommodation in a 2-man safari tent',
      'All park entrance fees and conservation levies',
      'Sunset and morning game drives in an open safari vehicle',
      'All meals included'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Bottled water and non-alcoholic drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Kruger National Park', description: 'Depart from JNB, transfer to the tented camp, enjoy lunch, and the afternoon/sunset game drive.' },
      { title: 'Day 2: Kruger National Park to Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,484 sharing'
    ]
  },
  { 
    id: 'k13', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '2-Day Dumela Camping Budget Adventure', 
    description: 'A budget-conscious 2-day camping adventure in the Blue Canyon Reserve, close to the Kruger Park. Accommodation in permanent luxury tents with en-suite facilities.', 
    priceType: 'per-person',
    basePrice: 5845, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayDumelaCampingBudgetAdventureOne,
    gallery: [images.twoDayDumelaCampingBudgetAdventureTwo, images.twoDayDumelaCampingBudgetAdventureThree, images.twoDayDumelaCampingBudgetAdventureFour, images.twoDayDumelaCampingBudgetAdventureFive, images.twoDayDumelaCampingBudgetAdventureSix, images.twoDayDumelaCampingBudgetAdventureSeven, images.twoDayDumelaCampingBudgetAdventureEight, images.twoDayDumelaCampingBudgetAdventureNine, images.twoDayDumelaCampingBudgetAdventureTen, images.twoDayDumelaCampingBudgetAdventureEleven],
    overview: 'Affordable 2-day camping tour from Johannesburg with game drives in Blue Canyon Private Reserve.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB)',
      '1 Night accommodation in Dumela Tented Camp',
      '1 Afternoon game drive and 1 morning game drive',
      'Meals as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Dumela Arrival & Afternoon Game Drive', description: 'Depart from JNB, transfer to Dumela Tented Camp, enjoy lunch and an afternoon game drive in the Blue Canyon Private Reserve.' },
      { title: 'Day 2: Sunrise Safari & Transfer', description: 'Early morning game drive or bush walk, breakfast, and transfer back to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 5,845 sharing'
    ]
  },
  { 
    id: 'k14', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '2 Day Radisson Kruger Fly-In Safari from Cape Town', 
    description: 'A 2-day fly-in safari from Cape Town to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 3 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 23210, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayRadissonKrugerFlyInSafariFromCapeTownOne,
    gallery: [images.twoDayRadissonKrugerFlyInSafariFromCapeTownTwo, images.twoDayRadissonKrugerFlyInSafariFromCapeTownThree, images.twoDayRadissonKrugerFlyInSafariFromCapeTownFour, images.twoDayRadissonKrugerFlyInSafariFromCapeTownFive, images.twoDayRadissonKrugerFlyInSafariFromCapeTownSix, images.twoDayRadissonKrugerFlyInSafariFromCapeTownSeven, images.twoDayRadissonKrugerFlyInSafariFromCapeTownEight, images.twoDayRadissonKrugerFlyInSafariFromCapeTownNine],
    overview: 'A 2-day luxury fly-in safari to Radisson Kruger Safari Lodge from Cape Town.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return transfers from Eastgate Airport to Radisson',
      '1 Night accommodation in a 4-star suite',
      '3 open safari vehicle drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Drinks (premium)',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Afternoon Safari Drive', description: 'Fly from Cape Town, arrive at Eastgate Airport, transfer to Radisson, check in, lunch, and afternoon game drive.' },
      { title: 'Day 2: Kruger National Park to Cape Town', description: 'Sunrise and morning game drive, breakfast, and transfer back to Eastgate Airport for your flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 23,210 sharing'
    ]
  },
  { 
    id: 'k15', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Skukuza)',
    title: '2 Day Kruger Shalati - the Train on the Bridge Tour', 
    description: 'A unique 2-day luxury experience on the stationary train on the Selati Bridge over the Sabie River. Includes luxury accommodation, all-inclusive food and drinks, and 2 game drives.', 
    priceType: 'per-person',
    basePrice: 20695, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKrugerShalatiTheTrainOnTheBridgeTourOne,
    gallery: [images.twoDayKrugerShalatiTheTrainOnTheBridgeTourTwo, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourThree, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourFour, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourFive, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourSix, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourSeven, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourEight, images.twoDayKrugerShalatiTheTrainOnTheBridgeTourNine],
    overview: 'Experience the magic of the Kruger National Park from the luxury of a stationary train on a bridge.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or Kruger Airport',
      '1 Night luxury accommodation in a Carriage Suite on the bridge',
      'All meals, soft drinks, house wines, local beers and spirits',
      '2 game drives in open safari vehicles'
    ],
    whatIsNotIncluded: [
      'Premium beverages',
      'Spa treatments'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Game Drive', description: 'Depart from JNB, arrive at Skukuza Airport, transfer to Shalati, check-in, lunch, and afternoon game drive.' },
      { title: 'Day 2: Morning Safari and Departure', description: 'Early morning game drive, breakfast, and shuttle transfer to O.R. Tambo International Airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 29,595 sharing (Note: based on the rate options provided, the base price is averaged)'
    ]
  },
  { 
    id: 'k16', 
    category: 'Garden Route & Safari', 
    subCategory: 'Multi-Day Tour',
    region: 'Garden Route / Western Cape',
    title: '2 Day Ultimate Wildlife Safari Luxury Garden Route Adventure', 
    description: 'A 2-day tour from Cape Town combining scenic drives along the Garden Route with a private game reserve safari experience at Buffelsdrift Game Lodge.', 
    priceType: 'per-person',
    basePrice: 7300, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureOne,
    gallery: [images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureTwo, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureThree, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureFour, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureFive, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureSix, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureSeven, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureEight, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureNine, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureTen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureEleven, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureTwelve, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureThirteen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureFourteen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureFifteen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureSixteen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureSeventeen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureEighteen, images.twoDayUltimateWildlifeSafariLuxuryGardenRouteAdventureNineteen],
    overview: 'Combines the beauty of the Garden Route with a luxury safari near Cape Town.',
    duration: '2 Days',
    whatIsIncluded: [
      'Collection from Cape Town hotel or address',
      'All transport in a luxury air-conditioned vehicle',
      '1 Night accommodation at Oudtshoorn Boutique Hotel or similar',
      '1 Evening game drive and 1 morning bush safari drive',
      'Breakfast and Dinner daily'
    ],
    whatIsNotIncluded: [
      'Departure and return flight costs',
      'Lunch, drinks, and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town - Oudtshoorn - Buffelsdrift Game Reserve', description: 'Depart Cape Town, travel Route 62 to Buffelsdrift Game Lodge, enjoy an evening game drive, and overnight in Oudtshoorn.' },
      { title: 'Day 2: Oudtshoorn - Buffelsdrift Game Reserve - Cape Town', description: 'Morning bush safari drive, breakfast, and return journey to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,300 sharing'
    ]
  },
  { 
    id: 'k17', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Hazyview)',
    title: '2 Day Kruger Adventure Safari', 
    description: 'A 2-day budget-friendly safari departing from Johannesburg. Includes accommodation at Hazyview and open safari vehicle game drives in the Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 4000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKrugerAdventureSafariOne,
    gallery: [images.twoDayKrugerAdventureSafariTwo, images.twoDayKrugerAdventureSafariThree, images.twoDayKrugerAdventureSafariFour, images.twoDayKrugerAdventureSafariFive, images.twoDayKrugerAdventureSafariSix, images.twoDayKrugerAdventureSafariSeven, images.twoDayKrugerAdventureSafariEight, images.twoDayKrugerAdventureSafariNine],
    overview: 'An affordable 2-day Kruger safari with accommodation near the park.',
    duration: '2 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or accommodation',
      '1 Night accommodation in Hazyview',
      'Game drives in an open safari vehicle',
      'Breakfast and Dinner daily',
      'All entrance fees'
    ],
    whatIsNotIncluded: [
      'Lunch meals',
      'Personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Kruger National Park', description: 'Depart JNB, transfer to Hazyview, check in, and enjoy the afternoon game drive in Kruger National Park.' },
      { title: 'Day 2: Kruger National Park to Johannesburg', description: 'Early morning game drive, breakfast, and transfer back to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 4,000 sharing'
    ]
  },
  { 
    id: 'k18', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '2-Day Dumela Camping Budget Tour - Fly in from Cape Town', 
    description: 'An affordable 2-day fly-in camping safari from Cape Town to the Dumela Tented Camp near Kruger National Park. Includes flights, airport transfers, and 2 game drives.', 
    priceType: 'per-person',
    basePrice: 16700, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownOne,
    gallery: [images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownTwo, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownThree, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownFour, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownFive, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownSix, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownSeven, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownEight, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownNine, images.twoDayDumelaCampingBudgetTourFlyInFromCapeTownTen],
    overview: 'A 2-day fly-in budget camping tour from Cape Town to the Blue Canyon Reserve.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers from JNB or Hoedspruit',
      '1 Night accommodation at Dumela Tented Camp',
      '1 Sunset open vehicle safari drive',
      'Meals as specified in the itinerary'
    ],
    whatIsNotIncluded: [
      'All transfers to and from the camp',
      'Game fees not specified'
    ],
    itinerary: [
      { title: 'Day 1: Dumela Arrival & Sunset Game Drive', description: 'Fly from Cape Town, arrive, transfer to Dumela, check in, and enjoy a sunset game drive.' },
      { title: 'Day 2: Optional Safari & Farewell', description: 'Optional morning activity (extra cost), breakfast, and return transfer for your flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 16,700 sharing'
    ]
  },
  { 
    id: 'k19', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '2 Day Radisson Kruger Fly-In Safari from Johannesburg', 
    description: 'A 2-day fly-in safari from Johannesburg to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 3 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 16610, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.twoDayRadissonKrugerFlyInSafariFromJohannesburgOne,
    gallery: [images.twoDayRadissonKrugerFlyInSafariFromJohannesburgTwo, images.twoDayRadissonKrugerFlyInSafariFromJohannesburgThree, images.twoDayRadissonKrugerFlyInSafariFromJohannesburgFour, images.twoDayRadissonKrugerFlyInSafariFromJohannesburgFive, images.twoDayRadissonKrugerFlyInSafariFromJohannesburgSix, images.twoDayRadissonKrugerFlyInSafariFromJohannesburgSeven],
    overview: 'A 2-day luxury fly-in safari to Radisson Kruger Safari Lodge from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return transfers from Eastgate Airport to Radisson',
      '1 Night accommodation in a 4-star suite',
      '3 open safari vehicle drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Drinks (premium)',
      'Gratuities',
      'Lunches & beverages (optional)'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Afternoon Safari Drive', description: 'Fly from JNB, arrive at Eastgate Airport, transfer to Radisson, check in, lunch, and afternoon game drive.' },
      { title: 'Day 2: Kruger National Park to Johannesburg', description: 'Sunrise and morning game drive, breakfast, and transfer back to Eastgate Airport for your flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 16,610 sharing'
    ]
  },
  { 
    id: 'k20', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '2 Day Kruger Glamping Budget Adventure', 
    description: 'A 2-day budget glamping adventure departing from Johannesburg. Stay at Eco-Friendly Sepedi Tented Camp, close to Kruger Park, with en-suite facilities and 2 game drives.', 
    priceType: 'per-person',
    basePrice: 7215, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKrugerGlampingBudgetAdventureOne,
    gallery: [images.twoDayKrugerGlampingBudgetAdventureTwo, images.twoDayKrugerGlampingBudgetAdventureThree, images.twoDayKrugerGlampingBudgetAdventureFour, images.twoDayKrugerGlampingBudgetAdventureFive, images.twoDayKrugerGlampingBudgetAdventureSix, images.twoDayKrugerGlampingBudgetAdventureSeven],
    overview: 'An affordable glamping experience near Kruger National Park from Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB)',
      '1 Night accommodation at Eco-Friendly Sepedi Tented Camp',
      'Afternoon sunset drive and morning sunrise game drive in Blue Canyon Reserve',
      'Breakfast daily',
      'Airport transfers from JNB or Airport'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Kruger National Park', description: 'Depart from JNB, transfer to the Tented Camp, enjoy dinner, and an afternoon game drive.' },
      { title: 'Day 2: Kruger National Park to Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,215 sharing'
    ]
  },
  { 
    id: 'k21', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Dulini Leadwood Lodge Safari', 
    description: 'A 3-day luxury trip to Dulini Leadwood Lodge in the Sabi Sands Game Reserve. This package includes two game drives per day, luxurious accommodation, and all meals and drinks.', 
    priceType: 'per-person',
    basePrice: 55145, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayDuliniLeadwoodLodgeSafariOne,
    gallery: [images.threeDayDuliniLeadwoodLodgeSafariTwo, images.threeDayDuliniLeadwoodLodgeSafariThree, images.threeDayDuliniLeadwoodLodgeSafariFour, images.threeDayDuliniLeadwoodLodgeSafariFive, images.threeDayDuliniLeadwoodLodgeSafariSix, images.threeDayDuliniLeadwoodLodgeSafariSeven, images.threeDayDuliniLeadwoodLodgeSafariEight, images.threeDayDuliniLeadwoodLodgeSafariNine, images.threeDayDuliniLeadwoodLodgeSafariTen],
    overview: 'A high-end 3-day safari experience in the heart of Sabi Sands Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return road transfers from Johannesburg (JNB) or flights to/from Skukuza (SKZ)',
      '2 Nights luxury accommodation',
      '2 Game drives per day with guide and tracker',
      'All meals, soft drinks, and local beverages'
    ],
    whatIsNotIncluded: [
      'International and domestic flights (if choosing road transfer)',
      'Curio shop purchases, premium drinks, laundry'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Afternoon Game Drive', description: 'Depart JNB, transfer to Dulini Leadwood Lodge, check in, and enjoy your first afternoon game drive.' },
      { title: 'Day 2: Full Day Safari', description: 'Morning game drive, brunch, relaxation, afternoon game drive, and dinner at the lodge.' },
      { title: 'Day 3: Farewell', description: 'Early morning game drive, breakfast, and transfer back to Johannesburg or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 55,145 sharing'
    ]
  },
  { 
    id: 'k22', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Chitwa Chitwa Lodge Safari', 
    description: 'A 3-day luxurious escape to Chitwa Chitwa Lodge in Sabi Sands. This all-inclusive package offers exceptional accommodation and twice-daily game drives in an exclusive Big 5 area.', 
    priceType: 'per-person',
    basePrice: 53145, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayChitwaChitwaLodgeSafariOne,
    gallery: [ images.threeDayChitwaChitwaLodgeSafariTwo, images.threeDayChitwaChitwaLodgeSafariThree, images.threeDayChitwaChitwaLodgeSafariFour, images.threeDayChitwaChitwaLodgeSafariFive, images.threeDayChitwaChitwaLodgeSafariSix, images.threeDayChitwaChitwaLodgeSafariSeven],
    overview: 'An exquisite 3-day luxury safari to Chitwa Chitwa in Sabi Sands.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or flights to/from Skukuza (SKZ)',
      '2 Nights luxury accommodation',
      '2 Game drives per day',
      'All meals, soft drinks, and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Alcoholic beverages, laundry, and boutique purchases',
      'Gratuities and premium drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Chitwa Chitwa Lodge', description: 'Depart JNB, transfer to Chitwa Chitwa, check in, and afternoon game drive.' },
      { title: 'Day 2: Full Day Safari', description: 'Morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Chitwa Chitwa - Johannesburg', description: 'Early morning game drive, breakfast, and transfer back to Johannesburg or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 53,145 sharing'
    ]
  },
  { 
    id: 'k23', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kapama Private Game Reserve',
    title: '2-Day Kapama Southern Camp Safari', 
    description: 'A 2-day road or fly-in package to the Kapama Southern Camp. Includes 1 night accommodation, 1 morning and 1 afternoon game drive, and all meals.', 
    priceType: 'per-person',
    basePrice: 27500, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKapamaSouthernCampSafariOne,
    gallery: [images.twoDayKapamaSouthernCampSafariTwo, images.twoDayKapamaSouthernCampSafariThree, images.twoDayKapamaSouthernCampSafariFour, images.twoDayKapamaSouthernCampSafariFive, images.twoDayKapamaSouthernCampSafariSix, images.twoDayKapamaSouthernCampSafariSeven, images.twoDayKapamaSouthernCampSafariEight, images.twoDayKapamaSouthernCampSafariNine, images.twoDayKapamaSouthernCampSafariTen],
    overview: 'A quick 2-day safari at the stunning Kapama Southern Camp.',
    duration: '2 Days',
    whatIsIncluded: [
      'Transfers from JNB airport (road or fly-in option)',
      '1 Night accommodation at Kapama Southern Camp',
      '1 Morning and 1 afternoon game drive',
      'All meals and local drinks are included'
    ],
    whatIsNotIncluded: [
      'Alcoholic beverages, premium drinks',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Arrival and Game Drive', description: 'Guests arrive at Eastgate or O.R. Tambo Airport, transfer to Kapama, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Final Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to the airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 27,500 sharing'
    ]
  },
  { 
    id: 'k24', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2-Day Kapama Homestead Fly-In Tour', 
    description: 'Avoid long road trips with a 2-day fly-in tour to the exclusive Kapama Homestead. Includes flights, all transfers, 1 night accommodation, and private game drives in a reserve-owned vehicle.', 
    priceType: 'per-person',
    basePrice: 29100, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng or Western Cape', 
    pricingTiers: [],
    img: images.twoDayKapamaHomesteadFlyInTourOne,
    gallery: [images.twoDayKapamaHomesteadFlyInTourTwo, images.twoDayKapamaHomesteadFlyInTourThree, images.twoDayKapamaHomesteadFlyInTourFour, images.twoDayKapamaHomesteadFlyInTourFive, images.twoDayKapamaHomesteadFlyInTourSix, images.twoDayKapamaHomesteadFlyInTourSeven, images.twoDayKapamaHomesteadFlyInTourEight, images.twoDayKapamaHomesteadFlyInTourNine],
    overview: 'An exclusive 2-day fly-in package to Kapama Homestead from Cape Town or Johannesburg.',
    duration: '2 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Return airport transfers to Kapama Homestead',
      '1 Night accommodation',
      'Exclusive use of the Homestead and private vehicle/guide',
      'All meals, local drinks, and fees'
    ],
    whatIsNotIncluded: [
      'Gratuities and premium beverages',
      'Visas or costs if applicable'
    ],
    itinerary: [
      { title: 'Day 1: Hoedspruit Airport - Eastgate Airport & Arrival', description: 'Fly in to Hoedspruit Eastgate Airport, transfer to Kapama Homestead, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Early Bush Walk or Game Drive & Farewell', description: 'Early morning activity, breakfast, and return transfer for your flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 58,200 sharing (note: this price may refer to the single price, I used half for a "per-person" basePrice assumption)'
    ]
  },
  { 
    id: 'k25', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '2-Day Kapama Karula Lodge Safari', 
    description: 'Fly into Hoedspruit Eastgate Airport from Johannesburg and be met by your friendly guide for transport to the exclusive Kapama Karula Lodge. Enjoy 2 game drives and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 24700, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayKapamaKarulaLodgeSafariOne,
    gallery: [images.twoDayKapamaKarulaLodgeSafariTwo, images.twoDayKapamaKarulaLodgeSafariThree, images.twoDayKapamaKarulaLodgeSafariFour, images.twoDayKapamaKarulaLodgeSafariFive, images.twoDayKapamaKarulaLodgeSafariSix],
    overview: 'A quick 2-day fly-in luxury safari to Kapama Karula Lodge from the Johannesburg area.',
    duration: '2 Days',
    whatIsIncluded: [
      'Return transfers from JNB airport (road or fly-in option)',
      '1 Night accommodation at Kapama Karula Lodge',
      '1 Morning and 1 afternoon game drive',
      'All meals and local beverages'
    ],
    whatIsNotIncluded: [
      'Personal purchases, premium alcoholic beverages',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Kruger Transfer', description: 'Depart from JNB airport or hotel, transfer to Kapama Karula, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to the airport/JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,700 sharing'
    ]
  },
  { 
    id: 'k26', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '3 Day Budget Dumela Tented Camp Adventure', 
    description: 'A 3-day budget camping adventure in the Kruger National Park area. Stay in comfortable tents at Dumela Tented Camp, including transfers and daily game drives.', 
    priceType: 'per-person',
    basePrice: 7795, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayBudgetDumelaTentedCampAdventureOne,
    gallery: [images.threeDayBudgetDumelaTentedCampAdventureTwo, images.threeDayBudgetDumelaTentedCampAdventureThree, images.threeDayBudgetDumelaTentedCampAdventureFour, images.threeDayBudgetDumelaTentedCampAdventureFive, images.threeDayBudgetDumelaTentedCampAdventureSix, images.threeDayBudgetDumelaTentedCampAdventureSeven, images.threeDayBudgetDumelaTentedCampAdventureEight, images.threeDayBudgetDumelaTentedCampAdventureNine, images.threeDayBudgetDumelaTentedCampAdventureTen, images.threeDayBudgetDumelaTentedCampAdventureEleven, images.threeDayBudgetDumelaTentedCampAdventureTwelve, images.threeDayBudgetDumelaTentedCampAdventureThirteen, images.threeDayBudgetDumelaTentedCampAdventureFourteen],
    overview: 'A great value 3-day camping safari experience from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB)',
      '2 Nights accommodation in a tented camp',
      '2 Sunset drives and 2 full-day Kruger game drives',
      'All meals included'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to and from JNB',
      'Gratuities and drinks not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Afternoon Sunset Drive', description: 'Depart from JNB, transfer to Dumela Tented Camp, and enjoy the sunset game drive in the Blue Canyon Reserve.' },
      { title: 'Day 2: Full Day Kruger National Park', description: 'Full day of open vehicle game drives in the Kruger National Park.' },
      { title: 'Day 3: Departure or optional activities', description: 'Breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,795 sharing'
    ]
  },
  { 
    id: 'k27', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Hazyview)',
    title: '2 Day Radisson Kruger Safari', 
    description: 'An easy 2-day road safari from Johannesburg to the Radisson Kruger Safari Lodge, including road transfers, accommodation, and a sunset and sunrise game drive.', 
    priceType: 'per-person',
    basePrice: 10665, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayRadissonKrugerSafariOne,
    gallery: [images.twoDayRadissonKrugerSafariTwo, images.twoDayRadissonKrugerSafariThree, images.twoDayRadissonKrugerSafariFour, images.twoDayRadissonKrugerSafariFive, images.twoDayRadissonKrugerSafariSix, images.twoDayRadissonKrugerSafariSeven, images.twoDayRadissonKrugerSafariEight, images.twoDayRadissonKrugerSafariNine, images.twoDayRadissonKrugerSafariTen, images.twoDayRadissonKrugerSafariEleven, images.twoDayRadissonKrugerSafariTwelve, images.twoDayRadissonKrugerSafariThirteen],
    overview: 'A 2-day road trip adventure to the luxurious Radisson Kruger Safari Lodge.',
    duration: '2 Days',
    whatIsIncluded: [
      'Pickup from O.R. Tambo International Airport (JNB) or hotel',
      'Return road transfers to Radisson Lodge',
      '1 Night accommodation in a Standard Room',
      '1 Sunset drive and 1 sunrise game drive',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages (optional)',
      'Additional safaris'
    ],
    itinerary: [
      { title: 'Day 1: Radisson Safari Hotel Arrival & Sunset Game Drive', description: 'Depart JNB, transfer to Radisson Lodge, check in, lunch, and afternoon game drive.' },
      { title: 'Day 2: Kruger National Park Safari & Farewell', description: 'Early morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,665 sharing'
    ]
  },
  { 
    id: 'k28', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Elephant Plains Game Lodge Safari', 
    description: 'A 3-day luxury safari to Elephant Plains Game Lodge in the Sabi Sands. Includes flights, all transfers, 2 game drives daily, and exceptional accommodation.', 
    priceType: 'per-person',
    basePrice: 24090, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayElephantPlainsGameLodgeSafariOne,
    gallery: [images.threeDayElephantPlainsGameLodgeSafariTwo, images.threeDayElephantPlainsGameLodgeSafariThree, images.threeDayElephantPlainsGameLodgeSafariFour, images.threeDayElephantPlainsGameLodgeSafariFive, images.threeDayElephantPlainsGameLodgeSafariSix, images.threeDayElephantPlainsGameLodgeSafariSeven, images.threeDayElephantPlainsGameLodgeSafariEight, images.threeDayElephantPlainsGameLodgeSafariNine, images.threeDayElephantPlainsGameLodgeSafariTen, images.threeDayElephantPlainsGameLodgeSafariEleven, images.threeDayElephantPlainsGameLodgeSafariTwelve, images.threeDayElephantPlainsGameLodgeSafariThirteen, images.threeDayElephantPlainsGameLodgeSafariFourteen],
    overview: 'An unforgettable 3-day luxury safari to the private Sabi Sands Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Flights from Johannesburg (JNB) or road transfers',
      'Return transfers from airport to the lodge',
      '2 Nights accommodation at Elephant Plains Game Lodge',
      '2 Game drives daily',
      'All meals and drinks included'
    ],
    whatIsNotIncluded: [
      'Shop purchases and laundry',
      'Premium drinks'
    ],
    itinerary: [
      { title: 'Day 1: Arrival - Elephant Plains Game Lodge', description: 'Depart JNB, transfer to the lodge, enjoy lunch, and the afternoon game drive.' },
      { title: 'Day 2: Full Day Safari', description: 'Morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Departure', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,090 sharing'
    ]
  },
  { 
    id: 'k29', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '3 Day African Rock Lodge Safari In Kruger National Park', 
    description: 'A 3-day luxury journey into the heart of the African wilderness at African Rock Lodge. Includes all transfers, 3-hour private game drives, gourmet dining, and luxury accommodation.', 
    priceType: 'per-person',
    basePrice: 10450, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayAfricanRockLodgeSafariInKrugerNationalParkOne,
    gallery: [images.threeDayAfricanRockLodgeSafariInKrugerNationalParkTwo, images.threeDayAfricanRockLodgeSafariInKrugerNationalParkThree, images.threeDayAfricanRockLodgeSafariInKrugerNationalParkFour, images.threeDayAfricanRockLodgeSafariInKrugerNationalParkFive, images.threeDayAfricanRockLodgeSafariInKrugerNationalParkSix, images.threeDayAfricanRockLodgeSafariInKrugerNationalParkSeven],
    overview: 'A comfortable 3-day all-inclusive safari at the tranquil African Rock Lodge.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from JNB or flights to/from O.R. Tambo Airport (JNB)',
      '2 Nights accommodation at African Rock Lodge',
      'Exclusive 3-hour private game drive with sundowners',
      'All meals and drinks included',
      '1 Full-day Kruger safari drive'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages (optional on Day 2)',
      'Extra 3-hour sunrise drive (optional)'
    ],
    itinerary: [
      { title: 'Day 1: Into the Wilderness', description: 'Depart from JNB, transfer to African Rock Lodge, check in, and enjoy a private game drive.' },
      { title: 'Day 2: Full-Day Kruger Safari', description: 'A full-day safari excursion through Kruger National Park.' },
      { title: 'Day 3: Farewell to the Bush', description: 'Breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,450 sharing'
    ]
  },
  { 
    id: 'k30', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Chisomo Camp Safari', 
    description: 'A 3-day tented camp safari to Chisomo Camp, overlooking the Makhutsi River in the Kapama Private Game Reserve. Includes return transport from JNB, 2 game drives daily, and all meals.', 
    priceType: 'per-person',
    basePrice: 10500, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayChisomoCampSafariOne,
    gallery: [images.threeDayChisomoCampSafariTwo, images.threeDayChisomoCampSafariThree, images.threeDayChisomoCampSafariFour, images.threeDayChisomoCampSafariFive, images.threeDayChisomoCampSafariSix, images.threeDayChisomoCampSafariSeven, images.threeDayChisomoCampSafariEight, images.threeDayChisomoCampSafariNine, images.threeDayChisomoCampSafariTen, images.threeDayChisomoCampSafariEleven, images.threeDayChisomoCampSafariTwelve],
    overview: 'A comfortable 3-day safari at Chisomo Tented Camp in Kapama Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '2 Nights accommodation at Chisomo Tented Camp',
      '2 Morning and 2 afternoon game drives in open safari vehicles',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Purchases of a personal nature, spa treatments, and laundry'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Afternoon Game Drive', description: 'Depart from JNB, transfer to Chisomo Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Safari', description: 'Morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,500 sharing (based on the provided single/sharing prices, the base price is averaged)'
    ]
  },
  { 
    id: 'k31', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Karula Lodge Safari', 
    description: 'A 3-day luxury safari to the exclusive Kapama Karula Lodge. Includes all-inclusive luxury accommodation, two game drives daily, and all meals and selected drinks. Road or fly-in options available.', 
    priceType: 'per-person',
    basePrice: 34200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKapamaKarulaLodgeSafariOne,
    gallery: [images.threeDayKapamaKarulaLodgeSafariTwo, images.threeDayKapamaKarulaLodgeSafariThree, images.threeDayKapamaKarulaLodgeSafariFour, images.threeDayKapamaKarulaLodgeSafariFive, images.threeDayKapamaKarulaLodgeSafariSix],
    overview: 'A 3-day luxury safari to Kapama Karula Lodge from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Transfers to/from Kapama Karula Lodge from O.R. Tambo Airport (JNB)',
      '2 Nights luxury accommodation',
      '4 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Flights (if choosing road transfer)',
      'Laundry and premium beverages',
      'Activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at O.R. Tambo Airport (JNB) or your hotel, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Private Game Reserve', description: 'Early morning game drive, breakfast, and afternoon game drive.' },
      { title: 'Day 3: Kapama Private Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 68,400 sharing (Note: base price is half of the sharing price)'
    ]
  },
  { 
    id: 'k32', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Mluwati)',
    title: '3 Day Hoyo Hoyo Lodge Safari', 
    description: 'A 3-day safari at the private Hoyo Hoyo Safari Lodge in the Mluwati Concession. Includes transfers from JNB, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 19845, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayHoyoHoyoLodgeSafariOne,
    gallery: [images.threeDayHoyoHoyoLodgeSafariTwo, images.threeDayHoyoHoyoLodgeSafariThree, images.threeDayHoyoHoyoLodgeSafariFour, images.threeDayHoyoHoyoLodgeSafariFive, images.threeDayHoyoHoyoLodgeSafariSix, images.threeDayHoyoHoyoLodgeSafariSeven, images.threeDayHoyoHoyoLodgeSafariEight, images.threeDayHoyoHoyoLodgeSafariNine, images.threeDayHoyoHoyoLodgeSafariTen, images.threeDayHoyoHoyoLodgeSafariEleven, images.threeDayHoyoHoyoLodgeSafariTwelve, images.threeDayHoyoHoyoLodgeSafariThirteen],
    overview: 'A 3-day private concession safari experience near Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation in a private suite',
      '4 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to Hoyo Hoyo Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Mluwati Concession Kruger Park', description: 'Morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 3: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,845 sharing'
    ]
  },
  { 
    id: 'k33', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Homestead Tour', 
    description: 'An exclusive 3-day luxury road safari to the private Kapama Homestead. Includes 2 nights accommodation, private game drives, guided bush walks, and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 99400, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKapamaHomesteadTourOne,
    gallery: [images.threeDayKapamaHomesteadTourTwo, images.threeDayKapamaHomesteadTourThree, images.threeDayKapamaHomesteadTourFour, images.threeDayKapamaHomesteadTourFive, images.threeDayKapamaHomesteadTourSix, images.threeDayKapamaHomesteadTourSeven, images.threeDayKapamaHomesteadTourEight],
    overview: 'The ultimate exclusive 3-day luxury safari experience at Kapama Homestead, booked privately for up to 6 people.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return private transfers from O.R. Tambo Airport (JNB)',
      '2 Nights accommodation (Exclusive use of the Homestead)',
      'Private game drives with guide and assistant guide',
      'All meals, soft drinks, and local alcoholic drinks'
    ],
    whatIsNotIncluded: [
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Homestead Arrival', description: 'Private transfer from JNB, arrival at Kapama Homestead, and afternoon game drive.' },
      { title: 'Day 2: Open Vehicle Game Drive Safari', description: 'Early morning game drive, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Early Bush Walk or Game Drive & Farewell', description: 'Early morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 198,000 sharing (Note: base price is half of the sharing price)'
    ]
  },
  { 
    id: 'k34', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Tented Camp)',
    title: '3 Day Greenfire Lodge Safari', 
    description: 'A 3-day eco-friendly safari at Greenfire Game Lodge. Includes return road transfers from JNB, 2 nights accommodation, and 4 x 4-hour game drives.', 
    priceType: 'per-person',
    basePrice: 14900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayGreenfireLodgeSafariOne,
    gallery: [images.threeDayGreenfireLodgeSafariTwo, images.threeDayGreenfireLodgeSafariThree, images.threeDayGreenfireLodgeSafariFour, images.threeDayGreenfireLodgeSafariFive, images.threeDayGreenfireLodgeSafariSix],
    overview: 'An affordable 3-day safari at a romantically revamped lodge near Kruger.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation at Greenfire Game Lodge',
      '4 x 4-hour game drives in an open safari vehicle',
      'All meals (breakfast, lunch, dinner)'
    ],
    whatIsNotIncluded: [
      'Drinks, gratuities',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greenfire Game Lodge', description: 'Depart from JNB, drive to Greenfire Game Lodge, check in, and enjoy a light lunch followed by an afternoon game drive.' },
      { title: 'Day 2: Greater Kruger', description: 'Early morning game drive, breakfast, lunch, and afternoon game drive.' },
      { title: 'Day 3: Greenfire Lodge - Johannesburg', description: 'Morning game drive, breakfast, lunch, and return drive to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,900 sharing'
    ]
  },
  { 
    id: 'k35', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Buffalo Camp Fly-In From Cape Town', 
    description: 'A 3-day luxury fly-in safari to the ultra-luxurious Kapama Buffalo Camp from Cape Town. Includes return flights, airport transfers, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 38800, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaBuffaloCampFlyInFromCapeTownOne,
    gallery: [images.threeDayKapamaBuffaloCampFlyInFromCapeTownTwo, images.threeDayKapamaBuffaloCampFlyInFromCapeTownThree, images.threeDayKapamaBuffaloCampFlyInFromCapeTownFour, images.threeDayKapamaBuffaloCampFlyInFromCapeTownFive, images.threeDayKapamaBuffaloCampFlyInFromCapeTownSix, images.threeDayKapamaBuffaloCampFlyInFromCapeTownSeven, images.threeDayKapamaBuffaloCampFlyInFromCapeTownEight, images.threeDayKapamaBuffaloCampFlyInFromCapeTownNine, images.threeDayKapamaBuffaloCampFlyInFromCapeTownTen],
    overview: 'An ultra-luxury 3-day fly-in safari from Cape Town to Kapama Buffalo Camp.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Buffalo Camp',
      '2 Nights luxury accommodation',
      '4 x 3-hour game drives',
      'All meals, soft drinks, and local alcoholic beverages'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,800 sharing'
    ]
  },
  { 
    id: 'k36', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Hamiltons Luxury Tented Camp Safari', 
    description: 'A 3-day luxury tented safari at Hamiltons Tented Camp in the Imbali Concession, Greater Kruger National Park. Includes return transfers from JNB, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 20735, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayHamiltonsLuxuryTentedCampSafariOne,
    gallery: [images.threeDayHamiltonsLuxuryTentedCampSafariTwo, images.threeDayHamiltonsLuxuryTentedCampSafariThree, images.threeDayHamiltonsLuxuryTentedCampSafariFour, images.threeDayHamiltonsLuxuryTentedCampSafariFive, images.threeDayHamiltonsLuxuryTentedCampSafariSix, images.threeDayHamiltonsLuxuryTentedCampSafariSeven, images.threeDayHamiltonsLuxuryTentedCampSafariEight, images.threeDayHamiltonsLuxuryTentedCampSafariNine, images.threeDayHamiltonsLuxuryTentedCampSafariTen],
    overview: 'A 3-day classic luxury tented camp safari from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation at Hamiltons Tented Camp',
      '2 Game drives per day (4 total)',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Personal expenses, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Hamilton Tented Camp Arrival', description: 'Depart JNB, transfer to Hamiltons Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger Safari Day', description: 'Morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,735 sharing'
    ]
  },
  { 
    id: 'k37', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Game Drive Package in Kruger National Park', 
    description: 'A 3-day game drive focused package. Includes pickup, accommodation near Kruger, and 3 days of game drives in the national park and a private reserve.', 
    priceType: 'per-person',
    basePrice: 4750, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview or Hoedspruit area)', 
    pricingTiers: [],
    img: images.threeDayGameDrivePackageInKrugerNationalParkOne,
    gallery: [images.threeDayGameDrivePackageInKrugerNationalParkTwo, images.threeDayGameDrivePackageInKrugerNationalParkThree, images.threeDayGameDrivePackageInKrugerNationalParkFour, images.threeDayGameDrivePackageInKrugerNationalParkFive, images.threeDayGameDrivePackageInKrugerNationalParkSix, images.threeDayGameDrivePackageInKrugerNationalParkSeven, images.threeDayGameDrivePackageInKrugerNationalParkEight],
    overview: 'An affordable 3-day package focused purely on game viewing.',
    duration: '3 Days',
    whatIsIncluded: [
      'Pickup anywhere in Hoedspruit or Hazyview area',
      '2 Nights accommodation in a comfortable lodge',
      'Full day Kruger National Park safari',
      'Morning and sunset safari in a private game reserve',
      'All entrance fees and transfers'
    ],
    whatIsNotIncluded: [
      'Meals and beverages',
      'Accommodation'
    ],
    itinerary: [
      { title: 'Day 1: Sunset Private Reserve Game Drive', description: 'Arrive at the lodge, check in, and depart for a sunset game drive in a private reserve.' },
      { title: 'Day 2: Full Day Kruger National Park Safari', description: 'Full day game drive excursion into the Kruger National Park.' },
      { title: 'Day 3: Early Private Reserve Game Drive', description: 'Morning game drive in the private reserve, followed by departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 4,750 sharing'
    ]
  },
  { 
    id: 'k38', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Buffalo Camp Safari', 
    description: 'A 3-day ultra-luxury road safari to Kapama Buffalo Camp. Includes return transfers from JNB, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 37400, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKapamaBuffaloCampSafariOne,
    gallery: [images.threeDayKapamaBuffaloCampSafariTwo, images.threeDayKapamaBuffaloCampSafariThree, images.threeDayKapamaBuffaloCampSafariFour, images.threeDayKapamaBuffaloCampSafariFive, images.threeDayKapamaBuffaloCampSafariSix, images.threeDayKapamaBuffaloCampSafariSeven, images.threeDayKapamaBuffaloCampSafariEight, images.threeDayKapamaBuffaloCampSafariNine, images.threeDayKapamaBuffaloCampSafariTen, images.threeDayKapamaBuffaloCampSafariEleven, images.threeDayKapamaBuffaloCampSafariTwelve],
    overview: 'A 3-day road safari to the ultra-luxurious Kapama Buffalo Camp.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury tented accommodation',
      '4 x 3-hour game drives',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Flights, premium drinks',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Depart from JNB, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Private Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Private Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 37,400 sharing'
    ]
  },
  { 
    id: 'k39', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Buffalo Camp Fly-In from Johannesburg', 
    description: 'A 3-day luxury fly-in safari to the ultra-luxurious Kapama Buffalo Camp from Johannesburg. Includes return flights, airport transfers, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 43900, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaBuffaloCampFlyInFromJohannesburgOne,
    gallery: [images.threeDayKapamaBuffaloCampFlyInFromJohannesburgTwo, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgThree, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgFour, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgFive, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgSix, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgSeven, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgEight, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgNine, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgTen, images.threeDayKapamaBuffaloCampFlyInFromJohannesburgEleven],
    overview: 'An ultra-luxury 3-day fly-in safari from Johannesburg to Kapama Buffalo Camp.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Buffalo Camp',
      '2 Nights luxury tented accommodation',
      '4 x 3-hour game drives',
      'All meals, soft drinks, and local alcoholic beverages'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 43,900 sharing'
    ]
  },
  { 
    id: 'k40', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati)',
    title: '3 Day Imbali Lodge Safari Tour', 
    description: 'A 3-day luxury safari at Imbali Lodge in the Mluwati Concession, Greater Kruger National Park. Includes transfers from JNB, 2 nights luxury accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 22425, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayImbaliLodgeSafariTourOne,
    gallery: [images.threeDayImbaliLodgeSafariTourTwo, images.threeDayImbaliLodgeSafariTourThree, images.threeDayImbaliLodgeSafariTourFour, images.threeDayImbaliLodgeSafariTourFive, images.threeDayImbaliLodgeSafariTourSix],
    overview: 'A 3-day luxury safari at Imbali Lodge in the Mluwati Concession.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation',
      '2 Game drives per day (4 total)',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Purchases of a personal nature, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Imbali Lodge - Kruger National Park', description: 'Depart JNB, transfer to Imbali Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Mluwati Concession Kruger Park', description: 'Morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 3: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,425 sharing'
    ]
  },
  { 
    id: 'k41', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Southern Camp Safari', 
    description: 'A 3-day luxury road safari to Kapama Southern Camp, offering inclusive accommodation and 4 game drives in the Kapama Reserve near Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 28700, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKapamaSouthernCampSafariOne,
    gallery: [images.threeDayKapamaSouthernCampSafariTwo, images.threeDayKapamaSouthernCampSafariThree, images.threeDayKapamaSouthernCampSafariFour, images.threeDayKapamaSouthernCampSafariFive, images.threeDayKapamaSouthernCampSafariSix, images.threeDayKapamaSouthernCampSafariSeven, images.threeDayKapamaSouthernCampSafariEight, images.threeDayKapamaSouthernCampSafariNine, images.threeDayKapamaSouthernCampSafariTen],
    overview: 'A 3-day luxury safari at Kapama Southern Camp, departing from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation',
      '4 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Flights (if choosing road transfer)',
      'Activities not specified in the itinerary',
      'Premium drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at JNB or your hotel, transfer to Kapama Southern Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Private Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 57,400 sharing (Note: base price is half of the sharing price)'
    ]
  },
  { 
    id: 'k42', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama River Lodge Safari', 
    description: 'A 3-day luxury road safari to Kapama River Lodge, featuring all-inclusive accommodation, four game drives, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 26400, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKapamaRiverLodgeSafariOne,
    gallery: [images.threeDayKapamaRiverLodgeSafariTwo, images.threeDayKapamaRiverLodgeSafariThree, images.threeDayKapamaRiverLodgeSafariFour, images.threeDayKapamaRiverLodgeSafariFive, images.threeDayKapamaRiverLodgeSafariSix, images.threeDayKapamaRiverLodgeSafariSeven, images.threeDayKapamaRiverLodgeSafariEight, images.threeDayKapamaRiverLodgeSafariNine, images.threeDayKapamaRiverLodgeSafariTen],
    overview: 'A 3-day luxury safari at Kapama River Lodge, departing from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation',
      '4 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium beverages',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at JNB or your hotel, transfer to Kapama River Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Private Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 33,400 sharing (Note: base price is derived from a similar road safari rate)'
    ]
  },
  { 
    id: 'k43', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama River Lodge Fly-In Safari From Cape Town', 
    description: 'A 3-day fly-in safari from Cape Town to Kapama River Lodge. Includes flights, airport transfers, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 38700, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownOne,
    gallery: [images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownTwo, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownThree, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownFour, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownFive, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownSix, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownSeven, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownEight, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownNine, images.threeDayKapamaRiverLodgeFlyInSafariFromCapeTownTen],
    overview: 'A 3-day luxury fly-in safari to Kapama River Lodge from Cape Town.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama River Lodge',
      '2 Nights luxury accommodation',
      '2 Morning game drives and 2 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Family Suite excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama River Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,700 sharing'
    ]
  },
  { 
    id: 'k44', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Karula Luxury Fly-In Safari From Cape Town', 
    description: 'A 3-day luxury fly-in safari from Cape Town to Kapama Karula Lodge. Includes flights, airport transfers, 2 nights luxury accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 37500, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownOne,
    gallery: [images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTwo, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownThree, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFour, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFive, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSix, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSeven, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownEight, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownNine, images.threeDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTen],
    overview: 'A 3-day luxury fly-in safari to Kapama Karula Lodge from Cape Town.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Karula Lodge',
      '2 Nights luxury accommodation',
      '4 x game drives and bush walks',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Any optional activities not in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 37,500 sharing'
    ]
  },
  { 
    id: 'k45', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Southern Camp Fly-In Safari from Cape Town', 
    description: 'A 3-day luxury fly-in safari from Cape Town to Kapama Southern Camp. Includes flights, airport transfers, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 38700, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownOne,
    gallery: [images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownTwo, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownThree, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownFour, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownFive, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownSix, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownSeven, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownEight, images.threeDayKapamaSouthernCampFlyInSafariFromCapeTownNine],
    overview: 'A 3-day luxury fly-in safari to Kapama Southern Camp from Cape Town.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Southern Camp',
      '2 Nights luxury accommodation',
      '2 Morning game drives and 2 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama Southern Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,700 sharing'
    ]
  },
  { 
    id: 'k46', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Karula Luxury Fly-In Safari From Johannesburg', 
    description: 'A 3-day luxury fly-in safari from Johannesburg to Kapama Karula Lodge. Includes flights, airport transfers, 2 nights luxury accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 28850, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgOne,
    gallery: [images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTwo, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgThree, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFour, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFive, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSix, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSeven, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgEight, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgNine, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTen, images.threeDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgEleven],
    overview: 'A 3-day luxury fly-in safari to Kapama Karula Lodge from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Karula Lodge',
      '2 Nights luxury accommodation',
      '4 x game drives and bush walks',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,850 sharing'
    ]
  },
  { 
    id: 'k47', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama River Lodge Fly-In Safari From Johannesburg', 
    description: 'A 3-day fly-in safari from Johannesburg to Kapama River Lodge. Includes flights, airport transfers, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 23200, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgOne,
    gallery: [images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgTwo, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgThree, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgFour, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgFive, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgSix, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgSeven, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgEight, images.threeDayKapamaRiverLodgeFlyInSafariFromJohannesburgNine],
    overview: 'A 3-day luxury fly-in safari to Kapama River Lodge from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama River Lodge',
      '2 Nights luxury accommodation',
      '2 Morning game drives and 2 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama River Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 23,200 sharing'
    ]
  },
  { 
    id: 'k48', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Kapama Southern Camp Fly-In Safari from Johannesburg', 
    description: 'A 3-day fly-in safari from Johannesburg to Kapama Southern Camp. Includes flights, airport transfers, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 33200, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgOne,
    gallery: [images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgTwo, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgThree, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgFour, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgFive, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgSix, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgSeven, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgEight, images.threeDayKapamaSouthernCampFlyInSafariFromJohannesburgNine],
    overview: 'A 3-day luxury fly-in safari to Kapama Southern Camp from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Southern Camp',
      '2 Nights luxury accommodation',
      '2 Morning game drives and 2 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Southern Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 33,200 sharing'
    ]
  },
  { 
    id: 'k49', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Khoka Moya Private Game Reserve',
    title: '3 Day Khoka Moya Luxury Safari', 
    description: 'A 3-day luxury safari to Khoka Moya Tented Camp. Includes return transport from JNB, 2 nights luxury tented accommodation, 4 game drives, and all meals.', 
    priceType: 'per-person',
    basePrice: 20160, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKhokaMoyaLuxurySafariOne,
    gallery: [images.threeDayKhokaMoyaLuxurySafariTwo, images.threeDayKhokaMoyaLuxurySafariThree, images.threeDayKhokaMoyaLuxurySafariFour, images.threeDayKhokaMoyaLuxurySafariFive, images.threeDayKhokaMoyaLuxurySafariSix, images.threeDayKhokaMoyaLuxurySafariSeven, images.threeDayKhokaMoyaLuxurySafariEight, images.threeDayKhokaMoyaLuxurySafariNine, images.threeDayKhokaMoyaLuxurySafariTen],
    overview: 'A 3-day luxury tented camp safari from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or hotel',
      '2 Nights luxury accommodation at Khoka Moya Tented Camp',
      '2 Morning game drives and 2 afternoon game drives',
      'All meals and local drinks'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, personal purchases',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Khoka Moya Camp', description: 'Depart JNB, transfer to Khoka Moya, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Khoka Moya Camp', description: 'Morning game drive, bush walk (optional), and afternoon game drive.' },
      { title: 'Day 3: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,160 sharing'
    ]
  },
  { 
    id: 'k50', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Karongwe Private Game Reserve',
    title: '3 Day Karongwe River Lodge Luxury Safari', 
    description: 'A 3-day luxury safari to Karongwe River Lodge in the Karongwe Private Game Reserve. Includes return transfers from JNB, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 22315, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKarongweRiverLodgeLuxurySafariOne,
    gallery: [images.threeDayKarongweRiverLodgeLuxurySafariTwo, images.threeDayKarongweRiverLodgeLuxurySafariThree, images.threeDayKarongweRiverLodgeLuxurySafariFour, images.threeDayKarongweRiverLodgeLuxurySafariFive, images.threeDayKarongweRiverLodgeLuxurySafariSix, images.threeDayKarongweRiverLodgeLuxurySafariSeven, images.threeDayKarongweRiverLodgeLuxurySafariEight, images.threeDayKarongweRiverLodgeLuxurySafariNine, images.threeDayKarongweRiverLodgeLuxurySafariTen, images.threeDayKarongweRiverLodgeLuxurySafariEleven],
    overview: 'A 3-day luxury safari at the Karongwe River Lodge, departing from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation',
      '4 x 3-hour game drives',
      'All meals, soft drinks, house wine, and local beer'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Karongwe River Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Game Drive', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Game Drive & Departure', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,315 sharing'
    ]
  },
  { 
    id: 'k51', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Kruger Park Classic Safari Tour', 
    description: 'A 3-day classic safari from Johannesburg, featuring accommodation in a Classic Chalet and full-day open vehicle game drives in the Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 7316, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerParkClassicSafariTourOne,
    gallery: [images.threeDayKrugerParkClassicSafariTourTwo, images.threeDayKrugerParkClassicSafariTourThree, images.threeDayKrugerParkClassicSafariTourFour, images.threeDayKrugerParkClassicSafariTourFive],
    overview: 'A classic 3-day safari experience in Kruger National Park, perfect for first-time visitors.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or hotel',
      '2 Nights accommodation in a Classic Chalet',
      'Full-day open vehicle safari drive (2 total)',
      '1 Sunset game drive',
      'All meals (breakfasts and dinners)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches, alcoholic and non-alcoholic drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to the Kruger National Park rest camp, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Early morning wake up, full-day open vehicle game drive.' },
      { title: 'Day 3: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,316 sharing'
    ]
  },
  { 
    id: 'k52', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Skukuza)',
    title: '3 Day Kruger Shalati - the Train on the Bridge Tour', 
    description: 'A unique 3-day luxury experience on the stationary train on the Selati Bridge over the Sabie River. Includes luxury accommodation, all-inclusive food and drinks, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 20895, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerShalatiTheTrainOnTheBridgeTourOne,
    gallery: [images.threeDayKrugerShalatiTheTrainOnTheBridgeTourTwo, images.threeDayKrugerShalatiTheTrainOnTheBridgeTourThree, images.threeDayKrugerShalatiTheTrainOnTheBridgeTourFour, images.threeDayKrugerShalatiTheTrainOnTheBridgeTourFive, images.threeDayKrugerShalatiTheTrainOnTheBridgeTourSix, images.threeDayKrugerShalatiTheTrainOnTheBridgeTourSeven],
    overview: 'Experience 3 days of luxury aboard a stationary train in the heart of Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers to/from O.R. Tambo International Airport (JNB)',
      '2 Nights luxury accommodation in a Carriage Suite',
      '2 Morning and 2 afternoon game drives',
      'All meals, soft drinks, local beers, and spirits'
    ],
    whatIsNotIncluded: [
      'Premium beverages, spa treatments',
      'Personal purchases, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure and The Train on the Bridge', description: 'Depart from JNB, arrive at Skukuza Airport, transfer to Shalati, check-in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger - The Train on the Bridge', description: 'Morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Departure', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,895 sharing'
    ]
  },
  { 
    id: 'k53', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '3 Day Kruger Timbavati Budget Safari', 
    description: 'A 3-day budget safari adventure from Johannesburg to the Timbavati area. Includes 2 nights accommodation, 1 full-day open vehicle safari drive, and 1 optional guided morning safari drive.', 
    priceType: 'per-person',
    basePrice: 9985, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerTimbavatiBudgetSafariOne,
    gallery: [images.threeDayKrugerTimbavatiBudgetSafariTwo, images.threeDayKrugerTimbavatiBudgetSafariThree, images.threeDayKrugerTimbavatiBudgetSafariFour, images.threeDayKrugerTimbavatiBudgetSafariFive, images.threeDayKrugerTimbavatiBudgetSafariSix, images.threeDayKrugerTimbavatiBudgetSafariSeven, images.threeDayKrugerTimbavatiBudgetSafariEight, images.threeDayKrugerTimbavatiBudgetSafariNine, images.threeDayKrugerTimbavatiBudgetSafariTen],
    overview: 'An affordable 3-day safari near the Timbavati Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation (lodge/tented camp at lodge)',
      '1x full-day open vehicle safari drive',
      'Breakfasts and dinners (not lunch)',
      'Park entrance and conservation fees (at cost)'
    ],
    whatIsNotIncluded: [
      'All lunch meals',
      'All beverages'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Timbavati', description: 'Depart from JNB, transfer to Timbavati area, check-in, and enjoy dinner at the Lodge.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle safari drive into the Kruger National Park.' },
      { title: 'Day 3: Kruger Park - Johannesburg', description: 'Optional morning activity, breakfast, and return shuttle to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 9,985 sharing'
    ]
  },
  { 
    id: 'k54', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '3 Day Kruger Glamping Budget Adventure', 
    description: 'A 3-day glamping budget adventure from Johannesburg. Includes 2 nights tented accommodation, 1 full-day Kruger safari, and 2 afternoon sunset drives in a private reserve.', 
    priceType: 'per-person',
    basePrice: 7495, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerGlampingBudgetAdventureOne,
    gallery: [images.threeDayKrugerGlampingBudgetAdventureTwo, images.threeDayKrugerGlampingBudgetAdventureThree, images.threeDayKrugerGlampingBudgetAdventureFour, images.threeDayKrugerGlampingBudgetAdventureFive, images.threeDayKrugerGlampingBudgetAdventureSix, images.threeDayKrugerGlampingBudgetAdventureSeven, images.threeDayKrugerGlampingBudgetAdventureEight],
    overview: 'An affordable 3-day glamping safari experience near the Kruger Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '2 Nights accommodation in a permanent tented camp',
      '1 Full-day open vehicle safari drive in Kruger National Park',
      '2 Afternoon sunset drives in a private reserve'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Gratuities and personal nature items'
    ],
    itinerary: [
      { title: 'Day 1: Afternoon Sunset Drive', description: 'Depart from JNB, transfer to Sepedi Tented Camp, and enjoy the afternoon sunset drive.' },
      { title: 'Day 2: Full Day Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Blue Canyon Private Game Reserve', description: 'Morning activity and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,495 sharing'
    ]
  },
  { 
    id: 'k56', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '3 Day Kruger Budget Tented Safari', 
    description: 'A 3-day budget safari from Johannesburg, featuring 2 nights tented accommodation in the Motlala Reserve, a full-day Kruger safari, and sunset game drives.', 
    priceType: 'per-person',
    basePrice: 5895, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerBudgetTentedSafariOne,
    gallery: [images.threeDayKrugerBudgetTentedSafariTwo, images.threeDayKrugerBudgetTentedSafariThree, images.threeDayKrugerBudgetTentedSafariFour, images.threeDayKrugerBudgetTentedSafariFive, images.threeDayKrugerBudgetTentedSafariSix, images.threeDayKrugerBudgetTentedSafariSeven, images.threeDayKrugerBudgetTentedSafariEight],
    overview: 'A comfortable 3-day budget safari with tented accommodation near Kruger Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or hotel',
      '2 Nights accommodation in an en-suite tented camp',
      '1 Full-day open vehicle safari drive in Kruger National Park',
      'Sunset game drive in Motlala Reserve',
      'All meals (breakfasts and dinners)'
    ],
    whatIsNotIncluded: [
      'Lunches, alcoholic and non-alcoholic drinks',
      'Guided bush walks (optional)'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger Park (5 hours / 385 kilometres)', description: 'Depart from JNB, transfer to Motlala Game Reserve, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Kruger National Park - Johannesburg', description: 'Morning activity and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 5,895 sharing'
    ]
  },
  { 
    id: 'k57', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Hazyview)',
    title: '3 Day Kruger Adventure Safari', 
    description: 'A 3-day safari from Johannesburg, including 2 nights accommodation in Hazyview, full-day open vehicle safari drive in Kruger National Park, and transfers.', 
    priceType: 'per-person',
    basePrice: 8100, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerAdventureSafariOne,
    gallery: [images.threeDayKrugerAdventureSafariTwo, images.threeDayKrugerAdventureSafariThree, images.threeDayKrugerAdventureSafariFour, images.threeDayKrugerAdventureSafariFive, images.threeDayKrugerAdventureSafariSix, images.threeDayKrugerAdventureSafariSeven, images.threeDayKrugerAdventureSafariEight, images.threeDayKrugerAdventureSafariNine, images.threeDayKrugerAdventureSafariTen, images.threeDayKrugerAdventureSafariEleven],
    overview: 'A comfortable 3-day safari adventure near the Kruger Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or hotel',
      '2 Nights accommodation in Hazyview',
      'Full-day open vehicle safari drive',
      'Breakfast and Dinner daily'
    ],
    whatIsNotIncluded: [
      'Lunch meals',
      'All transport to and from the lodge'
    ],
    itinerary: [
      { title: 'Day 1: Hazyview', description: 'Depart JNB, transfer to Hazyview, check in, and enjoy dinner at the Lodge.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Kruger National Park', description: 'Early morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 8,100 sharing'
    ]
  },
  { 
    id: 'k58', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Kruger Classic Camping Safari Tour', 
    description: 'A 3-day budget camping safari to Kruger National Park. Guests stay in spacious 2-man Meru safari tents, including 2 full-day game drives and all park fees.', 
    priceType: 'per-person',
    basePrice: 6890, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerClassicCampingSafariTourOne,
    gallery: [images.threeDayKrugerClassicCampingSafariTourTwo, images.threeDayKrugerClassicCampingSafariTourThree, images.threeDayKrugerClassicCampingSafariTourFour, images.threeDayKrugerClassicCampingSafariTourFive, images.threeDayKrugerClassicCampingSafariTourSix, images.threeDayKrugerClassicCampingSafariTourSeven],
    overview: 'A budget-friendly 3-day camping adventure in the heart of Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB)',
      '2 Nights accommodation in a 2-man safari tent',
      'Full-day open vehicle safari drive (2 total)',
      'All meals and snacks (except lunch on day 2)',
      'Park entrance fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to the tented camp, enjoy lunch, and the afternoon game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Kruger National Park - Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 6,890 sharing'
    ]
  },
  { 
    id: 'k59', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Balule Reserve)',
    title: '3 Day Kruger Tremisana Lodge Safari', 
    description: 'A 3-day safari with sunset, sunrise, and full-day game drives. Accommodation is in a thatched chalet at Tremisana Game Lodge near the Balule Reserve.', 
    priceType: 'per-person',
    basePrice: 14495, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayKrugerTremisanaLodgeSafariOne,
    gallery: [images.threeDayKrugerTremisanaLodgeSafariTwo, images.threeDayKrugerTremisanaLodgeSafariThree, images.threeDayKrugerTremisanaLodgeSafariFour, images.threeDayKrugerTremisanaLodgeSafariFive],
    overview: 'A popular 3-day safari package featuring various game drive experiences near Kruger.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation in a thatched chalet',
      'Sunset/sunrise game drives and a full-day Kruger safari',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Drinks or items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger (Approx 450 Kilometres)', description: 'Depart JNB, transfer to Tremisana Game Lodge, and enjoy the sunset game drive and bush braai.' },
      { title: 'Day 2: Kruger National Park', description: 'Early morning bush walk, full-day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,495 sharing'
    ]
  },
  { 
    id: 'k60', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Balule Game Reserve',
    title: '3 Day Little Africa Safari', 
    description: 'A luxurious 3-day safari at Little Africa Safari Lodge. Includes private game drives, all-inclusive luxury accommodation, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 14225, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayLittleAfricaSafariOne,
    gallery: [images.threeDayLittleAfricaSafariTwo, images.threeDayLittleAfricaSafariThree, images.threeDayLittleAfricaSafariFour, images.threeDayLittleAfricaSafariFive, images.threeDayLittleAfricaSafariSix, images.threeDayLittleAfricaSafariSeven, images.threeDayLittleAfricaSafariEight, images.threeDayLittleAfricaSafariNine, images.threeDayLittleAfricaSafariTen, images.threeDayLittleAfricaSafariEleven, images.threeDayLittleAfricaSafariTwelve, images.threeDayLittleAfricaSafariThirteen],
    overview: 'A 3-day luxury safari with private game drives in the Balule Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation',
      '2 x 3-hour sunset drives and 2 x 3-hour sunrise drives with a private guide',
      'All meals and drinks as per itinerary'
    ],
    whatIsNotIncluded: [
      'All transport to and from the lodge',
      'All laundry and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Little Africa Safari Lodge Arrival', description: 'Depart from JNB, transfer to Little Africa Safari Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Little Africa Safari Lodge', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Little Africa Safari Lodge Farewell', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,225 sharing'
    ]
  },
  { 
    id: 'k61', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Londolozi Tree Camp Safari', 
    description: 'A 3-day ultra-luxury safari at the renowned Londolozi Tree Camp in the Sabi Sands. This exclusive, all-inclusive package includes twice-daily game drives and walks with experienced rangers.', 
    priceType: 'per-person',
    basePrice: 96765, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayLondoloziTreeCampSafariOne,
    gallery: [images.threeDayLondoloziTreeCampSafariTwo, images.threeDayLondoloziTreeCampSafariThree, images.threeDayLondoloziTreeCampSafariFour, images.threeDayLondoloziTreeCampSafariFive, images.threeDayLondoloziTreeCampSafariSix, images.threeDayLondoloziTreeCampSafariSeven, images.threeDayLondoloziTreeCampSafariEight, images.threeDayLondoloziTreeCampSafariNine, images.threeDayLondoloziTreeCampSafariTen, images.threeDayLondoloziTreeCampSafariEleven, images.threeDayLondoloziTreeCampSafariTwelve, images.threeDayLondoloziTreeCampSafariThirteen],
    overview: 'An exclusive 3-day luxury fly-in safari to Londolozi Tree Camp from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Flights to and from Londolozi Airstrip',
      '2 Nights luxury accommodation at Londolozi Tree Camp',
      '2 Game drives per day and nature walks',
      'All meals, local drinks, and laundry',
      'Fitness Centre, Yoga class per day'
    ],
    whatIsNotIncluded: [
      'Private transfers',
      'Premium drinks, cellar wines, treatments',
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Londolozi Game Reserve', description: 'Depart from JNB, fly to Londolozi, check-in, lunch, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Safari', description: 'Early morning game drive/walk, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Safari and Return to Johannesburg', description: 'Morning activity, breakfast, and fly back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 96,765 sharing'
    ]
  },
  { 
    id: 'k62', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Luxury Radisson Kruger Safari', 
    description: 'A 3-day luxury road safari to the Radisson Kruger Safari Lodge, featuring all meals, a full-day Kruger safari, and various game drives.', 
    priceType: 'per-person',
    basePrice: 17845, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayLuxuryRadissonKrugerSafariOne,
    gallery: [images.threeDayLuxuryRadissonKrugerSafariTwo, images.threeDayLuxuryRadissonKrugerSafariThree, images.threeDayLuxuryRadissonKrugerSafariFour, images.threeDayLuxuryRadissonKrugerSafariFive, images.threeDayLuxuryRadissonKrugerSafariSix],
    overview: 'A 3-day luxury road trip from Johannesburg to the Radisson Kruger Safari Lodge.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation in a Standard Room',
      '1 Full-day Kruger open vehicle safari',
      '1 x 3 hour sunset drive and 1 x 3 hour sunrise drive',
      'All meals, breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Lunches, beverages (optional), gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Lodge Arrival and Sunset Drive', description: 'Depart from JNB, transfer to Radisson Lodge, check in, and enjoy the sunset drive.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Morning Drive and Departure', description: 'Sunrise drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,845 sharing'
    ]
  },
  { 
    id: 'k63', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Mluwati Concession (Greater Kruger)',
    title: '3 Day Luxury Ivory Moon Safari', 
    description: 'A 3-day luxury safari at Ivory Moon Lodge in a 38,000-hectare private reserve. Includes return transfers from JNB, luxury accommodation, a full-day Kruger safari, and 4 private reserve game drives.', 
    priceType: 'per-person',
    basePrice: 19995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayLuxuryIvoryMoonSafariOne,
    gallery: [images.threeDayLuxuryIvoryMoonSafariTwo, images.threeDayLuxuryIvoryMoonSafariThree, images.threeDayLuxuryIvoryMoonSafariFour, images.threeDayLuxuryIvoryMoonSafariFive, images.threeDayLuxuryIvoryMoonSafariSix, images.threeDayLuxuryIvoryMoonSafariSeven, images.threeDayLuxuryIvoryMoonSafariEight, images.threeDayLuxuryIvoryMoonSafariNine, images.threeDayLuxuryIvoryMoonSafariTen, images.threeDayLuxuryIvoryMoonSafariEleven, images.threeDayLuxuryIvoryMoonSafariTwelve, images.threeDayLuxuryIvoryMoonSafariThirteen, images.threeDayLuxuryIvoryMoonSafariFourteen],
    overview: 'A 3-day luxury safari with exclusivity and a full-day Kruger excursion.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation in a bush suite',
      '1 Full-day Kruger open vehicle safari drive',
      '2 Morning and 2 afternoon game drives in private reserve'
    ],
    whatIsNotIncluded: [
      'Optional flights',
      'Lunches, alcoholic and non-alcoholic drinks (except on day 2 Kruger safari)'
    ],
    itinerary: [
      { title: 'Day 1: Lodge Arrival and Game Drive', description: 'Depart JNB, transfer to Ivory Moon Lodge, check in, and enjoy the afternoon game drive in the private reserve.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full-day excursion in an open safari vehicle to Kruger National Park.' },
      { title: 'Day 3: Safari and Departure', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,995 sharing'
    ]
  },
  { 
    id: 'k64', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Private Reserve & Kruger National Park',
    title: '3 Day Private Chalet or Hotel Safari', 
    description: 'A 3-day safari featuring private road transfers, accommodation in a comfortable chalet or hotel near Kruger, and game drives in both a private reserve and the national park.', 
    priceType: 'per-person',
    basePrice: 7480, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayPrivateChaletOrHotelSafariOne,
    gallery: [images.threeDayPrivateChaletOrHotelSafariTwo, images.threeDayPrivateChaletOrHotelSafariThree, images.threeDayPrivateChaletOrHotelSafariThree, images.threeDayPrivateChaletOrHotelSafariFour, images.threeDayPrivateChaletOrHotelSafariFive],
    overview: 'A 3-day safari combining a private reserve game drive with a full-day Kruger Park experience.',
    duration: '3 Days',
    whatIsIncluded: [
      'Private round-trip transfers from Johannesburg (JNB) or hotel',
      '2 Nights accommodation in a comfortable chalet or hotel',
      '1 Private Panorama Route drive with bush walk',
      '1 Full-day open vehicle safari drive in Kruger National Park',
      '1 Afternoon private reserve game drive'
    ],
    whatIsNotIncluded: [
      'All meals, except one dinner on day 1 and breakfast on day 3',
      'All gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Road Trip via Panorama Route', description: 'Depart from JNB, drive the Panorama Route, including the Bushman Cave, and enjoy an afternoon private drive into the park.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Kruger National Park and transfer back to Johannesburg', description: 'Early morning wake up, breakfast, and return road transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,480 sharing'
    ]
  },
  { 
    id: 'k65', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Luxury Shishangeni Lodge Experience', 
    description: 'A 3-day luxury safari at Shishangeni Private Lodge in its own private concession, Southern Kruger National Park. Includes return transfers from JNB, luxury accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 26940, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayLuxuryShishangeniLodgeExperienceOne,
    gallery: [images.threeDayLuxuryShishangeniLodgeExperienceTwo, images.threeDayLuxuryShishangeniLodgeExperienceThree, images.threeDayLuxuryShishangeniLodgeExperienceFour, images.threeDayLuxuryShishangeniLodgeExperienceFive, images.threeDayLuxuryShishangeniLodgeExperienceSix, images.threeDayLuxuryShishangeniLodgeExperienceSeven, images.threeDayLuxuryShishangeniLodgeExperienceEight, images.threeDayLuxuryShishangeniLodgeExperienceNine, images.threeDayLuxuryShishangeniLodgeExperienceTen],
    overview: 'A 3-day luxury retreat in a private concession within the Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Collection from Johannesburg (JNB) or hotel',
      'Return open vehicle safari transfer from gate',
      '2 Nights accommodation at Shishangeni Lodge',
      '2 Morning and 2 afternoon game drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Flights, personal purchases',
      'Premium beverages, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Shishangeni Safari Lodge', description: 'Depart JNB, transfer to Shishangeni, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Shishangeni Safari Lodge', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Shishangeni Lodge - Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 26,940 sharing'
    ]
  },
  { 
    id: 'k66', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Hoyo Hoyo Concession)',
    title: '3 Day Luxury Call of the Wild Kruger Safari', 
    description: 'A 3-day luxury safari to Call of the Wild Lodge, including the Panorama Route, accommodation, and 4 game drives in the reserve and a full-day Kruger safari.', 
    priceType: 'per-person',
    basePrice: 14985, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayLuxuryCallOfTheWildKrugerSafariOne,
    gallery: [images.threeDayLuxuryCallOfTheWildKrugerSafariTwo, images.threeDayLuxuryCallOfTheWildKrugerSafariThree, images.threeDayLuxuryCallOfTheWildKrugerSafariFour, images.threeDayLuxuryCallOfTheWildKrugerSafariFive, images.threeDayLuxuryCallOfTheWildKrugerSafariSix, images.threeDayLuxuryCallOfTheWildKrugerSafariSeven, images.threeDayLuxuryCallOfTheWildKrugerSafariEight, images.threeDayLuxuryCallOfTheWildKrugerSafariNine, images.threeDayLuxuryCallOfTheWildKrugerSafariTen, images.threeDayLuxuryCallOfTheWildKrugerSafariEleven],
    overview: 'A luxury safari that includes a visit to the Panorama Route and Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '2 Nights accommodation at Call of the Wild Lodge',
      '1 Full-day Kruger open vehicle safari',
      '2 Game drives in the private reserve',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Gratuities and personal nature items'
    ],
    itinerary: [
      { title: 'Day 1: Panorama Route & Wild Life Lodge Arrival', description: 'Depart JNB, transfer via the Panorama Route, check in at the lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full-Day Kruger National Park Day-trip', description: 'Full day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Canyon Private Game Reserve', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,985 sharing'
    ]
  },
  { 
    id: 'k67', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Radisson Kruger Fly-In Safari from Cape Town', 
    description: 'A 3-day luxury fly-in safari from Cape Town to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 4 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 23650, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayRadissonKrugerFlyInSafariFromCapeTownOne,
    gallery: [images.threeDayRadissonKrugerFlyInSafariFromCapeTownTwo, images.threeDayRadissonKrugerFlyInSafariFromCapeTownThree, images.threeDayRadissonKrugerFlyInSafariFromCapeTownFour, images.threeDayRadissonKrugerFlyInSafariFromCapeTownFive, images.threeDayRadissonKrugerFlyInSafariFromCapeTownSix, images.threeDayRadissonKrugerFlyInSafariFromCapeTownSeven, images.threeDayRadissonKrugerFlyInSafariFromCapeTownEight, images.threeDayRadissonKrugerFlyInSafariFromCapeTownNine, images.threeDayRadissonKrugerFlyInSafariFromCapeTownTen],
    overview: 'A 3-day luxury fly-in safari to Radisson Kruger Safari Lodge from Cape Town.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights to and from Hoedspruit',
      'Return transfers from Eastgate Airport to Radisson',
      '2 Nights luxury accommodation',
      '4 x 3 hour sunrise/sunset drive (open vehicle safari)',
      'Breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages (optional)',
      'Premium drinks'
    ],
    itinerary: [
      { title: 'Day 1: Radisson Hotel Arrival & Safari', description: 'Fly from Cape Town, arrive at Eastgate Airport, transfer to Radisson Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Early Kruger National Park Adventure', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Optional Safari or Unwind & Farewell', description: 'Optional morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 23,650 sharing'
    ]
  },
  { 
    id: 'k68', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Masango Safari', 
    description: 'A 3-day safari with road transfers from JNB, a full-day Kruger safari, and accommodation at Masango Game Reserve, which includes 2 game drives.', 
    priceType: 'per-person',
    basePrice: 9195, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayMasangoSafariOne,
    gallery: [images.threeDayMasangoSafariTwo, images.threeDayMasangoSafariThree, images.threeDayMasangoSafariFour, images.threeDayMasangoSafariFive, images.threeDayMasangoSafariSix, images.threeDayMasangoSafariSeven, images.threeDayMasangoSafariEight, images.threeDayMasangoSafariNine, images.threeDayMasangoSafariTen, images.threeDayMasangoSafariEleven, images.threeDayMasangoSafariTwelve, images.threeDayMasangoSafariThirteen, images.threeDayMasangoSafariFourteen, images.threeDayMasangoSafariFifteen, images.threeDayMasangoSafariSixteen],
    overview: 'A 3-day comfortable safari package departing from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '2 Nights accommodation in the Masango Game Reserve',
      '1 Full-day Kruger open vehicle safari drive',
      '2 x Afternoon game drives in the private reserve'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Gratuities and activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Masango Game Reserve', description: 'Depart JNB, transfer to Masango, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Morning game drive, optional Panorama Route drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 9,195 single'
    ]
  },
  { 
    id: 'k69', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Nkambeni Tented Lodge Experience', 
    description: 'A 3-day budget-friendly safari with accommodation at Nkambeni Tented Lodge inside the Kruger National Park. Includes road transfers from JNB and daily game drives.', 
    priceType: 'per-person',
    basePrice: 9795, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayNkambeniTentedLodgeExperienceOne,
    gallery: [images.threeDayNkambeniTentedLodgeExperienceTwo, images.threeDayNkambeniTentedLodgeExperienceThree, images.threeDayNkambeniTentedLodgeExperienceFour, images.threeDayNkambeniTentedLodgeExperienceFive, images.threeDayNkambeniTentedLodgeExperienceSix, images.threeDayNkambeniTentedLodgeExperienceSeven, images.threeDayNkambeniTentedLodgeExperienceEight, images.threeDayNkambeniTentedLodgeExperienceNine, images.threeDayNkambeniTentedLodgeExperienceTen, images.threeDayNkambeniTentedLodgeExperienceEleven],
    overview: 'A 3-day budget safari experience with accommodation inside Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '2 Nights accommodation in a tented lodge',
      'Full-day open vehicle safari drive',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'All meals, except breakfast and dinner'
    ],
    itinerary: [
      { title: 'Day 1: The Nkambeni Safari Camp', description: 'Depart JNB, transfer to Nkambeni Tented Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Nkambeni Safari Camp', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 9,795 sharing'
    ]
  },
  { 
    id: 'k70', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Manyeleti Game Reserve',
    title: '3 Day Mantobeni Luxury Safari', 
    description: 'A 3-day luxury safari to Mantobeni Tented Camp in the Manyeleti Game Reserve. Includes return transfers from JNB, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 17765, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayMantobeniLuxurySafariOne,
    gallery: [images.threeDayMantobeniLuxurySafariTwo, images.threeDayMantobeniLuxurySafariThree, images.threeDayMantobeniLuxurySafariFour, images.threeDayMantobeniLuxurySafariFive, images.threeDayMantobeniLuxurySafariSix, images.threeDayMantobeniLuxurySafariSeven, images.threeDayMantobeniLuxurySafariEight],
    overview: 'A 3-day luxury tented camp safari in the exclusive Manyeleti Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury accommodation at Mantobeni Tented Camp',
      '4 x game drives and early morning walk',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Drinks, gratuities',
      'Personal expenses and souvenirs'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Manyeleti Game Reserve', description: 'Depart JNB, transfer to Mantobeni Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Manyeleti Game Reserve', description: 'Morning game drive/walk, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Manyeleti Game Reserve', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,765 sharing'
    ]
  },
  { 
    id: 'k71', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Ultra-Luxury Kapama Engagement Buffalo Camp Safari', 
    description: 'An ultra-luxury 3-day safari designed around a private engagement proposal at Kapama Buffalo Camp. Includes private game drives, two nights luxury accommodation, and all meals/drinks.', 
    priceType: 'per-person',
    basePrice: 43615, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariOne,
    gallery: [images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariTwo, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariThree, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariFour, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariFive, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariSix, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariSeven, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariEight, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariNine, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariTen, images.threeDayUltraLuxuryKapamaEngagementBuffaloCampSafariEleven],
    overview: 'An exclusive 3-day safari package tailored for a luxury engagement proposal.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return road transport from O.R. Tambo Airport (JNB) or flight to HDS/CPM (at cost)',
      '2 Nights luxury accommodation at Kapama Buffalo Camp',
      '2 Game drives per day and private reserve drives',
      'Private sunset surprise and engagement proposal set up',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Flights',
      'Mocambique fees if required',
      'Visa costs if required',
      'Meals not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Camp Arrival', description: 'Depart JNB, transfer to Kapama Buffalo Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Surprise Safari & Private Proposal', description: 'Morning game drive, lunch, and an afternoon drive culminating in the private surprise proposal set up.' },
      { title: 'Day 3: Public Morning Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 43,615 sharing'
    ]
  },
  { 
    id: 'k72', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '3 Day Ultra-Luxury Kapama Engagement Karula Camp Safari', 
    description: 'An ultra-luxury 3-day safari designed around a private engagement proposal at Kapama Karula Camp. Includes private game drives, two nights luxury accommodation, and all meals/drinks.', 
    priceType: 'per-person',
    basePrice: 71970, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariOne,
    gallery: [images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariTwo, images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariThree, images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariFour, images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariFive, images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariSix, images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariSeven, images.threeDayUltraLuxuryKapamaEngagementKarulaCampSafariEight],
    overview: 'An exclusive 3-day safari package tailored for a luxury engagement proposal at Karula Camp.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return road transport from O.R. Tambo Airport (JNB) or flight to HDS/CPM (at cost)',
      '2 Nights luxury accommodation at Kapama Karula Camp',
      '2 Game drives per day and private reserve drives',
      'Private sunset surprise and engagement proposal set up',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Flights',
      'Premium alcoholic beverages',
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Karula Camp Arrival', description: 'Depart JNB, transfer to Kapama Karula Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Special Picnic Surprise', description: 'Morning game drive, lunch, and an afternoon drive culminating in the private surprise proposal set up.' },
      { title: 'Day 3: Public Morning Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 71,970 sharing'
    ]
  },
  { 
    id: 'k73', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Sabi Sabi Bush Lodge Safari', 
    description: 'A 3-day luxury safari at the world-renowned Sabi Sabi Bush Lodge in Sabi Sands. Includes 2 game drives daily and luxury accommodation in a thatched suite.', 
    priceType: 'per-person',
    basePrice: 47135, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDaySabiSabiBushLodgeSafariOne,
    gallery: [images.threeDaySabiSabiBushLodgeSafariTwo, images.threeDaySabiSabiBushLodgeSafariThree, images.threeDaySabiSabiBushLodgeSafariFour, images.threeDaySabiSabiBushLodgeSafariFive, images.threeDaySabiSabiBushLodgeSafariSix, images.threeDaySabiSabiBushLodgeSafariSeven, images.threeDaySabiSabiBushLodgeSafariEight, images.threeDaySabiSabiBushLodgeSafariNine],
    overview: 'An unforgettable 3-day luxury safari in the Sabi Sands Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfer from O.R. Tambo Airport (JNB) or Sabi Sabi Airstrip (flights at cost)',
      '2 Nights luxury accommodation at Sabi Sabi Bush Lodge',
      '2 Morning and 2 afternoon open vehicle safari drives',
      'Bush walk',
      'All meals, local beverages, and entrance fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to/from JNB',
      'Premium drinks, laundry, and boutique purchases'
    ],
    itinerary: [
      { title: 'Day 1: Sabi Sabi Bush Lodge', description: 'Depart JNB, transfer to Bush Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Sabi Sabi Bush Lodge', description: 'Early morning game drive, breakfast/brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Sabi Sabi Bush Lodge', description: 'Final game drive, breakfast, and return transfer to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 51,135 sharing'
    ]
  },
  { 
    id: 'k74', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '3 Day Sabi Sands Bush Camp Safari', 
    description: 'A 3-day safari at Sabi Sands Bush Camp. Includes transfers from JNB, 2 nights luxury accommodation, 2 game drives daily, and optional bush walks.', 
    priceType: 'per-person',
    basePrice: 12608, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDaySabiSandsBushCampSafariOne,
    gallery: [images.threeDaySabiSandsBushCampSafariTwo, images.threeDaySabiSandsBushCampSafariThree, images.threeDaySabiSandsBushCampSafariFour, images.threeDaySabiSandsBushCampSafariFive, images.threeDaySabiSandsBushCampSafariSix, images.threeDaySabiSandsBushCampSafariSeven, images.threeDaySabiSandsBushCampSafariEight, images.threeDaySabiSandsBushCampSafariNine, images.threeDaySabiSandsBushCampSafariTen, images.threeDaySabiSandsBushCampSafariEleven, images.threeDaySabiSandsBushCampSafariTwelve],
    overview: 'A 3-day luxury tented camp safari in the Sabi Sands Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '2 Nights accommodation at Bush Camp',
      '3 x 3 hour game drives in Sabi Sand',
      'Newington Gate Highlights Tour',
      'All meals as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'All purchases of a personal nature',
      'Gratuities and game fees if required'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger National Park', description: 'Depart JNB, transfer to Sabi Sands Bush Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Greater Kruger - Sabi Sand Game Reserve', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Greater Kruger - Johannesburg', description: 'Morning bush walk, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 12,608 sharing'
    ]
  },
  { 
    id: 'k75', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Wild Dog)',
    title: '3 Day Wild Dog Guest Safari in Kruger National Park', 
    description: 'A 3-day safari to Wild Dog Guest Lodge, located in the Blue Canyon Private Game Reserve near Kruger. Includes full-day Kruger safari and Big 5 game drives in the reserve.', 
    priceType: 'per-person',
    basePrice: 8980, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayWildDogGuestSafariInKrugerNationalParkOne,
    gallery: [images.threeDayWildDogGuestSafariInKrugerNationalParkTwo, images.threeDayWildDogGuestSafariInKrugerNationalParkThree, images.threeDayWildDogGuestSafariInKrugerNationalParkFour, images.threeDayWildDogGuestSafariInKrugerNationalParkFive, images.threeDayWildDogGuestSafariInKrugerNationalParkSix, images.threeDayWildDogGuestSafariInKrugerNationalParkSeven, images.threeDayWildDogGuestSafariInKrugerNationalParkEight, images.threeDayWildDogGuestSafariInKrugerNationalParkNine, images.threeDayWildDogGuestSafariInKrugerNationalParkTen],
    overview: 'A 3-day safari combining Big 5 reserve viewing with a Kruger Park excursion.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights luxury stay at Wild Dog Guest Lodge',
      '1 Full-day Kruger open vehicle safari',
      '2 x 3 hour sunset drive in Blue Canyon Reserve',
      'All meals (dinners, lunch, breakfasts)'
    ],
    whatIsNotIncluded: [
      'Lunches, dinners, and beverages (unless specified)',
      'Sunrise drive upgrade (optional R1250 per person)'
    ],
    itinerary: [
      { title: 'Day 1: Lodge Arrival', description: 'Depart JNB, transfer to Wild Dog Guest Lodge, check in, and embark on a Choba River cruise, followed by dinner.' },
      { title: 'Day 2: Chobe Safari Day', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Chobe Farewell Safari', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 8,980 sharing'
    ]
  },
  { 
    id: 'k76', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Thornybush Game Reserve',
    title: '3 Day Tangala Safari Camp in Thornybush Game Reserve', 
    description: 'A 3-day safari to Tangala Safari Camp in the Greater Kruger Thornybush Game Reserve. Includes return transfers from JNB, 2 nights luxury accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 15950, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayTangalaSafariCampInThornybushGameReserveOne,
    gallery: [images.threeDayTangalaSafariCampInThornybushGameReserveTwo, images.threeDayTangalaSafariCampInThornybushGameReserveThree, images.threeDayTangalaSafariCampInThornybushGameReserveFour, images.threeDayTangalaSafariCampInThornybushGameReserveFive, images.threeDayTangalaSafariCampInThornybushGameReserveSix, images.threeDayTangalaSafariCampInThornybushGameReserveSeven, images.threeDayTangalaSafariCampInThornybushGameReserveEight, images.threeDayTangalaSafariCampInThornybushGameReserveNine, images.threeDayTangalaSafariCampInThornybushGameReserveTen],
    overview: 'An affordable 3-day colonial-style safari in the exclusive Thornybush Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transport from Johannesburg (JNB)',
      '2 Nights accommodation at Tangala Safari Camp',
      '2 Game drives per day (4 total) in a 4x4 safari vehicle',
      'Lunch x 1, Dinner x 2, Breakfast x 2'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Gratuities, community and conservation fees'
    ],
    itinerary: [
      { title: 'Day 1: Kruger Arrival & First Safari', description: 'Depart JNB, transfer to Tangala Camp, check in, lunch, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Thornybush Safari Immersion', description: 'Early morning game drive/walk, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Thornybush Nature Reserve', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 15,950 sharing'
    ]
  },
  { 
    id: 'k77', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Rafiki Bush Lodge)',
    title: '3 Day Rafiki Bush Lodge Safari', 
    description: 'A 3-day safari from Johannesburg to Rafiki Bush Lodge, offering full-day Kruger game drives, a sunset drive, and accommodation in the Blue Canyon area.', 
    priceType: 'per-person',
    basePrice: 9975, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayRafikiBushLodgeSafariOne,
    gallery: [images.threeDayRafikiBushLodgeSafariTwo, images.threeDayRafikiBushLodgeSafariThree, images.threeDayRafikiBushLodgeSafariFour, images.threeDayRafikiBushLodgeSafariFive, images.threeDayRafikiBushLodgeSafariSix, images.threeDayRafikiBushLodgeSafariSeven, images.threeDayRafikiBushLodgeSafariEight],
    overview: 'An inclusive 3-day safari from Johannesburg to the Blue Canyon area near Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transport from O.R. Tambo (JNB) or hotel',
      '2 Nights accommodation at Rafiki Bush Lodge',
      '1 Full-day Kruger open vehicle safari',
      '1 x 3-hour sunset drive in Blue Canyon Reserve',
      'Breakfasts and dinners (not lunch)'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages',
      '3-hour sunrise drive optional (R1250 pp)'
    ],
    itinerary: [
      { title: 'Day 1: Departure Hoedspruit Arrival', description: 'Depart JNB, arrive at Hoedspruit, transfer to Rafiki Bush Lodge, and enjoy the sunset drive.' },
      { title: 'Day 2: Kruger National Park Safari Experience', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Departure', description: 'Morning walk or game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 9,975 sharing'
    ]
  },
  { 
    id: 'k78', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Rhino Post Concession)',
    title: '3 Day Rhino Post Safari Lodge', 
    description: 'A 3-day luxury safari to Rhino Post Safari Lodge in a private concession in the Southern Kruger National Park. Includes 4 game drives in open safari vehicles.', 
    priceType: 'per-person',
    basePrice: 20346, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayRhinoPostSafariLodgeOne,
    gallery: [images.threeDayRhinoPostSafariLodgeTwo, images.threeDayRhinoPostSafariLodgeThree, images.threeDayRhinoPostSafariLodgeFour, images.threeDayRhinoPostSafariLodgeFive, images.threeDayRhinoPostSafariLodgeSix, images.threeDayRhinoPostSafariLodgeSeven, images.threeDayRhinoPostSafariLodgeEight, images.threeDayRhinoPostSafariLodgeNine, images.threeDayRhinoPostSafariLodgeTen, images.threeDayRhinoPostSafariLodgeEleven, images.threeDayRhinoPostSafariLodgeTwelve, images.threeDayRhinoPostSafariLodgeThirteen, images.threeDayRhinoPostSafariLodgeFourteen, images.threeDayRhinoPostSafariLodgeFifteen, images.threeDayRhinoPostSafariLodgeSixteen, images.threeDayRhinoPostSafariLodgeSeventeen, images.threeDayRhinoPostSafariLodgeEighteen, images.threeDayRhinoPostSafariLodgeNineteen, images.threeDayRhinoPostSafariLodgeTwenty, images.threeDayRhinoPostSafariLodgeTwentyOne, images.threeDayRhinoPostSafariLodgeTwentyTwo, images.threeDayRhinoPostSafariLodgeTwentyThree, images.threeDayRhinoPostSafariLodgeTwentyFour, images.threeDayRhinoPostSafariLodgeTwentyFive, images.threeDayRhinoPostSafariLodgeTwentySix, images.threeDayRhinoPostSafariLodgeTwentySeven, images.threeDayRhinoPostSafariLodgeTwentyEight, images.threeDayRhinoPostSafariLodgeTwentyNine, images.threeDayRhinoPostSafariLodgeThirty, images.threeDayRhinoPostSafariLodgeThirtyOne, images.threeDayRhinoPostSafariLodgeThirtyTwo, images.threeDayRhinoPostSafariLodgeThirtyThree, images.threeDayRhinoPostSafariLodgeThirtyFour, images.threeDayRhinoPostSafariLodgeThirtyFive, images.threeDayRhinoPostSafariLodgeThirtySix, images.threeDayRhinoPostSafariLodgeThirtySeven, images.threeDayRhinoPostSafariLodgeThirtyEight, images.threeDayRhinoPostSafariLodgeThirtyNine, images.threeDayRhinoPostSafariLodgeForty, images.threeDayRhinoPostSafariLodgeFortyOne, images.threeDayRhinoPostSafariLodgeFortyTwo],
    overview: 'A luxury 3-day safari experience in a private concession within Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '2 Nights luxury accommodation',
      '4 x 3-hour game drives in open safari vehicles',
      'All meals, daily conservation fees, and park fees'
    ],
    whatIsNotIncluded: [
      'All purchases of a personal nature',
      'Drinks and tips not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Rhino Post Safari Lodge Arrival', description: 'Depart JNB, transfer to Rhino Post Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Private Reserve and Farewell', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,346 sharing'
    ]
  },
  { 
    id: 'k79', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3-Day Dumela Camping Budget Tour - Fly in from Cape Town', 
    description: 'A 3-day budget fly-in camping safari from Cape Town to the Dumela Tented Camp near Kruger National Park. Includes flights, airport transfers, and multiple game drives.', 
    priceType: 'per-person',
    basePrice: 17500, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownOne,
    gallery: [images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownTwo, images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownThree, images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownFour, images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownFive, images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownSix, images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownSeven, images.threeDayDumelaCampingBudgetTourFlyInFromCapeTownEight],
    overview: 'A 3-day fly-in budget camping tour from Cape Town to the Blue Canyon Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return flights from Cape Town to Eastgate Airport',
      '2 Nights accommodation at Dumela Tented Camp',
      '1 Full-day Kruger National Park safari',
      'Sunset drive and morning game drive in a private reserve',
      'Park fees and conservation fees'
    ],
    whatIsNotIncluded: [
      'Tips under 8 years of age',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Hoedspruit Airport - Eastgate Airport Arrival', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Dumela, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Optional Safari & Farewell', description: 'Early morning activity (extra cost), breakfast, and return transfer for your flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,500 sharing'
    ]
  },
  { 
    id: 'k80', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Radisson Kruger Safari With Private Game Drives', 
    description: 'A 3-day luxury road safari to the Radisson Kruger Safari Lodge, offering all meals, a full-day Kruger safari, and private vehicle game drives for an exclusive experience.', 
    priceType: 'per-person',
    basePrice: 20245, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayRadissonKrugerSafariWithPrivateGameDrivesOne,
    gallery: [images.threeDayRadissonKrugerSafariWithPrivateGameDrivesTwo, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesThree, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesFour, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesFive, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesSix, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesSeven, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesEight, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesNine, images.threeDayRadissonKrugerSafariWithPrivateGameDrivesTen],
    overview: 'A luxurious 3-day road trip with the added exclusivity of a private game viewing vehicle.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation at Radisson Lodge',
      'Exclusive open-vehicle safari drives for your group only',
      '1 Full-day Kruger open vehicle safari',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Bottled water on safari',
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: First Safari Adventure', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy the afternoon private game drive.' },
      { title: 'Day 2: Full Day Safari Adventure', description: 'Morning private game drive and a full-day open vehicle game drive into Kruger National Park.' },
      { title: 'Day 3: Optional Morning Departure', description: 'Optional morning private game drive (extra cost), breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,245 sharing'
    ]
  },
  { 
    id: 'k81', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Mdluli Private Concession (Southern Kruger)',
    title: '3-Day Mdluli Safari Lodge Tour', 
    description: 'A 3-day safari at Mdluli Safari Lodge, located in a private concession within Kruger National Park. Includes return transfers from JNB, 2 nights luxury accommodation, and daily game drives.', 
    priceType: 'per-person',
    basePrice: 17060, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayMdluliSafariLodgeTourOne,
    gallery: [images.threeDayMdluliSafariLodgeTourTwo, images.threeDayMdluliSafariLodgeTourThree, images.threeDayMdluliSafariLodgeTourFour, images.threeDayMdluliSafariLodgeTourFive, images.threeDayMdluliSafariLodgeTourSix, images.threeDayMdluliSafariLodgeTourSeven, images.threeDayMdluliSafariLodgeTourEight],
    overview: 'A 3-day safari retreat at Mdluli Safari Lodge, situated within the Kruger National Park.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '2 Nights luxury tented accommodation',
      'Full-day Kruger safari drive (2 total)',
      '1 Sunset game drive',
      'Dinner, breakfast, and lunch daily'
    ],
    whatIsNotIncluded: [
      'All beverages',
      'Gratuities',
      'Items of personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Mdluli Safari Lodge Arrival', description: 'Depart JNB, transfer to Mdluli Lodge, check in, and enjoy the afternoon game drive in the private concession.' },
      { title: 'Day 2: Full Day Kruger Safari National Park Adventure', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Final Morning Drive and drive', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,060 sharing'
    ]
  },
  { 
    id: 'k82', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Chitwa Chitwa Lodge Safari', 
    description: 'A 4-day ultra-luxury safari at Chitwa Chitwa Lodge in Sabi Sands. This all-inclusive package offers exclusive accommodation and twice-daily game drives.', 
    priceType: 'per-person',
    basePrice: 76250, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayChitwaChitwaLodgeSafariOne,
    gallery: [images.fourDayChitwaChitwaLodgeSafariTwo, images.fourDayChitwaChitwaLodgeSafariThree, images.fourDayChitwaChitwaLodgeSafariFour, images.fourDayChitwaChitwaLodgeSafariFive, images.fourDayChitwaChitwaLodgeSafariSix],
    overview: 'An exquisite 4-day luxury safari to Chitwa Chitwa in Sabi Sands.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or flight to Sabi Sabi Airstrip',
      '3 Nights luxury accommodation',
      '2x open vehicle safari drives a day in the Sabi Sand Game Reserve',
      'All meals and selected beverages'
    ],
    whatIsNotIncluded: [
      'Alcoholic beverages, premium drinks',
      'Purchases from the boutique'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Chitwa Chitwa Lodge', description: 'Depart JNB, transfer to Chitwa Chitwa, check in, and afternoon game drive.' },
      { title: 'Day 2-3: Chitwa Chitwa Lodge', description: 'Daily morning and afternoon game drives, meals, and relaxation.' },
      { title: 'Day 4: Farewell', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 76,250 sharing'
    ]
  },
  { 
    id: 'k83', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Dulini Leadwood Lodge Safari', 
    description: 'A 4-day luxury safari to Dulini Leadwood Lodge in the Sabi Sands Game Reserve. Includes two game drives per day, luxurious accommodation, and all meals and drinks.', 
    priceType: 'per-person',
    basePrice: 85590, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayDuliniLeadwoodLodgeSafariOne,
    gallery: [images.fourDayDuliniLeadwoodLodgeSafariTwo, images.fourDayDuliniLeadwoodLodgeSafariThree, images.fourDayDuliniLeadwoodLodgeSafariFour, images.fourDayDuliniLeadwoodLodgeSafariFive, images.fourDayDuliniLeadwoodLodgeSafariSix, images.fourDayDuliniLeadwoodLodgeSafariSeven, images.fourDayDuliniLeadwoodLodgeSafariEight, images.fourDayDuliniLeadwoodLodgeSafariNine, images.fourDayDuliniLeadwoodLodgeSafariTen, images.fourDayDuliniLeadwoodLodgeSafariEleven],
    overview: 'A high-end 4-day safari experience in the heart of Sabi Sands Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return road transfers from Johannesburg (JNB) or flights to/from Skukuza (SKZ)',
      '3 Nights luxury accommodation',
      '2 Game drives per day with guide and tracker',
      'All meals, soft drinks, and local beverages'
    ],
    whatIsNotIncluded: [
      'International and domestic flights (if choosing road transfer)',
      'Curio shop purchases, premium drinks, laundry'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Afternoon Game Drive', description: 'Depart JNB, transfer to Dulini Leadwood Lodge, check in, and enjoy your first afternoon game drive.' },
      { title: 'Day 2-3: Dulini Leadwood Lodge', description: 'Daily morning and afternoon game drives, meals, and relaxation.' },
      { title: 'Day 4: Farewell', description: 'Early morning game drive, breakfast, and transfer back to Johannesburg or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 85,590 sharing'
    ]
  },
  { 
    id: 'k84', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Elephant Plains Game Lodge Safari', 
    description: 'A 4-day luxury safari to Elephant Plains Game Lodge in the Sabi Sands. Includes 3 nights accommodation, 2 game drives daily, and all meals/selected drinks.', 
    priceType: 'per-person',
    basePrice: 20990, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayElephantPlainsGameLodgeSafariOne,
    gallery: [images.fourDayElephantPlainsGameLodgeSafariTwo, images.fourDayElephantPlainsGameLodgeSafariThree, images.fourDayElephantPlainsGameLodgeSafariFour, images.fourDayElephantPlainsGameLodgeSafariFive, images.fourDayElephantPlainsGameLodgeSafariSix, images.fourDayElephantPlainsGameLodgeSafariSeven, images.fourDayElephantPlainsGameLodgeSafariEight, images.fourDayElephantPlainsGameLodgeSafariNine, images.fourDayElephantPlainsGameLodgeSafariTen, images.fourDayElephantPlainsGameLodgeSafariEleven, images.fourDayElephantPlainsGameLodgeSafariTwelve, images.fourDayElephantPlainsGameLodgeSafariThirteen, images.fourDayElephantPlainsGameLodgeSafariFourteen],
    overview: 'An unforgettable 4-day luxury safari to the private Sabi Sands Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights/road transfers from Johannesburg (JNB)',
      '3 Nights accommodation at Elephant Plains Game Lodge',
      '2 Game drives daily (6 total)',
      'All meals and selected drinks included'
    ],
    whatIsNotIncluded: [
      'Shop purchases and laundry',
      'Premium drinks and gratuities',
      'Airport taxes'
    ],
    itinerary: [
      { title: 'Day 1: Arrival - Elephant Plains Game Lodge', description: 'Depart JNB, transfer to the lodge, enjoy lunch, and the afternoon game drive.' },
      { title: 'Day 2-3: Full Day Safari', description: 'Daily morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Departure', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,990 sharing'
    ]
  },
  { 
    id: 'k85', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '4 Day Africa Rock Lodge Safari in Kruger National Park', 
    description: 'A 4-day luxury journey at African Rock Lodge. Includes a 3-hour private reserve game drive, a full-day Kruger safari, and a Panorama Route excursion.', 
    priceType: 'per-person',
    basePrice: 14900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayAfricaRockLodgeSafariInKrugerNationalParkOne,
    gallery: [images.fourDayAfricaRockLodgeSafariInKrugerNationalParkTwo, images.fourDayAfricaRockLodgeSafariInKrugerNationalParkThree, images.fourDayAfricaRockLodgeSafariInKrugerNationalParkFour, images.fourDayAfricaRockLodgeSafariInKrugerNationalParkFive, images.fourDayAfricaRockLodgeSafariInKrugerNationalParkSix, images.fourDayAfricaRockLodgeSafariInKrugerNationalParkSeven],
    overview: 'A comfortable 4-day all-inclusive safari and cultural experience at African Rock Lodge.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB)',
      '3 Nights accommodation at African Rock Lodge',
      '1 Full-day open vehicle safari drive in Kruger',
      '1x 3 hour sunrise drive (optional) and 1x 3 hour sunset drive',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages on day 2 Kruger drive',
      'Sunrise drive option (R1250 pp)'
    ],
    itinerary: [
      { title: 'Day 1: Into the Wilderness', description: 'Depart JNB, transfer to African Rock Lodge, check-in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger Full-Day Safari', description: 'A full-day safari excursion through Kruger National Park.' },
      { title: 'Day 3: Panorama Route OR Kruger Safari', description: 'Choice of Panorama Route tour or an additional Kruger Safari.' },
      { title: 'Day 4: Farewell to the Wild', description: 'Breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,900 sharing'
    ]
  },
  { 
    id: 'k86', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Manyeleti Game Reserve',
    title: '3-Day Tintswalo Luxury Safari', 
    description: 'A 3-day ultra-luxury fly-in safari to Tintswalo Safari Lodge, located in the private Manyeleti Game Reserve. All-inclusive luxury with two game drives daily.', 
    priceType: 'per-person',
    basePrice: 35160, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayTintswaloLuxurySafariOne,
    gallery: [images.threeDayTintswaloLuxurySafariTwo, images.threeDayTintswaloLuxurySafariThree, images.threeDayTintswaloLuxurySafariFour, images.threeDayTintswaloLuxurySafariFive, images.threeDayTintswaloLuxurySafariSix, images.threeDayTintswaloLuxurySafariSeven, images.threeDayTintswaloLuxurySafariEight],
    overview: 'An exclusive 3-day luxury safari to Tintswalo Safari Lodge.',
    duration: '3 Days',
    whatIsIncluded: [
      'Flights to and from the lodge',
      '2 Nights luxury full-board accommodation',
      '2 Morning and 2 afternoon game drives',
      'House beverages, laundry, and daily soft drinks'
    ],
    whatIsNotIncluded: [
      'All items unspecified in the itinerary',
      'Personal purchases, staff gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at the reserve airstrip, transfer to Tintswalo, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Morning Game Drive', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Final Game Drive & Farewell', description: 'Morning activity, breakfast, and fly back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 70,160 sharing'
    ]
  },
  { 
    id: 'k87', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '4 Day Budget Dumela Tented Camp Adventure', 
    description: 'A 4-day budget camping adventure from Johannesburg. Includes a Panorama Route tour, a full-day Kruger safari, and 3 nights accommodation.', 
    priceType: 'per-person',
    basePrice: 11656, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayBudgetDumelaTentedCampAdventureOne,
    gallery: [images.fourDayBudgetDumelaTentedCampAdventureTwo, images.fourDayBudgetDumelaTentedCampAdventureThree, images.fourDayBudgetDumelaTentedCampAdventureFour, images.fourDayBudgetDumelaTentedCampAdventureFive, images.fourDayBudgetDumelaTentedCampAdventureSix, images.fourDayBudgetDumelaTentedCampAdventureSeven, images.fourDayBudgetDumelaTentedCampAdventureEight, images.fourDayBudgetDumelaTentedCampAdventureNine, images.fourDayBudgetDumelaTentedCampAdventureTen, images.fourDayBudgetDumelaTentedCampAdventureEleven, images.fourDayBudgetDumelaTentedCampAdventureTwelve, images.fourDayBudgetDumelaTentedCampAdventureThirteen],
    overview: 'An affordable 4-day camping adventure combining Kruger and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation at Dumela Tented Camp',
      '1 Full-day Kruger safari',
      '1 Afternoon sunset drive in Blue Canyon Reserve',
      'Full day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Afternoon Sunset Drive', description: 'Depart JNB, transfer to Dumela Tented Camp, and enjoy the afternoon sunset drive.' },
      { title: 'Day 2: Full Day Kruger National Park Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Kruger OR Full Day Panorama Tour', description: 'Full day Panorama Route tour or an optional additional Kruger Safari.' },
      { title: 'Day 4: Departure or optional activities', description: 'Morning activity (optional), breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 11,656 sharing'
    ]
  },
  { 
    id: 'k88', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Camping Kruger Safari', 
    description: 'A 4-day budget camping safari with road transfers from Johannesburg. Includes 3 nights camping accommodation and 2 full-day open vehicle safaris in the Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 14231, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayCampingKrugerSafariOne,
    gallery: [images.fourDayCampingKrugerSafariTwo, images.fourDayCampingKrugerSafariThree, images.fourDayCampingKrugerSafariFour, images.fourDayCampingKrugerSafariFive, images.fourDayCampingKrugerSafariSix, images.fourDayCampingKrugerSafariSeven, images.fourDayCampingKrugerSafariEight],
    overview: 'An inclusive and affordable 4-day camping safari in Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights accommodation in a tented camp',
      'Morning and afternoon open vehicle safari drives',
      'All meals, daily park entrance fees'
    ],
    whatIsNotIncluded: [
      'All meals not specified in the itinerary',
      'Items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg', description: 'Depart JNB, transfer to Pretoriuskop Rest Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily morning and afternoon game drives in Kruger National Park.' },
      { title: 'Day 4: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,231 single (Note: Single price is used as base price)'
    ]
  },
  { 
    id: 'k89', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '3 Day Radisson Kruger Fly-In Safari from Johannesburg', 
    description: 'A 3-day fly-in safari from Johannesburg to the Radisson Kruger Safari Lodge, including flights, airport transfers, and 4 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 20050, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.threeDayRadissonKrugerFlyInSafariFromJohannesburgOne,
    gallery: [images.threeDayRadissonKrugerFlyInSafariFromJohannesburgTwo, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgThree, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgFour, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgFive, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgSix, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgSeven, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgEight, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgNine, images.threeDayRadissonKrugerFlyInSafariFromJohannesburgTen],
    overview: 'A 3-day luxury fly-in safari to Radisson Kruger Safari Lodge from Johannesburg.',
    duration: '3 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Return transfers from Eastgate Airport to Radisson',
      '2 Nights luxury accommodation',
      '1 Full day Kruger open vehicle safari',
      '1 x 3 hour sunset drive and 1 x 3 hour sunrise drive'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages (optional)',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure Hoedspruit Arrival & Sunset Drive', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Radisson Lodge, and enjoy the sunset drive.' },
      { title: 'Day 2: Full Day Kruger National Park Adventure', description: 'Full day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Optional Safari or Unwind & Farewell', description: 'Optional morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,050 sharing'
    ]
  },
  { 
    id: 'k91', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Buffalo Camp Fly-In Safari from Cape Town', 
    description: 'A 4-day luxury fly-in safari from Cape Town to Kapama Buffalo Camp. Includes return flights, airport transfers, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 33750, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownOne,
    gallery: [images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownTwo, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownThree, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownFour, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownFive, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownSix, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownSeven, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownEight, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownNine, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownTen, images.fourDayKapamaBuffaloCampFlyInSafariFromCapeTownEleven],
    overview: 'An exclusive 4-day fly-in safari from Cape Town to Kapama Buffalo Camp.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Buffalo Camp',
      '3 Nights luxury accommodation',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals, soft drinks, and local alcoholic beverages'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning and afternoon game drives, meals, and relaxation.' },
      { title: 'Day 4: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 67,500 sharing'
    ]
  },
  { 
    id: 'k92', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Buffalo Camp Fly-In Safari from Johannesburg', 
    description: 'A 4-day luxury fly-in safari from Johannesburg to Kapama Buffalo Camp. Includes return flights, airport transfers, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 30700, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgOne,
    gallery: [images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwo, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgThree, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgFour, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgFive, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgSix, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgSeven, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgEight, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgNine, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgEleven, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwelve, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgThirteen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgFourteen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgFifteen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgSixteen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgSeventeen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgEighteen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgNineteen, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwenty, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwentyOne, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwentyTwo, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwentyThree, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwentyFour, images.fourDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwentyFive],
    overview: 'An exclusive 4-day fly-in safari from Johannesburg to Kapama Buffalo Camp.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Buffalo Camp',
      '3 Nights luxury accommodation',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals, soft drinks, and local alcoholic beverages'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning and afternoon game drives, meals, and relaxation.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 61,400 sharing'
    ]
  },
  { 
    id: 'k93', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Buffalo Camp Safari', 
    description: 'A 4-day luxury road safari to Kapama Buffalo Camp, featuring all-inclusive luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 34900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKapamaBuffaloCampSafariOne,
    gallery: [images.fourDayKapamaBuffaloCampSafariTwo, images.fourDayKapamaBuffaloCampSafariThree, images.fourDayKapamaBuffaloCampSafariFour, images.fourDayKapamaBuffaloCampSafariFive, images.fourDayKapamaBuffaloCampSafariSix, images.fourDayKapamaBuffaloCampSafariSeven, images.fourDayKapamaBuffaloCampSafariEight, images.fourDayKapamaBuffaloCampSafariNine, images.fourDayKapamaBuffaloCampSafariTen],
    overview: 'A 4-day luxury road safari to Kapama Buffalo Camp from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '6 x 3-hour game drives in Kapama Private Game Reserve',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'All purchases of a personal nature',
      'Imported beverages'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Depart JNB, transfer to Kapama Buffalo Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning and afternoon game drives, meals, and relaxation.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 69,800 sharing'
    ]
  },
  { 
    id: 'k94', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Homestead Tour', 
    description: 'An exclusive 4-day road safari to the private Kapama Homestead. Includes 3 nights exclusive accommodation, private game drives, and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 149000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKapamaHomesteadTourOne,
    gallery: [images.fourDayKapamaHomesteadTourTwo, images.fourDayKapamaHomesteadTourThree, images.fourDayKapamaHomesteadTourFour, images.fourDayKapamaHomesteadTourFive, images.fourDayKapamaHomesteadTourSix, images.fourDayKapamaHomesteadTourSeven, images.fourDayKapamaHomesteadTourEight],
    overview: 'The ultimate exclusive 4-day luxury safari experience at Kapama Homestead, booked privately for up to 6 people.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return private transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation (Exclusive use of the Homestead)',
      'Private game drives with guide and assistant guide',
      'All meals, soft drinks, and local alcoholic drinks'
    ],
    whatIsNotIncluded: [
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Homestead Arrival', description: 'Private transfer from JNB, arrival at Kapama Homestead, and afternoon game drive.' },
      { title: 'Day 2-3: Open Vehicle Game Drive Safari', description: 'Daily early morning game drive, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Early Bush Walk or Game Drive & Farewell', description: 'Early morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 290,100 sharing (Note: base price is half of the single price listed on the image for consistency)'
    ]
  },
  { 
    id: 'k95', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Mluwati Concession (Greater Kruger)',
    title: '4 Day Hoyo Hoyo Lodge Safari', 
    description: 'A 4-day luxury safari at the private Hoyo Hoyo Safari Lodge in the Mluwati Concession. Includes transfers from JNB, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 24590, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayHoyoHoyoLodgeSafariOne,
    gallery: [images.fourDayHoyoHoyoLodgeSafariTwo, images.fourDayHoyoHoyoLodgeSafariThree, images.fourDayHoyoHoyoLodgeSafariFour, images.fourDayHoyoHoyoLodgeSafariFive, images.fourDayHoyoHoyoLodgeSafariSix, images.fourDayHoyoHoyoLodgeSafariSeven, images.fourDayHoyoHoyoLodgeSafariEight, images.fourDayHoyoHoyoLodgeSafariNine, images.fourDayHoyoHoyoLodgeSafariTen, images.fourDayHoyoHoyoLodgeSafariEleven, images.fourDayHoyoHoyoLodgeSafariTwelve],
    overview: 'A 4-day private concession safari experience near Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights accommodation in a private suite',
      '6 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to Hoyo Hoyo Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Mluwati Concession Kruger Park', description: 'Daily morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 4: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,590 sharing'
    ]
  },
  { 
    id: 'k96', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Hamiltons Luxury Tented Camp Safari', 
    description: 'A 4-day luxury tented safari at Hamiltons Tented Camp in the Imbali Concession, Greater Kruger National Park. Includes return transfers from JNB, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 29715, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayHamiltonsLuxuryTentedCampSafariOne,
    gallery: [images.fourDayHamiltonsLuxuryTentedCampSafariTwo, images.fourDayHamiltonsLuxuryTentedCampSafariThree, images.fourDayHamiltonsLuxuryTentedCampSafariFour, images.fourDayHamiltonsLuxuryTentedCampSafariFive, images.fourDayHamiltonsLuxuryTentedCampSafariSix, images.fourDayHamiltonsLuxuryTentedCampSafariSeven, images.fourDayHamiltonsLuxuryTentedCampSafariEight, images.fourDayHamiltonsLuxuryTentedCampSafariNine, images.fourDayHamiltonsLuxuryTentedCampSafariTen],
    overview: 'A 4-day classic luxury tented camp safari from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights accommodation at Hamiltons Tented Camp',
      '3 Morning and 3 afternoon game drives (6 total)',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled activities and transport not specified in the itinerary',
      'Personal expenses, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Hamilton Tented Camp Arrival', description: 'Depart JNB, transfer to Hamiltons Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 29,715 sharing'
    ]
  },
  { 
    id: 'k97', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati)',
    title: '4 Day Imbali Lodge Safari Tour', 
    description: 'A 4-day luxury safari at Imbali Lodge in the Mluwati Concession, Greater Kruger National Park. Includes transfers from JNB, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 28650, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayImbaliLodgeSafariTourOne,
    gallery: [images.fourDayImbaliLodgeSafariTourTwo, images.fourDayImbaliLodgeSafariTourThree, images.fourDayImbaliLodgeSafariTourFour, images.fourDayImbaliLodgeSafariTourFive, images.fourDayImbaliLodgeSafariTourSix, images.fourDayImbaliLodgeSafariTourSeven],
    overview: 'A 4-day luxury safari at Imbali Lodge in the Mluwati Concession.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '6 x 3-hour game drives in an open safari vehicle',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Purchases of a personal nature, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Imbali Safari Lodge - Kruger National Park', description: 'Depart JNB, transfer to Imbali Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Mluwati Concession Kruger Park', description: 'Daily morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 4: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,650 sharing'
    ]
  },
  { 
    id: 'k98', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Greenfire Lodge)',
    title: '4 Day Greenfire Lodge Safari', 
    description: 'A 4-day eco-friendly safari at Greenfire Game Lodge. Includes return road transfers from JNB, 3 nights accommodation, and 6 x 4-hour game drives.', 
    priceType: 'per-person',
    basePrice: 21150, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayGreenfireLodgeSafariOne,
    gallery: [images.fourDayGreenfireLodgeSafariTwo, images.fourDayGreenfireLodgeSafariThree, images.fourDayGreenfireLodgeSafariFour, images.fourDayGreenfireLodgeSafariFive, images.fourDayGreenfireLodgeSafariSix, images.fourDayGreenfireLodgeSafariSeven, images.fourDayGreenfireLodgeSafariEight, images.fourDayGreenfireLodgeSafariNine, images.fourDayGreenfireLodgeSafariTen, images.fourDayGreenfireLodgeSafariEleven],
    overview: 'An affordable 4-day safari at a revamped lodge near Kruger.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights accommodation at Greenfire Game Lodge',
      '6 x 4-hour game drives in an open safari vehicle',
      'All meals (breakfast, lunch, dinner)'
    ],
    whatIsNotIncluded: [
      'Drinks, gratuities',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greenfire Game Lodge', description: 'Depart from JNB, drive to Greenfire Game Lodge, check in, and enjoy a light lunch followed by an afternoon game drive.' },
      { title: 'Day 2-3: Greater Kruger', description: 'Daily early morning game drive, breakfast, lunch, and afternoon game drive.' },
      { title: 'Day 4: Greenfire Lodge - Johannesburg', description: 'Morning game drive, breakfast, lunch, and return drive to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 21,150 sharing'
    ]
  },
  { 
    id: 'k99', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Game Drive Package in Kruger National Park', 
    description: 'A 4-day game drive focused package. Includes pickup, accommodation near Kruger, and 4 days of game drives in the national park and private reserves.', 
    priceType: 'per-person',
    basePrice: 6745, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview or Hoedspruit area)', 
    pricingTiers: [],
    img: images.fourDayGameDrivePackageInKrugerNationalParkOne,
    gallery: [images.fourDayGameDrivePackageInKrugerNationalParkTwo, images.fourDayGameDrivePackageInKrugerNationalParkThree, images.fourDayGameDrivePackageInKrugerNationalParkFour, images.fourDayGameDrivePackageInKrugerNationalParkFive, images.fourDayGameDrivePackageInKrugerNationalParkSix, images.fourDayGameDrivePackageInKrugerNationalParkSeven, images.fourDayGameDrivePackageInKrugerNationalParkEight, images.fourDayGameDrivePackageInKrugerNationalParkNine, images.fourDayGameDrivePackageInKrugerNationalParkTen],
    overview: 'An affordable 4-day package focused purely on game viewing, including the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Pickup anywhere in Hoedspruit or Hazyview area',
      '3 Nights accommodation in a comfortable lodge',
      '2 Full-day Kruger National Park safari drives',
      'Morning and sunset safari in a private game reserve',
      'Panorama Route scenic drive'
    ],
    whatIsNotIncluded: [
      'Meals and beverages',
      'Accommodation',
      'Items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sunset Safari Adventure', description: 'Arrive at the lodge, check in, and depart for a sunset game drive in a private reserve.' },
      { title: 'Day 2: Full-Day Kruger National Park Safari', description: 'Full day game drive excursion into the Kruger National Park.' },
      { title: 'Day 3: Panorama Route OR Kruger Safari', description: 'Full day Panorama Route tour or an additional Kruger Safari.' },
      { title: 'Day 4: Farewell Safari Experience', description: 'Morning game drive in the private reserve, followed by departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 6,745 sharing'
    ]
  },
  { 
    id: 'k100', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati Concession)',
    title: '4 Day Imagine Africa Lodge Safari', 
    description: 'A 4-day luxury safari at Imagine Africa Luxury Tented Camp in the Greater Kruger area. Includes transfers from JNB, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 28180, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayImagineAfricaLodgeSafariOne,
    gallery: [images.fourDayImagineAfricaLodgeSafariTwo, images.fourDayImagineAfricaLodgeSafariThree, images.fourDayImagineAfricaLodgeSafariFour, images.fourDayImagineAfricaLodgeSafariFive, images.fourDayImagineAfricaLodgeSafariSix, images.fourDayImagineAfricaLodgeSafariSeven, images.fourDayImagineAfricaLodgeSafariEight, images.fourDayImagineAfricaLodgeSafariNine, images.fourDayImagineAfricaLodgeSafariTen, images.fourDayImagineAfricaLodgeSafariEleven, images.fourDayImagineAfricaLodgeSafariTwelve, images.fourDayImagineAfricaLodgeSafariThirteen, images.fourDayImagineAfricaLodgeSafariFourteen, images.fourDayImagineAfricaLodgeSafariFifteen, images.fourDayImagineAfricaLodgeSafariSixteen, images.fourDayImagineAfricaLodgeSafariSeventeen, images.fourDayImagineAfricaLodgeSafariEighteen, images.fourDayImagineAfricaLodgeSafariNineteen, images.fourDayImagineAfricaLodgeSafariTwenty],
    overview: 'A 4-day luxury tented camp safari in the Greater Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights luxury tented accommodation',
      '3 Morning sunrise game drives and 3 afternoon sunset vehicle safari drives',
      'All meals and drinks during game drives'
    ],
    whatIsNotIncluded: [
      'All beverages and expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Imagine Africa Luxury Tented Camp', description: 'Depart JNB, transfer to the Tented Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Route Nature Reserve', description: 'Morning game drive, bush walk (optional), and afternoon game drive.' },
      { title: 'Day 3: Imagine Africa Luxury Tented Camp', description: 'Morning game drive, and afternoon game drive.' },
      { title: 'Day 4: Departure', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,180 sharing'
    ]
  },
  { 
    id: 'k101', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Karongwe Private Game Reserve',
    title: '4 Day Karongwe River Lodge Luxury Safari', 
    description: 'A 4-day luxury safari to Karongwe River Lodge in the Karongwe Private Game Reserve. Includes return transfers from JNB, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 32065, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKarongweRiverLodgeLuxurySafariOne,
    gallery: [images.fourDayKarongweRiverLodgeLuxurySafariTwo, images.fourDayKarongweRiverLodgeLuxurySafariThree, images.fourDayKarongweRiverLodgeLuxurySafariFour, images.fourDayKarongweRiverLodgeLuxurySafariFive, images.fourDayKarongweRiverLodgeLuxurySafariSix, images.fourDayKarongweRiverLodgeLuxurySafariSeven, images.fourDayKarongweRiverLodgeLuxurySafariEight, images.fourDayKarongweRiverLodgeLuxurySafariNine, images.fourDayKarongweRiverLodgeLuxurySafariTen, images.fourDayKarongweRiverLodgeLuxurySafariEleven, images.fourDayKarongweRiverLodgeLuxurySafariTwelve, images.fourDayKarongweRiverLodgeLuxurySafariThirteen, images.fourDayKarongweRiverLodgeLuxurySafariFourteen],
    overview: 'A 4-day luxury safari at the Karongwe River Lodge, departing from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '6 x 3-hour game drives',
      'All meals, soft drinks, house wine, and local beer'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Activities not specified in the itinerary',
      'Minibar, curio, telephone, spa treatments'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Karongwe River Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Game Drive', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Game Drive & Departure', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 32,065 sharing'
    ]
  },
  { 
    id: 'k102', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama River Lodge Safari', 
    description: 'A 4-day luxury road safari to Kapama River Lodge, featuring all-inclusive accommodation, six game drives, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 24900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKapamaRiverLodgeSafariOne,
    gallery: [images.fourDayKapamaRiverLodgeSafariTwo, images.fourDayKapamaRiverLodgeSafariThree, images.fourDayKapamaRiverLodgeSafariFour, images.fourDayKapamaRiverLodgeSafariFive, images.fourDayKapamaRiverLodgeSafariSix, images.fourDayKapamaRiverLodgeSafariSeven, images.fourDayKapamaRiverLodgeSafariEight, images.fourDayKapamaRiverLodgeSafariNine, images.fourDayKapamaRiverLodgeSafariTen, images.fourDayKapamaRiverLodgeSafariEleven],
    overview: 'A 4-day luxury road trip from Johannesburg to Kapama River Lodge.',
    duration: '4 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '6 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium beverages',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at JNB or your hotel, transfer to Kapama River Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Private Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 48,900 sharing'
    ]
  },
  { 
    id: 'k103', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama River Lodge Fly-In Safari from Cape Town', 
    description: 'A 4-day fly-in safari from Cape Town to Kapama River Lodge. Includes flights, airport transfers, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 38550, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownOne,
    gallery: [images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownTwo, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownThree, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownFour, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownFive, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownSix, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownSeven, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownEight, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownNine, images.fourDayKapamaRiverLodgeFlyInSafariFromCapeTownTen],
    overview: 'A 4-day luxury fly-in safari to Kapama River Lodge from Cape Town.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama River Lodge',
      '3 Nights luxury accommodation',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Family Suite excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama River Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,550 sharing'
    ]
  },
  { 
    id: 'k104', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Karula Luxury Fly-In Safari From Cape Town', 
    description: 'A 4-day luxury fly-in safari from Cape Town to Kapama Karula Lodge. Includes flights, airport transfers, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 50050, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownOne,
    gallery: [images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTwo, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownThree, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFour, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFive, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSix, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSeven, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownEight, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownNine, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTen, images.fourDayKapamaKarulaLuxuryFlyInSafariFromCapeTownEleven],
    overview: 'A 4-day luxury fly-in safari to Kapama Karula Lodge from Cape Town.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Karula Lodge',
      '3 Nights luxury accommodation',
      '3 Morning and 3 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Family Villa excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town - Kapama Game Reserve', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 100,050 sharing'
    ]
  },
  { 
    id: 'k105', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Karula Luxury Fly-In Safari From Johannesburg', 
    description: 'A 4-day luxury fly-in safari from Johannesburg to Kapama Karula Lodge. Includes flights, airport transfers, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 26800, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgOne,
    gallery: [images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTwo, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgThree, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFour, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFive, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSix, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSeven, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgEight, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgNine, images.fourDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTen],
    overview: 'A 4-day luxury fly-in safari to Kapama Karula Lodge from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Karula Lodge',
      '3 Nights luxury accommodation',
      '3 Morning and 3 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 53,550 sharing'
    ]
  },
  { 
    id: 'k106', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Karula Lodge Safari', 
    description: 'A 4-day luxury road safari to Kapama Karula Lodge, featuring all-inclusive luxury accommodation, six game drives, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 50700, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKapamaKarulaLodgeSafariOne,
    gallery: [images.fourDayKapamaKarulaLodgeSafariTwo, images.fourDayKapamaKarulaLodgeSafariThree, images.fourDayKapamaKarulaLodgeSafariFour, images.fourDayKapamaKarulaLodgeSafariFive, images.fourDayKapamaKarulaLodgeSafariSix, images.fourDayKapamaKarulaLodgeSafariSeven, images.fourDayKapamaKarulaLodgeSafariEight, images.fourDayKapamaKarulaLodgeSafariNine, images.fourDayKapamaKarulaLodgeSafariTen],
    overview: 'A 4-day luxury road trip from Johannesburg to Kapama Karula Lodge.',
    duration: '4 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '6 x game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium beverages',
      'Items not specified in the itinerary',
      'All purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at JNB or your hotel, transfer to Kapama Karula Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Private Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 101,400 sharing'
    ]
  },
  { 
    id: 'k107', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Southern Camp Safari', 
    description: 'A 4-day luxury road safari to Kapama Southern Camp, featuring all-inclusive luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 22850, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKapamaSouthernCampSafariOne,
    gallery: [images.fourDayKapamaSouthernCampSafariTwo, images.fourDayKapamaSouthernCampSafariThree, images.fourDayKapamaSouthernCampSafariFour, images.fourDayKapamaSouthernCampSafariFive, images.fourDayKapamaSouthernCampSafariSix, images.fourDayKapamaSouthernCampSafariSeven, images.fourDayKapamaSouthernCampSafariEight, images.fourDayKapamaSouthernCampSafariNine, images.fourDayKapamaSouthernCampSafariTen, images.fourDayKapamaSouthernCampSafariEleven, images.fourDayKapamaSouthernCampSafariTwelve, images.fourDayKapamaSouthernCampSafariThirteen],
    overview: 'A 4-day luxury road safari to Kapama Southern Camp from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '6 x 3-hour game drives in Kapama Private Game Reserve',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Flights',
      'Items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Depart JNB, transfer to Kapama Southern Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Private Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 45,800 sharing'
    ]
  },
  { 
    id: 'k108', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama River Lodge Fly-In Safari from Johannesburg', 
    description: 'A 4-day fly-in safari from Johannesburg to Kapama River Lodge. Includes flights, airport transfers, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 28050, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgOne,
    gallery: [images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgTwo, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgThree, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgFour, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgFive, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgSix, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgSeven, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgEight, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgNine, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgTen, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgEleven, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgTwelve, images.fourDayKapamaRiverLodgeFlyInSafariFromJohannesburgThirteen],
    overview: 'A 4-day luxury fly-in safari to Kapama River Lodge from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama River Lodge',
      '3 Nights luxury accommodation',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Family Suite excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama River Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,050 sharing'
    ]
  },
  { 
    id: 'k109', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Southern Camp Fly-In From Johannesburg', 
    description: 'A 4-day fly-in safari from Johannesburg to Kapama Southern Camp. Includes flights, airport transfers, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 29050, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaSouthernCampFlyInFromJohannesburgOne,
    gallery: [images.fourDayKapamaSouthernCampFlyInFromJohannesburgTwo, images.fourDayKapamaSouthernCampFlyInFromJohannesburgThree, images.fourDayKapamaSouthernCampFlyInFromJohannesburgFour, images.fourDayKapamaSouthernCampFlyInFromJohannesburgFive, images.fourDayKapamaSouthernCampFlyInFromJohannesburgSix, images.fourDayKapamaSouthernCampFlyInFromJohannesburgSeven, images.fourDayKapamaSouthernCampFlyInFromJohannesburgEight, images.fourDayKapamaSouthernCampFlyInFromJohannesburgNine],
    overview: 'A 4-day luxury fly-in safari to Kapama Southern Camp from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Southern Camp',
      '3 Nights luxury accommodation',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Southern Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 58,050 sharing'
    ]
  },
  { 
    id: 'k110', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Kapama Southern Camp Fly-In From Cape Town', 
    description: 'A 4-day fly-in safari from Cape Town to Kapama Southern Camp. Includes flights, airport transfers, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 38050, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayKapamaSouthernCampFlyInFromCapeTownOne,
    gallery: [images.fourDayKapamaSouthernCampFlyInFromCapeTownTwo, images.fourDayKapamaSouthernCampFlyInFromCapeTownThree, images.fourDayKapamaSouthernCampFlyInFromCapeTownFour, images.fourDayKapamaSouthernCampFlyInFromCapeTownFive, images.fourDayKapamaSouthernCampFlyInFromCapeTownSix, images.fourDayKapamaSouthernCampFlyInFromCapeTownSeven, images.fourDayKapamaSouthernCampFlyInFromCapeTownEight, images.fourDayKapamaSouthernCampFlyInFromCapeTownNine],
    overview: 'A 4-day luxury fly-in safari to Kapama Southern Camp from Cape Town.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Southern Camp',
      '3 Nights luxury accommodation',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Kapama Southern Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,050 sharing'
    ]
  },
  { 
    id: 'k111', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Skukuza)',
    title: '4 Day Kruger Shalati - Train on the bridge', 
    description: 'A 4-day luxury experience on the stationary train on the Selati Bridge over the Sabie River. Includes luxury accommodation, all-inclusive food and drinks, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 29295, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerShalatiTrainOnTheBridgeOne,
    gallery: [images.fourDayKrugerShalatiTrainOnTheBridgeTwo, images.fourDayKrugerShalatiTrainOnTheBridgeThree, images.fourDayKrugerShalatiTrainOnTheBridgeFour, images.fourDayKrugerShalatiTrainOnTheBridgeFive, images.fourDayKrugerShalatiTrainOnTheBridgeSix, images.fourDayKrugerShalatiTrainOnTheBridgeSeven, images.fourDayKrugerShalatiTrainOnTheBridgeEight, images.fourDayKrugerShalatiTrainOnTheBridgeNine, images.fourDayKrugerShalatiTrainOnTheBridgeTen],
    overview: 'Experience 4 days of luxury aboard a stationary train in the heart of Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers between O.R. Tambo Airport (JNB) and Skukuza Airport (SZK)',
      '3 Nights luxury accommodation in a Carriage Suite on the bridge',
      '3 Morning and 3 afternoon game drives',
      'All meals, soft drinks, house wines, local beers and spirits',
      'Conservation levy'
    ],
    whatIsNotIncluded: [
      'Premium beverages',
      'Spa treatments and purchases from the boutique'
    ],
    itinerary: [
      { title: 'Day 1: Departure and The Train on the Bridge', description: 'Depart from JNB, arrive at Skukuza Airport, transfer to Shalati, check-in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily early morning and afternoon game drives, meals, and relaxation on the bridge.' },
      { title: 'Day 4: Departure', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 29,295 sharing'
    ]
  },
  { 
    id: 'k112', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Sabi Sands Bush Camp Safari', 
    description: 'A 4-day luxury safari at Sabi Sands Bush Camp. Includes transfers from JNB, 3 nights luxury accommodation, 2 game drives daily, and optional bush walks.', 
    priceType: 'per-person',
    basePrice: 16230, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDaySabiSandsBushCampSafariOne,
    gallery: [],
    overview: 'A 4-day luxury tented camp safari in the Sabi Sands Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation at Bush Camp',
      '4 x 3 hour game drives in Sabi Sand',
      'Newington Gate Highlights Tour',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches, personal purchases, and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger National Park', description: 'Depart JNB, transfer to Sabi Sands Bush Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Greater Kruger - Sabi Sand Game Reserve', description: 'Daily morning game drive/walk, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Greater Kruger - Johannesburg', description: 'Morning bush walk, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 12,608 sharing (using 3-day price as base, actual 4-day sharing ZAR 16,230)'
    ]
  },
  { 
    id: 'k113', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Kruger Adventure Safari', 
    description: 'A 4-day budget-friendly safari departing from Johannesburg. Includes accommodation in Hazyview and open safari vehicle game drives in the Kruger National Park, plus a Panorama Route trip.', 
    priceType: 'per-person',
    basePrice: 10800, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerAdventureSafariOne,
    gallery: [images.fourDayKrugerAdventureSafariTwo, images.fourDayKrugerAdventureSafariThree, images.fourDayKrugerAdventureSafariFour, images.fourDayKrugerAdventureSafariFive, images.fourDayKrugerAdventureSafariSix, images.fourDayKrugerAdventureSafariSeven, images.fourDayKrugerAdventureSafariEight, images.fourDayKrugerAdventureSafariNine, images.fourDayKrugerAdventureSafariTen, images.fourDayKrugerAdventureSafariEleven, images.fourDayKrugerAdventureSafariTwelve],
    overview: 'An affordable 4-day Kruger safari with a visit to the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or accommodation',
      '3 Nights accommodation in Hazyview',
      'Full-day open vehicle safari drive (2 total)',
      'Panorama Route tour',
      'Breakfast and Dinner daily'
    ],
    whatIsNotIncluded: [
      'Lunch meals',
      'All transport to and from the lodge'
    ],
    itinerary: [
      { title: 'Day 1: Hazyview', description: 'Depart JNB, transfer to Hazyview, check in, and enjoy the afternoon game drive in Kruger National Park.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Full day Panorama Route excursion.' },
      { title: 'Day 4: Kruger National Park', description: 'Early morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,800 sharing'
    ]
  },
  { 
    id: 'k114', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Khoka Moya Private Game Reserve',
    title: '4 Day Khoka Moya Luxury Safari', 
    description: 'A 4-day luxury safari to Khoka Moya Tented Camp. Includes return transport from JNB, 3 nights luxury tented accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 28570, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKhokaMoyaLuxurySafariOne,
    gallery: [images.fourDayKhokaMoyaLuxurySafariTwo, images.fourDayKhokaMoyaLuxurySafariThree, images.fourDayKhokaMoyaLuxurySafariFour, images.fourDayKhokaMoyaLuxurySafariFive, images.fourDayKhokaMoyaLuxurySafariSix, images.fourDayKhokaMoyaLuxurySafariSeven, images.fourDayKhokaMoyaLuxurySafariEight, images.fourDayKhokaMoyaLuxurySafariNine, images.fourDayKhokaMoyaLuxurySafariTen, images.fourDayKhokaMoyaLuxurySafariEleven],
    overview: 'A 4-day luxury tented camp safari from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or hotel',
      '3 Nights luxury accommodation at Khoka Moya Tented Camp',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals and local drinks',
      'Bush walk'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, personal purchases',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to Khoka Moya, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Manyeleti Game Reserve', description: 'Daily morning game drive/walk, and afternoon game drive.' },
      { title: 'Day 4: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 28,570 sharing'
    ]
  },
  { 
    id: 'k115', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Kruger Park Hotel Safari', 
    description: 'A 4-day safari package featuring hotel accommodation near Kruger, two full-day open vehicle safaris, and private transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 17182, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerParkHotelSafariOne,
    gallery: [images.fourDayKrugerParkHotelSafariTwo, images.fourDayKrugerParkHotelSafariThree, images.fourDayKrugerParkHotelSafariFour, images.fourDayKrugerParkHotelSafariFive, images.fourDayKrugerParkHotelSafariSix, images.fourDayKrugerParkHotelSafariSeven, images.fourDayKrugerParkHotelSafariEight, images.fourDayKrugerParkHotelSafariNine, images.fourDayKrugerParkHotelSafariTen],
    overview: 'A comfortable 4-day safari package with hotel accommodation near the Kruger Park gate.',
    duration: '4 Days',
    whatIsIncluded: [
      'Private road transfers from Johannesburg (JNB) or hotel',
      '3 Nights accommodation in a hotel near the gate (e.g., Hazyview)',
      '2 Full-day open vehicle safari drives in Kruger National Park',
      'Dinner, bed, and breakfast'
    ],
    whatIsNotIncluded: [
      'All lunches or beverages',
      'Gratuities and items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Hazyview, Sunset / Night Safari', description: 'Depart JNB, transfer to Hazyview, check in, and enjoy the evening safari drive in a private reserve.' },
      { title: 'Day 2: Full Day Open Vehicle Safari in The Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Open Vehicle Safari in The Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Morning Safari and Transfer back to Johannesburg', description: 'Early morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,182 sharing'
    ]
  },
  { 
    id: 'k116', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park & Panorama Route',
    title: '4 Day Kruger Park and Panorama Route Hotel Safari', 
    description: 'A 4-day safari and culture package with hotel accommodation, featuring game drives in Kruger National Park and a tour of the famous Panorama Route.', 
    priceType: 'per-person',
    basePrice: 17189, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerParkAndPanoramaRouteHotelSafariOne,
    gallery: [images.fourDayKrugerParkAndPanoramaRouteHotelSafariTwo, images.fourDayKrugerParkAndPanoramaRouteHotelSafariThree, images.fourDayKrugerParkAndPanoramaRouteHotelSafariFour, images.fourDayKrugerParkAndPanoramaRouteHotelSafariFive, images.fourDayKrugerParkAndPanoramaRouteHotelSafariSix, images.fourDayKrugerParkAndPanoramaRouteHotelSafariSeven],
    overview: 'A 4-day safari combining Kruger Park and the scenic Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Private road transfers from Johannesburg (JNB) or hotel',
      '3 Nights accommodation in a hotel near the gate (e.g., Hazyview)',
      '2 Full-day open vehicle safari drives in Kruger National Park',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'All meals or beverages',
      'Gratuities and items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Hazyview, Sunset / Night Safari', description: 'Depart JNB, transfer to Hazyview, check in, and enjoy the evening safari drive in a private reserve.' },
      { title: 'Day 2: Full Day Open Vehicle Safari in The Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Safari in a closed air-conditioned vehicle', description: 'Full day Panorama Route excursion.' },
      { title: 'Day 4: Morning Safari and Transfer back to Johannesburg', description: 'Early morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,189 sharing'
    ]
  },
  { 
    id: 'k118', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Kruger Classic Camping Safari Tour', 
    description: 'A 4-day budget camping safari to Kruger National Park. Guests stay in spacious 2-man Meru safari tents, including 2 full-day game drives and all park fees.', 
    priceType: 'per-person',
    basePrice: 8230, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerClassicCampingSafariTourOne,
    gallery: [],
    overview: 'A budget-friendly 4-day camping adventure in the heart of Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB)',
      '3 Nights accommodation in a 2-man safari tent',
      'Full-day open vehicle safari drive (3 total)',
      'All meals and snacks (except lunch on day 2)',
      'Park entrance fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to the tented camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily full-day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Kruger National Park - Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 8,230 sharing'
    ]
  },
  { 
    id: 'k119', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Kruger Park Classic Safari Tour', 
    description: 'A 4-day classic safari from Johannesburg, featuring accommodation in a Classic Chalet and full-day open vehicle game drives in the Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 19380, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerParkClassicSafariTourOne,
    gallery: [],
    overview: 'A classic 4-day safari experience in Kruger National Park, perfect for first-time visitors.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or hotel',
      '3 Nights accommodation in a Classic Chalet',
      'Full-day open vehicle safari drive (3 total)',
      '1 Sunset game drive',
      'All meals (breakfasts and dinners)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches, alcoholic and non-alcoholic drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to the Kruger National Park rest camp, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily early morning wake up, full-day open vehicle game drive.' },
      { title: 'Day 4: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,380 sharing'
    ]
  },
  { 
    id: 'k120', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '4 Day Kruger Park Treehouse Safari', 
    description: 'A 4-day safari from Johannesburg featuring accommodation in a treehouse. Includes a full-day Kruger safari, sunset drives, and Panorama Route trip.', 
    priceType: 'per-person',
    basePrice: 15695, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerParkTreehouseSafariOne,
    gallery: [images.fourDayKrugerParkTreehouseSafariTwo, images.fourDayKrugerParkTreehouseSafariThree, images.fourDayKrugerParkTreehouseSafariFour, images.fourDayKrugerParkTreehouseSafariFive, images.fourDayKrugerParkTreehouseSafariSix, images.fourDayKrugerParkTreehouseSafariSeven, images.fourDayKrugerParkTreehouseSafariEight],
    overview: 'A budget/mid-range 4-day safari with unique treehouse accommodation.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation (lodge, treehouse, or glamping)',
      '2 x Afternoon sunset open vehicle safari drive',
      '1 Full-day guided safari drive in Kruger National Park',
      'Panorama Route tour (highlights)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, lunch/drinks not specified in the itinerary',
      'Alcoholic and non-alcoholic drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger', description: 'Depart JNB, transfer to Tremisana/Treehouse Lodge, check in, and enjoy the sunset drive in Balule Reserve.' },
      { title: 'Day 2: Balule Reserve', description: 'Morning game drive and bush walk in Balule Reserve.' },
      { title: 'Day 3: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Greater Kruger - Johannesburg', description: 'Early morning game walk, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 15,695 sharing'
    ]
  },
  { 
    id: 'k121', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Manyeleti Game Reserve',
    title: '4 Day Mantobeni Luxury Safari', 
    description: 'A 4-day luxury safari to Mantobeni Tented Camp in the Manyeleti Game Reserve. Includes return transfers from JNB, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 24985, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayMantobeniLuxurySafariOne,
    gallery: [images.fourDayMantobeniLuxurySafariTwo, images.fourDayMantobeniLuxurySafariThree, images.fourDayMantobeniLuxurySafariFour, images.fourDayMantobeniLuxurySafariFive, images.fourDayMantobeniLuxurySafariSix, images.fourDayMantobeniLuxurySafariSeven, images.fourDayMantobeniLuxurySafariEight, images.fourDayMantobeniLuxurySafariNine, images.fourDayMantobeniLuxurySafariTen, images.fourDayMantobeniLuxurySafariEleven, images.fourDayMantobeniLuxurySafariTwelve],
    overview: 'A 4-day luxury tented camp safari in the exclusive Manyeleti Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation at Mantobeni Tented Camp',
      '3 Morning game drives and 3 afternoon game drives',
      'All meals and selected drinks as per itinerary'
    ],
    whatIsNotIncluded: [
      'Drinks, personal expenses and souvenirs',
      'Gratuities and imported beverages'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Mantobeni Tented Camp Arrival', description: 'Depart JNB, transfer to Mantobeni Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Manyeleti Game Reserve', description: 'Daily morning game drive/walk, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Manyeleti Game Reserve', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,985 sharing'
    ]
  },
  { 
    id: 'k122', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Luxury Radisson Kruger Safari', 
    description: 'A 4-day luxury road safari to the Radisson Kruger Safari Lodge, featuring all meals, a full-day Kruger safari, and a full-day Panorama Route excursion.', 
    priceType: 'per-person',
    basePrice: 19325, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayLuxuryRadissonKrugerSafariOne,
    gallery: [images.fourDayLuxuryRadissonKrugerSafariTwo, images.fourDayLuxuryRadissonKrugerSafariThree, images.fourDayLuxuryRadissonKrugerSafariFour, images.fourDayLuxuryRadissonKrugerSafariFive, images.fourDayLuxuryRadissonKrugerSafariSix],
    overview: 'A 4-day luxury road trip from Johannesburg combining safari and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '1 Full-day Kruger open vehicle safari',
      '1 x 3 hour sunset drive and 1 x 3 hour sunrise drive',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages (optional)',
      'Gratuities and premium drinks'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Sunset Drive', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy the sunset drive.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Route', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Morning Drive and Departure', description: 'Sunrise drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,325 sharing'
    ]
  },
  { 
    id: 'k123', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '4 Day Kruger Timbavati Budget Safari', 
    description: 'A 4-day budget safari adventure from Johannesburg to the Timbavati area. Includes 3 nights accommodation, 2 full-day open vehicle safari drives, and optional guided morning safari drive.', 
    priceType: 'per-person',
    basePrice: 17315, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerTimbavatiBudgetSafariOne,
    gallery: [images.fourDayKrugerTimbavatiBudgetSafariTwo, images.fourDayKrugerTimbavatiBudgetSafariThree, images.fourDayKrugerTimbavatiBudgetSafariFour, images.fourDayKrugerTimbavatiBudgetSafariFive, images.fourDayKrugerTimbavatiBudgetSafariSix, images.fourDayKrugerTimbavatiBudgetSafariSeven, images.fourDayKrugerTimbavatiBudgetSafariEight, images.fourDayKrugerTimbavatiBudgetSafariNine, images.fourDayKrugerTimbavatiBudgetSafariTen],
    overview: 'An affordable 4-day safari near the Timbavati Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights accommodation (lodge/tented camp at lodge)',
      '2x full-day open vehicle safari drives',
      'Breakfasts and dinners (not lunch)'
    ],
    whatIsNotIncluded: [
      'All lunch meals',
      'All beverages'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Timbavati area, check-in, and enjoy dinner at the Lodge.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily full day open vehicle safari drive into the Kruger National Park.' },
      { title: 'Day 4: Kruger Park - Johannesburg', description: 'Optional morning activity, breakfast, and return shuttle to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,315 single'
    ]
  },
  { 
    id: 'k124', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Luxury Shishangeni Lodge Experience', 
    description: 'A 4-day luxury safari at Shishangeni Private Lodge in its own private concession, Southern Kruger National Park. Includes return transfers from JNB, 3 nights luxury accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 38250, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayLuxuryShishangeniLodgeExperienceOne,
    gallery: [images.fourDayLuxuryShishangeniLodgeExperienceTwo, images.fourDayLuxuryShishangeniLodgeExperienceThree, images.fourDayLuxuryShishangeniLodgeExperienceFour, images.fourDayLuxuryShishangeniLodgeExperienceFive, images.fourDayLuxuryShishangeniLodgeExperienceSix, images.fourDayLuxuryShishangeniLodgeExperienceSeven, images.fourDayLuxuryShishangeniLodgeExperienceEight, images.fourDayLuxuryShishangeniLodgeExperienceNine],
    overview: 'A 4-day luxury retreat in a private concession within the Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Collection from Johannesburg (JNB) or hotel',
      'Return open vehicle safari transfer from gate',
      '3 Nights accommodation at Shishangeni Lodge',
      '3 Morning and 3 afternoon game drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Flights, personal purchases',
      'Premium beverages, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Shishangeni Safari Lodge', description: 'Depart JNB, transfer to Shishangeni, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Shishangeni Safari Lodge', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Shishangeni Lodge - Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,250 sharing'
    ]
  },
  { 
    id: 'k125', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Mluwati Concession (Greater Kruger)',
    title: '4 Day Luxury Ivory Moon Safari', 
    description: 'A 4-day luxury safari at Ivory Moon Lodge in a 38,000-hectare private reserve. Includes return transfers from JNB, luxury accommodation, a full-day Kruger safari, and 6 private reserve game drives.', 
    priceType: 'per-person',
    basePrice: 24995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayLuxuryIvoryMoonSafariOne,
    gallery: [images.fourDayLuxuryIvoryMoonSafariTwo, images.fourDayLuxuryIvoryMoonSafariThree, images.fourDayLuxuryIvoryMoonSafariFour, images.fourDayLuxuryIvoryMoonSafariFive, images.fourDayLuxuryIvoryMoonSafariSix, images.fourDayLuxuryIvoryMoonSafariSeven, images.fourDayLuxuryIvoryMoonSafariEight, images.fourDayLuxuryIvoryMoonSafariNine, images.fourDayLuxuryIvoryMoonSafariTen, images.fourDayLuxuryIvoryMoonSafariEleven, images.fourDayLuxuryIvoryMoonSafariTwelve, images.fourDayLuxuryIvoryMoonSafariThirteen, images.fourDayLuxuryIvoryMoonSafariFourteen, images.fourDayLuxuryIvoryMoonSafariFifteen],
    overview: 'A 4-day luxury safari with exclusivity and a full-day Kruger excursion, plus a Panorama Route tour.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation in a bush suite',
      '1 Full-day Kruger open vehicle safari drive',
      '2 Morning and 2 afternoon game drives in private reserve',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'Lunches, alcoholic and non-alcoholic drinks (except on day 2 Kruger safari)'
    ],
    itinerary: [
      { title: 'Day 1: Lodge Arrival and Game Drive', description: 'Depart JNB, transfer to Ivory Moon Lodge, check in, and enjoy the afternoon game drive in the private reserve.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full-day excursion in an open safari vehicle to Kruger National Park.' },
      { title: 'Day 3: Panorama Route Experience', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Your Final Safari', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,995 sharing'
    ]
  },
  { 
    id: 'k126', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Balule Game Reserve',
    title: '4 Day Little Africa Safari', 
    description: 'A luxurious 4-day safari at Little Africa Safari Lodge. Includes private game drives, all-inclusive luxury accommodation, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 19255, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayLittleAfricaSafariOne,
    gallery: [images.fourDayLittleAfricaSafariTwo, images.fourDayLittleAfricaSafariThree, images.fourDayLittleAfricaSafariFour, images.fourDayLittleAfricaSafariFive, images.fourDayLittleAfricaSafariSix, images.fourDayLittleAfricaSafariSeven, images.fourDayLittleAfricaSafariEight, images.fourDayLittleAfricaSafariNine, images.fourDayLittleAfricaSafariTen, images.fourDayLittleAfricaSafariEleven, images.fourDayLittleAfricaSafariTwelve],
    overview: 'A 4-day luxury safari with private game drives in the Balule Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury accommodation',
      '3 x 3-hour sunset drives and 3 x 3-hour sunrise drives with a private guide',
      'All meals and drinks as per itinerary'
    ],
    whatIsNotIncluded: [
      'All transport to and from the lodge',
      'All laundry and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Little Africa Safari Lodge Arrival', description: 'Depart JNB, transfer to Little Africa Safari Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Little Africa Safari Lodge', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Little Africa Safari Lodge Farewell', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,255 sharing'
    ]
  },
  { 
    id: 'k128', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Hoyo Hoyo Concession)',
    title: '4 Day Luxury Call of the Wild Panorama and Safari Experience', 
    description: 'A 4-day luxury safari to Call of the Wild Lodge, including the Panorama Route, accommodation, and 4 game drives in the reserve and a full-day Kruger safari.', 
    priceType: 'per-person',
    basePrice: 19510, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceOne,
    gallery: [ images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceTwo, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceThree, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceFour, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceFive, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceSix, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceSeven, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceEight, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceNine, images.fourDayLuxuryCallOfTheWildPanoramaAndSafariExperienceTen],
    overview: 'A luxury safari that includes a visit to the Panorama Route and Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights accommodation at Call of the Wild Lodge',
      '1 Full-day Kruger open vehicle safari',
      '2 Game drives in the private reserve',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'Park entrance fees',
      'Gratuities and personal nature items'
    ],
    itinerary: [
      { title: 'Day 1: Wild Life Lodge', description: 'Depart JNB, transfer to the lodge, check in, and enjoy the afternoon game drive in the private reserve.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Wildlife Private Game Reserve', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,510 sharing'
    ]
  },
  { 
    id: 'k129', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Masango Game Reserve)',
    title: '4 Day Masango Safari', 
    description: 'A 4-day safari with road transfers from JNB, a full-day Kruger safari, and accommodation at Masango Game Reserve, which includes 4 game drives.', 
    priceType: 'per-person',
    basePrice: 11335, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayMasangoSafariOne,
    gallery: [images.fourDayMasangoSafariTwo, images.fourDayMasangoSafariThree, images.fourDayMasangoSafariFour, images.fourDayMasangoSafariFive, images.fourDayMasangoSafariSix, images.fourDayMasangoSafariSeven, images.fourDayMasangoSafariEight, images.fourDayMasangoSafariNine, images.fourDayMasangoSafariTen, images.fourDayMasangoSafariEleven, images.fourDayMasangoSafariTwelve, images.fourDayMasangoSafariThirteen],
    overview: 'A 4-day comfortable safari package departing from Johannesburg, including the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights accommodation in the Masango Game Reserve',
      '1 Full-day Kruger open vehicle safari drive',
      '2 x Afternoon game drives in the private reserve',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Gratuities and activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Masango Lodge', description: 'Depart JNB, transfer to Masango, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Masango Game Reserve', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 11,335 sharing'
    ]
  },
  { 
    id: 'k130', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Londolozi Tree Camp Safari', 
    description: 'A 4-day ultra-luxury safari at the renowned Londolozi Tree Camp in the Sabi Sands. This exclusive, all-inclusive package includes twice-daily game drives and walks with experienced rangers.', 
    priceType: 'per-person',
    basePrice: 72030, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayLondoloziTreeCampSafariOne,
    gallery: [images.fourDayLondoloziTreeCampSafariTwo, images.fourDayLondoloziTreeCampSafariThree, images.fourDayLondoloziTreeCampSafariFour, images.fourDayLondoloziTreeCampSafariFive, images.fourDayLondoloziTreeCampSafariSix, images.fourDayLondoloziTreeCampSafariSeven, images.fourDayLondoloziTreeCampSafariEight, images.fourDayLondoloziTreeCampSafariNine, images.fourDayLondoloziTreeCampSafariTen, images.fourDayLondoloziTreeCampSafariEleven, images.fourDayLondoloziTreeCampSafariTwelve],
    overview: 'An exclusive 4-day luxury fly-in safari to Londolozi Tree Camp from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Flights to and from Londolozi Airstrip',
      '3 Nights luxury accommodation at Londolozi Tree Camp',
      '2 Game drives per day and nature walks',
      'All meals, local drinks, and laundry',
      'Daily yoga class'
    ],
    whatIsNotIncluded: [
      'Private transfers',
      'Premium drinks, cellar wines, treatments',
      'Gratuities and boutique purchases'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Londolozi Game Reserve', description: 'Depart from JNB, fly to Londolozi, check-in, lunch, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Londolozi Game Reserve', description: 'Daily morning game drive/walk, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Final Game Drive and Departure', description: 'Morning activity, breakfast, and fly back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 145,060 sharing'
    ]
  },
  { 
    id: 'k131', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Rafiki Bush Lodge)',
    title: '4 Day Rafiki Bush Lodge Safari', 
    description: 'A 4-day safari from Johannesburg to Rafiki Bush Lodge, offering full-day Kruger game drives, a sunset drive, and Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 14150, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayRafikiBushLodgeSafariOne,
    gallery: [ images.fourDayRafikiBushLodgeSafariTwo, images.fourDayRafikiBushLodgeSafariThree, images.fourDayRafikiBushLodgeSafariFour, images.fourDayRafikiBushLodgeSafariFive, images.fourDayRafikiBushLodgeSafariSix, images.fourDayRafikiBushLodgeSafariSeven, images.fourDayRafikiBushLodgeSafariEight, images.fourDayRafikiBushLodgeSafariNine, images.fourDayRafikiBushLodgeSafariTen, images.fourDayRafikiBushLodgeSafariEleven],
    overview: 'An inclusive 4-day safari from Johannesburg to the Blue Canyon area near Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transport from O.R. Tambo (JNB) or hotel',
      '3 Nights accommodation at Rafiki Bush Lodge',
      '1 Full-day Kruger open vehicle safari',
      '1 x 3-hour sunset drive in Blue Canyon Reserve',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages (R1250 per person)',
      '3-hour sunrise drive optional'
    ],
    itinerary: [
      { title: 'Day 1: Safari Arrival Experience at Rafiki Bush Lodge', description: 'Depart JNB, arrive at Hoedspruit, transfer to Rafiki Bush Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full-Day Kruger National Park Safari Adventure', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Panorama Route Discovery Day', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Final Morning at Rafiki Bush Lodge', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,150 sharing'
    ]
  },
  { 
    id: 'k132', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sabi Game Reserve',
    title: '4 Day Sabi Sabi Bush Lodge Safari', 
    description: 'A 4-day luxury safari at the world-renowned Sabi Sabi Bush Lodge in Sabi Sands. Includes 2 game drives daily and luxury accommodation in a thatched suite.', 
    priceType: 'per-person',
    basePrice: 76705, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDaySabiSabiBushLodgeSafariOne,
    gallery: [images.fourDaySabiSabiBushLodgeSafariTwo, images.fourDaySabiSabiBushLodgeSafariThree, images.fourDaySabiSabiBushLodgeSafariFour, images.fourDaySabiSabiBushLodgeSafariFive, images.fourDaySabiSabiBushLodgeSafariSix],
    overview: 'An unforgettable 4-day luxury safari in the Sabi Sands Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfer from O.R. Tambo Airport (JNB) or Sabi Sabi Airstrip (flights at cost)',
      '3 Nights luxury accommodation at Sabi Sabi Bush Lodge',
      '2 Morning and 2 afternoon open vehicle safari drives',
      'Bush walk',
      'All meals, local beverages, and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to/from JNB',
      'Premium drinks, laundry, and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Sabi Sabi Bush Lodge', description: 'Depart JNB, transfer to Bush Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Sabi Sands Game Reserve', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Sabi Sabi Bush Lodge - Johannesburg', description: 'Final game drive, breakfast, and return transfer to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 76,705 sharing'
    ]
  },
  { 
    id: 'k133', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Rhino Post Concession)',
    title: '4 Day Rhino Post Safari Lodge', 
    description: 'A 4-day luxury safari to Rhino Post Safari Lodge in a private concession in the Southern Kruger National Park. Includes 6 game drives in open safari vehicles.', 
    priceType: 'per-person',
    basePrice: 20445, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayRhinoPostSafariLodgeOne,
    gallery: [images.fourDayRhinoPostSafariLodgeTwo, images.fourDayRhinoPostSafariLodgeThree, images.fourDayRhinoPostSafariLodgeFour, images.fourDayRhinoPostSafariLodgeFive, images.fourDayRhinoPostSafariLodgeSix, images.fourDayRhinoPostSafariLodgeSeven, images.fourDayRhinoPostSafariLodgeEight, images.fourDayRhinoPostSafariLodgeNine, images.fourDayRhinoPostSafariLodgeTen],
    overview: 'A luxury 4-day safari experience in a private concession within Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights luxury accommodation',
      '6 x 3-hour open vehicle safari game drives',
      'All meals, daily conservation fees, and park fees'
    ],
    whatIsNotIncluded: [
      'All purchases of a personal nature',
      'Drinks and tips not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Rhino Post Safari Lodge Arrival', description: 'Depart JNB, transfer to Rhino Post Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Kruger National Park', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Private Reserve and Farewell', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 35,645 single'
    ]
  },
  { 
    id: 'k134', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Radisson Kruger Fly-In Safari from Johannesburg', 
    description: 'A 4-day fly-in safari from Johannesburg to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 5 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 22800, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayRadissonKrugerFlyInSafariFromJohannesburgOne,
    gallery: [images.fourDayRadissonKrugerFlyInSafariFromJohannesburgTwo, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgThree, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgFour, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgFive, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgSix, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgSeven, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgEight, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgNine, images.fourDayRadissonKrugerFlyInSafariFromJohannesburgTen],
    overview: 'A 4-day luxury fly-in safari to Radisson Kruger Safari Lodge from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Return airport transport from Eastgate Airport to Radisson',
      '3 Nights accommodation',
      '5 x 3 hour sunrise/sunset drive',
      'Breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages optional',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Radisson Hotel Arrival & Safari', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Radisson Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Panorama Route or Full-Day Kruger Adventure', description: 'Full-day Panorama Route tour or optional Kruger Safari.' },
      { title: 'Day 4: Optional Safari or Unwind & Return to Eastgate Airport', description: 'Optional morning activity, breakfast, and return flight to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,800 sharing'
    ]
  },
  { 
    id: 'k135', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Radisson Kruger Fly-In Safari from Cape Town', 
    description: 'A 4-day luxury fly-in safari from Cape Town to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 5 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 24600, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayRadissonKrugerFlyInSafariFromCapeTownOne,
    gallery: [images.fourDayRadissonKrugerFlyInSafariFromCapeTownTwo, images.fourDayRadissonKrugerFlyInSafariFromCapeTownThree, images.fourDayRadissonKrugerFlyInSafariFromCapeTownFour, images.fourDayRadissonKrugerFlyInSafariFromCapeTownFive, images.fourDayRadissonKrugerFlyInSafariFromCapeTownSix, images.fourDayRadissonKrugerFlyInSafariFromCapeTownSeven, images.fourDayRadissonKrugerFlyInSafariFromCapeTownEight, images.fourDayRadissonKrugerFlyInSafariFromCapeTownNine, images.fourDayRadissonKrugerFlyInSafariFromCapeTownTen, images.fourDayRadissonKrugerFlyInSafariFromCapeTownEleven],
    overview: 'A 4-day luxury fly-in safari to Radisson Kruger Safari Lodge from Cape Town.',
    duration: '4 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Return airport transport from Eastgate Airport to Radisson',
      '3 Nights accommodation',
      '5 x 3 hour sunrise/sunset drive',
      'Breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages optional',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Radisson Hotel Arrival & Safari', description: 'Fly from Cape Town, arrive at Hoedspruit, transfer to Radisson Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Early Morning Kruger National Park Adventure', description: 'Morning game drive, followed by a full-day Panorama Route tour.' },
      { title: 'Day 3: Panorama Route Day', description: 'Full-day Panorama Route tour.' },
      { title: 'Day 4: Optional Safari or Unwind & Return to Eastgate Airport', description: 'Optional morning activity, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,600 sharing'
    ]
  },
  { 
    id: 'k136', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Radisson Kruger Safari with Private Game Drives', 
    description: 'A 4-day luxury road safari to the Radisson Kruger Safari Lodge, offering all meals, a full-day Kruger safari, and private vehicle game drives for an exclusive experience.', 
    priceType: 'per-person',
    basePrice: 26675, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayRadissonKrugerSafariWithPrivateGameDrivesOne,
    gallery: [images.fourDayRadissonKrugerSafariWithPrivateGameDrivesTwo, images.fourDayRadissonKrugerSafariWithPrivateGameDrivesThree, images.fourDayRadissonKrugerSafariWithPrivateGameDrivesFour, images.fourDayRadissonKrugerSafariWithPrivateGameDrivesFive, images.fourDayRadissonKrugerSafariWithPrivateGameDrivesSix, images.fourDayRadissonKrugerSafariWithPrivateGameDrivesSeven],
    overview: 'A luxurious 4-day road trip with the added exclusivity of a private game viewing vehicle.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights accommodation at Radisson Lodge',
      'Exclusive open-vehicle safari drives for your group only',
      '1 Full-day Kruger open vehicle safari',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Bottled water on safari',
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Blue Canyon Safari Welcome', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy the sunset drive.' },
      { title: 'Day 2: Kruger Full-Day Safari', description: 'Full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Panorama Route Wonders OR Kruger Safari', description: 'Full-day Panorama Route tour or optional Kruger Safari.' },
      { title: 'Day 4: Morning Activity and Departure', description: 'Optional morning private game drive (extra cost), breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 26,675 sharing'
    ]
  },
  { 
    id: 'k137', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Private Chalet or Hotel Safari', 
    description: 'A 4-day safari featuring private road transfers, accommodation in a comfortable chalet or hotel near Kruger, and game drives in both a private reserve and the national park.', 
    priceType: 'per-person',
    basePrice: 12500, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayPrivateChaletOrHotelSafariOne,
    gallery: [images.fourDayPrivateChaletOrHotelSafariTwo, images.fourDayPrivateChaletOrHotelSafariThree, images.fourDayPrivateChaletOrHotelSafariFour, images.fourDayPrivateChaletOrHotelSafariFive, images.fourDayPrivateChaletOrHotelSafariSix],
    overview: 'A 4-day safari combining a private reserve game drive with a full-day Kruger Park experience and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Private round-trip transfers from Johannesburg (JNB) or hotel',
      '3 Nights accommodation in a comfortable chalet or hotel',
      '1 Private Panorama Route drive with bush walk',
      '2 Full-day open vehicle safari drives in Kruger National Park',
      '1 Afternoon private reserve game drive'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to and from JNB',
      'All gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Road Trip via Panorama Route', description: 'Depart from JNB, drive the Panorama Route, including the Bushman Cave, and enjoy an afternoon private drive into the park.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Full Day Open Vehicle Safari in The Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Kruger National Park and transfer back to Johannesburg', description: 'Early morning wake up, breakfast, and return road transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 12,500 sharing'
    ]
  },
  { 
    id: 'k138', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '4 Day Sabi Sands Bush Camp Safari (Main)', 
    description: 'A 4-day luxury safari at Sabi Sands Bush Camp. Includes transfers from JNB, 3 nights luxury accommodation, 2 game drives daily, and optional bush walks.', 
    priceType: 'per-person',
    basePrice: 18101, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDaySabiSandsBushCampSafariMainOne,
    gallery: [],
    overview: 'A 4-day luxury tented camp safari in the Sabi Sands Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation at Bush Camp',
      '3 x 3 hour game drives in Sabi Sand',
      'Newington Gate Highlights Tour',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches, personal purchases, and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger National Park', description: 'Depart JNB, transfer to Sabi Sands Bush Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Greater Kruger - Sabi Sand Game Reserve', description: 'Daily morning game drive/walk, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Greater Kruger - Johannesburg', description: 'Morning bush walk, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 18,101 sharing'
    ]
  },
  { 
    id: 'k139', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Nkambeni Tented Lodge)',
    title: '4 Day Nkambeni Tented Lodge Experience', 
    description: 'A 4-day budget-friendly safari with accommodation at Nkambeni Tented Lodge inside the Kruger National Park. Includes road transfers from JNB and daily game drives.', 
    priceType: 'per-person',
    basePrice: 13255, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayNkambeniTentedLodgeExperienceOne,
    gallery: [images.fourDayNkambeniTentedLodgeExperienceTwo, images.fourDayNkambeniTentedLodgeExperienceThree, images.fourDayNkambeniTentedLodgeExperienceFour, images.fourDayNkambeniTentedLodgeExperienceFive, images.fourDayNkambeniTentedLodgeExperienceSix, images.fourDayNkambeniTentedLodgeExperienceSeven, images.fourDayNkambeniTentedLodgeExperienceEight, images.fourDayNkambeniTentedLodgeExperienceNine, images.fourDayNkambeniTentedLodgeExperienceTen],
    overview: 'A 4-day budget safari experience with accommodation inside Kruger National Park, including the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation in a tented lodge',
      'Full-day open vehicle safari drive (2 total)',
      'Full-day Panorama Route tour',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'All meals, except breakfast and dinner'
    ],
    itinerary: [
      { title: 'Day 1: The Nkambeni Safari Camp', description: 'Depart JNB, transfer to Nkambeni Tented Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Nkambeni Safari Camp', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 13,255 sharing'
    ]
  },
  { 
    id: 'k140', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Balule Private Game Reserve (nDzuti)',
    title: '4 Day nDzuti Camp Safari', 
    description: 'A 4-day safari at nDzuti Camp in the Balule Private Game Reserve. Includes return transfers from JNB, 3 nights accommodation, and 6 game drives.', 
    priceType: 'per-person',
    basePrice: 17000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayNDzutiCampSafariOne,
    gallery: [images.fourDayNDzutiCampSafariTwo, images.fourDayNDzutiCampSafariThree, images.fourDayNDzutiCampSafariFour, images.fourDayNDzutiCampSafariFive, images.fourDayNDzutiCampSafariSix, images.fourDayNDzutiCampSafariSeven, images.fourDayNDzutiCampSafariEight],
    overview: 'A unique 4-day Big 5 safari experience at nDzuti Camp in the Balule Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights accommodation in an air-conditioned chalet',
      '3 Morning and 3 afternoon safari drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'All beverages',
      'Payments at the camp (conservation fee is payable at the camp)'
    ],
    itinerary: [
      { title: 'Day 1: Transfer from Johannesburg to nDzuti Camp', description: 'Depart JNB, transfer to nDzuti Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Game Drive, Leisure and Afternoon Safari', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Morning Safari and Transfer Back to Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,000 sharing'
    ]
  },
  { 
    id: 'k141', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '4-Day Budget Kruger Glamping & Panorama Safari', 
    description: 'A 4-day budget glamping adventure blending wildlife and scenic landscapes. Includes accommodation in a luxury tented camp, a full-day Kruger safari, and a full-day Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 10775, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayBudgetKrugerGlampingPanoramaSafariOne,
    gallery: [images.fourDayBudgetKrugerGlampingPanoramaSafariTwo, images.fourDayBudgetKrugerGlampingPanoramaSafariThree, images.fourDayBudgetKrugerGlampingPanoramaSafariFour, images.fourDayBudgetKrugerGlampingPanoramaSafariFive, images.fourDayBudgetKrugerGlampingPanoramaSafariSix, images.fourDayBudgetKrugerGlampingPanoramaSafariSeven, images.fourDayBudgetKrugerGlampingPanoramaSafariEight, images.fourDayBudgetKrugerGlampingPanoramaSafariNine, images.fourDayBudgetKrugerGlampingPanoramaSafariTen, images.fourDayBudgetKrugerGlampingPanoramaSafariEleven],
    overview: 'An affordable 4-day glamping safari with a full-day Kruger trip and Panorama Route tour.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB)',
      '3 Nights glamping accommodation (in a luxury tent)',
      '1 Full-day Kruger open vehicle safari',
      '1 Sunset game drive in the private reserve',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Personal purchases',
      'Meals or activities not listed',
      'Optional bushwalk fee'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to the Glamping Tented Camp, and enjoy a sunset game drive in the reserve.' },
      { title: 'Day 2: Full-Day Kruger Adventure', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full-Day Kruger Adventure', description: 'Morning game drive, followed by the full-day Panorama Route tour.' },
      { title: 'Day 4: Kruger Goodbyes', description: 'Optional morning bushwalk (extra cost), breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,775 sharing'
    ]
  },
  { 
    id: 'k142', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati Concession)',
    title: '4-Day African Rock Lodge Safari in Kruger National Park', 
    description: 'A 4-day luxury journey at African Rock Lodge. Includes 3 nights personalized accommodation, transfers from JNB, a full-day Kruger safari, and a Panorama Route excursion.', 
    priceType: 'per-person',
    basePrice: 14900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayAfricanRockLodgeSafariInKrugerNationalParkOne,
    gallery: [images.fourDayAfricanRockLodgeSafariInKrugerNationalParkTwo, images.fourDayAfricanRockLodgeSafariInKrugerNationalParkThree, images.fourDayAfricanRockLodgeSafariInKrugerNationalParkFour,images.fourDayAfricanRockLodgeSafariInKrugerNationalParkFive, images.fourDayAfricanRockLodgeSafariInKrugerNationalParkSix, images.fourDayAfricanRockLodgeSafariInKrugerNationalParkSeven],
    overview: 'A comfortable 4-day all-inclusive safari and cultural experience at African Rock Lodge.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights luxury accommodation',
      '1 Full-day open vehicle safari',
      'Full-day Panorama Route tour',
      'Breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages (optional R1250 pp)',
      'Sunrise drive optional (R1250 pp)',
      'Flights'
    ],
    itinerary: [
      { title: 'Day 1: Kruger Park Arrival', description: 'Depart JNB, transfer to African Rock Lodge, check-in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'A full-day safari excursion through Kruger National Park.' },
      { title: 'Day 3: Full day Panorama Route', description: 'Full-day scenic drive through Mpumalanga\'s Panorama Route.' },
      { title: 'Day 4: Optional Safari & Farewell', description: 'Morning activity (optional), breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,900 sharing'
    ]
  },
  { 
    id: 'k144', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4-Day Kapama Homestead Fly-in Tour', 
    description: 'An exclusive 4-day fly-in safari to the private Kapama Homestead. Includes flights, 3 nights exclusive accommodation, private game drives, and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 276300, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng or Western Cape', 
    pricingTiers: [],
    img: images.fourDayKapamaHomesteadFlyInTourOne,
    gallery: [images.fourDayKapamaHomesteadFlyInTourTwo, images.fourDayKapamaHomesteadFlyInTourThree, images.fourDayKapamaHomesteadFlyInTourFour, images.fourDayKapamaHomesteadFlyInTourFive, images.fourDayKapamaHomesteadFlyInTourSix, images.fourDayKapamaHomesteadFlyInTourSeven, images.fourDayKapamaHomesteadFlyInTourEight, images.fourDayKapamaHomesteadFlyInTourNine],
    overview: 'The ultimate exclusive 4-day fly-in luxury safari experience at Kapama Homestead, booked privately for up to 6 people.',
    duration: '4 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit Eastgate Airport (HDS)',
      '3 Nights accommodation (Exclusive use of the Homestead)',
      'Private game drives with guide and assistant guide',
      'All meals, soft drinks, and local alcoholic drinks',
      'Guided bush walks'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Gratuities',
      'Visa fees if applicable'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Homestead Arrival', description: 'Fly from JNB/CPT, arrive at Hoedspruit, transfer to Kapama Homestead, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Open Vehicle Game Drive', description: 'Daily early morning game drive, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Early Bush Walk or Game Drive & Farewell', description: 'Early morning activity, breakfast, and transfer back to HDS for return flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 276,300 sharing (Note: base price is half of the sharing price)'
    ]
  },
  { 
    id: 'k145', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Ultra-Luxury Fly-in Buffalo Camp Engagement Safari', 
    description: 'An ultra-luxury 4-day fly-in safari designed around a private engagement proposal at Kapama Buffalo Camp. Includes flights, luxury accommodation, private game drives, and all meals/drinks.', 
    priceType: 'per-person',
    basePrice: 42680, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariOne,
    gallery: [images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariTwo, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariThree, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariFour, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariFive, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariSix, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariSeven, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariEight, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariNine, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariTen, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariEleven, images.fourDayUltraLuxuryFlyInBuffaloCampEngagementSafariTwelve],
    overview: 'An exclusive 4-day luxury fly-in safari tailored for an engagement proposal at Kapama Buffalo Camp.',
    duration: '4 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit Eastgate Airport (HDS)',
      '3 Nights luxury accommodation at Kapama Buffalo Camp',
      'Private game drive with setup for engagement proposal',
      'All meals and selected beverages',
      'Return road transfers from HDS if flying'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'Personal purchases of a personal nature',
      'Visa fees if required'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Buffalo Camp Arrival', description: 'Fly into HDS, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Private Game Drive & Surprise Picnic', description: 'Morning game drive, lunch, and an afternoon drive culminating in the private surprise proposal.' },
      { title: 'Day 3: Public Morning Game Drive', description: 'Morning game drive with other guests, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Final Morning Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to HDS for return flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 83,560 sharing'
    ]
  },
  { 
    id: 'k146', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4-Day Kruger Park Luxury Leopards Lair Bush Lodge Safari', 
    description: 'A 4-day luxury safari to Leopards Lair Bush Lodge in the Mdluli Private Concession. Includes transfers from JNB, 3 nights luxury accommodation, a full-day Kruger safari, and Panorama Route trip.', 
    priceType: 'per-person',
    basePrice: 16195, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariOne,
    gallery: [images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariTwo, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariThree, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariFour, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariFive, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariSix, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariSeven, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariEight, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariNine, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariTen, images.fourDayKrugerParkLuxuryLeopardsLairBushLodgeSafariEleven],
    overview: 'A 4-day luxury safari combining Big 5 game viewing in a private reserve and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights luxury accommodation',
      'Morning and evening open vehicle safaris in the reserve',
      'Full-day Kruger National Park open vehicle safari'
    ],
    whatIsNotIncluded: [
      'International flights and to and from JNB',
      'Lunches, gratuities, and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kruger Park Lodge Arrival & Sunset Drive', description: 'Depart JNB, transfer to Leopards Lair Bush Lodge, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Open Vehicle Kruger Safari Day Trip', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Kruger or Panorama Route Tour', description: 'Choice of full-day Kruger safari or a full-day Panorama Route tour.' },
      { title: 'Day 4: Morning Sunrise Game Drive & Farewell', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 16,195 sharing'
    ]
  },
  { 
    id: 'k147', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '4 Day Kruger Island Safari', 
    description: 'A 4-day safari package featuring accommodation at Kruger Island Lodge, full-day Kruger game drives, and a Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 15995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKrugerIslandSafariOne,
    gallery: [images.fourDayKrugerIslandSafariTwo, images.fourDayKrugerIslandSafariThree, images.fourDayKrugerIslandSafariFour, images.fourDayKrugerIslandSafariFive, images.fourDayKrugerIslandSafariSix, images.fourDayKrugerIslandSafariSeven, images.fourDayKrugerIslandSafariEight, images.fourDayKrugerIslandSafariNine, images.fourDayKrugerIslandSafariTen, images.fourDayKrugerIslandSafariEleven, images.fourDayKrugerIslandSafariTwelve, images.fourDayKrugerIslandSafariThirteen],
    overview: 'A 4-day safari experience with unique island lodge accommodation.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation at Kruger Island Lodge',
      '1 Full-day Kruger open vehicle safari',
      'Full-day Panorama Route tour',
      'Breakfast, dinner, and bed'
    ],
    whatIsNotIncluded: [
      'Flights or private transfers',
      'Meals not specified in the itinerary',
      'Lunch on day 2/3'
    ],
    itinerary: [
      { title: 'Day 1: Kruger Island Arrival & Sunset Drive', description: 'Depart JNB, transfer to Kruger Island Lodge, and enjoy a sunset game drive in the reserve.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Route', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Optional Game Drive & Farewell', description: 'Optional morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 15,995 sharing'
    ]
  },
  { 
    id: 'k148', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '4-Day Dumela Camping Budget Tour - Fly in from Cape Town', 
    description: 'A 4-day fly-in budget camping safari from Cape Town to the Dumela Tented Camp near Kruger National Park. Includes flights, airport transfers, and multiple game drives.', 
    priceType: 'per-person',
    basePrice: 20645, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownOne,
    gallery: [images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownTwo, images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownThree, images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownFour, images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownFive, images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownSix, images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownSeven, images.fourDayDumelaCampingBudgetTourFlyInFromCapeTownEight],
    overview: 'A 4-day fly-in budget camping tour from Cape Town to the Blue Canyon Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return flights from Cape Town to Eastgate Airport',
      '3 Nights accommodation at Dumela Tented Camp',
      'Full-day Kruger safari',
      'Sunset drive and morning game drive in a private reserve',
      'Park fees and conservation fees'
    ],
    whatIsNotIncluded: [
      'No children under 8 years of age',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Transport from Hoedspruit Airport - Eastgate Airport', description: 'Fly from CPT, arrive at Hoedspruit, transfer to Dumela Camp, and enjoy a sunset game drive.' },
      { title: 'Day 2: Kruger Safari Day', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Safari', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Optional Safari & Farewell', description: 'Optional morning activity (extra cost), breakfast, and return transfer for your flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,645 sharing'
    ]
  },
  { 
    id: 'k149', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Wild Dog)',
    title: '4 Day Wild Dog Guest Lodge Safari', 
    description: 'A 4-day safari to Wild Dog Guest Lodge, located in the Blue Canyon Private Game Reserve near Kruger. Includes full-day Kruger safari and Big 5 game drives in the reserve, plus the Panorama Route.', 
    priceType: 'per-person',
    basePrice: 16855, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayWildDogGuestLodgeSafariOne,
    gallery: [images.fourDayWildDogGuestLodgeSafariTwo, images.fourDayWildDogGuestLodgeSafariThree, images.fourDayWildDogGuestLodgeSafariFour, images.fourDayWildDogGuestLodgeSafariFive, images.fourDayWildDogGuestLodgeSafariSix, images.fourDayWildDogGuestLodgeSafariSeven, images.fourDayWildDogGuestLodgeSafariEight],
    overview: 'A 4-day safari combining Big 5 reserve viewing, a Kruger Park excursion, and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo Airport (JNB) or hotel',
      '3 Nights luxury stay at Wild Dog Guest Lodge',
      '1 Full-day Kruger open vehicle safari',
      '1 x full-day Panorama Route tour',
      'All meals (dinners, lunch, breakfasts)'
    ],
    whatIsNotIncluded: [
      'Lunches and beverages (unless specified)',
      'Sunrise drive upgrade (optional R1250 per person)'
    ],
    itinerary: [
      { title: 'Day 1: Blue Canyon Arrival', description: 'Depart JNB, transfer to Wild Dog Guest Lodge, check in, and embark on a Choba River cruise, followed by dinner.' },
      { title: 'Day 2: Kruger Expedition', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Panorama Route Adventure', description: 'Full day Panorama Route tour.' },
      { title: 'Day 4: Leisurely Departure', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 16,855 sharing'
    ]
  },
  { 
    id: 'k150', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Khaya Ndlovu Safari Manor Tour', 
    description: 'A 4-day luxury safari at Khaya Ndlovu Safari Manor. Includes a full-day Kruger safari, a Panorama Route tour, and game drives in a private reserve.', 
    priceType: 'per-person',
    basePrice: 12450, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKhayaNdlovuSafariManorTourOne,
    gallery: [images.fourDayKhayaNdlovuSafariManorTourTwo, images.fourDayKhayaNdlovuSafariManorTourThree, images.fourDayKhayaNdlovuSafariManorTourFour, images.fourDayKhayaNdlovuSafariManorTourFive, images.fourDayKhayaNdlovuSafariManorTourSix, images.fourDayKhayaNdlovuSafariManorTourSeven, images.fourDayKhayaNdlovuSafariManorTourEight],
    overview: 'A 4-day safari experience combining luxury accommodation and diverse game activities.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights accommodation at Khaya Ndlovu Safari Manor',
      'Full-day Kruger National Park safari',
      'Full-day Panorama Route tour',
      'Sunrise game drive in private reserve'
    ],
    whatIsNotIncluded: [
      'Lunch in the Kruger National Park',
      'Drinks',
      'Items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sunset Drive Arrival & Sunset Drive', description: 'Depart JNB, arrive at Khaya Ndlovu Safari Manor, check in, and enjoy the sunset drive.' },
      { title: 'Day 2: Full-Day Kruger Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Route Tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Sunrise Game Drive Safari & Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,950 sharing'
    ]
  },
  { 
    id: 'k151', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Timbavati Private Nature Reserve',
    title: '4-Day Luxury Timbavati Rockfig Safari Lodge', 
    description: 'Rockfig Safari Lodge offers an exclusive, all-inclusive 4-day safari in the Timbavati Private Nature Reserve. Includes luxury accommodation, two daily game drives, walking safaris, and superb dining.', 
    priceType: 'per-person',
    basePrice: 30990, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayLuxuryTimbavatiRockfigSafariLodgeOne,
    gallery: [images.fourDayLuxuryTimbavatiRockfigSafariLodgeTwo, images.fourDayLuxuryTimbavatiRockfigSafariLodgeThree, images.fourDayLuxuryTimbavatiRockfigSafariLodgeFour, images.fourDayLuxuryTimbavatiRockfigSafariLodgeFive, images.fourDayLuxuryTimbavatiRockfigSafariLodgeSix, images.fourDayLuxuryTimbavatiRockfigSafariLodgeSeven, images.fourDayLuxuryTimbavatiRockfigSafariLodgeEight, images.fourDayLuxuryTimbavatiRockfigSafariLodgeNine],
    overview: 'An exclusive 4-day luxury fly-in safari to Timbavati Rockfig Safari Lodge.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return shuttle from O.R. Tambo International Airport (JNB) or flight to Hoedspruit airport',
      '3 Nights luxury accommodation',
      '2x game drives per day, walking safaris',
      'All meals, drinks (both soft drink and alcoholic beverages), and laundry'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Premium brand drinks'
    ],
    itinerary: [
      { title: 'Day 1: Arrival & Sunset Safari', description: 'Depart JNB, arrive at Rockfig Safari Lodge, check in, and enjoy your first afternoon game drive.' },
      { title: 'Day 2-3: Morning & Sunset Safari', description: 'Daily early morning game drive, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Morning Safari & Departure', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 61,980 sharing'
    ]
  },
  { 
    id: 'k152', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Klaserie Private Game Reserve',
    title: '4-Day Kubu Bush Lodge Safari', 
    description: 'A 4-day luxury safari adjacent to Kruger National Park in Kubu Bush Lodge. Includes Big 5 game viewing, two daily game drives, and accommodation with stunning views.', 
    priceType: 'per-person',
    basePrice: 24580, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKubuBushLodgeSafariOne,
    gallery: [images.fourDayKubuBushLodgeSafariTwo, images.fourDayKubuBushLodgeSafariThree, images.fourDayKubuBushLodgeSafariFour, images.fourDayKubuBushLodgeSafariFive, images.fourDayKubuBushLodgeSafariSix, images.fourDayKubuBushLodgeSafariSeven, images.fourDayKubuBushLodgeSafariEight, images.fourDayKubuBushLodgeSafariNine, images.fourDayKubuBushLodgeSafariTen],
    overview: 'A 4-day luxury road safari to the Klaserie Private Game Reserve from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 nights stay in 4-star accommodation',
      '1 x 3 hr sunset drive and 1 x 3 hr sunrise drive in private reserve',
      'Full-day game drive in Kruger National Park',
      'Breakfasts and dinners (not lunch)'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages (R1250 pp drive)',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: O.R. Tambo Airport (JNB) Arrival', description: 'Depart JNB, transfer to Kubu Bush Lodge, check-in, and enjoy the sunset drive in the private reserve.' },
      { title: 'Day 2: Early Morning Kruger National Park Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Panorama Route Excursion', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Optional Safari or Unwind & Farewell', description: 'Optional morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,580 sharing'
    ]
  },
  { 
    id: 'k153', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Klaserie Private Game Reserve',
    title: '4-Day Kubu Safari Lodge Safari', 
    description: 'A 4-day luxury safari adjacent to Kruger National Park at Kubu Safari Lodge. Includes Big 5 game viewing, two daily game drives, and accommodation with stunning views.', 
    priceType: 'per-person',
    basePrice: 24440, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayKubuSafariLodgeSafariOne,
    gallery: [images.fourDayKubuSafariLodgeSafariTwo, images.fourDayKubuSafariLodgeSafariThree, images.fourDayKubuSafariLodgeSafariFour, images.fourDayKubuSafariLodgeSafariFive, images.fourDayKubuSafariLodgeSafariSix, images.fourDayKubuSafariLodgeSafariSeven, images.fourDayKubuSafariLodgeSafariEight, images.fourDayKubuSafariLodgeSafariNine],
    overview: 'A 4-day luxury road safari to the Klaserie Private Game Reserve from Johannesburg.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 nights stay in 4-star accommodation',
      '1 x 3 hr sunset drive and 1 x 3 hr sunrise drive in private reserve',
      'Full-day game drive in Kruger National Park',
      'Breakfasts and dinners (not lunch)'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages (R1250 pp drive)',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: O.R. Tambo Airport (JNB) Arrival & Sunset Drive', description: 'Depart JNB, transfer to Kubu Safari Lodge, check-in, and enjoy the sunset drive in the private reserve.' },
      { title: 'Day 2: Early Morning Kruger National Park Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Route Excursion', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Optional Morning Safari or Unwind & Farewell', description: 'Optional morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,440 sharing'
    ]
  },
  { 
    id: 'k154', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '4 Day Ultra-Luxury Fly-in Karula Camp Engagement Safari', 
    description: 'An ultra-luxury 4-day fly-in safari designed around a private engagement proposal at Kapama Karula Camp. Includes flights, luxury accommodation, private game drives, and all meals/drinks.', 
    priceType: 'per-person',
    basePrice: 54250, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariOne,
    gallery: [images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariTwo, images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariThree, images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariFour, images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariFive, images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariSix, images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariSeven, images.fourDayUltraLuxuryFlyInKarulaCampEngagementSafariEight ],
    overview: 'An exclusive 4-day luxury fly-in safari tailored for an engagement proposal at Kapama Karula Camp.',
    duration: '4 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit Eastgate Airport',
      '3 Nights luxury accommodation at Kapama Karula Camp',
      'Private game drive with setup for engagement proposal',
      'All meals and selected beverages',
      'Return road transfers from HDS if flying'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'Premium alcoholic beverages',
      'Lodge fees if required'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Karula Camp Arrival', description: 'Fly into HDS, transfer to Kapama Karula Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Private Game Drive & Surprise Picnic', description: 'Morning game drive, lunch, and an afternoon drive culminating in the private surprise proposal.' },
      { title: 'Day 3: Morning Open-Vehicle Game Drive', description: 'Morning game drive with other guests, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to HDS for return flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 108,500 sharing'
    ]
  },
  { 
    id: 'k155', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Manyeleti Game Reserve',
    title: '4-Day Tintswalo Luxury Safari', 
    description: 'A 4-day ultra-luxury fly-in safari to Tintswalo Safari Lodge, located in the private Manyeleti Game Reserve. All-inclusive luxury with two game drives daily.', 
    priceType: 'per-person',
    basePrice: 54400, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fourDayTintswaloLuxurySafariOne,
    gallery: [images.fourDayTintswaloLuxurySafariTwo, images.fourDayTintswaloLuxurySafariThree, images.fourDayTintswaloLuxurySafariFour, images.fourDayTintswaloLuxurySafariFive, images.fourDayTintswaloLuxurySafariSix, images.fourDayTintswaloLuxurySafariSeven, images.fourDayTintswaloLuxurySafariEight],
    overview: 'An exclusive 4-day luxury safari to Tintswalo Safari Lodge.',
    duration: '4 Days',
    whatIsIncluded: [
      'Collection from Johannesburg or flight to Hoedspruit',
      '3 Nights luxury full-board accommodation',
      '2 Morning and 2 afternoon game drives',
      'House beverages, laundry, and daily soft drinks'
    ],
    whatIsNotIncluded: [
      'Premium alcoholic beverages',
      'Personal purchases, staff gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Tintswalo Safari Lodge Arrival', description: 'Depart JNB, transfer to Tintswalo Safari Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Game Drive Adventure', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Last Game Drive & Return to Johannesburg', description: 'Morning activity, breakfast, and fly back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 108,800 sharing'
    ]
  },
  { 
    id: 'k156', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Mdluli Concession)',
    title: '4-Day Mdluli Safari Lodge Tour', 
    description: 'A 4-day safari at Mdluli Safari Lodge, located in a private concession within Kruger National Park. Includes 3 nights luxury tented accommodation, 2 full-day Kruger safaris, and game drives.', 
    priceType: 'per-person',
    basePrice: 17775, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayMdluliSafariLodgeTourOne,
    gallery: [images.fourDayMdluliSafariLodgeTourTwo, images.fourDayMdluliSafariLodgeTourThree, images.fourDayMdluliSafariLodgeTourFour, images.fourDayMdluliSafariLodgeTourFive, images.fourDayMdluliSafariLodgeTourSix, images.fourDayMdluliSafariLodgeTourSeven, images.fourDayMdluliSafariLodgeTourEight],
    overview: 'A 4-day safari retreat at Mdluli Safari Lodge, situated within the Kruger National Park.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights luxury tented accommodation',
      '2 Full-day Kruger Safari drives',
      '1 Sunset game drive',
      'Breakfast, dinner, and lunch daily (except on safari days)'
    ],
    whatIsNotIncluded: [
      'All beverages',
      'Gratuities',
      'Items of personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Mdluli Safari Lodge Arrival', description: 'Depart JNB, transfer to Mdluli Lodge, check in, and enjoy the afternoon game drive in the private concession.' },
      { title: 'Day 2: Full Day Kruger Safari National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Early Morning Game Drive', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Final Morning Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,775 sharing'
    ]
  },
  { 
    id: 'k157', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '5 Day Budget Dumela Tented Camp Adventure', 
    description: 'A 5-day budget camping adventure blending Kruger National Park with the Panorama Route, including 4 nights accommodation and numerous game drives.', 
    priceType: 'per-person',
    basePrice: 13795, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayBudgetDumelaTentedCampAdventureOne,
    gallery: [images.fiveDayBudgetDumelaTentedCampAdventureTwo, images.fiveDayBudgetDumelaTentedCampAdventureThree, images.fiveDayBudgetDumelaTentedCampAdventureFour, images.fiveDayBudgetDumelaTentedCampAdventureFive, images.fiveDayBudgetDumelaTentedCampAdventureSix, images.fiveDayBudgetDumelaTentedCampAdventureSeven, images.fiveDayBudgetDumelaTentedCampAdventureEight, images.fiveDayBudgetDumelaTentedCampAdventureNine, images.fiveDayBudgetDumelaTentedCampAdventureTen, images.fiveDayBudgetDumelaTentedCampAdventureEleven, images.fiveDayBudgetDumelaTentedCampAdventureTwelve],
    overview: 'An affordable 5-day camping adventure combining Kruger and the Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights glamping accommodation (in a luxury tent)',
      '2 Full-day Kruger Safari drives',
      '1 Sunset drive in a private reserve',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to and from JNB',
      'Meals not specified in the itinerary',
      'Optional bushwalk fee'
    ],
    itinerary: [
      { title: 'Day 1: Afternoon Sunset Drive', description: 'Depart JNB, transfer to Dumela Tented Camp, and enjoy a sunset game drive.' },
      { title: 'Day 2: Full Day Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Full Day Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Departure or optional activities', description: 'Morning activity (optional), breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 13,795 sharing'
    ]
  },
  { 
    id: 'k158', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Chitwa Chitwa Lodge Safari', 
    description: 'A 5-day ultra-luxury safari at Chitwa Chitwa Lodge in Sabi Sands. This all-inclusive package offers exclusive accommodation and twice-daily game drives.', 
    priceType: 'per-person',
    basePrice: 70490, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayChitwaChitwaLodgeSafariOne,
    gallery: [images.fiveDayChitwaChitwaLodgeSafariTwo, images.fiveDayChitwaChitwaLodgeSafariThree, images.fiveDayChitwaChitwaLodgeSafariFour, images.fiveDayChitwaChitwaLodgeSafariFive, images.fiveDayChitwaChitwaLodgeSafariSix],
    overview: 'An exquisite 5-day luxury safari to Chitwa Chitwa in Sabi Sands.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return road transfers from Johannesburg (JNB) or flights to/from Skukuza (SKZ)',
      '4 Nights luxury accommodation',
      '2x open vehicle safari drives a day in the Sabi Sand Game Reserve',
      'All meals and selected beverages'
    ],
    whatIsNotIncluded: [
      'Alcoholic beverages, premium drinks',
      'Flights can be arranged at an additional charge'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Chitwa Chitwa Lodge', description: 'Depart JNB, transfer to Chitwa Chitwa Lodge, check in, and afternoon game drive.' },
      { title: 'Day 2-4: Sabi Sands Game Reserve', description: 'Daily morning and afternoon game drives, meals, and relaxation.' },
      { title: 'Day 5: Sabi Sands Reserve', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 140,980 sharing'
    ]
  },
  { 
    id: 'k159', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Sekekama Reserve)',
    title: '4-Day Sekekama Safari and Panorama Adventure', 
    description: 'A 4-day safari from JNB, including game drives in a private reserve, a full-day Kruger safari, and a full-day Panorama Route tour. Includes 3 nights accommodation.', 
    priceType: 'per-person',
    basePrice: 10875, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDaySekekamaSafariAndPanoramaAdventureOne,
    gallery: [images.fourDaySekekamaSafariAndPanoramaAdventureTwo, images.fourDaySekekamaSafariAndPanoramaAdventureThree, images.fourDaySekekamaSafariAndPanoramaAdventureFour, images.fourDaySekekamaSafariAndPanoramaAdventureFive, images.fourDaySekekamaSafariAndPanoramaAdventureSix, images.fourDaySekekamaSafariAndPanoramaAdventureSeven, images.fourDaySekekamaSafariAndPanoramaAdventureEight],
    overview: 'A 4-day budget adventure blending safari and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo International Airport (JNB) or hotel',
      '3 Nights accommodation in a comfortable lodge',
      '1 Full-day Kruger open vehicle safari',
      '1 Sunset drive in a private reserve',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Personal purchases, drinks, and snacks',
      'Optional bushwalk fee'
    ],
    itinerary: [
      { title: 'Day 1: Arrival & Game Drive', description: 'Depart JNB, transfer to Sekekama Reserve, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Kruger Safari Extravaganza', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Panorama Route Journey', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Sunrise Game Drive & Farewell', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,875 sharing'
    ]
  },
  { 
    id: 'k160', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Balule Game Reserve',
    title: '5 Day Chisomo Camp Safari', 
    description: 'A 5-day tented camp safari to Chisomo Camp, overlooking the Makhutsi River in the Kapama Private Game Reserve. Includes return transport from JNB, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 19955, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayChisomoCampSafariOne,
    gallery: [images.fiveDayChisomoCampSafariTwo, images.fiveDayChisomoCampSafariThree, images.fiveDayChisomoCampSafariFour, images.fiveDayChisomoCampSafariFive, images.fiveDayChisomoCampSafariSix, images.fiveDayChisomoCampSafariSeven, images.fiveDayChisomoCampSafariEight, images.fiveDayChisomoCampSafariNine, images.fiveDayChisomoCampSafariTen, images.fiveDayChisomoCampSafariEleven, images.fiveDayChisomoCampSafariTwelve, images.fiveDayChisomoCampSafariThirteen],
    overview: 'A comfortable 5-day safari at Chisomo Tented Camp in Kapama Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights accommodation at Chisomo Tented Camp',
      '4 Morning and 4 afternoon game drives in open safari vehicles',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Purchases of a personal nature, spa treatments, and laundry'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Chisomo Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Chisomo Safari Camp', description: 'Daily morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Chisomo - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 39,955 sharing'
    ]
  },
  { 
    id: 'k161', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Dulini Leadwood Lodge Safari', 
    description: 'A 5-day luxury safari at Dulini Leadwood Lodge in the Sabi Sands Game Reserve. This all-inclusive package offers twice-daily game drives and walks with experienced rangers.', 
    priceType: 'per-person',
    basePrice: 63013, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayDuliniLeadwoodLodgeSafariOne,
    gallery: [images.fiveDayDuliniLeadwoodLodgeSafariTwo, images.fiveDayDuliniLeadwoodLodgeSafariThree, images.fiveDayDuliniLeadwoodLodgeSafariFour, images.fiveDayDuliniLeadwoodLodgeSafariFive, images.fiveDayDuliniLeadwoodLodgeSafariSix, images.fiveDayDuliniLeadwoodLodgeSafariSeven],
    overview: 'A high-end 5-day safari experience in the heart of Sabi Sands Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return road transfers from Johannesburg (JNB) or flights to/from Skukuza (SKZ)',
      '4 Nights luxury accommodation',
      '2 Game drives per day with guide and tracker',
      'All meals, soft drinks, and local beverages'
    ],
    whatIsNotIncluded: [
      'Flights can be arranged at an additional charge',
      'Curio shop purchases, premium drinks, laundry'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Afternoon Game Drive', description: 'Arrive at the lodge, settle in, and embark on your first game drive in the reserve.' },
      { title: 'Day 2-4: Full Day Safari', description: 'Daily morning game drive/walk, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Farewell', description: 'Early morning game drive, breakfast, and transfer back to Johannesburg or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 126,025 sharing'
    ]
  },
  { 
    id: 'k162', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati Concession)',
    title: '5 Day Imbali Lodge Safari Tour', 
    description: 'A 5-day luxury safari at Imbali Lodge in the Mluwati Concession, Greater Kruger National Park. Includes transfers from JNB, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 28865, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayImbaliLodgeSafariTourOne,
    gallery: [images.fiveDayImbaliLodgeSafariTourTwo, images.fiveDayImbaliLodgeSafariTourThree, images.fiveDayImbaliLodgeSafariTourFour, images.fiveDayImbaliLodgeSafariTourFive, images.fiveDayImbaliLodgeSafariTourSix, images.fiveDayImbaliLodgeSafariTourSeven],
    overview: 'A 5-day luxury safari at Imbali Lodge in the Mluwati Concession.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x 3-hour game drives in an open safari vehicle',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Purchases of a personal nature, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart JNB, transfer to Imbali Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Daily morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 5: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 53,300 sharing'
    ]
  },
  { 
    id: 'k163', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Hamiltons Luxury Tented Camp Safari', 
    description: 'A 5-day luxury tented safari at Hamiltons Tented Camp in the Imbali Concession, Greater Kruger National Park. Includes return transfers from JNB, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 24726, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayHamiltonsLuxuryTentedCampSafariOne,
    gallery: [images.fiveDayHamiltonsLuxuryTentedCampSafariTwo, images.fiveDayHamiltonsLuxuryTentedCampSafariThree, images.fiveDayHamiltonsLuxuryTentedCampSafariFour, images.fiveDayHamiltonsLuxuryTentedCampSafariFive, images.fiveDayHamiltonsLuxuryTentedCampSafariSix, images.fiveDayHamiltonsLuxuryTentedCampSafariSeven, images.fiveDayHamiltonsLuxuryTentedCampSafariEight, images.fiveDayHamiltonsLuxuryTentedCampSafariNine, images.fiveDayHamiltonsLuxuryTentedCampSafariTen, images.fiveDayHamiltonsLuxuryTentedCampSafariEleven],
    overview: 'A 5-day classic luxury tented camp safari from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights accommodation at Hamiltons Tented Camp',
      '4 Morning and 4 afternoon game drives (8 total)',
      'All meals, tea, coffee, and local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Personal expenses, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Hamilton Tented Camp Arrival', description: 'Depart JNB, transfer to Hamiltons Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Daily morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Safari and Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 49,456 sharing'
    ]
  },
  { 
    id: 'k164', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Buffalo Camp Fly-In Safari from Johannesburg', 
    description: 'A 5-day luxury fly-in safari from Johannesburg to Kapama Buffalo Camp. Includes return flights, airport transfers, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 39490, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgOne,
    gallery: [images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgTwo, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgThree, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgFour, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgFive, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgSix, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgSeven, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgEight, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgNine, images.fiveDayKapamaBuffaloCampFlyInSafariFromJohannesburgTen],
    overview: 'An exclusive 5-day fly-in safari from Johannesburg to Kapama Buffalo Camp.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Buffalo Camp',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals, soft drinks, and local alcoholic beverages'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 78,980 sharing'
    ]
  },
  { 
    id: 'k165', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati Concession)',
    title: '5 Day Hoyo Hoyo Lodge Safari', 
    description: 'A 5-day safari at the private Hoyo Hoyo Safari Lodge in the Mluwati Concession. Includes transfers from JNB, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 22849, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayHoyoHoyoLodgeSafariOne,
    gallery: [images.fiveDayHoyoHoyoLodgeSafariTwo, images.fiveDayHoyoHoyoLodgeSafariThree, images.fiveDayHoyoHoyoLodgeSafariFour, images.fiveDayHoyoHoyoLodgeSafariFive, images.fiveDayHoyoHoyoLodgeSafariSix, images.fiveDayHoyoHoyoLodgeSafariSeven, images.fiveDayHoyoHoyoLodgeSafariEight, images.fiveDayHoyoHoyoLodgeSafariNine, images.fiveDayHoyoHoyoLodgeSafariTen, images.fiveDayHoyoHoyoLodgeSafariEleven, images.fiveDayHoyoHoyoLodgeSafariTwelve, images.fiveDayHoyoHoyoLodgeSafariThirteen, images.fiveDayHoyoHoyoLodgeSafariFourteen, images.fiveDayHoyoHoyoLodgeSafariFifteen],
    overview: 'A 5-day private concession safari experience near Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights accommodation in a private suite',
      '8 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to Hoyo Hoyo Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Daily morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 5: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 45,698 sharing'
    ]
  },
  { 
    id: 'k166', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Buffalo Camp Fly-In Safari from Cape Town', 
    description: 'A 5-day luxury fly-in safari from Cape Town to Kapama Buffalo Camp. Includes return flights, airport transfers, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 42500, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownOne,
    gallery: [images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownTwo, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownThree, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownFour, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownFive, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownSix, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownSeven, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownEight, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownNine, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownTen, images.fiveDayKapamaBuffaloCampFlyInSafariFromCapeTownEleven],
    overview: 'An exclusive 5-day fly-in safari from Cape Town to Kapama Buffalo Camp.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Buffalo Camp',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals, soft drinks, and local alcoholic beverages'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from CPT, arrive at Hoedspruit, transfer to Kapama Buffalo Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 85,000 sharing'
    ]
  },
  { 
    id: 'k167', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Elephant Plains Game Lodge Safari', 
    description: 'A 5-day luxury safari to Elephant Plains Game Lodge in the Sabi Sands. Includes transfers from JNB, 4 nights accommodation, 2 game drives daily, and all meals/selected drinks.', 
    priceType: 'per-person',
    basePrice: 23930, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayElephantPlainsGameLodgeSafariOne,
    gallery: [images.fiveDayElephantPlainsGameLodgeSafariTwo, images.fiveDayElephantPlainsGameLodgeSafariThree, images.fiveDayElephantPlainsGameLodgeSafariFour, images.fiveDayElephantPlainsGameLodgeSafariFive, images.fiveDayElephantPlainsGameLodgeSafariSix, images.fiveDayElephantPlainsGameLodgeSafariSeven, images.fiveDayElephantPlainsGameLodgeSafariEight, images.fiveDayElephantPlainsGameLodgeSafariNine],
    overview: 'An unforgettable 5-day luxury safari to the private Sabi Sands Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights/road transfers from Johannesburg (JNB)',
      '4 Nights accommodation at Elephant Plains Game Lodge',
      '2 Game drives daily (8 total), and bush walk',
      'All meals and selected drinks included'
    ],
    whatIsNotIncluded: [
      'Shop purchases and laundry',
      'Premium drinks and gratuities',
      'Airport taxes'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to the lodge, enjoy lunch, and the afternoon game drive.' },
      { title: 'Day 2-4: Elephant Plains Game Lodge', description: 'Daily morning game drive, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Elephant Plains Game Lodge - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 23,930 sharing'
    ]
  },
  { 
    id: 'k168', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Game Drive Package)',
    title: '5 Day Game Drive in Kruger National Park', 
    description: 'A 5-day game drive focused package with accommodation near Kruger, including 2 full-day Kruger safaris, 2 private reserve safaris, and a Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 10995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hoedspruit or Hazyview area)', 
    pricingTiers: [],
    img: images.fiveDayGameDriveInKrugerNationalParkOne,
    gallery: [images.fiveDayGameDriveInKrugerNationalParkTwo, images.fiveDayGameDriveInKrugerNationalParkThree, images.fiveDayGameDriveInKrugerNationalParkFour, images.fiveDayGameDriveInKrugerNationalParkFive, images.fiveDayGameDriveInKrugerNationalParkSix, images.fiveDayGameDriveInKrugerNationalParkSeven, images.fiveDayGameDriveInKrugerNationalParkEight, images.fiveDayGameDriveInKrugerNationalParkNine, images.fiveDayGameDriveInKrugerNationalParkTen, images.fiveDayGameDriveInKrugerNationalParkEleven],
    overview: 'An affordable 5-day package focused purely on game viewing, including the Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Pickup anywhere in Hoedspruit or Hazyview area',
      '4 Nights accommodation in a comfortable lodge',
      '2 Full-day Kruger National Park safari drives',
      '2 Sunset/Morning safari in a private game reserve',
      'Full-day Panorama Route scenic drive'
    ],
    whatIsNotIncluded: [
      'Meals and beverages',
      'Accommodation',
      'Items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sunset Private Reserve Game Drive', description: 'Arrive at the lodge, check in, and depart for a sunset game drive in a private reserve.' },
      { title: 'Day 2: Full Day Kruger National Park Safari', description: 'Full day game drive excursion into the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Full Day Kruger National Park Safari', description: 'Second full day game drive excursion into the Kruger National Park.' },
      { title: 'Day 5: Morning Game Drive in Private Reserve', description: 'Morning game drive in the private reserve, followed by departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,995 sharing'
    ]
  },
  { 
    id: 'k169', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Greenfire Lodge)',
    title: '5 Day Greenfire Game Lodge Safari', 
    description: 'A 5-day eco-friendly safari at Greenfire Game Lodge. Includes return road transfers from JNB, 4 nights accommodation, and 8 x 4-hour game drives.', 
    priceType: 'per-person',
    basePrice: 17220, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayGreenfireGameLodgeSafariOne,
    gallery: [images.fiveDayGreenfireGameLodgeSafariTwo, images.fiveDayGreenfireGameLodgeSafariThree, images.fiveDayGreenfireGameLodgeSafariFour, images.fiveDayGreenfireGameLodgeSafariFive, images.fiveDayGreenfireGameLodgeSafariSix, images.fiveDayGreenfireGameLodgeSafariSeven],
    overview: 'An affordable 5-day safari at a revamped lodge near Kruger.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return road transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights accommodation at Greenfire Game Lodge',
      '8 x 4-hour game drives in an open safari vehicle',
      'All meals (breakfast, lunch, dinner)'
    ],
    whatIsNotIncluded: [
      'Drinks, gratuities',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Balule Game Reserve / Greater Kruger', description: 'Depart from JNB, drive to Greenfire Game Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Greater Kruger', description: 'Daily early morning game drive, breakfast, lunch, and afternoon game drive.' },
      { title: 'Day 5: Greater Kruger - Johannesburg', description: 'Morning game drive, breakfast, and return drive to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 34,440 sharing'
    ]
  },
  { 
    id: 'k170', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Imagine Africa Lodge)',
    title: '5 Day Imagine Africa Lodge Safari', 
    description: 'A 5-day luxury safari at Imagine Africa Luxury Tented Camp in the Greater Kruger area. Includes transfers from JNB, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 24180, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayImagineAfricaLodgeSafariOne,
    gallery: [images.fiveDayImagineAfricaLodgeSafariTwo, images.fiveDayImagineAfricaLodgeSafariThree, images.fiveDayImagineAfricaLodgeSafariFour, images.fiveDayImagineAfricaLodgeSafariFive, images.fiveDayImagineAfricaLodgeSafariSix, images.fiveDayImagineAfricaLodgeSafariSeven, images.fiveDayImagineAfricaLodgeSafariEight, images.fiveDayImagineAfricaLodgeSafariNine, images.fiveDayImagineAfricaLodgeSafariTen, images.fiveDayImagineAfricaLodgeSafariEleven],
    overview: 'A 5-day luxury tented camp safari in the Greater Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '4 Nights luxury tented accommodation',
      '4x afternoon sunset open vehicle safari drives',
      '4x morning sunrise open vehicle safari drives',
      'All meals and entrance fees'
    ],
    whatIsNotIncluded: [
      'Beverages and other personal expenses',
      'Gratuities',
      'Panorama Route Tour (Extra Cost)'
    ],
    itinerary: [
      { title: 'Day 1: Imagine Africa Luxury Tented Camp (JNB)', description: 'Depart JNB, transfer to the Tented Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Imagine Africa Luxury Tented Camp', description: 'Daily morning and afternoon game drives.' },
      { title: 'Day 5: Imagine Africa Luxury Tented Camp (JNB)', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,180 sharing'
    ]
  },
  { 
    id: 'k171', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Southern Camp Safari', 
    description: 'A 5-day luxury road safari to Kapama Southern Camp, offering inclusive accommodation and 8 game drives in the Kapama Reserve near Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 51500, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKapamaSouthernCampSafariOne,
    gallery: [images.fiveDayKapamaSouthernCampSafariTwo, images.fiveDayKapamaSouthernCampSafariThree, images.fiveDayKapamaSouthernCampSafariFour, images.fiveDayKapamaSouthernCampSafariFive, images.fiveDayKapamaSouthernCampSafariSix, images.fiveDayKapamaSouthernCampSafariSeven, images.fiveDayKapamaSouthernCampSafariEight, images.fiveDayKapamaSouthernCampSafariNine, images.fiveDayKapamaSouthernCampSafariTen, images.fiveDayKapamaSouthernCampSafariEleven, images.fiveDayKapamaSouthernCampSafariTwelve, images.fiveDayKapamaSouthernCampSafariThirteen, images.fiveDayKapamaSouthernCampSafariFourteen, images.fiveDayKapamaSouthernCampSafariFifteen, images.fiveDayKapamaSouthernCampSafariSixteen, images.fiveDayKapamaSouthernCampSafariSeventeen, images.fiveDayKapamaSouthernCampSafariEighteen],
    overview: 'A 5-day luxury safari at Kapama Southern Camp, departing from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Flights (if choosing road transfer)',
      'Imported alcoholic beverages',
      'Gratuities',
      'Family Villa excluded'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at JNB or your hotel, transfer to Kapama Southern Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 103,000 sharing'
    ]
  },
  { 
    id: 'k172', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Buffalo Camp Safari', 
    description: 'A 5-day ultra-luxury road safari to Kapama Buffalo Camp, featuring all-inclusive luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 53200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKapamaBuffaloCampSafariOne,
    gallery: [images.fiveDayKapamaBuffaloCampSafariTwo, images.fiveDayKapamaBuffaloCampSafariThree, images.fiveDayKapamaBuffaloCampSafariFour, images.fiveDayKapamaBuffaloCampSafariFive, images.fiveDayKapamaBuffaloCampSafariSix, images.fiveDayKapamaBuffaloCampSafariSeven, images.fiveDayKapamaBuffaloCampSafariEight, images.fiveDayKapamaBuffaloCampSafariNine, images.fiveDayKapamaBuffaloCampSafariTen, images.fiveDayKapamaBuffaloCampSafariEleven],
    overview: 'A 5-day luxury road safari to Kapama Buffalo Camp from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x 3-hour game drives in Kapama Private Game Reserve',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'All purchases of a personal nature',
      'Imported beverages'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Depart JNB, transfer to Kapama Buffalo Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Private Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 106,400 sharing'
    ]
  },
  { 
    id: 'k173', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Karula Luxury Fly-In Safari From Johannesburg', 
    description: 'A 5-day luxury fly-in safari from Johannesburg to Kapama Karula Lodge. Includes flights, airport transfers, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 41900, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgOne,
    gallery: [images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTwo, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgThree, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFour, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgFive, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSix, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgSeven, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgEight, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgNine, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgTen, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromJohannesburgEleven],
    overview: 'A 5-day luxury fly-in safari to Kapama Karula Lodge from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Karula Lodge',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not in the itinerary',
      'Family Villa excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 83,900 sharing'
    ]
  },
  { 
    id: 'k174', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Karula Luxury Fly-In Safari From Cape Town', 
    description: 'A 5-day luxury fly-in safari from Cape Town to Kapama Karula Lodge. Includes flights, airport transfers, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 64400, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownOne,
    gallery: [images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTwo, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownThree, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFour, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownFive, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSix, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownSeven, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownEight, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownNine, images.fiveDayKapamaKarulaLuxuryFlyInSafariFromCapeTownTen],
    overview: 'A 5-day luxury fly-in safari to Kapama Karula Lodge from Cape Town.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Karula Lodge',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not in the itinerary',
      'Family Villa excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from CPT, arrive at Hoedspruit, transfer to Kapama Karula Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 128,800 sharing'
    ]
  },
  { 
    id: 'k175', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama River Lodge Safari', 
    description: 'A 5-day luxury road safari to Kapama River Lodge, featuring all-inclusive accommodation, eight game drives, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 30200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKapamaRiverLodgeSafariOne,
    gallery: [images.fiveDayKapamaRiverLodgeSafariTwo, images.fiveDayKapamaRiverLodgeSafariThree, images.fiveDayKapamaRiverLodgeSafariFour, images.fiveDayKapamaRiverLodgeSafariFive, images.fiveDayKapamaRiverLodgeSafariSix, images.fiveDayKapamaRiverLodgeSafariSeven, images.fiveDayKapamaRiverLodgeSafariEight, images.fiveDayKapamaRiverLodgeSafariNine, images.fiveDayKapamaRiverLodgeSafariTen, images.fiveDayKapamaRiverLodgeSafariEleven, images.fiveDayKapamaRiverLodgeSafariTwelve, images.fiveDayKapamaRiverLodgeSafariThirteen, images.fiveDayKapamaRiverLodgeSafariFourteen, images.fiveDayKapamaRiverLodgeSafariFifteen, images.fiveDayKapamaRiverLodgeSafariSixteen, images.fiveDayKapamaRiverLodgeSafariSeventeen],
    overview: 'A 5-day luxury road trip from Johannesburg to Kapama River Lodge.',
    duration: '5 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium beverages',
      'Items not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Private Game Reserve', description: 'Arrive at JNB or your hotel, transfer to Kapama River Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Private Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 60,400 sharing'
    ]
  },
  { 
    id: 'k176', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama River Lodge Fly-In Safari from Johannesburg', 
    description: 'A 5-day fly-in safari from Johannesburg to Kapama River Lodge. Includes flights, airport transfers, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 31900, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgOne,
    gallery: [images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgTwo, images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgThree, images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgFour, images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgFive, images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgSix, images.fiveDayKapamaRiverLodgeFlyInSafariFromJohannesburgSeven],
    overview: 'A 5-day luxury fly-in safari to Kapama River Lodge from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama River Lodge',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Family Suite excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama River Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 63,900 sharing'
    ]
  },
  { 
    id: 'k177', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Southern Camp Fly-In From Johannesburg', 
    description: 'A 5-day fly-in safari from Johannesburg to Kapama Southern Camp. Includes flights, airport transfers, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 36900, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaSouthernCampFlyInFromJohannesburgOne,
    gallery: [images.fiveDayKapamaSouthernCampFlyInFromJohannesburgTwo, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgThree, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgFour, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgFive, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgSix, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgSeven, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgEight, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgNine, images.fiveDayKapamaSouthernCampFlyInFromJohannesburgTen],
    overview: 'A 5-day luxury fly-in safari to Kapama Southern Camp from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Johannesburg',
      'Return airport transfers to Kapama Southern Camp',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kapama Game Reserve', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Kapama Southern Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return flight to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 73,900 sharing'
    ]
  },
  { 
    id: 'k178', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Homestead Tour', 
    description: 'An exclusive 5-day luxury road safari to the private Kapama Homestead. Includes 4 nights exclusive accommodation, private game drives, guided bush walks, and all-inclusive luxury.', 
    priceType: 'per-person',
    basePrice: 191100, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKapamaHomesteadTourOne,
    gallery: [images.fiveDayKapamaHomesteadTourTwo, images.fiveDayKapamaHomesteadTourThree, images.fiveDayKapamaHomesteadTourFour, images.fiveDayKapamaHomesteadTourFive, images.fiveDayKapamaHomesteadTourSix, images.fiveDayKapamaHomesteadTourSeven, images.fiveDayKapamaHomesteadTourEight],
    overview: 'The ultimate exclusive 5-day luxury safari experience at Kapama Homestead, booked privately for up to 6 people.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return private transfers from O.R. Tambo Airport (JNB)',
      '4 Nights accommodation (Exclusive use of the Homestead)',
      'Private game drives with guide and assistant guide',
      'All meals, soft drinks, and local alcoholic drinks'
    ],
    whatIsNotIncluded: [
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Homestead Arrival & Game Drive', description: 'Private transfer from JNB, arrival at Kapama Homestead, and afternoon game drive.' },
      { title: 'Day 2-4: Open Vehicle Game Drive Safari or Bush Walk', description: 'Daily early morning game drive/walk, lunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Early Bush Walk or Game Drive & Farewell', description: 'Early morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 382,200 sharing (Note: base price is half of the sharing price)'
    ]
  },
  { 
    id: 'k179', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama River Lodge Fly-In Safari from Cape Town', 
    description: 'A 5-day fly-in safari from Cape Town to Kapama River Lodge. Includes flights, airport transfers, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 40400, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownOne,
    gallery: [images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownTwo, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownThree, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownFour, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownFive, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownSix, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownSeven, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownEight, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownNine, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownTen, images.fiveDayKapamaRiverLodgeFlyInSafariFromCapeTownEleven],
    overview: 'A 5-day luxury fly-in safari to Kapama River Lodge from Cape Town.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama River Lodge',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Family Suite excludes flights'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town to Kapama Game Reserve', description: 'Fly from CPT, arrive at Hoedspruit, transfer to Kapama River Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 80,400 sharing'
    ]
  },
  { 
    id: 'k180', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Southern Camp Fly-In From Cape Town', 
    description: 'A 5-day fly-in safari from Cape Town to Kapama Southern Camp. Includes flights, airport transfers, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 44400, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaSouthernCampFlyInFromCapeTownOne,
    gallery: [images.fiveDayKapamaSouthernCampFlyInFromCapeTownTwo, images.fiveDayKapamaSouthernCampFlyInFromCapeTownThree, images.fiveDayKapamaSouthernCampFlyInFromCapeTownFour, images.fiveDayKapamaSouthernCampFlyInFromCapeTownFive, images.fiveDayKapamaSouthernCampFlyInFromCapeTownSix, images.fiveDayKapamaSouthernCampFlyInFromCapeTownSeven, images.fiveDayKapamaSouthernCampFlyInFromCapeTownEight, images.fiveDayKapamaSouthernCampFlyInFromCapeTownNine, images.fiveDayKapamaSouthernCampFlyInFromCapeTownTen],
    overview: 'A 5-day luxury fly-in safari to Kapama Southern Camp from Cape Town.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return flights from Cape Town',
      'Return airport transfers to Kapama Southern Camp',
      '4 Nights luxury accommodation',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Expenses of a personal nature',
      'Optional activities not on the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Cape Town', description: 'Fly from CPT, arrive at Hoedspruit, transfer to Kapama Southern Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kapama Game Reserve', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Kapama Game Reserve - Cape Town', description: 'Morning game drive, breakfast, and return flight to Cape Town.' }
    ],
    additionalInfo: [
      'Starting from ZAR 88,800 sharing'
    ]
  },
  { 
    id: 'k181', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Karongwe Private Game Reserve',
    title: '5 Day Karongwe River Lodge Luxury Safari', 
    description: 'A 5-day luxury safari to Karongwe River Lodge in the Karongwe Private Game Reserve. Includes transfers from JNB, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 43420, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKarongweRiverLodgeLuxurySafariOne,
    gallery: [images.fiveDayKarongweRiverLodgeLuxurySafariTwo, images.fiveDayKarongweRiverLodgeLuxurySafariThree, images.fiveDayKarongweRiverLodgeLuxurySafariFour, images.fiveDayKarongweRiverLodgeLuxurySafariFive, images.fiveDayKarongweRiverLodgeLuxurySafariSix, images.fiveDayKarongweRiverLodgeLuxurySafariSeven, images.fiveDayKarongweRiverLodgeLuxurySafariEight, images.fiveDayKarongweRiverLodgeLuxurySafariNine, images.fiveDayKarongweRiverLodgeLuxurySafariTen, images.fiveDayKarongweRiverLodgeLuxurySafariEleven, images.fiveDayKarongweRiverLodgeLuxurySafariTwelve, images.fiveDayKarongweRiverLodgeLuxurySafariThirteen, images.fiveDayKarongweRiverLodgeLuxurySafariFourteen],
    overview: 'A 5-day luxury safari at the Karongwe River Lodge, departing from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x game drives in an open safari vehicle',
      'All meals and selected local drinks'
    ],
    whatIsNotIncluded: [
      'Flights, premium drinks',
      'Minibar, curio, telephone, spa treatments, laundry, and all other extras'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Karongwe River Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Karongwe River Lodge', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Karongwe River Lodge - Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 43,420 sharing'
    ]
  },
  { 
    id: 'k182', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Kruger Park Classic Safari Tour', 
    description: 'A 5-day classic safari from Johannesburg, featuring accommodation in a Classic Chalet and full-day open vehicle game drives in the Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 12365, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerParkClassicSafariTourOne,
    gallery: [images.fiveDayKrugerParkClassicSafariTourTwo, images.fiveDayKrugerParkClassicSafariTourThree, images.fiveDayKrugerParkClassicSafariTourFour],
    overview: 'A classic 5-day safari experience in Kruger National Park, perfect for first-time visitors.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or hotel',
      '4 Nights accommodation in a Classic Chalet',
      'Full-day open vehicle safari drive (3 total)',
      '1 Sunset game drive',
      'All meals (breakfasts and dinners)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches, alcoholic beverages, and personal items'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to the Kruger National Park rest camp, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Daily early morning wake up, full-day open vehicle game drive.' },
      { title: 'Day 5: Kruger National Park - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,730 sharing'
    ]
  },
  { 
    id: 'k183', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Balule Reserve)',
    title: '5 Day Katekani Tented Lodge Safari', 
    description: 'A 5-day safari from JNB featuring tented accommodation at Katekani Tented Lodge near Balule Reserve. Includes daily game drives and a full-day Kruger safari.', 
    priceType: 'per-person',
    basePrice: 16995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKatekaniTentedLodgeSafariOne,
    gallery: [images.fiveDayKatekaniTentedLodgeSafariTwo, images.fiveDayKatekaniTentedLodgeSafariThree, images.fiveDayKatekaniTentedLodgeSafariFour, images.fiveDayKatekaniTentedLodgeSafariFive, images.fiveDayKatekaniTentedLodgeSafariSix, images.fiveDayKatekaniTentedLodgeSafariSeven, images.fiveDayKatekaniTentedLodgeSafariEight, images.fiveDayKatekaniTentedLodgeSafariNine, images.fiveDayKatekaniTentedLodgeSafariTen, images.fiveDayKatekaniTentedLodgeSafariEleven],
    overview: 'A comfortable 5-day safari with a mix of private reserve and Kruger National Park experiences.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights luxury tented accommodation',
      '2 x 3-hour sunset game drive in Balule Reserve',
      '1 Full-day guided safari drive in Kruger National Park',
      'Full-day Panorama Route tour (highlights)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to/from JNB',
      'Lunches, personal purchases, and tips'
    ],
    itinerary: [
      { title: 'Day 1: Route Game Reserve', description: 'Depart JNB, transfer to Katekani Tented Lodge, check in, and enjoy the sunset drive in Balule Reserve.' },
      { title: 'Day 2: Greater Kruger', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Greater Kruger - Timbavati', description: 'Morning game drive/bush walk, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Greater Kruger - Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 49,995 sharing'
    ]
  },
  { 
    id: 'k184', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Hazyview)',
    title: '5 Day Kruger Adventure Safari', 
    description: 'A 5-day budget-friendly safari departing from Johannesburg. Includes accommodation in Hazyview, open safari vehicle game drives in the Kruger National Park, and a Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 13695, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerAdventureSafariOne,
    gallery: [images.fiveDayKrugerAdventureSafariTwo, images.fiveDayKrugerAdventureSafariThree, images.fiveDayKrugerAdventureSafariFour, images.fiveDayKrugerAdventureSafariFive, images.fiveDayKrugerAdventureSafariSix, images.fiveDayKrugerAdventureSafariSeven, images.fiveDayKrugerAdventureSafariEight, images.fiveDayKrugerAdventureSafariNine, images.fiveDayKrugerAdventureSafariTen, images.fiveDayKrugerAdventureSafariEleven],
    overview: 'An affordable 5-day Kruger safari with a visit to the Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or accommodation',
      '4 Nights accommodation in Hazyview',
      'Full-day open vehicle safari drive (3 total)',
      'Full-day Panorama Route tour',
      'Breakfast and Dinner daily'
    ],
    whatIsNotIncluded: [
      'Lunch meals',
      'All transport to and from the lodge'
    ],
    itinerary: [
      { title: 'Day 1: Hazyview', description: 'Depart JNB, transfer to Hazyview, check in, and enjoy the afternoon game drive in Kruger National Park.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Full day Panorama Route excursion.' },
      { title: 'Day 4: Kruger National Park', description: 'Second full day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 5: Kruger National Park', description: 'Early morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 13,695 sharing'
    ]
  },
  { 
    id: 'k185', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '5 Day Kruger Budget Tented Safari', 
    description: 'A 5-day budget safari from Johannesburg, featuring 4 nights tented accommodation in the Motlala Reserve, 2 full-day Kruger safaris, and a Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 14995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerBudgetTentedSafariOne,
    gallery: [images.fiveDayKrugerBudgetTentedSafariTwo, images.fiveDayKrugerBudgetTentedSafariThree, images.fiveDayKrugerBudgetTentedSafariFour, images.fiveDayKrugerBudgetTentedSafariFive, images.fiveDayKrugerBudgetTentedSafariSix, images.fiveDayKrugerBudgetTentedSafariSeven, images.fiveDayKrugerBudgetTentedSafariEight, images.fiveDayKrugerBudgetTentedSafariNine, images.fiveDayKrugerBudgetTentedSafariTen, images.fiveDayKrugerBudgetTentedSafariEleven, images.fiveDayKrugerBudgetTentedSafariTwelve, images.fiveDayKrugerBudgetTentedSafariThirteen],
    overview: 'A comfortable 5-day budget safari with tented accommodation near Kruger Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights accommodation in an en-suite tented camp',
      '2 Full-day open vehicle safari drive in Kruger National Park',
      'Sunset game drive in Motlala Reserve',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Lunches, alcoholic and non-alcoholic drinks',
      'Guided bush walks (optional)'
    ],
    itinerary: [
      { title: 'Day 1: Tremisana Safari Camp', description: 'Depart JNB, transfer to Motlala Game Reserve, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Panorama Route', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Greater Kruger - Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 14,995 sharing'
    ]
  },
  { 
    id: 'k186', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Kruger Classic Camping Safari Tour', 
    description: 'A 5-day budget camping safari to Kruger National Park. Guests stay in spacious 2-man Meru safari tents, including 4 full-day game drives and all park fees.', 
    priceType: 'per-person',
    basePrice: 10295, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerClassicCampingSafariTourOne,
    gallery: [images.fiveDayKrugerClassicCampingSafariTourTwo, images.fiveDayKrugerClassicCampingSafariTourThree, images.fiveDayKrugerClassicCampingSafariTourFour],
    overview: 'A budget-friendly 5-day camping adventure in the heart of Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB)',
      '4 Nights accommodation in a 2-man safari tent',
      'Full-day open vehicle safari drive (4 total)',
      'All meals and snacks (except lunch on day 2)',
      'Park entrance fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Kruger National Park', description: 'Depart from JNB, transfer to the tented camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Daily full-day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Kruger National Park - Johannesburg', description: 'Early morning game drive, breakfast, and return road transfer to Johannesburg.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,295 sharing'
    ]
  },
  { 
    id: 'k187', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Khoka Moya Luxury Safari', 
    description: 'A 5-day luxury safari to Khoka Moya Tented Camp. Includes return transport from JNB, 4 nights luxury tented accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 36000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKhokaMoyaLuxurySafariOne,
    gallery: [images.fiveDayKhokaMoyaLuxurySafariTwo, images.fiveDayKhokaMoyaLuxurySafariThree, images.fiveDayKhokaMoyaLuxurySafariFour, images.fiveDayKhokaMoyaLuxurySafariFive, images.fiveDayKhokaMoyaLuxurySafariSix, images.fiveDayKhokaMoyaLuxurySafariSeven, images.fiveDayKhokaMoyaLuxurySafariEight, images.fiveDayKhokaMoyaLuxurySafariNine, images.fiveDayKhokaMoyaLuxurySafariTen, images.fiveDayKhokaMoyaLuxurySafariEleven],
    overview: 'A 5-day luxury tented camp safari from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or hotel',
      '4 Nights luxury accommodation at Khoka Moya Tented Camp',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and local drinks',
      'Bush walk'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, personal purchases',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Khoka Moya, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Khoka Moya Camp', description: 'Daily morning game drive/walk, and afternoon game drive.' },
      { title: 'Day 5: Khoka Moya Camp - O.R. Tambo International Airport (JNB)', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 36,000 sharing'
    ]
  },
  { 
    id: 'k188', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Skukuza)',
    title: '5 Day Kruger Shalati - the Train on the Bridge Tour', 
    description: 'A 5-day luxury experience on the stationary train on the Selati Bridge over the Sabie River. Includes luxury accommodation, all-inclusive food and drinks, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 37595, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourOne,
    gallery: [images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourTwo, images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourThree, images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourFour, images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourFive, images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourSix, images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourSeven, images.fiveDayKrugerShalatiTheTrainOnTheBridgeTourEight],
    overview: 'Experience 5 days of luxury aboard a stationary train in the heart of Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers between O.R. Tambo Airport (JNB) and Skukuza Airport (SZK)',
      '4 Nights luxury accommodation in a Carriage Suite on the bridge',
      '4 Morning and 4 afternoon game drives',
      'All meals, soft drinks, house wines, local beers and spirits',
      'Conservation levy'
    ],
    whatIsNotIncluded: [
      'Premium beverages',
      'Spa treatments and purchases from the boutique'
    ],
    itinerary: [
      { title: 'Day 1: Departure and The Train on the Bridge', description: 'Depart from JNB, arrive at Skukuza Airport, transfer to Shalati, check-in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Daily early morning and afternoon game drives, meals, and relaxation on the bridge.' },
      { title: 'Day 5: Kruger National Park', description: 'Morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 37,595 sharing'
    ]
  },
  { 
    id: 'k189', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Blue Canyon)',
    title: '5 Day Kruger Park Treehouse Safari', 
    description: 'A 5-day safari from Johannesburg featuring accommodation in a treehouse. Includes a full-day Kruger safari, sunset drives, and Panorama Route trip.', 
    priceType: 'per-person',
    basePrice: 19895, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerParkTreehouseSafariOne,
    gallery: [images.fiveDayKrugerParkTreehouseSafariTwo, images.fiveDayKrugerParkTreehouseSafariThree, images.fiveDayKrugerParkTreehouseSafariFour, images.fiveDayKrugerParkTreehouseSafariFive, images.fiveDayKrugerParkTreehouseSafariSix, images.fiveDayKrugerParkTreehouseSafariSeven, images.fiveDayKrugerParkTreehouseSafariEight, images.fiveDayKrugerParkTreehouseSafariNine, images.fiveDayKrugerParkTreehouseSafariTen, images.fiveDayKrugerParkTreehouseSafariEleven, images.fiveDayKrugerParkTreehouseSafariTwelve],
    overview: 'A budget/mid-range 5-day safari with unique treehouse accommodation.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights accommodation (lodge, treehouse, or glamping)',
      '2 x Afternoon sunset open vehicle safari drive',
      '2 Full-day guided safari drive in Kruger National Park',
      'Panorama Route tour (highlights)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, lunch/drinks not specified in the itinerary',
      'Alcoholic and non-alcoholic drinks'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger', description: 'Depart JNB, transfer to Tremisana/Treehouse Lodge, check in, and enjoy the sunset drive in Balule Reserve.' },
      { title: 'Day 2: Greater Kruger', description: 'Morning game drive and bush walk in Balule Reserve.' },
      { title: 'Day 3: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 4: Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Greater Kruger - Johannesburg', description: 'Early morning game walk, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,895 sharing'
    ]
  },
  { 
    id: 'k190', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park & Panorama Route',
    title: '5 Day Kruger Park and Panorama Route Hotel Safari', 
    description: 'A 5-day safari and culture package with hotel accommodation, featuring game drives in Kruger National Park and a tour of the famous Panorama Route.', 
    priceType: 'per-person',
    basePrice: 21000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerParkAndPanoramaRouteHotelSafariOne,
    gallery: [images.fiveDayKrugerParkAndPanoramaRouteHotelSafariTwo, images.fiveDayKrugerParkAndPanoramaRouteHotelSafariThree, images.fiveDayKrugerParkAndPanoramaRouteHotelSafariFour, images.fiveDayKrugerParkAndPanoramaRouteHotelSafariFive, images.fiveDayKrugerParkAndPanoramaRouteHotelSafariSix, images.fiveDayKrugerParkAndPanoramaRouteHotelSafariSeven],
    overview: 'A 5-day safari combining Kruger Park and the scenic Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Private road transfers from Johannesburg (JNB) or hotel',
      '4 Nights accommodation in a hotel near the gate (e.g., Hazyview)',
      '3 Full-day open vehicle safari drives in Kruger National Park',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'All meals or beverages',
      'Gratuities and items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg to Hazyview, Sunset / Night Safari', description: 'Depart from JNB, transfer to Hazyview, check in, and enjoy the evening safari drive in a private reserve.' },
      { title: 'Day 2: Full Day Open Vehicle Safari in The Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Safari in a closed air-conditioned vehicle', description: 'Full day Panorama Route excursion.' },
      { title: 'Day 4: Full Day Open Vehicle Safari in The Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Morning Safari and Transfer back to Johannesburg', description: 'Early morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 21,000 sharing'
    ]
  },
  { 
    id: 'k191', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Londolozi Tree Camp Safari', 
    description: 'A 5-day ultra-luxury safari at the renowned Londolozi Tree Camp in the Sabi Sands. This exclusive, all-inclusive package includes twice-daily game drives and walks with experienced rangers.', 
    priceType: 'per-person',
    basePrice: 124800, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayLondoloziTreeCampSafariOne,
    gallery: [images.fiveDayLondoloziTreeCampSafariTwo, images.fiveDayLondoloziTreeCampSafariThree, images.fiveDayLondoloziTreeCampSafariFour, images.fiveDayLondoloziTreeCampSafariFive, images.fiveDayLondoloziTreeCampSafariSix, images.fiveDayLondoloziTreeCampSafariSeven, images.fiveDayLondoloziTreeCampSafariEight, images.fiveDayLondoloziTreeCampSafariNine],
    overview: 'An exclusive 5-day luxury fly-in safari to Londolozi Tree Camp from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transport from JNB (flights can be arranged at an additional charge)',
      '4 Nights luxury accommodation at Londolozi Tree Camp',
      '2 Game drives daily and nature walks',
      'All meals, local drinks, and laundry',
      'Daily yoga class'
    ],
    whatIsNotIncluded: [
      'Flights',
      'Premium drinks, cellar wines, treatments',
      'Gratuities and purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to Londolozi, check-in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Londolozi Game Reserve', description: 'Daily early morning game drive/walk, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Londolozi Game Reserve - Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 249,600 sharing'
    ]
  },
  { 
    id: 'k192', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mluwati Concession)',
    title: '5 Day Luxury Ivory Moon Safari', 
    description: 'A 5-day luxury safari at Ivory Moon Lodge in a 38,000-hectare private reserve. Includes return transfers from JNB, luxury accommodation, a full-day Kruger safari, and multiple private reserve game drives.', 
    priceType: 'per-person',
    basePrice: 24995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayLuxuryIvoryMoonSafariOne,
    gallery: [images.fiveDayLuxuryIvoryMoonSafariTwo, images.fiveDayLuxuryIvoryMoonSafariThree, images.fiveDayLuxuryIvoryMoonSafariFour, images.fiveDayLuxuryIvoryMoonSafariFive, images.fiveDayLuxuryIvoryMoonSafariSix, images.fiveDayLuxuryIvoryMoonSafariSeven, images.fiveDayLuxuryIvoryMoonSafariEight, images.fiveDayLuxuryIvoryMoonSafariNine, images.fiveDayLuxuryIvoryMoonSafariTen, images.fiveDayLuxuryIvoryMoonSafariEleven, images.fiveDayLuxuryIvoryMoonSafariTwelve, images.fiveDayLuxuryIvoryMoonSafariThirteen, images.fiveDayLuxuryIvoryMoonSafariFourteen, images.fiveDayLuxuryIvoryMoonSafariFifteen, images.fiveDayLuxuryIvoryMoonSafariSixteen],
    overview: 'A 5-day luxury safari with exclusivity, a full-day Kruger excursion, and a Panorama Route tour.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation in a bush suite',
      '1 Full-day Kruger open vehicle safari drive',
      '2 Morning and 2 afternoon game drives in private reserve',
      'Full-day Panorama Route excursion'
    ],
    whatIsNotIncluded: [
      'Optional flights, lunches on days 2 and 3',
      'Alcoholic and non-alcoholic drinks (except on day 2 Kruger safari)'
    ],
    itinerary: [
      { title: 'Day 1: Lodge Arrival and Game Drive', description: 'Depart JNB, transfer to Ivory Moon Lodge, check in, and enjoy the afternoon game drive in the private reserve.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full-day excursion in an open safari vehicle to Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Route', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Day Safari', description: 'Morning and afternoon game drives in the private reserve.' },
      { title: 'Day 5: Your Final Safari', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 49,995 sharing'
    ]
  },
  { 
    id: 'k193', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Timbavati)',
    title: '5 Day Kruger Timbavati Budget Safari', 
    description: 'A 5-day budget safari adventure from Johannesburg to the Timbavati area. Includes 4 nights accommodation, 2 full-day open vehicle safari drives, and a Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 17785, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerTimbavatiBudgetSafariOne,
    gallery: [images.fiveDayKrugerTimbavatiBudgetSafariTwo, images.fiveDayKrugerTimbavatiBudgetSafariThree, images.fiveDayKrugerTimbavatiBudgetSafariFour, images.fiveDayKrugerTimbavatiBudgetSafariFive, images.fiveDayKrugerTimbavatiBudgetSafariSix, images.fiveDayKrugerTimbavatiBudgetSafariSeven, images.fiveDayKrugerTimbavatiBudgetSafariEight, images.fiveDayKrugerTimbavatiBudgetSafariNine, images.fiveDayKrugerTimbavatiBudgetSafariTen],
    overview: 'An affordable 5-day safari near the Timbavati Game Reserve, including the Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '4 Nights accommodation (lodge/tented camp at lodge)',
      '2x full-day open vehicle safari drives',
      'Full-day Panorama Route tour',
      'Daily breakfast and dinner'
    ],
    whatIsNotIncluded: [
      'All lunch meals',
      'All beverages'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Timbavati area, check-in, and enjoy dinner at the Lodge.' },
      { title: 'Day 2-3: Kruger National Park & Panorama Route', description: 'Full day Kruger safari drive and Full day Panorama Route tour.' },
      { title: 'Day 4: Kruger National Park', description: 'Second full day open vehicle safari drive into the Kruger National Park.' },
      { title: 'Day 5: Kruger Park - Johannesburg', description: 'Optional morning activity, breakfast, and return shuttle to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 17,785 sharing'
    ]
  },
  { 
    id: 'k194', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Luxury Shishangeni Lodge Experience', 
    description: 'A 5-day luxury safari at Shishangeni Private Lodge in its own private concession, Southern Kruger National Park. Includes return transfers from JNB, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 44710, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayLuxuryShishangeniLodgeExperienceOne,
    gallery: [images.fiveDayLuxuryShishangeniLodgeExperienceTwo, images.fiveDayLuxuryShishangeniLodgeExperienceThree, images.fiveDayLuxuryShishangeniLodgeExperienceFour, images.fiveDayLuxuryShishangeniLodgeExperienceFive, images.fiveDayLuxuryShishangeniLodgeExperienceSix, images.fiveDayLuxuryShishangeniLodgeExperienceSeven, images.fiveDayLuxuryShishangeniLodgeExperienceEight, images.fiveDayLuxuryShishangeniLodgeExperienceNine, images.fiveDayLuxuryShishangeniLodgeExperienceTen],
    overview: 'A 5-day luxury retreat in a private concession within the Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Collection from Johannesburg (JNB) or hotel',
      'Return open vehicle safari transfer from gate',
      '4 Nights accommodation at Shishangeni Lodge',
      '4 Morning and 4 afternoon game drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Flights, personal purchases',
      'Premium beverages, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Shishangeni Safari Lodge', description: 'Depart JNB, transfer to Shishangeni, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Shishangeni Safari Lodge', description: 'Daily morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Shishangeni Lodge - Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 44,710 sharing'
    ]
  },
  { 
    id: 'k195', 
    category: 'Kruger National Park', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park & Pilanesberg National Park',
    title: '5 Day Luxury Kruger and Pilanesberg Combo', 
    description: 'A 5-day combo safari featuring 2 nights in Kapama Game Reserve (Kruger area) and 2 nights in Pilanesberg National Park (near Johannesburg). Includes flights, game drives, and luxury accommodation.', 
    priceType: 'per-person',
    basePrice: 28455, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayLuxuryKrugerAndPilanesbergComboOne,
    gallery: [images.fiveDayLuxuryKrugerAndPilanesbergComboTwo, images.fiveDayLuxuryKrugerAndPilanesbergComboThree, images.fiveDayLuxuryKrugerAndPilanesbergComboFour, images.fiveDayLuxuryKrugerAndPilanesbergComboFive, images.fiveDayLuxuryKrugerAndPilanesbergComboSix, images.fiveDayLuxuryKrugerAndPilanesbergComboSeven, images.fiveDayLuxuryKrugerAndPilanesbergComboEight, images.fiveDayLuxuryKrugerAndPilanesbergComboNine, images.fiveDayLuxuryKrugerAndPilanesbergComboTen, images.fiveDayLuxuryKrugerAndPilanesbergComboEleven],
    overview: 'An exclusive 5-day combo safari covering two premier Big 5 regions in South Africa.',
    duration: '5 Days',
    whatIsIncluded: [
      'Flights to Hoedspruit Eastgate Airport (HDS) and transfers to/from JNB',
      '4 Nights luxury accommodation (Kapama & Pilanesberg)',
      'Game drives as per itinerary',
      'All meals and local drinks in Kapama',
      'Conservation fees'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'All personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Game Reserve', description: 'Depart JNB, fly to HDS, transfer to Kapama, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Kapama Private Game Reserve', description: 'Morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 3: Kapama Safari and Johannesburg', description: 'Morning game drive, fly from HDS to JNB, and road transfer to Pilanesberg.' },
      { title: 'Day 4: Pilanesberg National Park', description: 'Morning and afternoon game drives in Pilanesberg National Park.' },
      { title: 'Day 5: Pilanesberg Safari and Johannesburg', description: 'Morning game drive, breakfast, and road transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 56,890 sharing'
    ]
  },
  { 
    id: 'k197', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Nkambeni Tented Lodge Experience', 
    description: 'A 5-day budget-friendly safari with accommodation at Nkambeni Tented Lodge inside the Kruger National Park. Includes road transfers from JNB, full-day Kruger safari, and the Panorama Route.', 
    priceType: 'per-person',
    basePrice: 16655, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayNkambeniTentedLodgeExperienceOne,
    gallery: [images.fiveDayNkambeniTentedLodgeExperienceTwo, images.fiveDayNkambeniTentedLodgeExperienceThree, images.fiveDayNkambeniTentedLodgeExperienceFour, images.fiveDayNkambeniTentedLodgeExperienceFive, images.fiveDayNkambeniTentedLodgeExperienceSix, images.fiveDayNkambeniTentedLodgeExperienceSeven, images.fiveDayNkambeniTentedLodgeExperienceEight, images.fiveDayNkambeniTentedLodgeExperienceNine],
    overview: 'A 5-day budget safari experience with accommodation inside Kruger National Park and a Panorama Route tour.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights accommodation in a tented lodge',
      'Full-day open vehicle safari drive (2 total)',
      'Full-day Panorama Route tour',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium drinks',
      'All meals, except breakfast and dinner'
    ],
    itinerary: [
      { title: 'Day 1: The Nkambeni Safari Camp', description: 'Depart JNB, transfer to Nkambeni Tented Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Blyde River Canyon', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Full Day Kruger National Park', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Nkambeni Safari Camp', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 16,655 sharing'
    ]
  },
  { 
    id: 'k199', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Balule Private Game Reserve',
    title: '4 Day Unembeza Boutique Lodge Safari', 
    description: 'A 4-day luxury safari to Unembeza Boutique Lodge, located near the Big 5 reserves. Includes transfers from JNB, 3 nights luxury accommodation, a full-day Kruger safari, and Panorama Route trip.', 
    priceType: 'per-person',
    basePrice: 19495, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayUnembezaBoutiqueLodgeSafariOne,
    gallery: [images.fourDayUnembezaBoutiqueLodgeSafariTwo, images.fourDayUnembezaBoutiqueLodgeSafariThree, images.fourDayUnembezaBoutiqueLodgeSafariFour, images.fourDayUnembezaBoutiqueLodgeSafariFive, images.fourDayUnembezaBoutiqueLodgeSafariSix, images.fourDayUnembezaBoutiqueLodgeSafariSeven, images.fourDayUnembezaBoutiqueLodgeSafariEight, images.fourDayUnembezaBoutiqueLodgeSafariNine, images.fourDayUnembezaBoutiqueLodgeSafariTen, images.fourDayUnembezaBoutiqueLodgeSafariEleven, images.fourDayUnembezaBoutiqueLodgeSafariTwelve, images.fourDayUnembezaBoutiqueLodgeSafariThirteen],
    overview: 'A 4-day luxury safari experience combining Big 5 game viewing and the Panorama Route.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '3 Nights accommodation at Unembeza Boutique Lodge',
      '1 Full-day Kruger open vehicle safari',
      '1 Sunset drive in a private reserve',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'All meals, except breakfast and dinner',
      'Optional sunrise drive'
    ],
    itinerary: [
      { title: 'Day 1: Your Safari Begins', description: 'Depart JNB, transfer to Unembeza Lodge, check in, and enjoy the sunset drive.' },
      { title: 'Day 2: Full Day Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Panorama Route', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Departure', description: 'Optional sunrise safari (extra cost), breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,495 sharing'
    ]
  },
  { 
    id: 'k209', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Balule Private Game Reserve (nDzuti)',
    title: '5 Day nDzuti Camp Safari', 
    description: 'A 5-day safari at nDzuti Camp in the Balule Private Game Reserve. Includes return transfers from JNB, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 21080, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayNDzutiCampSafariOne,
    gallery: [images.fiveDayNDzutiCampSafariTwo, images.fiveDayNDzutiCampSafariThree, images.fiveDayNDzutiCampSafariFour, images.fiveDayNDzutiCampSafariFive, images.fiveDayNDzutiCampSafariSix, images.fiveDayNDzutiCampSafariSeven, images.fiveDayNDzutiCampSafariEight, images.fiveDayNDzutiCampSafariNine],
    overview: 'A unique 5-day Big 5 safari experience at nDzuti Camp in the Balule Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '4 Nights accommodation in an air-conditioned chalet',
      '4 Morning and 4 afternoon safari drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Personal purchases',
      'Conservation fee (payable at the camp)'
    ],
    itinerary: [
      { title: 'Day 1: Transfer from Johannesburg to nDzuti Camp', description: 'Depart JNB, transfer to nDzuti Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Full-Day Open Vehicle Safari and Leisure', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Morning Safari and Transfer Back to Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 21,080 sharing'
    ]
  },
  { 
    id: 'k210', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park & Kapama Private Reserve',
    title: '5 Day Radisson And Kapama Ultimate Safari Extravaganza', 
    description: 'A 5-day safari combining a luxury stay at Radisson Kruger Safari Lodge and Kapama Private Game Reserve. Includes transfers, a full-day Kruger safari, and private game reserve drives.', 
    priceType: 'per-person',
    basePrice: 20640, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaOne,
    gallery: [images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaTwo, images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaThree, images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaFour, images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaFive, images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaSix, images.fiveDayRadissonAndKapamaUltimateSafariExtravaganzaSeven],
    overview: 'The ultimate 5-day safari experience combining two premier reserves near Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Upgraded transfer from O.R. Tambo Airport (JNB) or hotel',
      '2 Nights accommodation at Radisson Lodge and 2 Nights at Kapama Reserve',
      'Game drives as per itinerary (full day Kruger safari)',
      'All meals and local drinks',
      'Conservation fees'
    ],
    whatIsNotIncluded: [
      'Lunches excluded on certain days',
      'Premium beverages, personal purchases, and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Kruger National Park', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy a sunset drive and dinner.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Kapama Wildlife Immersion', description: 'Morning game drive, travel to Kapama Reserve, and enjoy the afternoon game drive.' },
      { title: 'Day 4: Kapama Wildlife Immersion', description: 'Full day of wildlife activities in Kapama, including morning and afternoon game drives.' },
      { title: 'Day 5: Farewell to Kapama', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 41,280 sharing'
    ]
  },
  { 
    id: 'k211', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Timbavati Private Nature Reserve',
    title: '5-Day Luxury Timbavati Rockfig Safari Lodge', 
    description: 'Rockfig Safari Lodge offers an exclusive, all-inclusive 5-day safari in the Timbavati Private Nature Reserve. Includes luxury accommodation, two daily game drives, walking safaris, and superb dining.', 
    priceType: 'per-person',
    basePrice: 64980, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayLuxuryTimbavatiRockfigSafariLodgeOne,
    gallery: [images.fiveDayLuxuryTimbavatiRockfigSafariLodgeTwo, images.fiveDayLuxuryTimbavatiRockfigSafariLodgeThree, images.fiveDayLuxuryTimbavatiRockfigSafariLodgeFour, images.fiveDayLuxuryTimbavatiRockfigSafariLodgeFive, images.fiveDayLuxuryTimbavatiRockfigSafariLodgeSix, images.fiveDayLuxuryTimbavatiRockfigSafariLodgeSeven, images.fiveDayLuxuryTimbavatiRockfigSafariLodgeEight],
    overview: 'An exclusive 5-day luxury fly-in safari to Timbavati Rockfig Safari Lodge.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return shuttle from O.R. Tambo International Airport (JNB) or flight to Hoedspruit airport',
      '4 Nights luxury accommodation',
      '4 Morning and 4 afternoon game drives, walking safaris',
      'All meals, drinks (both soft drink and alcoholic beverages), and laundry'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Premium brand drinks'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Rockfig Safari Lodge, check in, and enjoy your first afternoon game drive.' },
      { title: 'Day 2-3: Morning and Afternoon Safari Drive', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Guided Walking Safari and Sunset Safari Drive', description: 'Morning guided walk, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Morning Safari Drive on Departure', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 129,960 sharing'
    ]
  },
  { 
    id: 'k222', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Mdluli Concession)',
    title: '5-Day Mdluli Safari Lodge Tour', 
    description: 'A 5-day safari at Mdluli Safari Lodge, located in a private concession within Kruger National Park. Includes 4 nights luxury tented accommodation, 2 full-day Kruger safaris, and game drives.', 
    priceType: 'per-person',
    basePrice: 20485, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayMdluliSafariLodgeTourOne,
    gallery: [images.fiveDayMdluliSafariLodgeTourTwo, images.fiveDayMdluliSafariLodgeTourThree, images.fiveDayMdluliSafariLodgeTourFour, images.fiveDayMdluliSafariLodgeTourFive, images.fiveDayMdluliSafariLodgeTourSix, images.fiveDayMdluliSafariLodgeTourSeven, images.fiveDayMdluliSafariLodgeTourEight],
    overview: 'A 5-day safari retreat at Mdluli Safari Lodge, situated within the Kruger National Park.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '4 Nights luxury tented accommodation',
      '2 Full-day Kruger Safari drives',
      '1 Sunset game drive',
      'Dinner, breakfast, and lunch daily (except on safari days)'
    ],
    whatIsNotIncluded: [
      'All beverages',
      'Gratuities',
      'Items of personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Mdluli Safari Lodge Arrival', description: 'Depart JNB, transfer to Mdluli Lodge, check in, and enjoy the afternoon game drive in the private concession.' },
      { title: 'Day 2 & 4: Full Day Kruger Game Drive', description: 'Full day open vehicle game drive inside the Kruger National Park (2 days).' },
      { title: 'Day 3: Early Morning Game Drive', description: 'Morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Final Morning Game Drive & Return to Johannesburg', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 40,965 sharing'
    ]
  },
  { 
    id: 'k223', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Manyeleti Game Reserve',
    title: '5-Day Mantobeni Luxury Safari', 
    description: 'A 5-day luxury safari to Mantobeni Tented Camp in the Manyeleti Game Reserve. Includes return transfers from JNB, 4 nights accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 32100, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayMantobeniLuxurySafariOne,
    gallery: [images.fiveDayMantobeniLuxurySafariTwo, images.fiveDayMantobeniLuxurySafariThree, images.fiveDayMantobeniLuxurySafariFour, images.fiveDayMantobeniLuxurySafariFive, images.fiveDayMantobeniLuxurySafariSix, images.fiveDayMantobeniLuxurySafariSeven, images.fiveDayMantobeniLuxurySafariEight, images.fiveDayMantobeniLuxurySafariNine, images.fiveDayMantobeniLuxurySafariTen],
    overview: 'A 5-day luxury tented camp safari in the exclusive Manyeleti Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation at Mantobeni Tented Camp',
      '4 Morning game drives and 4 afternoon game drives',
      'All meals and selected drinks as per itinerary'
    ],
    whatIsNotIncluded: [
      'Drinks, personal expenses and souvenirs',
      'Gratuities and imported beverages'
    ],
    itinerary: [
      { title: 'Day 1: Departure and Mantobeni Tented Camp Arrival', description: 'Depart JNB, transfer to Mantobeni Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Manyeleti Game Reserve', description: 'Daily morning game drive/walk, brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Final Game Drive & Departure for Johannesburg', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 32,100 sharing'
    ]
  },
  { 
    id: 'k224', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5-Day Kapama Karula Lodge Safari', 
    description: 'A 5-day luxury road safari to Kapama Karula Lodge, featuring all-inclusive accommodation, eight game drives, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 57200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKapamaKarulaLodgeSafariOneB,
    gallery: [images.fiveDayKapamaKarulaLodgeSafariTwoB, images.fiveDayKapamaKarulaLodgeSafariThreeB, images.fiveDayKapamaKarulaLodgeSafariFourB, images.fiveDayKapamaKarulaLodgeSafariFiveB, images.fiveDayKapamaKarulaLodgeSafariSixB, images.fiveDayKapamaKarulaLodgeSafariSevenB, images.fiveDayKapamaKarulaLodgeSafariEightB, images.fiveDayKapamaKarulaLodgeSafariNineB],
    overview: 'A 5-day luxury road trip from Johannesburg to Kapama Karula Lodge.',
    duration: '5 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium alcoholic beverages',
      'Gratuities',
      'Personal purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Scenic Transfer & Kapama Arrival', description: 'Depart JNB, transfer to Kapama Karula Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Safari Adventure & Kapama Enjoyment', description: 'Daily morning game drive/walk, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Final Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 114,400 sharing'
    ]
  },
  { 
    id: 'k225', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5-Day Kapama Homestead Fly-in Tour', 
    description: 'When you book a 5-day Kapama Homestead Fly-in safari, you can bypass long road transfers. Land at Hoedspruit Eastgate Airport from Cape Town or Johannesburg and be transferred by a friendly guide to the exclusive Kapama Homestead. Ideal for a group of 6 people to ensure that you are given an unforgettable escape to the wilderness. With privileged access to private game drives led by experienced guides, guests can embark on exhilarating safari experiences. You will have the use of a private vehicle with your guide and assistant guide, daily bush walks, and a private chef.', 
    priceType: 'per-person',
    basePrice: 368400, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayKapamaHomesteadFlyInTourOne,
    gallery: [images.fiveDayKapamaHomesteadFlyInTourTwo, images.fiveDayKapamaHomesteadFlyInTourThree, images.fiveDayKapamaHomesteadFlyInTourFour, images.fiveDayKapamaHomesteadFlyInTourFive, images.fiveDayKapamaHomesteadFlyInTourSix, images.fiveDayKapamaHomesteadFlyInTourSeven, images.fiveDayKapamaHomesteadFlyInTourEight, images.fiveDayKapamaHomesteadFlyInTourNine],
    overview: 'The ultimate exclusive 5-day fly-in luxury safari experience at Kapama Homestead, booked privately for up to 6 people.',
    duration: '5 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Exclusive use of the private Kapama Homestead',
      '4 Nights accommodation at Kapama Homestead',
      'Private game drives and guided bush walks',
      'All meals, snacks and drinks (local wine and premium beer)'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Gratuities',
      'Visa costs if applicable'
    ],
    itinerary: [
      { title: 'Day 1: Kapama Homestead Arrival', description: 'Fly into HDS, transfer to Kapama Homestead, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Early Wake & Open Vehicle Game Drive or Bush Walk', description: 'Daily early morning game drive or bush walk, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Bush Walk or Game Drive & Farewell', description: 'Morning activity, breakfast, and transfer back to HDS for return flight.' }
    ],
    additionalInfo: [
      'Starting from ZAR 368,400 sharing'
    ]
  },
  { 
    id: 'k226', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5-Day Radisson Kruger Safari', 
    description: 'A 5-day luxury road safari to the Radisson Kruger Safari Lodge, featuring all meals, a full-day Kruger safari, and a full-day Panorama Route excursion.', 
    priceType: 'per-person',
    basePrice: 18995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayRadissonKrugerSafariOne,
    gallery: [images.fiveDayRadissonKrugerSafariTwo, images.fiveDayRadissonKrugerSafariThree, images.fiveDayRadissonKrugerSafariFour, images.fiveDayRadissonKrugerSafariFive, images.fiveDayRadissonKrugerSafariSix, images.fiveDayRadissonKrugerSafariSeven, images.fiveDayRadissonKrugerSafariEight, images.fiveDayRadissonKrugerSafariNine, images.fiveDayRadissonKrugerSafariTen],
    overview: 'A 5-day luxury road trip from Johannesburg combining safari and the Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '1 Full-day Kruger open vehicle safari',
      '1 x 3 hour sunset drive and 1 x 3 hour sunrise drive',
      'Full-day Panorama Route tour'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages (optional)',
      'Gratuities and premium drinks'
    ],
    itinerary: [
      { title: 'Day 1: Arrival and Sunset Drive Adventure', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy the sunset drive.' },
      { title: 'Day 2: Full-Day Panorama Route Exploration', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 3: Full-Day Open Vehicle Kruger Safari', description: 'Full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 4: Full-Day Open Vehicle Kruger Safari', description: 'Second full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 5: Optional Morning Safari & Farewell', description: 'Optional morning activity, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 18,995 sharing'
    ]
  },
  { 
    id: 'k227', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sabi Game Reserve',
    title: '5 Day Sabi Sabi Bush Lodge Safari (Main)', 
    description: 'A 5-day luxury safari at the world-renowned Sabi Sabi Bush Lodge in Sabi Sands. Includes 2 game drives daily and luxury accommodation in a thatched suite.', 
    priceType: 'per-person',
    basePrice: 58850, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDaySabiSabiBushLodgeSafariMainOne,
    gallery: [images.fiveDaySabiSabiBushLodgeSafariMainTwo, images.fiveDaySabiSabiBushLodgeSafariMainThree, images.fiveDaySabiSabiBushLodgeSafariMainFour, images.fiveDaySabiSabiBushLodgeSafariMainFive, images.fiveDaySabiSabiBushLodgeSafariMainSix, images.fiveDaySabiSabiBushLodgeSafariMainSeven, images.fiveDaySabiSabiBushLodgeSafariMainEight, images.fiveDaySabiSabiBushLodgeSafariMainNine, images.fiveDaySabiSabiBushLodgeSafariMainTen, images.fiveDaySabiSabiBushLodgeSafariMainEleven],
    overview: 'An unforgettable 5-day luxury safari in the Sabi Sands Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return road transfer from JNB or Sabi Sabi Airstrip (flights at cost)',
      '4 Nights luxury accommodation at Sabi Sabi Bush Lodge',
      '2 Morning and 2 afternoon open vehicle safari drives daily',
      'Bush walk',
      'All meals, local beverages, and entrance fees'
    ],
    whatIsNotIncluded: [
      'Flights',
      'Curio shop purchases, premium drinks, laundry'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to Bush Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Sabi Sabi Bush Lodge', description: 'Daily morning game drive/walk, breakfast/brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Sabi Sabi Bush Lodge - Johannesburg', description: 'Final game drive, breakfast, and return transfer to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 73,278 sharing'
    ]
  },
  { 
    id: 'k228', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Balule Reserve)',
    title: '5 Day Radisson Greenfire Tour', 
    description: 'A 5-day safari combining a luxury stay at Radisson Kruger Safari Lodge and Greenfire Game Lodge. Includes transfers, 2 full-day Kruger safaris, and private reserve drives.', 
    priceType: 'per-person',
    basePrice: 27655, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayRadissonGreenfireTourOne,
    gallery: [images.fiveDayRadissonGreenfireTourTwo, images.fiveDayRadissonGreenfireTourThree, images.fiveDayRadissonGreenfireTourFour, images.fiveDayRadissonGreenfireTourFive, images.fiveDayRadissonGreenfireTourSix, images.fiveDayRadissonGreenfireTourSeven, images.fiveDayRadissonGreenfireTourEight, images.fiveDayRadissonGreenfireTourNine],
    overview: 'A 5-day eco-luxury safari combining Radisson and Greenfire Game Lodge experiences.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transport from Johannesburg (JNB) or hotel',
      'Accommodation at Radisson Lodge and Greenfire Lodge (4 nights total)',
      '2 Full-day Kruger open vehicle safari',
      '2x 3-hour game drives in Balule Reserve',
      'All meals as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Purchases of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Blue Canyon Safari Welcome', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy a sunset drive and dinner.' },
      { title: 'Day 2: Kruger Safari Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Greenfire Game Lodge', description: 'Morning activity, transfer to Greenfire Game Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 4: Balule Game Reserve Safari', description: 'Morning game drive/walk, and afternoon game drive.' },
      { title: 'Day 5: Farewell from Balule Reserve', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 27,655 sharing'
    ]
  },
  { 
    id: 'k229', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Thornybush Game Reserve',
    title: '5 Day Tangala Safari Camp in Thornybush Game Reserve', 
    description: 'A 5-day safari to Tangala Safari Camp in the Greater Kruger Thornybush Game Reserve. Includes return transfers from JNB, 4 nights luxury accommodation, and 8 game drives.', 
    priceType: 'per-person',
    basePrice: 19395, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayTangalaSafariCampInThornybushGameReserveOne,
    gallery: [images.fiveDayTangalaSafariCampInThornybushGameReserveTwo, images.fiveDayTangalaSafariCampInThornybushGameReserveThree, images.fiveDayTangalaSafariCampInThornybushGameReserveFour, images.fiveDayTangalaSafariCampInThornybushGameReserveFive, images.fiveDayTangalaSafariCampInThornybushGameReserveSix, images.fiveDayTangalaSafariCampInThornybushGameReserveSeven, images.fiveDayTangalaSafariCampInThornybushGameReserveEight],
    overview: 'An affordable 5-day colonial-style safari in the exclusive Thornybush Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transport from Johannesburg (JNB)',
      '4 Nights accommodation at Tangala Safari Camp',
      '2 Game drives per day (8 total) in a 4x4 safari vehicle',
      'All meals as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international flights',
      'Gratuities, community and conservation fees'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to Tangala Camp, check in, lunch, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Thornybush Safari Immersion', description: 'Daily early morning game drive/walk, breakfast, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Farewell to the Wild', description: 'Morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,395 sharing'
    ]
  },
  { 
    id: 'k230', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Radisson Kruger Fly-In Safari from Johannesburg', 
    description: 'A 5-day luxury fly-in safari from Johannesburg to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 7 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 22850, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgOne,
    gallery: [images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgTwo, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgThree, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgFour, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgFive, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgSix, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgSeven, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgEight, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgNine, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgTen, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgEleven, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgTwelve, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgThirteen, images.fiveDayRadissonKrugerFlyInSafariFromJohannesburgFourteen],
    overview: 'A 5-day luxury fly-in safari to Radisson Kruger Safari Lodge from Johannesburg.',
    duration: '5 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Return airport transport from Eastgate Airport to Radisson',
      '4 Nights accommodation',
      '3 x 3 hour sunset drive and 3 x 3 hour sunrise drive',
      'Breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages optional',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Radisson Hotel Arrival & Sunset Game Drive', description: 'Fly from JNB, arrive at Hoedspruit, transfer to Radisson Lodge, and enjoy the sunset drive.' },
      { title: 'Day 2 & 4: Full Day Kruger Adventure', description: 'Daily full-day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Panorama Route Exploration', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 5: Optional Safari or Unwind & Return to Eastgate Airport', description: 'Optional morning activity, breakfast, and return flight to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,850 sharing'
    ]
  },
  { 
    id: 'k231', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sands Game Reserve',
    title: '5 Day Sabi Sabi Bush Lodge Safari', 
    description: 'A 5-day luxury safari at the world-renowned Sabi Sabi Bush Lodge in Sabi Sands. This all-inclusive package features 4 nights luxury accommodation, 8 game drives, and optional bush walks.', 
    priceType: 'per-person',
    basePrice: 79278, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDaySabiSabiBushLodgeSafariOne,
    gallery: [images.fiveDaySabiSabiBushLodgeSafariTwo, images.fiveDaySabiSabiBushLodgeSafariThree, images.fiveDaySabiSabiBushLodgeSafariFour, images.fiveDaySabiSabiBushLodgeSafariFive, images.fiveDaySabiSabiBushLodgeSafariSix, images.fiveDaySabiSabiBushLodgeSafariSeven, images.fiveDaySabiSabiBushLodgeSafariEight, images.fiveDaySabiSabiBushLodgeSafariNine, images.fiveDaySabiSabiBushLodgeSafariTen, images.fiveDaySabiSabiBushLodgeSafariEleven],
    overview: 'An unforgettable 5-day luxury safari in the Sabi Sands Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfer from JNB or Sabi Sabi Airstrip (flights at cost)',
      '4 Nights luxury accommodation at Sabi Sabi Bush Lodge',
      '2 Game drives per day (8 total) and bush walk',
      'All meals, local beverages, and entrance fees'
    ],
    whatIsNotIncluded: [
      'Flights',
      'Curio shop purchases, premium drinks, laundry'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to Bush Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Sabi Sabi Bush Lodge', description: 'Daily morning game drive/walk, breakfast/brunch, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Sabi Sabi Bush Lodge - Johannesburg', description: 'Final game drive, breakfast, and return transfer to JNB or airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 73,278 sharing'
    ]
  },
  { 
    id: 'k232', 
    category: 'Kruger National Park', 
    subCategory: 'Fly-In Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Radisson Kruger Fly-In Safari from Cape Town', 
    description: 'A 5-day fly-in safari from Cape Town to the Radisson Kruger Safari Lodge, including return flights, airport transfers, and 7 open safari vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 22800, 
    isHotelPickupAvailable: false, 
    pickupProvinceRestriction: 'None (Flights only)', 
    pricingTiers: [],
    img: images.fiveDayRadissonKrugerFlyInSafariFromCapeTownOne,
    gallery: [images.fiveDayRadissonKrugerFlyInSafariFromCapeTownTwo, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownThree, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownFour, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownFive, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownSix, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownSeven, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownEight, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownNine, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownTen, images.fiveDayRadissonKrugerFlyInSafariFromCapeTownEleven],
    overview: 'A 5-day luxury fly-in safari to Radisson Kruger Safari Lodge from Cape Town.',
    duration: '5 Days',
    whatIsIncluded: [
      'Flights to and from Hoedspruit',
      'Return airport transport from Eastgate Airport to Radisson',
      '4 Nights accommodation',
      '3 x 3 hour sunset drive and 3 x 3 hour sunrise drive',
      'Breakfasts and dinners'
    ],
    whatIsNotIncluded: [
      'Lunches & beverages optional (R1250 pp)',
      'Premium drinks and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Radisson Hotel Arrival & Sunset Game Drive', description: 'Fly from CPT, arrive at Hoedspruit, transfer to Radisson Lodge, and enjoy the sunset drive.' },
      { title: 'Day 2: Kruger National Park Day Trip', description: 'Full day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 3: Panorama Route Exploration', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Full Day Kruger Adventure', description: 'Second full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 5: Optional Safari or Unwind & Return to Eastgate Airport', description: 'Optional morning activity, breakfast, and return flight to CPT.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,800 sharing'
    ]
  },
  { 
    id: 'k233', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Balule Reserve)',
    title: '5 Day Kruger Tremisana Lodge Safari', 
    description: 'A 5-day safari with road transfers from JNB, sunset/sunrise and full-day game drives. Accommodation is in a thatched chalet at Tremisana Game Lodge near the Balule Reserve.', 
    priceType: 'per-person',
    basePrice: 18995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKrugerTremisanaLodgeSafariOne,
    gallery: [images.fiveDayKrugerTremisanaLodgeSafariTwo, images.fiveDayKrugerTremisanaLodgeSafariThree, images.fiveDayKrugerTremisanaLodgeSafariFour, images.fiveDayKrugerTremisanaLodgeSafariFive, images.fiveDayKrugerTremisanaLodgeSafariSix],
    overview: 'A popular 5-day safari package featuring various game drive experiences near Kruger.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights accommodation in a thatched chalet',
      'Sunset/sunrise game drives and a full-day Kruger safari (2 total)',
      'Bush walk',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Activities not mentioned in the itinerary',
      'Visa fees if required'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger', description: 'Depart JNB, transfer to Tremisana Game Lodge, and enjoy the sunset game drive and bush braai.' },
      { title: 'Day 2: Greater Kruger', description: 'Early morning bush walk, breakfast, and full-day open vehicle game drive in Kruger National Park.' },
      { title: 'Day 3-4: Kruger National Park', description: 'Daily early morning game drive, breakfast, lunch, and afternoon game drive.' },
      { title: 'Day 5: Greater Kruger - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 18,995 sharing'
    ]
  },
  { 
    id: 'k234', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5-Day Game Drive Package In Kruger National Park', 
    description: 'A 5-day game drive focused package with accommodation near Kruger, including 2 full-day Kruger safaris, 2 private reserve safaris, and a Panorama Route tour.', 
    priceType: 'per-person',
    basePrice: 10995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hoedspruit or Hazyview area)', 
    pricingTiers: [],
    img: images.fiveDayGameDrivePackageInKrugerNationalParkOne,
    gallery: [images.fiveDayGameDrivePackageInKrugerNationalParkTwo, images.fiveDayGameDrivePackageInKrugerNationalParkThree, images.fiveDayGameDrivePackageInKrugerNationalParkFour, images.fiveDayGameDrivePackageInKrugerNationalParkFive, images.fiveDayGameDrivePackageInKrugerNationalParkSix, images.fiveDayGameDrivePackageInKrugerNationalParkSeven, images.fiveDayGameDrivePackageInKrugerNationalParkEight, images.fiveDayGameDrivePackageInKrugerNationalParkNine],
    overview: 'An affordable 5-day package focused purely on game viewing, including the Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Pickup anywhere in Hoedspruit or Hazyview area',
      '4 Nights accommodation in a comfortable lodge',
      '2 Full-day Kruger National Park safari drives',
      '2 Sunset/Morning safari in a private game reserve',
      'Full-day Panorama Route scenic drive'
    ],
    whatIsNotIncluded: [
      'Meals and beverages',
      'Accommodation',
      'Items of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sunset Private Reserve Game Drive', description: 'Arrive at the lodge, check in, and depart for a sunset game drive in a private reserve.' },
      { title: 'Day 2-4: Full Day Kruger Game Drive', description: 'Daily full day game drive excursion into the Kruger National Park, plus Panorama Route tour.' },
      { title: 'Day 5: Morning Game Drive', description: 'Morning game drive in the private reserve, followed by departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 10,995 sharing'
    ]
  },
  { 
    id: 'k235', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sabi Game Reserve',
    title: '5 Day Sabi Sabi Bush Camp Safari', 
    description: 'A 5-day luxury safari at Sabi Sands Bush Camp. Includes transfers from JNB, 4 nights luxury accommodation, 2 game drives daily, and optional bush walks.', 
    priceType: 'per-person',
    basePrice: 22883, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDaySabiSabiBushCampSafariOne,
    gallery: [images.fiveDaySabiSabiBushCampSafariOne],
    overview: 'A 5-day luxury tented camp safari in the Sabi Sands Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB)',
      '4 Nights accommodation at Bush Camp',
      '4 x 3 hour game drives in Sabi Sand',
      'Newington Gate Highlights Tour',
      'Breakfast and dinner daily'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Lunches, personal purchases, and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Kruger National Park', description: 'Depart JNB, transfer to Sabi Sands Bush Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Greater Kruger - Sabi Sand Game Reserve', description: 'Daily morning game drive/walk, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Greater Kruger - Johannesburg', description: 'Morning bush walk, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 22,883 sharing'
    ]
  },
  { 
    id: 'k236', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kruger National Park (Southern Section)',
    title: '5 Day Private Chalet or Hotel Safari', 
    description: 'A 5-day safari featuring private road transfers, accommodation in a comfortable chalet or hotel near Kruger, and game drives in both a private reserve and the national park.', 
    priceType: 'per-person',
    basePrice: 12855, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayPrivateChaletOrHotelSafariOne,
    gallery: [images.fiveDayPrivateChaletOrHotelSafariTwo, images.fiveDayPrivateChaletOrHotelSafariThree, images.fiveDayPrivateChaletOrHotelSafariFour, images.fiveDayPrivateChaletOrHotelSafariFive, images.fiveDayPrivateChaletOrHotelSafariSix],
    overview: 'A 5-day safari combining a private reserve game drive with a full-day Kruger Park experience and Panorama Route.',
    duration: '5 Days',
    whatIsIncluded: [
      'Private round-trip transfers from Johannesburg (JNB) or hotel',
      '4 Nights accommodation in a comfortable chalet or hotel',
      'Morning and afternoon safaris in open vehicles every day',
      '1 Private Panorama Route drive with bush walk'
    ],
    whatIsNotIncluded: [
      'Scheduled flights to and from JNB',
      'All meals, except breakfast and dinner on Day 1',
      'All gratuities and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Transfer to Kruger park via Panorama Route', description: 'Depart from JNB, drive the Panorama Route, check in, and enjoy an afternoon private drive into the park.' },
      { title: 'Day 2-4: Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park (3 days).' },
      { title: 'Day 5: Kruger National Park and transfer back to Johannesburg', description: 'Early morning wake up, breakfast, and return road transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 25,710 sharing'
    ]
  },
  { 
    id: 'k239', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Kapama Private Game Reserve',
    title: '5 Day Kapama Karula Lodge Safari', 
    description: 'A 5-day luxury road safari to Kapama Karula Lodge, featuring all-inclusive accommodation, eight game drives, and transfers from Johannesburg.', 
    priceType: 'per-person',
    basePrice: 57200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayKapamaKarulaLodgeSafariOne,
    gallery: [images.fiveDayKapamaKarulaLodgeSafariTwo, images.fiveDayKapamaKarulaLodgeSafariThree, images.fiveDayKapamaKarulaLodgeSafariFour, images.fiveDayKapamaKarulaLodgeSafariFive, images.fiveDayKapamaKarulaLodgeSafariSix, images.fiveDayKapamaKarulaLodgeSafariSeven, images.fiveDayKapamaKarulaLodgeSafariEight, images.fiveDayKapamaKarulaLodgeSafariNine],
    overview: 'A 5-day luxury road trip from Johannesburg to Kapama Karula Lodge.',
    duration: '5 Days',
    whatIsIncluded: [
      'Transfers to/from O.R. Tambo Airport (JNB) or hotel',
      '4 Nights luxury accommodation',
      '8 x 3-hour game drives in an open safari vehicle',
      'All meals and selected local beverages as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled flights, premium alcoholic beverages',
      'Gratuities',
      'Personal purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Scenic Transfer & Kapama Arrival', description: 'Depart JNB, transfer to Kapama Karula Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Safari Adventure & Kapama Enjoyment', description: 'Daily morning game drive/walk, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Final Game Drive & Farewell', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 114,400 sharing'
    ]
  },
  { 
    id: 'k241', 
    category: 'Kruger National Park & Victoria Falls', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park, Victoria Falls, Cape Town',
    title: '10 Day Kruger Park, Victoria Falls & Cape Town Comfort Safari', 
    description: 'A comprehensive 10-day safari package combining the Big 5 experience in Kruger National Park, the majesty of Victoria Falls, and the cultural history of Cape Town.', 
    priceType: 'per-person',
    basePrice: 42695, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariOne,
    gallery: [images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariTwo, images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariThree, images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariFour, images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariFive, images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariSix, images.tenDayKrugerParkVictoriaFallsCapeTownComfortSafariSeven],
    overview: 'A 10-day multi-country adventure covering South Africa\'s safari and urban highlights plus Victoria Falls.',
    duration: '10 Days',
    whatIsIncluded: [
      'Return flights to Victoria Falls',
      '8 Nights accommodation at various lodges/hotels',
      'Full-day open vehicle safari drive in Kruger National Park',
      'Chobe National Park day trip',
      'Cape Town city tour and Wine Route tour'
    ],
    whatIsNotIncluded: [
      'Scheduled flights from JNB to Kruger, Victoria Falls, or Cape Town',
      'Lunches, alcoholic beverages, park fees, and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo Airport Road', description: 'Depart JNB, road transfer to Kruger area lodge, and afternoon game drive.' },
      { title: 'Day 2: Greater Kruger & Kruger National Park', description: 'Morning game drive, then full-day open vehicle safari in Kruger National Park.' },
      { title: 'Day 3: Kruger National Park - Victoria Falls', description: 'Morning game drive, fly from JNB to Victoria Falls, and check into accommodation.' },
      { title: 'Day 4: Victoria Falls - Chobe National Park', description: 'Full day Chobe National Park day trip (Botswana).' },
      { title: 'Day 5: Victoria Falls - Cape Town City Tour', description: 'Morning activity, fly to Cape Town, and check into hotel.' },
      { title: 'Day 6: Cape Town City Tour', description: 'Full day guided tour of Cape Town.' },
      { title: 'Day 7: Half Day Cape Winelands Tour', description: 'Half day guided tour of the Cape Winelands.' },
      { title: 'Day 8: Cape Town City Tour', description: 'Free day in Cape Town.' },
      { title: 'Day 9: Departure to Johannesburg', description: 'Fly from Cape Town to Johannesburg, check into hotel.' },
      { title: 'Day 10: O.R. Tambo International Airport (JNB)', description: 'Transfer to O.R. Tambo International Airport (JNB) for departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 42,695 sharing'
    ]
  },
  { 
    id: 'k242', 
    category: 'Kruger National Park & Victoria Falls', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park, Victoria Falls',
    title: '7 Day Affordable Kruger and Victoria Falls Lokuthula Combo', 
    description: 'An affordable 7-day adventure combining the Kruger National Park safari with the spectacle of Victoria Falls. Includes 3 nights near Kruger and 3 nights in Victoria Falls.', 
    priceType: 'per-person',
    basePrice: 20725, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboOne,
    gallery: [images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboTwo, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboThree, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboFour, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboFive, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboSix, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboSeven, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboEight, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboNine, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboTen, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboEleven, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboTwelve, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboThirteen, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboFourteen, images.sevenDayAffordableKrugerAndVictoriaFallsLokuthulaComboFifteen],
    overview: 'A combined 7-day safari and Victoria Falls package.',
    duration: '7 Days',
    whatIsIncluded: [
      'Return transfers from JNB airport or hotel',
      '6 Nights accommodation (3 in tented camp, 3 in Zimbabwe)',
      'Big 5 game drives in Kruger National Park and Blue Canyon Reserve',
      'Flight from JNB to Victoria Falls (optional)',
      'Victoria Falls park entrance fees'
    ],
    whatIsNotIncluded: [
      'Scheduled flights between JNB and Victoria Falls',
      'Meals not specified in the itinerary (lunches excluded)',
      'Gratuities and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Sekekama Tented Camp Arrival', description: 'Depart JNB, transfer to Sekekama Tented Camp, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Early Kruger Adventure', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Kruger or Panorama Route Tour', description: 'Full-day Panorama Route tour or optional Kruger Safari.' },
      { title: 'Day 4: Return to Johannesburg & Prepare for Victoria Falls', description: 'Morning activity, transfer back to JNB, and prepare for flight to Victoria Falls.' },
      { title: 'Day 5: Lokuthula Lodge Arrival & Sunset Cruise', description: 'Fly from JNB to Victoria Falls, transfer to Lokuthula Lodge, and enjoy a sunset cruise on the Zambezi River.' },
      { title: 'Day 6: Guided Morning Walk', description: 'Morning guided walk and leisure time.' },
      { title: 'Day 7: Leisure or Optional Activities', description: 'Free time for optional activities, and departure transfer to Victoria Falls Airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,725 sharing'
    ]
  },
  { 
    id: 'k243', 
    category: 'Kruger National Park & Victoria Falls', 
    subCategory: 'Luxury Combo Safari',
    region: 'Kruger National Park, Victoria Falls',
    title: '7 day Luxury Kruger Radisson & Ilala Lodge Victoria Falls Tour', 
    description: 'A 7-day luxury combo safari featuring the Radisson Kruger Safari Lodge and Ilala Lodge near Victoria Falls. Includes 3 nights at Radisson and 3 nights at Ilala Lodge.', 
    priceType: 'per-person',
    basePrice: 38048, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourOne,
    gallery: [images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourTwo, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourThree, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourFour, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourFive, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourSix, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourSeven, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourEight, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourNine, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourTen, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourEleven, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourTwelve, images.sevenDayLuxuryKrugerRadissonIlalaLodgeVictoriaFallsTourThirteen],
    overview: 'A 7-day luxury combo package of Big 5 safari and Victoria Falls.',
    duration: '7 Days',
    whatIsIncluded: [
      'Return transfers from JNB airport or hotel',
      '6 Nights accommodation (3 at Radisson, 3 at Ilala Lodge)',
      'Big 5 game drives in Kruger National Park and Panorama Route tour',
      'Flight from JNB to Victoria Falls (optional)',
      'Sunset cruise on the Zambezi River'
    ],
    whatIsNotIncluded: [
      'Scheduled flights between JNB and Victoria Falls',
      'Meals as per itinerary (lunches excluded on safari)',
      'Gratuities and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: O.R. Tambo International Airport (JNB)', description: 'Depart JNB, transfer to Radisson Kruger Safari Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full Day Kruger Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full Day Panorama Route Tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Final Optional Morning Safari', description: 'Morning activity, shuttle transfer to HDS/KMIA for flight to JNB/Victoria Falls.' },
      { title: 'Day 5: Full Day Rainforest Walk', description: 'Morning guided walk of Victoria Falls, with afternoon leisure.' },
      { title: 'Day 6: Sunset cruise and optional activities', description: 'Morning activity, with sunset cruise on the Zambezi River.' },
      { title: 'Day 7: Leisure or Optional Activities', description: 'Free time for optional activities, and departure transfer to Victoria Falls Airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,048 sharing'
    ]
  },
  { 
    id: 'k244', 
    category: 'Kruger National Park', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park & Kapama Private Reserve',
    title: '7-Day Radisson & Kapama Ultimate Safari Extravaganza', 
    description: 'A 7-day safari combining a luxury stay at Radisson Kruger Safari Lodge (3 nights) and Kapama Private Game Reserve (3 nights). Includes transfers, a full-day Kruger safari, and multiple game drives.', 
    priceType: 'per-person',
    basePrice: 30848, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.sevenDayRadissonKapamaUltimateSafariExtravaganzaOne,
    gallery: [images.sevenDayRadissonKapamaUltimateSafariExtravaganzaTwo, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaThree, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaFour, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaFive, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaSix, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaSeven, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaEight, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaNine, images.sevenDayRadissonKapamaUltimateSafariExtravaganzaTen],
    overview: 'The ultimate 7-day safari experience combining two premier reserves near Kruger National Park.',
    duration: '7 Days',
    whatIsIncluded: [
      'Upgraded transfer from O.R. Tambo Airport (JNB) or hotel',
      '6 Nights accommodation (3 at Radisson Lodge, 3 at Kapama Reserve)',
      'Game drives as per itinerary (full day Kruger safari, Kapama drives)',
      'All meals and local drinks in Kapama'
    ],
    whatIsNotIncluded: [
      'Lunches excluded on certain days',
      'Premium beverages, personal purchases, and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Golden Welcome', description: 'Depart JNB, transfer to Radisson Lodge, check in, and enjoy a sunset drive and dinner.' },
      { title: 'Day 2: Full Day Open Vehicle Kruger Safari', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full-Day Panorama Route Tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Kruger Safari Farewell & Kapama Wildlife Immersion', description: 'Morning activity, transfer to Kapama Reserve, and enjoy the afternoon game drive.' },
      { title: 'Day 5: Full-Day Kapama Wildlife Spectacle', description: 'Full day of wildlife activities in Kapama, including morning and afternoon game drives.' },
      { title: 'Day 6: 3-Hour Kapama Sunset Game Drive', description: 'Morning game drive, lunch, and afternoon game drive.' },
      { title: 'Day 7: Departure', description: 'Morning game drive, breakfast, and transfer back to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 61,175 sharing'
    ]
  },
  { 
    id: 'k245', 
    category: 'Kruger National Park & Victoria Falls', 
    subCategory: 'Luxury Combo Safari',
    region: 'Kruger National Park, Victoria Falls',
    title: '7-Day Luxury Kruger Radisson & Victoria Falls Combo', 
    description: 'A 7-day luxury combo safari featuring the Radisson Kruger Safari Lodge and Victoria Falls. Includes 3 nights at Radisson, a full-day Kruger safari, and 3 nights in Victoria Falls.', 
    priceType: 'per-person',
    basePrice: 38835, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboOne,
    gallery: [images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboTwo, images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboThree, images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboFour, images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboFive, images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboSix, images.sevenDayLuxuryKrugerRadissonVictoriaFallsComboSeven],
    overview: 'A 7-day luxury combo package of Big 5 safari and Victoria Falls.',
    duration: '7 Days',
    whatIsIncluded: [
      'Return transfers from JNB airport or hotel',
      '6 Nights accommodation (3 at Radisson, 3 in Victoria Falls)',
      'Big 5 game drives in Kruger National Park and Panorama Route tour',
      'Flight from JNB to Victoria Falls (optional)',
      'Sunset cruise on the Zambezi River'
    ],
    whatIsNotIncluded: [
      'Scheduled flights between JNB and Victoria Falls',
      'Lunches and beverages (unless specified)',
      'Gratuities and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Johannesburg', description: 'Depart JNB, transfer to Radisson Kruger Safari Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full day Kruger adventure', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full-Day Panorama Route tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: JNB Airport & Victoria Falls sunset river cruise', description: 'Morning activity, transfer to JNB for flight to Victoria Falls, and sunset cruise on the Zambezi River.' },
      { title: 'Day 5: Rainforest walk & sunset river cruise', description: 'Morning guided walk of Victoria Falls, with sunset cruise on the Zambezi River.' },
      { title: 'Day 6: Activities & optional activities', description: 'Full day of optional activities.' },
      { title: 'Day 7: Leisure or optional activities', description: 'Free time for optional activities, and departure transfer to Victoria Falls Airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 38,835 sharing'
    ]
  },
  { 
    id: 'k246', 
    category: 'Kruger National Park & Victoria Falls', 
    subCategory: 'Midrange Combo Safari',
    region: 'Kruger National Park, Victoria Falls',
    title: '7 Day Midrange Kruger and Victoria Falls Package', 
    description: 'A 7-day midrange combo safari featuring Kruger Park and Victoria Falls. Includes 3 nights near Kruger, 3 nights in Victoria Falls, and a full-day Kruger safari.', 
    priceType: 'per-person',
    basePrice: 37850, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.sevenDayMidrangeKrugerAndVictoriaFallsPackageOne,
    gallery: [images.sevenDayMidrangeKrugerAndVictoriaFallsPackageTwo, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageThree, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageFour, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageFive, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageSix, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageSeven, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageEight, images.sevenDayMidrangeKrugerAndVictoriaFallsPackageNine],
    overview: 'A 7-day safari and Victoria Falls package with midrange accommodation.',
    duration: '7 Days',
    whatIsIncluded: [
      'Return transfers from JNB airport or hotel',
      '6 Nights accommodation (3 at various Lodges, 3 at Victoria Falls)',
      'Full-day open vehicle safari drive in Kruger National Park',
      'Sunset cruise on Zambezi River',
      'Flight from JNB to Victoria Falls (optional)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights between JNB and Victoria Falls',
      'Lunches, beverages, and optional activities'
    ],
    itinerary: [
      { title: 'Day 1: Arrival & Sunset Bushveld Safari', description: 'Depart JNB, transfer to Kruger area, check in, and enjoy a sunset drive in a private reserve.' },
      { title: 'Day 2: Full-day Kruger National Park', description: 'Full day open vehicle game drive inside the Kruger National Park.' },
      { title: 'Day 3: Full-Day Panorama Route Adventure', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 4: Farewell Game Drive & Scenic Return to Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' },
      { title: 'Day 5: Zambezi Sunset Welcome - Victoria Falls Arrival', description: 'Fly from JNB to Victoria Falls, transfer to hotel, and sunset cruise on the Zambezi River.' },
      { title: 'Day 6: Mists & Adventures - Victoria Falls Discovery', description: 'Morning guided walk of Victoria Falls, with afternoon leisure/optional activities.' },
      { title: 'Day 7: Last Moments & Skyward Journeys', description: 'Free time for optional activities, and departure transfer to Victoria Falls Airport.' }
    ],
    additionalInfo: [
      'Starting from ZAR 37,850 sharing'
    ]
  },
  { 
    id: 'k247', 
    category: 'Kruger National Park', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park (Balule Reserve) & Southern Section',
    title: '7-Day Tremisana & Radsisson Deluxe Safari', 
    description: 'A 7-day deluxe safari combining 3 nights at Tremisana Lodge (Balule Reserve) and 3 nights at Radisson Kruger Safari Lodge (Southern Section).', 
    priceType: 'per-person',
    basePrice: 20893, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.sevenDayTremisanaRadsissonDeluxeSafariOne,
    gallery: [images.sevenDayTremisanaRadsissonDeluxeSafariTwo, images.sevenDayTremisanaRadsissonDeluxeSafariThree, images.sevenDayTremisanaRadsissonDeluxeSafariFour, images.sevenDayTremisanaRadsissonDeluxeSafariFive, images.sevenDayTremisanaRadsissonDeluxeSafariSix, images.sevenDayTremisanaRadsissonDeluxeSafariSeven, images.sevenDayTremisanaRadsissonDeluxeSafariEight, images.sevenDayTremisanaRadsissonDeluxeSafariNine],
    overview: 'A 7-day comprehensive safari and culture package.',
    duration: '7 Days',
    whatIsIncluded: [
      'Return transfers from JNB or hotel',
      '6 Nights accommodation (3 at Tremisana, 3 at Radisson)',
      'Morning bush walks, sunset drives, full-day Kruger safaris',
      'Panorama Route tour',
      'All meals and selected drinks as per itinerary'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Alcoholic and non-alcoholic drinks (unless specified)',
      'Personal purchases, gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Kruger Arrival & Bush BBQ', description: 'Depart JNB, transfer to Tremisana, and evening sunset game drive with bush BBQ.' },
      { title: 'Day 2: Kruger National Park Day', description: 'Morning bush walk, and full-day open vehicle safari in Kruger National Park.' },
      { title: 'Day 3: Radisson Safari Hotel Arrival', description: 'Morning game drive, transfer to Radisson Lodge, and enjoy the afternoon game drive.' },
      { title: 'Day 4: Cliffs to Comfort', description: 'Morning game drive/walk, and a full-day Panorama Route tour.' },
      { title: 'Day 5: Kruger Expedition', description: 'Full day open vehicle game drive into the Kruger National Park.' },
      { title: 'Day 6: Optional Sunrise Safari & Leisure', description: 'Optional sunrise safari, relaxation, and farewell dinner.' },
      { title: 'Day 7: Full Optional Sunrise Game Drive & Farewell', description: 'Optional morning activity, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 41,785 sharing'
    ]
  },
  { 
    id: 'k248', 
    category: 'Kruger National Park & Pilanesberg National Park', 
    subCategory: 'Luxury Combo Safari',
    region: 'Cape Town, Johannesburg, Kruger National Park',
    title: '8 Day Luxury Cape Town, Johannesburg, Kruger, Starting in Cape Town', 
    description: 'A luxurious 8-day multi-destination journey starting in Cape Town and covering Johannesburg/Pilanesberg and the Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 44830, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownOne,
    gallery: [images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownTwo, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownThree, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownFour, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownFive, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownSix, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownSeven, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownEight, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownNine, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownTen, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownEleven, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownTwelve, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownThirteen, images.eightDayLuxuryCapeTownJohannesburgKrugerStartingInCapeTownFourteen],
    overview: 'A high-end 8-day tour covering the best of South Africa: Cape Town, Pilanesberg, and Kruger.',
    duration: '8 Days',
    whatIsIncluded: [
      'Return transfers from Cape Town International Airport (CPT)',
      '7 Nights accommodation at luxury hotels/lodges',
      'Cape Town city tour and Peninsula Discovery',
      '2 Game drives in Pilanesberg Game Reserve and 2 in Kruger National Park'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'Items of a personal nature',
      'Meals not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town International Airport (CPT)', description: 'Arrive in Cape Town, transfer to hotel, and afternoon city tour.' },
      { title: 'Day 2: Full Day Cape Peninsula Discovery', description: 'Full day guided tour of the Cape Peninsula.' },
      { title: 'Day 3: Pilanesberg Game Reserve & Pilanesberg Safari', description: 'Fly to JNB, road transfer to Pilanesberg, and afternoon game drive.' },
      { title: 'Day 4: Pilanesberg Excursion', description: 'Morning and afternoon game drives in Pilanesberg National Park.' },
      { title: 'Day 5: Journey to Johannesburg', description: 'Morning game drive, transfer back to JNB, and check into hotel.' },
      { title: 'Day 6: Kruger National Park Begins', description: 'Transfer to Kruger National Park area lodge, and afternoon game drive.' },
      { title: 'Day 7: Kruger Immersion', description: 'Morning and afternoon game drives in Kruger National Park.' },
      { title: 'Day 8: Journey Home', description: 'Morning activity, transfer to HDS for flight to JNB, and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 64,830 sharing'
    ]
  },
  { 
    id: 'k249', 
    category: 'Kruger National Park & Victoria Falls', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park, Victoria Falls, Cape Town, Johannesburg',
    title: '10 Day Affordable Cape Town, Kruger, Johannesburg Package from Cape Town', 
    description: 'A 10-day affordable package covering Cape Town, Kruger National Park, and Johannesburg. Includes 9 nights accommodation, daily activities, and road transfers.', 
    priceType: 'per-person',
    basePrice: 24295, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownOne,
    gallery: [images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownTwo, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownThree, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownFour, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownFive, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownSix, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownSeven, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownEight, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownNine, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownTen, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownEleven, images.tenDayAffordableCapeTownKrugerJohannesburgPackageFromCapeTownTwelve],
    overview: 'An affordable 10-day package exploring South Africa\'s major attractions.',
    duration: '10 Days',
    whatIsIncluded: [
      '9 Nights accommodation',
      'Daily breakfast',
      'Cape Town city tour and Table Mountain',
      'Full-day open vehicle safari drive in Kruger National Park'
    ],
    whatIsNotIncluded: [
      'Flights, entrance to Boulders Beach',
      'Lunches, gratuities, and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town', description: 'Arrive in Cape Town, transfer to hotel, and afternoon city tour.' },
      { title: 'Day 2: Robben Island and Table Mountain', description: 'Morning tour of Robben Island, afternoon ascent of Table Mountain.' },
      { title: 'Day 3: Cape Peninsula', description: 'Full day tour of the Cape Peninsula.' },
      { title: 'Day 4: Hermanus/Gansbaai', description: 'Full day whale watching/shark cage diving (seasonal/optional).' },
      { title: 'Day 5: The Safari Begins', description: 'Transfer to Safari Lodge in the Kruger area, and enjoy the afternoon game drive.' },
      { title: 'Day 6: Kruger National Park', description: 'Full day open vehicle safari drive in Kruger National Park.' },
      { title: 'Day 7: Panorama Route Tour', description: 'Full-day excursion along the Panorama Route.' },
      { title: 'Day 8: Transfer to Johannesburg', description: 'Morning game drive, transfer back to JNB, and check into hotel.' },
      { title: 'Day 9: Soweto Tour', description: 'Morning tour of Soweto, with afternoon leisure.' },
      { title: 'Day 10: O.R. Tambo International Airport (JNB)', description: 'Transfer to O.R. Tambo International Airport (JNB) for departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,295 sharing'
    ]
  },
  { 
    id: 'k250', 
    category: 'Kruger National Park & Cape Town', 
    subCategory: 'Luxury Combo Safari',
    region: 'Kruger National Park, Cape Town, Johannesburg',
    title: '10 Day Luxury Tour Starting in Cape Town', 
    description: 'A 10-day luxury tour starting in Cape Town and covering the highlights of South Africa: Cape Town, Johannesburg, Pilanesberg, and Kapama Private Reserve (Kruger area).', 
    priceType: 'per-person',
    basePrice: 42635, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.tenDayLuxuryTourStartingInCapeTownOne,
    gallery: [images.tenDayLuxuryTourStartingInCapeTownTwo, images.tenDayLuxuryTourStartingInCapeTownThree, images.tenDayLuxuryTourStartingInCapeTownFour, images.tenDayLuxuryTourStartingInCapeTownFive, images.tenDayLuxuryTourStartingInCapeTownSix, images.tenDayLuxuryTourStartingInCapeTownSeven, images.tenDayLuxuryTourStartingInCapeTownEight, images.tenDayLuxuryTourStartingInCapeTownNine, images.tenDayLuxuryTourStartingInCapeTownTen, images.tenDayLuxuryTourStartingInCapeTownEleven, images.tenDayLuxuryTourStartingInCapeTownTwelve, images.tenDayLuxuryTourStartingInCapeTownThirteen],
    overview: 'A 10-day luxury tour covering the best of South Africa.',
    duration: '10 Days',
    whatIsIncluded: [
      'Return transfers from Cape Town International Airport (CPT)',
      '9 Nights luxury accommodation',
      'Cape Town city tour and Peninsula Discovery',
      'Kapama Private Reserve game drives',
      'Soweto history and culture tour'
    ],
    whatIsNotIncluded: [
      'Conservation fees, all meals not included',
      'Lunches, beverages, and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Cape Town', description: 'Arrive in Cape Town, transfer to hotel, and afternoon city tour.' },
      { title: 'Day 2: Cape Town City Tour', description: 'Full day guided tour of Cape Town.' },
      { title: 'Day 3: Cape Peninsula City Tour', description: 'Full day guided tour of the Cape Peninsula.' },
      { title: 'Day 4: Day of Leisure', description: 'Free day in Cape Town.' },
      { title: 'Day 5: Robben Island', description: 'Morning Robben Island tour (optional), afternoon leisure.' },
      { title: 'Day 6: Johannesburg', description: 'Fly from Cape Town to Johannesburg, transfer to hotel.' },
      { title: 'Day 7: Soweto Apartheid Tour', description: 'Full day guided tour of Soweto and the Apartheid Museum.' },
      { title: 'Day 8: Kapama Private Game Reserve', description: 'Morning game drive in Pilanesberg, transfer to JNB, flight to HDS, and transfer to Kapama Lodge.' },
      { title: 'Day 9: Kapama Private Game Reserve', description: 'Morning and afternoon game drives in Kapama Private Reserve.' },
      { title: 'Day 10: O.R. Tambo International Airport (JNB)', description: 'Morning game drive, breakfast, and transfer back to JNB for departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 62,635 sharing'
    ]
  },
  { 
    id: 'k251', 
    category: 'Kruger National Park', 
    subCategory: 'Budget Safari',
    region: 'Kruger National Park (Balule Reserve)',
    title: '2 Day Blitz Kruger Safari', 
    description: 'A 2-day quick road safari to the Greater Kruger area, including a 3-hour sunset game drive and accommodation in comfortable tented camp.', 
    priceType: 'per-person',
    basePrice: 5995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.twoDayBlitzKrugerSafariOne,
    gallery: [images.twoDayBlitzKrugerSafariTwo, images.twoDayBlitzKrugerSafariThree, images.twoDayBlitzKrugerSafariFour, images.twoDayBlitzKrugerSafariFive, images.twoDayBlitzKrugerSafariSix, images.twoDayBlitzKrugerSafariSeven, images.twoDayBlitzKrugerSafariEight],
    overview: 'A lightning-fast 2-day safari to witness the wonders of the northern safari hub of South Africa.',
    duration: '2 Days',
    whatIsIncluded: [
      'Collection and drop off from Johannesburg (JNB) or hotel',
      '1 Night accommodation (lodge/tented camp) in the Greater Kruger area',
      '2 x 3-hour game drives in Balule Game Reserve',
      'Dinner and breakfast'
    ],
    whatIsNotIncluded: [
      'Scheduled flights from JNB',
      'Meals not specified in the itinerary',
      'All beverages and personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Balule Game Reserve (Approx 500 Kilometres)', description: 'Depart JNB, transfer to Tremisana Game Lodge, check in, and enjoy the sunset game drive.' },
      { title: 'Day 2: Greater Kruger - Johannesburg', description: 'Early morning game drive/bush walk, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 5,995 sharing'
    ]
  },
  { 
    id: 'k252', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park, Victoria Falls, Cape Town',
    title: '15 Day Budget Tour Starting in Cape Town', 
    description: 'A 15-day budget trip through South Africa and Victoria Falls, starting in Cape Town. Covers major attractions and includes safaris near Kruger and a visit to Victoria Falls.', 
    priceType: 'per-person',
    basePrice: 20380, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.fifteenDayBudgetTourStartingInCapeTownOne,
    gallery: [images.fifteenDayBudgetTourStartingInCapeTownTwo, images.fifteenDayBudgetTourStartingInCapeTownThree, images.fifteenDayBudgetTourStartingInCapeTownFour, images.fifteenDayBudgetTourStartingInCapeTownFive, images.fifteenDayBudgetTourStartingInCapeTownSix, images.fifteenDayBudgetTourStartingInCapeTownSeven, images.fifteenDayBudgetTourStartingInCapeTownEight, images.fifteenDayBudgetTourStartingInCapeTownNine, images.fifteenDayBudgetTourStartingInCapeTownTen, images.fifteenDayBudgetTourStartingInCapeTownEleven, images.fifteenDayBudgetTourStartingInCapeTownTwelve],
    overview: 'A budget-friendly 15-day tour of South Africa and Victoria Falls.',
    duration: '15 Days',
    whatIsIncluded: [
      '14 Nights accommodation (hostels, guest lodges)',
      'Cape Town city tour, Table Mountain, Cape Peninsula tour',
      '2 Full-day open vehicle safari drives in Kruger National Park',
      'Victoria Falls Entrance fee and Sunset cruise'
    ],
    whatIsNotIncluded: [
      'All meals not on itinerary',
      'International and domestic flights'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Kruger National Park', description: 'Transfer to Johannesburg, transfer to Kruger area, and enjoy afternoon activity.' },
      { title: 'Day 6: Kruger National Park', description: 'Full day open vehicle safari drive.' },
      { title: 'Day 7: Kruger National Park to Johannesburg', description: 'Morning game drive, transfer back to JNB.' },
      { title: 'Day 8-10: Victoria Falls', description: 'Transfer/fly to Victoria Falls (flights at cost), guided walk of the falls and leisure time.' },
      { title: 'Day 11: Victoria Falls', description: 'Chobe National Park day trip (Botswana) or optional activities.' },
      { title: 'Day 12-15: Victoria Falls', description: 'Leisure and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,380 sharing'
    ]
  },
  { 
    id: 'k253', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Luxury Combo Safari',
    region: 'Cape Town, Kruger National Park, Victoria Falls',
    title: '12 Day Luxury Cape Town, Kruger Park and Victoria Falls tour', 
    description: 'A 12-day luxury safari tour combining Cape Town, Kruger Park, and Victoria Falls. Includes luxury accommodation and various guided tours.', 
    priceType: 'per-person',
    basePrice: 59980, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourOne,
    gallery: [images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourTwo, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourThree, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourFour, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourFive, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourSix, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourSeven, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourEight, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourNine, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourTen, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourEleven, images.twelveDayLuxuryCapeTownKrugerParkAndVictoriaFallsTourTwelve],
    overview: 'A 12-day luxury tour covering three of Southern Africa\'s prime destinations.',
    duration: '12 Days',
    whatIsIncluded: [
      '11 Nights luxury accommodation',
      'Cape Town city tour and Peninsula Discovery',
      'Flights between Cape Town, JNB, and Victoria Falls (flights at cost)',
      'Full-day open vehicle safari drive in Kruger National Park',
      'Chobe National Park day trip, and Victoria Falls activities'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Gratuities, beverages, and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1-3: Cape Town', description: 'Three days exploring Cape Town, including city tour and Cape Peninsula.' },
      { title: 'Day 4: JNB & Victoria Falls Waterfront', description: 'Fly to Victoria Falls (flights at cost), and sunset cruise on the Zambezi River.' },
      { title: 'Day 5: Chobe Safari', description: 'Full day Chobe National Park day trip (Botswana).' },
      { title: 'Day 6: JNB & Kruger Park Safari', description: 'Fly to JNB, transfer to Kruger area lodge, and afternoon game drive.' },
      { title: 'Day 7: Sunrise and Sunset Safari', description: 'Morning and afternoon game drives in a private reserve.' },
      { title: 'Day 8: Kruger Park Safari', description: 'Full day open vehicle safari drive in Kruger National Park.' },
      { title: 'Day 9: Kruger Park Safari', description: 'Morning game drive, then flight to JNB (flights at cost).' },
      { title: 'Day 10-12: Victoria Falls', description: 'Leisure time, activities, and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 59,980 sharing'
    ]
  },
  { 
    id: 'k254', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Luxury Combo Safari',
    region: 'Cape Town, Kruger National Park, Victoria Falls',
    title: '15-Day Luxury Southern Africa Tour from Cape Town', 
    description: 'A 15-day ultra-luxury tour starting in Cape Town, covering the best of South Africa and Victoria Falls. Includes luxury accommodation and all major attractions.', 
    priceType: 'per-person',
    basePrice: 60888, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.fifteenDayLuxurySouthernAfricaTourFromCapeTownOne,
    gallery: [images.fifteenDayLuxurySouthernAfricaTourFromCapeTownTwo, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownThree, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownFour, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownFive, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownSix, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownSeven, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownEight, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownNine, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownTen, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownEleven, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownTwelve, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownThirteen, images.fifteenDayLuxurySouthernAfricaTourFromCapeTownFourteen],
    overview: 'A 15-day luxury multi-country adventure covering South Africa\'s safari and urban highlights plus Victoria Falls.',
    duration: '15 Days',
    whatIsIncluded: [
      '14 Nights luxury accommodation',
      'Cape Town city tour, Table Mountain, Robben Island, Cape Peninsula tour',
      'Kapama Private Game Reserve drives',
      'Chobe National Park day trip, and Victoria Falls activities'
    ],
    whatIsNotIncluded: [
      'International and domestic flights',
      'Conservation fees (per itinerary)'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Robben Island', description: 'Morning tour of Robben Island, afternoon leisure.' },
      { title: 'Day 6: Kruger National Park', description: 'Fly to Hoedspruit (flights at cost), transfer to Kapama Game Reserve, and afternoon game drive.' },
      { title: 'Day 7-9: Kapama Game Reserve', description: 'Daily morning and afternoon game drives.' },
      { title: 'Day 10: Johannesburg', description: 'Morning game drive, flight to JNB (flights at cost), and Soweto tour.' },
      { title: 'Day 11-14: Victoria Falls & Chobe', description: 'Fly to Victoria Falls (flights at cost), sunset cruise, guided falls walk, and Chobe day trip.' },
      { title: 'Day 15: Victoria Falls', description: 'Leisure and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 121,775 sharing'
    ]
  },
  { 
    id: 'k255', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Combo Safari',
    region: 'Kruger National Park, Victoria Falls, Cape Town',
    title: '15-Day Affordable Southern Africa Tour from Cape Town', 
    description: 'A 15-day affordable tour covering Cape Town, Kruger National Park, and Victoria Falls. Includes safaris, city tours, and accommodation at various lodges.', 
    priceType: 'per-person',
    basePrice: 20380, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.fifteenDayAffordableSouthernAfricaTourFromCapeTownOne,
    gallery: [images.fifteenDayAffordableSouthernAfricaTourFromCapeTownTwo, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownThree, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownFour, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownFive, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownSix, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownSeven, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownEight, images.fifteenDayAffordableSouthernAfricaTourFromCapeTownNine],
    overview: 'A budget-friendly 15-day tour of Southern Africa\'s major attractions.',
    duration: '15 Days',
    whatIsIncluded: [
      '14 Nights accommodation (hostels, guest lodges)',
      'Cape Town city tour, Table Mountain, Cape Peninsula tour',
      '2 Full-day open vehicle safari drives in Kruger National Park',
      'Victoria Falls Entrance fee and Sunset cruise'
    ],
    whatIsNotIncluded: [
      'All meals not on itinerary',
      'International and domestic flights'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Kruger National Park', description: 'Transfer to Johannesburg, transfer to Kruger area, and enjoy afternoon activity.' },
      { title: 'Day 6: Kruger National Park', description: 'Full day open vehicle safari drive.' },
      { title: 'Day 7: Kruger National Park to Johannesburg', description: 'Morning game drive, transfer back to JNB.' },
      { title: 'Day 8-10: Victoria Falls', description: 'Transfer/fly to Victoria Falls (flights at cost), guided walk of the falls and leisure time.' },
      { title: 'Day 11: Victoria Falls', description: 'Chobe National Park day trip (Botswana) or optional activities.' },
      { title: 'Day 12-15: Victoria Falls', description: 'Leisure and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 20,380 sharing'
    ]
  },
  { 
    id: 'k256', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Safari Adventure',
    region: 'Kruger National Park, Cape Town, Botswana, Victoria Falls',
    title: '19-Day Safari Adventure: Cape Town, Kruger, Botswana & Vic Falls', 
    description: 'A comprehensive 19-day safari package covering Cape Town, Kruger, Botswana (Okavango Delta), and Victoria Falls. Includes flights, luxury accommodation, and extensive game viewing.', 
    priceType: 'per-person',
    basePrice: 70388, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsOne,
    gallery: [images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsTwo, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsThree, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsFour, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsFive, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsSix, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsSeven, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsEight, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsNine, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsTen, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsEleven, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsTwelve, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsThirteen, images.nineteenDaySafariAdventureCapeTownKrugerBotswanaAndVicFallsFourteen],
    overview: 'A 19-day epic safari and multi-country adventure in Southern Africa.',
    duration: '19 Days',
    whatIsIncluded: [
      '18 Nights accommodation (midrange/luxury)',
      'Cape Town city tour, Table Mountain, Cape Peninsula tour',
      'Kapama Private Game Reserve drives',
      'Okavango Delta Mokoro activity, Chobe day trip',
      'Victoria Falls activities'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Gratuities, beverages, and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Journey to the Wild', description: 'Fly to Hoedspruit (flights at cost), transfer to Kapama Game Reserve, and afternoon game drive.' },
      { title: 'Day 6-9: Kapama Game Reserve & Sabi Sands', description: 'Four days of game drives and lodge experiences in the Greater Kruger area.' },
      { title: 'Day 10: From City to Safari', description: 'Morning game drive, flight to JNB (flights at cost), and evening leisure.' },
      { title: 'Day 11: Team Pilanesberg', description: 'Morning activity, transfer to Pilanesberg National Park, and afternoon game drive.' },
      { title: 'Day 12-15: Chobe & Okavango', description: 'Fly to Kasane/Maun (flights at cost), Chobe day trip, and Okavango Delta activities.' },
      { title: 'Day 16-19: Victoria Falls & Departure', description: 'Fly to Victoria Falls (flights at cost), activities, and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 140,786 sharing'
    ]
  },
  { 
    id: 'k257', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Midrange Combo Safari',
    region: 'Kruger National Park, Cape Town, Botswana, Victoria Falls',
    title: '19 Day Midrange Cape Town, Kruger, Botswana and Victoria Falls Safari', 
    description: 'A comprehensive 19-day safari package covering Cape Town, Kruger, Botswana (Okavango Delta), and Victoria Falls. Includes flights, midrange accommodation, and extensive game viewing.', 
    priceType: 'per-person',
    basePrice: 73700, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariOne,
    gallery: [images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariTwo, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariThree, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariFour, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariFive, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariSix, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariSeven, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariEight, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariNine, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariTen, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariEleven, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariTwelve, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariThirteen, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariFourteen, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariFifteen, images.nineteenDayMidrangeCapeTownKrugerBotswanaAndVictoriaFallsSafariSixteen],
    overview: 'A 19-day midrange safari and multi-country adventure in Southern Africa.',
    duration: '19 Days',
    whatIsIncluded: [
      '18 Nights accommodation (midrange/lodge)',
      'Cape Town city tour, Table Mountain, Cape Peninsula tour',
      'Kruger Tented Camp drives, Panorama Route tour',
      'Okavango Delta Mokoro activity, Chobe day trip',
      'Victoria Falls activities'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Gratuities, beverages, and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: JNB & Kruger Tented Camp', description: 'Fly to JNB (flights at cost), transfer to Kruger area, and afternoon game drive.' },
      { title: 'Day 6-9: Kruger Area & Sabi Sands', description: 'Four days of game drives and lodge experiences in the Greater Kruger area, including a Panorama Route tour.' },
      { title: 'Day 10: From City to Safari', description: 'Morning game drive, flight to JNB (flights at cost), and evening leisure.' },
      { title: 'Day 11: Transfer to Botswana', description: 'Morning activity, transfer to Botswana, and afternoon game drive.' },
      { title: 'Day 12-15: Chobe & Okavango', description: 'Fly to Kasane/Maun (flights at cost), Chobe day trip, and Okavango Delta activities.' },
      { title: 'Day 16-19: Victoria Falls & Departure', description: 'Fly to Victoria Falls (flights at cost), activities, and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 73,700 sharing'
    ]
  },
  { 
    id: 'k258', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Midrange Combo Safari',
    region: 'Kruger National Park, Cape Town, Okavango Delta',
    title: '16 Day Midrange Cape Town, Kruger and Okavango Delta Safari', 
    description: 'A 16-day midrange safari package covering Cape Town, Kruger National Park, and the Okavango Delta (Botswana). Includes flights, midrange accommodation, and extensive game viewing.', 
    priceType: 'per-person',
    basePrice: 55000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariOne,
    gallery: [images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariTwo, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariThree, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariFour, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariFive, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariSix, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariSeven, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariEight, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariNine, images.sixteenDayMidrangeCapeTownKrugerAndOkavangoDeltaSafariTen],
    overview: 'A 16-day comprehensive tour covering South Africa\'s best and Botswana\'s Okavango Delta.',
    duration: '16 Days',
    whatIsIncluded: [
      '15 Nights accommodation (midrange/lodge)',
      'Cape Town city tour and Peninsula Discovery',
      'Full-day Kruger safari',
      'Okavango Delta Mokoro activity, Chobe day trip',
      'Flights between destinations (flights at cost)'
    ],
    whatIsNotIncluded: [
      'Scheduled flights',
      'Gratuities, beverages, and personal purchases'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Fly to JNB & Kruger', description: 'Fly to JNB (flights at cost), road transfer to Kruger area, and afternoon game drive.' },
      { title: 'Day 6-9: Kruger Area & Tented Camp', description: 'Four days of game drives and lodge experiences in the Greater Kruger area, including a Panorama Route tour.' },
      { title: 'Day 10: From Kruger to Botswana', description: 'Morning game drive, flight to Maun (flights at cost), and transfer to Okavango Delta.' },
      { title: 'Day 11-14: Okavango Delta', description: 'Four days of activities in the Okavango Delta, including Mokoro rides and game drives.' },
      { title: 'Day 15-16: Chobe & Departure', description: 'Fly to Kasane (flights at cost), Chobe day trip, and departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 110,000 sharing'
    ]
  },
  { 
    id: 'k259', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Midrange Combo Safari',
    region: 'Kruger National Park, Cape Town, Johannesburg',
    title: '10 Day Midrange Tour starting in Cape Town', 
    description: 'A 10-day midrange package covering Cape Town, Johannesburg/Soweto, and the Kruger National Park. Includes 9 nights accommodation, city tours, and safaris.', 
    priceType: 'per-person',
    basePrice: 24795, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.tenDayMidrangeTourStartingInCapeTownOne,
    gallery: [images.tenDayMidrangeTourStartingInCapeTownTwo, images.tenDayMidrangeTourStartingInCapeTownThree, images.tenDayMidrangeTourStartingInCapeTownFour, images.tenDayMidrangeTourStartingInCapeTownFive, images.tenDayMidrangeTourStartingInCapeTownSix, images.tenDayMidrangeTourStartingInCapeTownSeven, images.tenDayMidrangeTourStartingInCapeTownEight, images.tenDayMidrangeTourStartingInCapeTownNine, images.tenDayMidrangeTourStartingInCapeTownTen, images.tenDayMidrangeTourStartingInCapeTownEleven],
    overview: 'A 10-day midrange tour covering the major cultural and scenic highlights of South Africa.',
    duration: '10 Days',
    whatIsIncluded: [
      '9 Nights accommodation',
      'Cape Town city tour and Peninsula Discovery',
      'Soweto tour',
      'Full-day open vehicle safari drive in Kruger National Park'
    ],
    whatIsNotIncluded: [
      'International and domestic flights',
      'All beverages and gratuities'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Soweto and Robben Island', description: 'Morning Soweto tour, afternoon Robben Island tour (optional).' },
      { title: 'Day 6: JNB Private game reserve', description: 'Transfer to Kruger area, and afternoon game drive.' },
      { title: 'Day 7: Kruger National Park', description: 'Full day open vehicle safari drive.' },
      { title: 'Day 8: Kruger National Park', description: 'Morning game drive, transfer back to JNB.' },
      { title: 'Day 9: Soweto', description: 'Morning Soweto tour, afternoon leisure.' },
      { title: 'Day 10: O.R. Tambo International Airport (JNB)', description: 'Transfer to O.R. Tambo International Airport (JNB) for departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 24,795 sharing'
    ]
  },
  { 
    id: 'k260', 
    category: 'Kruger National Park & Multi-Destination', 
    subCategory: 'Luxury Combo Safari',
    region: 'Cape Town, Kruger National Park, Johannesburg',
    title: '17 Day Cape Town, Winelands, Kruger & Johannesburg Tour', 
    description: 'A 17-day luxury tour covering Cape Town, the Winelands, Kruger National Park, and Johannesburg. Includes luxury accommodation and various guided tours.', 
    priceType: 'per-person',
    basePrice: 38650, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Western Cape', 
    pricingTiers: [],
    img: images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourOne,
    gallery: [images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourTwo, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourThree, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourFour, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourFive, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourSix, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourSeven, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourEight, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourNine, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourTen, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourEleven, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourTwelve, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourThirteen, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourFourteen, images.seventeenDayCapeTownWinelandsKrugerJohannesburgTourFifteen],
    overview: 'A 17-day luxury tour covering the major cultural, scenic, and wildlife highlights of South Africa.',
    duration: '17 Days',
    whatIsIncluded: [
      '16 Nights luxury accommodation',
      'Cape Town city tour, Table Mountain, Cape Peninsula tour',
      'Winelands tour, Soweto tour',
      'Full-day open vehicle safari drive in Kruger National Park'
    ],
    whatIsNotIncluded: [
      'Flights, personal purchases',
      'Gratuities, beverages, and meals not specified'
    ],
    itinerary: [
      { title: 'Day 1-4: Cape Town', description: 'Four days exploring Cape Town, including city tour, Peninsula, and leisure time.' },
      { title: 'Day 5: Winelands', description: 'Full day Winelands tour.' },
      { title: 'Day 6: Johannesburg', description: 'Fly to JNB (flights at cost), and afternoon leisure.' },
      { title: 'Day 7: Kruger National Park', description: 'Transfer to Kruger area lodge, and afternoon game drive.' },
      { title: 'Day 8-10: Kruger Immersion', description: 'Three days of game drives and lodge experiences in the Greater Kruger area.' },
      { title: 'Day 11-16: JNB & Pilanesberg', description: 'Transfer to JNB, Soweto tour, and Pilanesberg National Park game drives.' },
      { title: 'Day 17: Departure', description: 'Morning activity, and transfer back to JNB for departure.' }
    ],
    additionalInfo: [
      'Starting from ZAR 69,380 sharing'
    ]
  },
  { 
    id: 'k261', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Kruger National Park',
    title: 'Ultimate Kruger National Park Full Day Safari Tour', 
    description: 'Experience a full-day guided safari adventure in Kruger National Park. Starting from Hazyview or nearby lodges, this tour offers a chance to see the Big Five and other wildlife in an open safari vehicle.', 
    priceType: 'per-person',
    basePrice: 2250, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview/Kruger area)', 
    pricingTiers: [],
    img: images.ultimateKrugerNationalParkFullDaySafariTourOne,
    gallery: [images.ultimateKrugerNationalParkFullDaySafariTourOne],
    overview: 'A full-day safari in an open vehicle in Kruger National Park, including pickup from Hazyview/nearby lodges.',
    duration: '1 Day',
    whatIsIncluded: [
      'Open vehicle safari drive',
      'All entrance fees included',
      'Transfer to/from your hotel/lodge in Hazyview'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages',
      'Personal purchases of a personal nature',
      'Tips and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Full Day Kruger Park Safari Drive', description: 'Early morning pickup from your hotel or lodge, full-day safari drive in Kruger National Park with brunch and lunch stops at Rest Camps. Return in the late afternoon.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,250 single'
    ]
  },
  { 
    id: 'k262', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Panorama Route',
    title: 'Full Day Panorama Route Tour - Depart from Hoedspruit', 
    description: 'A day tour to explore the natural beauties of South Africa\'s stunning Panorama Route, departing from Hoedspruit. Visits include Blyde River Canyon, God\'s Window, and Lisbon Falls.', 
    priceType: 'per-person',
    basePrice: 2995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hoedspruit area)', 
    pricingTiers: [],
    img: images.fullDayPanoramaRouteTourDepartFromHoedspruitOne,
    gallery: [images.fullDayPanoramaRouteTourDepartFromHoedspruitOne, images.fullDayPanoramaRouteTourDepartFromHoedspruitTwo, images.fullDayPanoramaRouteTourDepartFromHoedspruitThree, images.fullDayPanoramaRouteTourDepartFromHoedspruitFour, images.fullDayPanoramaRouteTourDepartFromHoedspruitFive],
    overview: 'A full-day scenic tour of the Panorama Route, including pickup from Hoedspruit.',
    duration: '1 Day',
    whatIsIncluded: [
      'Transfer to/from Hoedspruit or nearby lodges',
      'Guide',
      'All entrance fees'
    ],
    whatIsNotIncluded: [
      'Lunch',
      'Gratuities',
      'Personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Blyde River Canyon', description: 'Early morning pickup, visit Blyde River Canyon, God\'s Window, Three Rondavels, Lisbon Falls, and Berlin Falls. Return in the late afternoon.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,995 sharing'
    ]
  },
  { 
    id: 'k263', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Panorama Route',
    title: 'Full Day Panorama Route Tour - Depart from Hazyview', 
    description: 'A day tour to explore the stunning natural beauties of the Panorama Route, departing from Hazyview. Visits include Blyde River Canyon, God\'s Window, and Lisbon Falls.', 
    priceType: 'per-person',
    basePrice: 2995, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview area)', 
    pricingTiers: [],
    img: images.fullDayPanoramaRouteTourDepartFromHazyviewOne,
    gallery: [images.fullDayPanoramaRouteTourDepartFromHazyviewTwo, images.fullDayPanoramaRouteTourDepartFromHazyviewThree, images.fullDayPanoramaRouteTourDepartFromHazyviewFour, images.fullDayPanoramaRouteTourDepartFromHazyviewFive, images.fullDayPanoramaRouteTourDepartFromHazyviewSix],
    overview: 'A full-day scenic tour of the Panorama Route, including pickup from Hazyview.',
    duration: '1 Day',
    whatIsIncluded: [
      'Transfer to/from Hazyview or nearby lodges',
      'Guide',
      'All entrance fees'
    ],
    whatIsNotIncluded: [
      'Lunch',
      'Personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Blyde River Canyon', description: 'Early morning pickup, visit Blyde River Canyon, God\'s Window, Three Rondavels, Lisbon Falls, and Berlin Falls. Return in the late afternoon.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,995 sharing'
    ]
  },
  { 
    id: 'k264', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Panorama Route',
    title: 'Full Day Panorama Tour', 
    description: 'A day tour to explore the most spectacular natural wonders in Mpumalanga province. Departs from Hoedspruit or Hazyview, visiting Blyde River Canyon, God\'s Window, and Lisbon Falls.', 
    priceType: 'per-person',
    basePrice: 2900, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hoedspruit or Hazyview area)', 
    pricingTiers: [],
    img: images.fullDayPanoramaTourOne,
    gallery: [images.fullDayPanoramaTourTwo, images.fullDayPanoramaTourThree, images.fullDayPanoramaTourFour, images.fullDayPanoramaTourFive, images.fullDayPanoramaTourSix, images.fullDayPanoramaTourSeven, images.fullDayPanoramaTourEight, images.fullDayPanoramaTourNine, images.fullDayPanoramaTourTen, images.fullDayPanoramaTourEleven],
    overview: 'A full-day guided scenic tour of the Panorama Route.',
    duration: '1 Day',
    whatIsIncluded: [
      'Hotel pickup and drop off',
      'Licensed and professional guide',
      'All entrance fees'
    ],
    whatIsNotIncluded: [
      'All meals and beverages not part of a picnic lunch',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Depart from Hoedspruit', description: 'Morning pickup, visit Blyde River Canyon, God\'s Window, Three Rondavels, Lisbon Falls, and Berlin Falls. Return in the late afternoon.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,900 sharing'
    ]
  },
  { 
    id: 'k265', 
    category: 'Kruger National Park', 
    subCategory: 'Half-Day Safari',
    region: 'Kruger National Park',
    title: 'Half-Day Kruger Morning Safari Drive', 
    description: 'Experience a morning safari drive in the Kruger National Park with convenient pickup from Hazyview or nearby lodges. Your guide will track the Big Five in an open safari vehicle.', 
    priceType: 'per-person',
    basePrice: 2200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview/Kruger area)', 
    pricingTiers: [],
    img: images.halfDayKrugerMorningSafariDriveOne,
    gallery: [images.halfDayKrugerMorningSafariDriveTwo, images.halfDayKrugerMorningSafariDriveThree, images.halfDayKrugerMorningSafariDriveFour],
    overview: 'An exciting half-day morning game drive in an open safari vehicle in Kruger National Park.',
    duration: '5 Hours',
    whatIsIncluded: [
      'Pickup and drop-off from Hazyview/Kruger lodges',
      'Open safari vehicle with qualified guide',
      'Lunch pack provided by the lodge (optional)',
      'Park entrance fees'
    ],
    whatIsNotIncluded: [
      'Additional beverages and snacks',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sunrise Safari in Kruger', description: 'Early morning pickup, entering Kruger National Park at sunrise for a game drive. Return to hotel around midday.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,200 sharing'
    ]
  },
  { 
    id: 'k266', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Kruger National Park',
    title: 'Full Day Kruger Park Safari', 
    description: 'This is a full-day Kruger Park safari with open vehicle drive for wildlife viewing. Includes breakfast and lunch, and early morning game drive to spot the Big 5.', 
    priceType: 'per-person',
    basePrice: 2250, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hoedspruit or Hazyview area)', 
    pricingTiers: [],
    img: images.fullDayKrugerParkSafariOne,
    gallery: [images.fullDayKrugerParkSafariTwo, images.fullDayKrugerParkSafariThree],
    overview: 'A full-day safari in an open vehicle in Kruger National Park, including pickup from Hoedspruit/Hazyview.',
    duration: '1 Day',
    whatIsIncluded: [
      'Open vehicle safari drive',
      '7 hour guided open vehicle safari',
      'Collection and drop off from Hoedspruit or Hazyview',
      'Conservation/entrance fees'
    ],
    whatIsNotIncluded: [
      'Food and drink not specified in the itinerary',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Full Day Kruger Park Safari Drive', description: 'Early morning pickup, full-day safari drive in Kruger National Park with brunch and lunch stops at Rest Camps. Return in the late afternoon.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,250 sharing'
    ]
  },
  { 
    id: 'k267', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Kruger National Park',
    title: 'Full Day Kruger Safari from Hoedspruit', 
    description: 'A full-day guided safari adventure in Kruger National Park. Starting from Hoedspruit or nearby lodges, this tour offers a chance to see the Big Five and other wildlife in an open safari vehicle.', 
    priceType: 'per-person',
    basePrice: 2250, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hoedspruit area)', 
    pricingTiers: [],
    img: images.fullDayKrugerSafariFromHoedspruitOne,
    gallery: [images.fullDayKrugerSafariFromHoedspruitTwo, images.fullDayKrugerSafariFromHoedspruitThree],
    overview: 'A full-day safari in an open vehicle in Kruger National Park, including pickup from Hoedspruit.',
    duration: '1 Day',
    whatIsIncluded: [
      'Open vehicle safari drive',
      'Full-day guided safari in Kruger',
      'Pickup and drop-off from Hoedspruit/Kruger lodges',
      'Conservation fees, water, tea, and coffee'
    ],
    whatIsNotIncluded: [
      'Lunch at Rest Camp',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Full Day Kruger Park Safari Drive', description: 'Early morning pickup, full-day safari drive in Kruger National Park with brunch and lunch stops at Rest Camps. Return in the late afternoon.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,250 sharing'
    ]
  },
  { 
    id: 'k269', 
    category: 'Kruger National Park', 
    subCategory: 'Half-Day Safari',
    region: 'Kruger National Park',
    title: 'Ultimate Morning Kruger Park Safari Drive', 
    description: 'Experience a morning safari drive in the Kruger National Park with convenient pickup from Hazyview or nearby lodges. Your guide will track the Big Five in an open safari vehicle.', 
    priceType: 'per-person',
    basePrice: 2200, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview/Kruger area)', 
    pricingTiers: [],
    img: images.ultimateMorningKrugerParkSafariDriveOne,
    gallery: [images.ultimateMorningKrugerParkSafariDriveTwo, images.ultimateMorningKrugerParkSafariDriveThree, images.ultimateMorningKrugerParkSafariDriveFour, images.ultimateMorningKrugerParkSafariDriveFive, images.ultimateMorningKrugerParkSafariDriveSix, images.ultimateMorningKrugerParkSafariDriveSeven, images.ultimateMorningKrugerParkSafariDriveEight, images.ultimateMorningKrugerParkSafariDriveNine, images.ultimateMorningKrugerParkSafariDriveTen],
    overview: 'An exciting half-day morning game drive in an open safari vehicle in Kruger National Park.',
    duration: '5 Hours',
    whatIsIncluded: [
      'Open vehicle safari drive',
      'All entrance fees included',
      'Transfer to/from your hotel/lodge in Hazyview'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages',
      'Personal purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Departure from Perry\'s Bridge Trading Post', description: 'Early morning pickup, entering Kruger National Park at sunrise for a game drive. Return to hotel around midday.' }
    ],
    additionalInfo: [
      'Starting from ZAR 2,200 sharing'
    ]
  },
  { 
    id: 'k270', 
    category: 'Kruger National Park', 
    subCategory: 'Safari',
    region: 'Balule Private Game Reserve (nDzuti)',
    title: '3 Day nDzuti Camp Safari', 
    description: 'A 3-day safari at nDzuti Camp in the Balule Private Game Reserve. Includes return transfers from JNB, 2 nights accommodation, and 4 game drives.', 
    priceType: 'per-person',
    basePrice: 12015, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayNDzutiCampSafariOne,
    gallery: [images.threeDayNDzutiCampSafariTwo, images.threeDayNDzutiCampSafariThree, images.threeDayNDzutiCampSafariFour, images.threeDayNDzutiCampSafariFive, images.threeDayNDzutiCampSafariSix, images.threeDayNDzutiCampSafariSeven, images.threeDayNDzutiCampSafariEight],
    overview: 'A unique 3-day Big 5 safari experience at nDzuti Camp in the Balule Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from O.R. Tambo International Airport (JNB) or hotel',
      '2 Nights accommodation in an air-conditioned chalet',
      '2 Morning and 2 afternoon safari drives',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'Personal purchases',
      'Conservation fee (payable at the camp)'
    ],
    itinerary: [
      { title: 'Day 1: Transfer from Johannesburg to nDzuti Camp', description: 'Depart JNB, transfer to nDzuti Camp, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Full-Day Open Vehicle Safari and Leisure', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Morning Safari and Transfer Back to Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 12,015 sharing'
    ]
  },
  { 
    id: 'k271', 
    category: 'Kruger National Park', 
    subCategory: 'Day Tour',
    region: 'Kruger National Park (Southern Section)',
    title: 'Private Full Day Kruger National Park Safari from Hazyview', 
    description: 'Experience a thrilling full-day guided private safari in Kruger National Park. Starting from Hazyview or nearby lodges, your private guide will seek out the Big Five and other amazing animals. Transfers and the use of a private open safari vehicle are included.', 
    priceType: 'per-person',
    basePrice: 7000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Mpumalanga (Hazyview area)', 
    pricingTiers: [],
    img: images.privateFullDayKrugerNationalParkSafariFromHazyviewOne,
    gallery: [images.privateFullDayKrugerNationalParkSafariFromHazyviewTwo, images.privateFullDayKrugerNationalParkSafariFromHazyviewThree, images.privateFullDayKrugerNationalParkSafariFromHazyviewFour, images.privateFullDayKrugerNationalParkSafariFromHazyviewFive, images.privateFullDayKrugerNationalParkSafariFromHazyviewSix, images.privateFullDayKrugerNationalParkSafariFromHazyviewSeven],
    overview: 'A full-day private safari in an open vehicle in Kruger National Park, including flexible pickup and a private guide.',
    duration: '1 Day',
    whatIsIncluded: [
      'Full-day private guided safari drive',
      'Private vehicle for up to 10 guests',
      'Flexible pickup and drop-off times',
      'All conservation fees and documentation',
      'Complimentary water'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages (optional)',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Kruger National Park', description: 'Early morning private pickup from your accommodation, full-day safari drive in Kruger National Park with a private guide, focusing on your interests and goals for the day. Return in the late afternoon/early evening.' }
    ],
    additionalInfo: [
      'Starting from ZAR 7,000 sharing'
    ]
  },
  { 
    id: 'k272', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sand Game Reserve',
    title: '3 Day Umkumbe Safari Lodge Safari', 
    description: 'A 3-day luxury safari to Umkumbe Safari Lodge in the Sabi Sand Game Reserve. Includes return road transfers from JNB, 2 nights accommodation, and twice-daily game drives.', 
    priceType: 'per-person',
    basePrice: 15300, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.threeDayUmkumbeSafariLodgeSafariOne,
    gallery: [images.threeDayUmkumbeSafariLodgeSafariTwo, images.threeDayUmkumbeSafariLodgeSafariThree, images.threeDayUmkumbeSafariLodgeSafariFour, images.threeDayUmkumbeSafariLodgeSafariFive, images.threeDayUmkumbeSafariLodgeSafariSix],
    overview: 'A comfortable 3-day safari in the world-renowned Sabi Sand Game Reserve.',
    duration: '3 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or hotel',
      '2 Nights accommodation in a standard unit',
      'Morning and afternoon safari drives in open vehicles',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'All conservation fees and park entry fees',
      'Optional extras such as a bush walk'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Umkumbe Safari Lodge (Approximately 450 kilometres)', description: 'Depart JNB, transfer to Umkumbe Safari Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2: Umkumbe Bush Lodge', description: 'Early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 3: Umkumbe Bush Lodge - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 15,300 sharing'
    ]
  },
  { 
    id: 'k273', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sand Game Reserve',
    title: '4 Day Umkumbe Safari Lodge Safari', 
    description: 'A 4-day luxury safari to Umkumbe Safari Lodge in the Sabi Sand Game Reserve. Includes return road transfers from JNB, 3 nights accommodation, and twice-daily game drives.', 
    priceType: 'per-person',
    basePrice: 19800, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fourDayUmkumbeSafariLodgeSafariOne,
    gallery: [images.fourDayUmkumbeSafariLodgeSafariTwo, images.fourDayUmkumbeSafariLodgeSafariThree, images.fourDayUmkumbeSafariLodgeSafariFour, images.fourDayUmkumbeSafariLodgeSafariFive, images.fourDayUmkumbeSafariLodgeSafariSix, images.fourDayUmkumbeSafariLodgeSafariSeven],
    overview: 'A comfortable 4-day safari in the world-renowned Sabi Sand Game Reserve.',
    duration: '4 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or hotel',
      '3 Nights accommodation in a standard unit',
      'Morning and afternoon safari drives in open vehicles',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'All conservation fees and park entry fees',
      'Optional extras such as a bush walk'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Umkumbe Safari Lodge (Approximately 450 kilometres)', description: 'Depart JNB, transfer to Umkumbe Safari Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-3: Umkumbe Safari Lodge', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 4: Umkumbe Safari Lodge - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 19,800 sharing'
    ]
  },
  { 
    id: 'k274', 
    category: 'Kruger National Park', 
    subCategory: 'Luxury Safari',
    region: 'Sabi Sand Game Reserve',
    title: '5 Day Umkumbe Safari Lodge Safari', 
    description: 'A 5-day luxury safari to Umkumbe Safari Lodge in the Sabi Sand Game Reserve. Includes return road transfers from JNB, 4 nights accommodation, and twice-daily game drives.', 
    priceType: 'per-person',
    basePrice: 23465, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.fiveDayUmkumbeSafariLodgeSafariOne,
    gallery: [images.fiveDayUmkumbeSafariLodgeSafariTwo, images.fiveDayUmkumbeSafariLodgeSafariThree, images.fiveDayUmkumbeSafariLodgeSafariFour, images.fiveDayUmkumbeSafariLodgeSafariFive, images.fiveDayUmkumbeSafariLodgeSafariSix, images.fiveDayUmkumbeSafariLodgeSafariSeven],
    overview: 'A comfortable 5-day safari in the world-renowned Sabi Sand Game Reserve.',
    duration: '5 Days',
    whatIsIncluded: [
      'Return transfers from Johannesburg (JNB) or hotel',
      '4 Nights accommodation in a standard unit',
      'Morning and afternoon safari drives in open vehicles',
      'All meals and selected drinks'
    ],
    whatIsNotIncluded: [
      'All conservation fees and park entry fees',
      'Optional extras such as a bush walk'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Umkumbe Safari Lodge (Approximately 450 kilometres)', description: 'Depart JNB, transfer to Umkumbe Safari Lodge, check in, and enjoy the afternoon game drive.' },
      { title: 'Day 2-4: Umkumbe Game Reserve', description: 'Daily early morning game drive, relaxation, and afternoon game drive.' },
      { title: 'Day 5: Umkumbe Game Reserve - Johannesburg', description: 'Morning game drive, breakfast, and return transfer to JNB.' }
    ],
    additionalInfo: [
      'Starting from ZAR 23,465 sharing'
    ]
  },
  { 
    id: 'k275', 
    category: 'Pilanesberg National Park', 
    subCategory: 'Day Tour',
    region: 'Pilanesberg National Park',
    title: 'Private Luxury Pilanesberg Shuttle', 
    description: 'A dedicated 1-day luxury shuttle service for up to 4 guests from Gauteng to Pilanesberg National Park. Ideal for private groups wishing to travel in comfort and style for a full-day safari.', 
    priceType: 'per-group',
    basePrice: 6000, 
    isHotelPickupAvailable: true, 
    pickupProvinceRestriction: 'Gauteng', 
    pricingTiers: [],
    img: images.privateLuxuryPilanesbergShuttleOne,
    gallery: [images.privateLuxuryPilanesbergShuttleTwo, images.privateLuxuryPilanesbergShuttleThree, images.privateLuxuryPilanesbergShuttleFour, images.privateLuxuryPilanesbergShuttleFive, images.privateLuxuryPilanesbergShuttleSix],
    overview: 'A private luxury shuttle service from Gauteng to Pilanesberg National Park. Price is based on the entire vehicle for the whole trip.',
    duration: '1 Day',
    whatIsIncluded: [
      'Private 4-seat vehicle with air-conditioning and other luxury amenities',
      'Fuel and toll fees',
      'Tours stops/breaks for refreshments along the way',
      'Vehicle is dedicated to your group only'
    ],
    whatIsNotIncluded: [
      'Entrance fees to Pilanesberg National Park',
      'Game drives or any other park activity',
      'Meals and drinks',
      'All purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Depart from Gauteng', description: 'Early morning pickup from your address in Gauteng, and drive to Pilanesberg National Park. The driver will wait while you enjoy your pre-booked activities/safari (not included in the price). Return to Gauteng in the late afternoon/early evening.' }
    ],
    additionalInfo: [
      'Price based on booking the whole vehicle per trip'
    ]
  }
];