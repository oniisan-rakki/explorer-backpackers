import { images } from './images';

// --- Pretoria Tours Data ---
export const pretoriaData = [
  {
    id: 'pr-es',
    category: 'Pretoria',
    subCategory: 'Day Tour',
    region: 'Pretoria',
    title: 'Elephant Sanctuary Tour',
    description: 'Half-day tour to the Elephant Sanctuary in Hartbeespoortdam where you interact with elephants. Funds support addressing problematic situations like poaching concerns, zoos, circuses, and relocation programs.',
    priceType: 'per-person',
    basePrice: 3750,
    pricingTiers: [],
    img: images.elephantSanctuaryTourOne,
    gallery: [images.elephantSanctuaryTourTwo, images.elephantSanctuaryTourThree, images.elephantSanctuaryTourFour, images.elephantSanctuaryTourFive, images.elephantSanctuaryTourSix],
    overview: 'Visit the Elephant Sanctuary at Hartbeespoortdam for an intimate and educational half-day interaction with African elephants. Learn about their behaviour, anatomy, and conservation efforts.',
    duration: '1 Day',
    hotelPickupAvailable: true,
    pickupProvinceRestriction: 'Gauteng',
    whatIsIncluded: [
      'Transfers in an air-conditioned vehicle',
      '2-hour guided elephant interaction program',
      'Walking side-by-side with an elephant',
      'Free onboard unwrapped vehicle Wi-Fi'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages',
      'Personal purchases'
    ],
    itinerary: [
      {
        title: 'Day 1 - Elephant Sanctuary Tour',
        description: 'Guests are collected from any address in Johannesburg or Pretoria and transported to the Elephant Sanctuary. Experience an informative two-hour interaction program. Guests learn about the elephants and are encouraged to feed them, touch their skin, and hold their trunks. Drop-off is at any hotel or address in Johannesburg from 13:30.'
      }
    ],
    additionalInfo: [
      'Pickup time between 08:00am and 08:30am',
      'Drop-off time approximately 13:30',
      'Collection and drop-off at any hotel or address in Johannesburg / Pretoria'
    ]
  },
  {
    id: 'pr-pt',
    category: 'Pretoria',
    subCategory: 'Half Day Tour',
    region: 'Pretoria',
    title: 'Pretoria Tour | Half Day',
    description: 'This half-day tour will teach you a lot about the fascinating history of South Africa during a Pretoria city experience. Major attractions include the Union Buildings, Paul Kruger House Museum, and the Voortrekker Monument.',
    priceType: 'per-person',
    basePrice: 2200,
    pricingTiers: [],
    img: images.pretoriaTourHalfDayOne,
    gallery: [images.pretoriaTourHalfDayTwo, images.pretoriaTourHalfDayThree, images.pretoriaTourHalfDayFour, images.pretoriaTourHalfDayFive, images.pretoriaTourHalfDaySix, images.pretoriaTourHalfDaySeven, images.pretoriaTourHalfDayEight, images.pretoriaTourHalfDayNine, images.pretoriaTourHalfDayTen],
    overview: 'Explore South Africa\'s administrative capital focusing on its history and significant landmarks like the Union Buildings and the Voortrekker Monument.',
    duration: '1 Day',
    hotelPickupAvailable: true,
    pickupProvinceRestriction: 'Gauteng',
    whatIsIncluded: [
      'Transfers in air-conditioned vehicle',
      'Entrance to Paul Kruger House Museum',
      'Entrance to Voortrekker Monument',
      'Free onboard unwrapped Wi-Fi'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages',
      'Personal purchases'
    ],
    itinerary: [
      {
        title: 'Day 1 - The Capital City',
        description: 'Guests are collected from any address in Johannesburg or Pretoria and taken on a half-day tour. Visit the Union Buildings gardens, Paul Kruger House Museum, and the Voortrekker Monument. Tour concludes with drop-off at your hotel or accommodation.'
      }
    ],
    additionalInfo: [
      'Runs on Mondays and Sundays',
      'Morning Tour Pickup: 08:00am - 09:00am Drop-off: 13:30',
      'Afternoon Tour Pickup: 12:30pm - 13:30pm Drop-off: 17:00'
    ]
  },
  {
    id: 'pr-lpt',
    category: 'Pretoria',
    subCategory: 'Combo Tour',
    region: 'Pretoria',
    title: 'Lion Park and Pretoria Tour',
    description: 'A full-day tour combining a visit to the Lion Park for a close-up encounter with animals like lions, wild dogs, and cheetahs, and a guided tour of Pretoria\'s historical landmarks.',
    priceType: 'per-person',
    basePrice: 2995,
    pricingTiers: [],
    img: images.lionParkAndPretoriaTourOne,
    gallery: [images.lionParkAndPretoriaTourTwo, images.lionParkAndPretoriaTourThree, images.lionParkAndPretoriaTourFour, images.lionParkAndPretoriaTourFive, images.lionParkAndPretoriaTourSix, images.lionParkAndPretoriaTourSeven, images.lionParkAndPretoriaTourEight, images.lionParkAndPretoriaTourNine, images.lionParkAndPretoriaTourTen, images.lionParkAndPretoriaTourEleven, images.lionParkAndPretoriaTourTwelve],
    overview: 'Combines the excitement of a safari experience at Lion Park with the rich history of Pretoria in a single full-day tour.',
    duration: '1 Day',
    hotelPickupAvailable: true,
    pickupProvinceRestriction: 'Gauteng',
    whatIsIncluded: [
      'Open vehicle safari drive',
      'Entrance Lion Park',
      'Union Buildings Viewing',
      'Paul Kruger House Museum Entrance',
      'Voortrekker Monument Entrance'
    ],
    whatIsNotIncluded: [
      'Food and drink other than water',
      'Personal purchases'
    ],
    itinerary: [
      {
        title: 'Day 1 - The Capital City and Nature',
        description: 'Morning visit to the Lion Park for a game drive. Afternoon proceed to Pretoria for a tour of the capital city including Union Buildings, Paul Kruger House Museum, and the Voortrekker Monument. Drop-off at any hotel or address in Johannesburg / Pretoria around 17:00.'
      }
    ],
    additionalInfo: [
      'Pickup time between 08:00am and 08:30am',
      'Drop-off time approximately 17:00',
      'Collection and drop-off at any hotel or address in Johannesburg / Pretoria'
    ]
  },
  {
    id: 'pr-cdmt',
    category: 'Pretoria',
    subCategory: 'Combo Tour',
    region: 'Pretoria',
    title: 'Pretoria City and Diamond Mine Tour',
    description: 'Experience South Africa\'s administrative capital and a visit to the famous Cullinan Diamond Mine, the source of the world\'s largest diamond.',
    priceType: 'per-person',
    basePrice: 1990,
    pricingTiers: [],
    img: images.pretoriaCityAndDiamondMineTourOne,
    gallery: [images.pretoriaCityAndDiamondMineTourTwo, images.pretoriaCityAndDiamondMineTourThree, images.pretoriaCityAndDiamondMineTourFour, images.pretoriaCityAndDiamondMineTourFive, images.pretoriaCityAndDiamondMineTourSix, images.pretoriaCityAndDiamondMineTourSeven, images.pretoriaCityAndDiamondMineTourEight, images.pretoriaCityAndDiamondMineTourNine, images.pretoriaCityAndDiamondMineTourTen],
    overview: 'A full-day tour combining a cultural and historical city experience in Pretoria with an industrial visit to the Cullinan Diamond Mine.',
    duration: '1 Day',
    hotelPickupAvailable: true,
    pickupProvinceRestriction: 'Gauteng',
    whatIsIncluded: [
      'Transfers in air-conditioned vehicle',
      'Entrance Cullinan Diamond Mine',
      'Free WiFi'
    ],
    whatIsNotIncluded: [
      'Personal purchases'
    ],
    itinerary: [
      {
        title: 'Day 1 - Pretoria and Cullinan',
        description: 'Visit the Union Buildings and the Voortrekker Monument in Pretoria followed by a guided tour of the Cullinan Diamond Mine. Guests will learn about the history of the mine and its famous diamonds. Drop-off is at the hotel or accommodation.'
      }
    ],
    additionalInfo: [
      'Seats wheelchair accessible are not guaranteed',
      'Drop-off time is variable',
      'Collection and drop-off at any hotel or address in Johannesburg / Pretoria'
    ]
  },
  {
    id: 'pr-pvt',
    category: 'Pretoria',
    subCategory: 'Private Tour',
    region: 'Pretoria',
    title: 'Private Pretoria Tour',
    description: 'A dedicated private tour of Pretoria taking you to the Union Buildings, Paul Kruger House Museum, Church Square, and the Voortrekker Monument with a private vehicle and guide.',
    priceType: 'per-person',
    basePrice: 1872,
    pricingTiers: [],
    img: images.privatePretoriaTourOne,
    gallery: [images.privatePretoriaTourTwo, images.privatePretoriaTourThree, images.privatePretoriaTourFour, images.privatePretoriaTourFive, images.privatePretoriaTourSix, images.privatePretoriaTourSeven],
    overview: 'A highly customizable private half-day tour of Pretoria with a dedicated guide and vehicle for an in-depth exploration of the city\'s key historical sites.',
    duration: '1 Day',
    hotelPickupAvailable: true,
    pickupProvinceRestriction: 'Gauteng',
    whatIsIncluded: [
      'Private vehicle and guide',
      'Entrance Paul Kruger House Museum',
      'Entrance Voortrekker Monument',
      'Free onboard unwrapped Wi-Fi'
    ],
    whatIsNotIncluded: [
      'Food and drinks other than water'
    ],
    itinerary: [
      {
        title: 'Day 1 - Customized Pretoria',
        description: 'The private tour allows for customized sightseeing of Pretoria including Union Buildings, Church Square, Paul Kruger House Museum, and the Voortrekker Monument. Drop-off at your hotel or accommodation.'
      }
    ],
    additionalInfo: [
      'Full collection and drop-off flexibility',
      'Pickup between 08:00am and 08:30am or 08:00am and 09:00am for half-day tours'
    ]
  },
  {
    id: 'pr-clpt',
    category: 'Pretoria',
    subCategory: 'Combo Tour',
    region: 'Pretoria',
    title: 'City of Pretoria & Lion Park Tour',
    description: 'A full day combining the history and architecture of Pretoria\'s city hustle with a visit to the Lion & Safari Park to see lions, cheetahs, and wild dogs.',
    priceType: 'per-person',
    basePrice: 2740,
    pricingTiers: [],
    img: images.cityOfPretoriaLionParkTourOne,
    gallery: [images.cityOfPretoriaLionParkTourTwo, images.cityOfPretoriaLionParkTourThree, images.cityOfPretoriaLionParkTourFour, images.cityOfPretoriaLionParkTourFive, images.cityOfPretoriaLionParkTourSix, images.cityOfPretoriaLionParkTourSeven],
    overview: 'Experience the contrast between South Africa\'s historical capital and its wildlife in a single comprehensive day tour.',
    duration: '1 Day',
    hotelPickupAvailable: true,
    pickupProvinceRestriction: 'Gauteng',
    whatIsIncluded: [
      'Transfers in an air-conditioned vehicle',
      'Lion & Safari Park entrance fee',
      'Entrance Paul Kruger House Museum',
      'Entrance Voortrekker Monument'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages',
      'Personal purchases'
    ],
    itinerary: [
      {
        title: 'Day 1 - Lion & Safari Park, City of Pretoria',
        description: 'Morning game drive at the Lion & Safari Park. Lunch break. Afternoon city tour of Pretoria including Union Buildings, Paul Kruger House Museum, and Voortrekker Monument. Drop-off at the hotel.'
      }
    ],
    additionalInfo: [
      'Collection and drop-off at any accommodation address in Johannesburg and Pretoria',
      'Pickup time between 08:00am and 08:30am'
    ]
  }
];