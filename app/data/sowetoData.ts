import { images } from './images';

// --- Soweto Tours Data ---
export const sowetoData = [
  { 
    id: 's1', 
    category: 'Soweto', 
    subCategory: 'Tour',
    region: 'Soweto',
    title: 'Soweto Tour', 
    description: "A Soweto tour is an unforgettable experience and an absolute must for those who love the idea of an amazing cultural day out and don't know much about the South African past and present. Join your expert local guide and allow them to take you to the historical sites of the city.", 
    priceType: 'per-person',
    basePrice: 1100, 
    hotelPickupAvailable: true, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1100 },
      { type: 'single', price: 1400 }
    ],
    img: images.sowetoTourOne,
    gallery: [images.sowetoTourTwo, images.sowetoTourThree, images.sowetoTourFour, images.sowetoTourFive, images.sowetoTourSix, images.sowetoTourSeven, images.sowetoTourEight, images.sowetoTourNine, images.sowetoTourTen, images.sowetoTourEleven, images.sowetoTourTwelve, images.sowetoTourThirteen, images.sowetoTourFourteen, images.sowetoTourFifteen, images.sowetoTourSixteen],
    overview: 'Visit FNB Soccer Stadium, Chris Hani Baragwanath Hospital and taxi rank, Hector Pieterson Memorial and Museum, Mandela House, Vilakazi Street, Orlando Towers, and a traditional African meal.',
    duration: '1 Day',
    whatIsIncluded: [
      'Collection and drop off from any hotel or address in Johannesburg or Pretoria',
      'Services of a professional registered tour guide',
      'Traditional African meal'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'The tour starts with a drive to FNB Soccer Stadium and continues to Chris Hani Baragwanath Hospital. You will proceed to the Hector Pieterson Memorial and Museum, Mandela House, and then Vilakazi Street.' },
      { title: 'Vilakazi Street', description: 'Explore Vilakazi Street, known for being home to two Nobel Peace Prize winners. You’ll have a traditional African meal here.' },
      { title: 'Orlando Towers', description: 'The tour concludes with a visit to the brightly painted Orlando Towers before returning to your hotel.' }
    ],
    additionalInfo: [
      'Departure and drop-off times are between 07:30am - 09:30am and 12:30 - 14:30 respectively'
    ]
  },
  { 
    id: 's2', 
    category: 'Soweto', 
    subCategory: 'Activity',
    region: 'Soweto',
    title: '2 Hour Soweto Tuk Tuk Tour', 
    description: "Soweto is a bustling city on the outskirts of Johannesburg that is rich in history and home to almost 2 million inhabitants. This tour is an opportunity to learn about South Africa's turbulent past and have a look into its exciting future...", 
    priceType: 'per-person',
    basePrice: 1200, 
    hotelPickupAvailable: false, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1200 },
      { type: 'single', price: 1600 }
    ],
    img: images.twoHourSowetoTukTukTourOne,
    gallery: [images.twoHourSowetoTukTukTourTwo, images.twoHourSowetoTukTukTourThree, images.twoHourSowetoTukTukTourFour, images.twoHourSowetoTukTukTourFive, images.twoHourSowetoTukTukTourSix, images.twoHourSowetoTukTukTourSeven, images.twoHourSowetoTukTukTourEight],
    overview: 'Visit Vilakazi Street, Orlando Towers, Hector Pieterson Museum, and experience the culture of Soweto on a tuk-tuk.',
    duration: '2 hours',
    whatIsIncluded: [
      'Transport to and from Soweto',
      'Services of your guide on a tuk-tuk',
      'Culture tour of Soweto on a tuk-tuk'
    ],
    whatIsNotIncluded: [
      'Entrance fees to Soweto attractions',
      'Purchases of a personal nature',
      'Meals and beverages'
    ],
    itinerary: [
      { title: 'Depart from Mandela House', description: 'Tour departs from Mandela House at Vilakazi Street at 10h00, 13h00 and 15h00.' },
      { title: 'Hector Pieterson Museum', description: 'Visit the museum, which is dedicated to the school pupil who was shot during the 1976 Soweto uprising.' },
      { title: 'Vilakazi Street', description: 'Explore Vilakazi Street, the only street in the world that was once home to two Nobel Peace Prize winners (Nelson Mandela and Desmond Tutu).' },
      { title: 'Orlando Towers', description: 'See the two iconic cooling towers, painted in bright colours, which offer bungee jumping.' },
      { title: 'Mandela House', description: 'The tour ends with a return to Mandela House.' }
    ],
    additionalInfo: [
      'The tour is for group tours and transfers are not included.',
      'Pickup is not available to and from Soweto.'
    ]
  },
  { 
    id: 's3', 
    category: 'Soweto', 
    subCategory: 'Activity',
    region: 'Soweto',
    title: '4 Hour Soweto Bicycle Tour', 
    description: 'The 4 Day Soweto Bicycle Tour is an exhilarating half-day experience allowing you to explore Soweto with knowledgeable local guides. Learn about its turbulent past and discover the heart of this vibrant city.', 
    priceType: 'per-person',
    basePrice: 1063, 
    hotelPickupAvailable: false, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1063 },
      { type: 'single', price: 1926 }
    ],
    img: images.fourHourSowetoBicycleTourOne,
    gallery: [images.fourHourSowetoBicycleTourTwo, images.fourHourSowetoBicycleTourThree, images.fourHourSowetoBicycleTourFour, images.fourHourSowetoBicycleTourFive, images.fourHourSowetoBicycleTourSix, images.fourHourSowetoBicycleTourSeven, images.fourHourSowetoBicycleTourEight],
    overview: 'Visit Vilakazi Street, Orlando Towers, Hector Pieterson Museum, and enjoy a traditional African lunch.',
    duration: '4 hours',
    whatIsIncluded: [
      'Transport to and from Soweto',
      'Services of your guide on a bicycle',
      'Culture tour of Soweto on a bicycle',
      'African style lunch'
    ],
    whatIsNotIncluded: [
      'Entrance fees to Soweto attractions',
      'Purchases of a personal nature',
      'Beverages'
    ],
    itinerary: [
      { title: 'Depart from Lebo\'s Soweto Backpackers', description: 'Tour departs from Lebo’s Soweto Backpackers at 10h00, 13h00 and 15h00.' },
      { title: 'Vilakazi Street', description: 'Cycle through the vibrant Vilakazi Street and visit Mandela House and the Hector Pieterson Memorial.' },
      { title: 'Orlando Towers', description: 'Cycle to the Orlando Towers, famous for bungee jumping, and enjoy lunch at a traditional African restaurant.' },
      { title: 'Return', description: 'Return to Lebo’s Soweto Backpackers.' }
    ],
    additionalInfo: [
      'The tour is for group tours and transfers are not included.',
      'Collection / Drop off is not included to and from Soweto.'
    ]
  },
  { 
    id: 's4', 
    category: 'Soweto', 
    subCategory: 'Tour',
    region: 'Soweto',
    title: 'Private Soweto Tour', 
    description: 'This half-day guided Private Soweto tour is an opportunity to experience the bustle and hustle of Soweto without the pressure of a group. Your expert guide takes you to historic sites and cultural hotspots to showcase the city\'s rich history.', 
    priceType: 'per-person',
    basePrice: 1745, 
    hotelPickupAvailable: true, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1745 },
      { type: 'single', price: 2020 }
    ],
    img: images.privateSowetoTourOne,
    gallery: [images.privateSowetoTourOne],
    overview: 'Visit Soweto, Vilakazi Street, Mandela House, Hector Pieterson Museum (closed on Mondays), and the Orlando Cooling Towers.',
    duration: '1 Day',
    whatIsIncluded: [
      'Collection and drop off from any address in Johannesburg or Pretoria',
      'Services of a professional guide and air-conditioned vehicle',
      'Entrance fees to Mandela House Museum and Hector Pieterson Museum'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Lunch and beverages'
    ],
    itinerary: [
      { title: 'Experience Soweto', description: 'Visit FNB Soccer Stadium, Chris Hani Baragwanath Hospital, and the settlement area. Proceed to Hector Pieterson Memorial and Museum and Mandela House. The tour is private and customized to your preferences.' }
    ],
    additionalInfo: [
      'Departure and drop-off times are between 09:00 - 09:30am and 13:30 - 14:00 respectively.',
      'The guide will take you back to your accommodation in Johannesburg or Pretoria.'
    ]
  },
  { 
    id: 's5', 
    category: 'Soweto', 
    subCategory: 'Activity',
    region: 'Soweto',
    title: '4 Hour Soweto Tuk Tuk Tour', 
    description: 'A 4 hour Soweto Tuk Tuk tour is an unforgettable half-day experience that allows you to explore Soweto in a unique way. Enjoy a drive through its traditional residential area and a meal at a popular restaurant.', 
    priceType: 'per-person',
    basePrice: 1350, 
    hotelPickupAvailable: false, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1350 },
      { type: 'single', price: 1930 }
    ],
    img: images.fourHourSowetoTukTukTourOne,
    gallery: [images.fourHourSowetoTukTukTourTwo, images.fourHourSowetoTukTukTourThree, images.fourHourSowetoTukTukTourFour],
    overview: 'Visit Vilakazi Street, Orlando Towers, Hector Pieterson Museum, and enjoy a traditional African lunch.',
    duration: '4 hours',
    whatIsIncluded: [
      'Transport to and from Soweto',
      'Services of your guide on a tuk-tuk',
      'Cultural tour of Soweto on a tuk-tuk',
      'Lunch'
    ],
    whatIsNotIncluded: [
      'Entrance fees to Soweto attractions',
      'Purchases of a personal nature',
      'Beverages'
    ],
    itinerary: [
      { title: 'Depart from Mandela House', description: 'Tour departs from Mandela House at Vilakazi Street at 10h00, 13h00 and 15h00.' },
      { title: 'Hector Pieterson Museum', description: 'Visit the museum dedicated to the school pupil who was shot during the 1976 Soweto uprising.' },
      { title: 'Traditional African meals', description: 'Enjoy lunch at a cultural restaurant at Backpacker’s Lodge in Soweto, followed by a return to Mandela House.' }
    ],
    additionalInfo: [
      'The tour is for group tours and transfers are not included.',
      'Collection / Drop off is not included to and from Soweto.'
    ]
  },
  { 
    id: 's6', 
    category: 'Soweto', 
    subCategory: 'Tour',
    region: 'Soweto',
    title: 'Soweto and Lunch', 
    description: 'A tour of Soweto\'s historic sites and lunch at a popular restaurant in the heart of Orlando West. This is a wonderful way to immerse yourself in the Soweto experience and not just speculate on the modern dusty streets of the township.', 
    priceType: 'per-person',
    basePrice: 1500, 
    hotelPickupAvailable: true, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1500 },
      { type: 'single', price: 1800 }
    ],
    img: images.sowetoAndLunchOne,
    gallery: [images.sowetoAndLunchTwo, images.sowetoAndLunchThree, images.sowetoAndLunchFour, images.sowetoAndLunchFive, images.sowetoAndLunchSix],
    overview: 'Visit Soweto, Vilakazi Street, Orlando Towers, Hector Pieterson Museum (closed on Mondays), and enjoy lunch in Soweto.',
    duration: '1 Day',
    whatIsIncluded: [
      'Collection and drop off from any hotel or address in Johannesburg or Pretoria',
      'Services of a professional registered guide and vehicle',
      'Lunch at a traditional African restaurant',
      'Entrance fees to Mandela House Museum'
    ],
    whatIsNotIncluded: [
      'Beverages',
      'Purchases of a personal nature',
      'Entrance fees to Hector Pieterson Museum (if not included in the package)'
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Visit FNB Soccer Stadium, Chris Hani Baragwanath Hospital, and the settlement area. Proceed to Hector Pieterson Memorial and Museum and Mandela House.' },
      { title: 'Orlando West', description: 'Drive past Orlando Towers and stop for a traditional African lunch at a popular restaurant. The tour concludes with a panoramic drive of the township and return to Johannesburg.' }
    ],
    additionalInfo: [
      'Departure and drop-off times are between 07:30am - 09:30am and 12:30 - 17:00 respectively'
    ]
  },
  { 
    id: 's7', 
    category: 'Soweto', 
    subCategory: 'Tour',
    region: 'Soweto',
    title: 'Soweto Night Tour', 
    description: 'The Soweto Night tour is an unforgettable experience and an absolute thrill for those who love the idea of an amazing cultural day out. Join your expert local guide and allow them to take you to the historical sites before sunset and experience the city at night.', 
    priceType: 'per-person',
    basePrice: 2800, 
    hotelPickupAvailable: true, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 2800 },
      { type: 'single', price: 3800 }
    ],
    img: images.sowetoNightTourOne,
    gallery: [images.sowetoNightTourTwo, images.sowetoNightTourThree, images.sowetoNightTourFour, images.sowetoNightTourFive, images.sowetoNightTourSix, images.sowetoNightTourSeven],
    overview: 'Visit the Vilakazi Street precinct at sunset and enjoy a four-course traditional meal at a popular restaurant. Experience the vibrant nightlife of the township.',
    duration: '1 Day',
    whatIsIncluded: [
      'Collection and drop off from any hotel or address in Johannesburg or Pretoria (Must be arranged)',
      'Services of a professional registered guide and vehicle',
      'Four-course traditional African meal',
      'Transfers to and from air-conditioned vehicle'
    ],
    whatIsNotIncluded: [
      'Beverages not included as "free drinks"',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'The tour starts with a drive to Soweto for the sunset. You will pass landmarks such as FNB Soccer Stadium and Orlando Towers.' },
      { title: 'Day 1 - Visit the Vilakazi Community', description: 'The evening starts with a visit to the first of the four different nightlife spots. You will enjoy a traditional meal and drinks. The tour concludes with a drive back to your accommodation.' }
    ],
    additionalInfo: [
      'Departure is between 16:00pm - 16:30pm and drop-off is at 22:00.',
      'This tour is only available on Wednesdays, Thursdays, Fridays, Saturdays and Sunday'
    ]
  },
  { 
    id: 's8', 
    category: 'Soweto', 
    subCategory: 'Activity',
    region: 'Soweto',
    title: '2.5 Hour Soweto Bicycle Tour', 
    description: 'Explore Soweto on a bicycle for a unique cultural South African experience. This city is world famous for its rich history and role in the anti-Apartheid movement. This tour offers a wide variety of entertainment for young and old.', 
    priceType: 'per-person',
    basePrice: 700, 
    hotelPickupAvailable: false, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 700 },
      { type: 'single', price: 1000 }
    ],
    img: images.two5HourSowetoBicycleTourOne,
    gallery: [images.two5HourSowetoBicycleTourTwo, images.two5HourSowetoBicycleTourThree, images.two5HourSowetoBicycleTourFour, images.two5HourSowetoBicycleTourFive, images.two5HourSowetoBicycleTourSix],
    overview: 'Visit Vilakazi Street, Orlando Towers, Hector Pieterson Museum, and enjoy lunch.',
    duration: '2.5 hours',
    whatIsIncluded: [
      'Transport to and from Soweto',
      'Services of your guide on a bicycle',
      'Culture tour of Soweto on a bicycle',
      'Lunch'
    ],
    whatIsNotIncluded: [
      'Entrance fees to Soweto attractions',
      'Purchases of a personal nature',
      'Beverages',
      'Bungee jumping'
    ],
    itinerary: [
      { title: 'Depart from Lebo\'s Soweto Backpackers', description: 'Tour departs from Lebo’s Soweto Backpackers at 10h00, 13h00 and 15h00.' },
      { title: 'Vilakazi Street', description: 'Cycle through the vibrant Vilakazi Street and visit Mandela House and the Hector Pieterson Memorial.' },
      { title: 'Orlando Towers', description: 'Cycle to the Orlando Towers, famous for bungee jumping, and enjoy lunch at a traditional African restaurant.' },
      { title: 'Return', description: 'Return to Lebo’s Soweto Backpackers.' }
    ],
    additionalInfo: [
      'The tour is for group tours and transfers are not included.',
      'Collection / Drop off is not included to and from Soweto.'
    ]
  },
  { 
    id: 's9', 
    category: 'Soweto', 
    subCategory: 'Activity',
    region: 'Soweto',
    title: 'Half-Day Private Tuk Tuk Tour in Soweto', 
    description: 'Soweto is a bustling city on the outskirts of Johannesburg that is rich in history and home to almost 2 million inhabitants. This half-day private tour is an opportunity to learn about South Africa\'s turbulent past.', 
    priceType: 'per-person',
    basePrice: 1500, 
    hotelPickupAvailable: false, 
    pickupRegion: 'Gauteng',
    pricingTiers: [
      { type: 'sharing', price: 1500 },
      { type: 'single', price: 1950 }
    ],
    img: images.halfDayPrivateTukTukTourInSowetoOne,
    gallery: [images.halfDayPrivateTukTukTourInSowetoTwo, images.halfDayPrivateTukTukTourInSowetoThree, images.halfDayPrivateTukTukTourInSowetoFour, images.halfDayPrivateTukTukTourInSowetoFive, images.halfDayPrivateTukTukTourInSowetoSix, images.halfDayPrivateTukTukTourInSowetoSeven, images.halfDayPrivateTukTukTourInSowetoEight, images.halfDayPrivateTukTukTourInSowetoNine],
    overview: 'Visit Vilakazi Street, Orlando Towers, Hector Pieterson Museum, and enjoy a traditional African meal.',
    duration: 'Half Day (2 Hours)',
    whatIsIncluded: [
      'Transport to and from Soweto',
      'Services of your guide on a tuk-tuk',
      'Traditional South African Meals',
      'Culture tour of Soweto on a tuk-tuk'
    ],
    whatIsNotIncluded: [
      'Entrance fees to Soweto attractions',
      'Purchases of a personal nature',
      'Beverages',
      'Bungee jumping'
    ],
    itinerary: [
      { title: 'Depart from Lebo\'s Soweto Backpackers', description: 'Tour departs from Lebo’s Soweto Backpackers at 10h00, 13h00 and 15h00.' },
      { title: 'Vilakazi Street', description: 'Visit Mandela House, the Hector Pieterson Memorial and Museum, and cycle through the vibrant Vilakazi Street.' },
      { title: 'Traditional African meals', description: 'Enjoy lunch at a cultural restaurant at Backpacker’s Lodge in Soweto, followed by a return to Lebo’s Soweto Backpackers.' }
    ],
    additionalInfo: [
      'The tour is for private tours and transfers are not included.',
      'Collection / Drop off is not included to and from Soweto.',
      'The tour is approximately 2 hours.'
    ]
  }
];