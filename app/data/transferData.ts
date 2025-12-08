import { images } from './images';

// Note: 'images' import is assumed to map to corresponding image assets.
// 'img' and 'gallery' values are placeholders ('...') for now.

export const transferData = [
  // 1. Exclusive Ivory Tree Transfer Package
  { 
    id: 't1', 
    category: 'Transfers', 
    subCategory: 'Lodge Transfer & Safari',
    region: 'Pilanesberg',
    title: 'Exclusive Ivory Tree Transfer Package', 
    description: 'Discover a seamless and thrilling journey to Ivory Tree Game Lodge with Moafrika Tours Exclusive Ivory Tree Safari Transfer Package. This all-inclusive package blends a convenient door-to-door transfer from Johannesburg or Pretoria with a 3-hour open vehicle game drive in Pilanesberg National Park.', 
    priceType: 'per-person',
    basePrice: 2000, 
    hotelPickupAvailable: true, // Pickup from Johannesburg or Pretoria included
    pricingTiers: [],
    img: images.exclusiveIvoryTreeTransferPackageOne,
    gallery: [images.exclusiveIvoryTreeTransferPackageTwo, images.exclusiveIvoryTreeTransferPackageThree, images.exclusiveIvoryTreeTransferPackageFour, images.exclusiveIvoryTreeTransferPackageFive, images.exclusiveIvoryTreeTransferPackageSix, images.exclusiveIvoryTreeTransferPackageSeven],
    overview: 'This is an all-inclusive package offering door-to-door transfer, a 3-hour game drive, park entrance fees, and expert guided safari experience.',
    duration: '5 Hours',
    whatIsIncluded: [
      'One-way shuttle to Ivory Tree Game Lodge',
      'Entrance fees to Pilanesberg National Park',
      '3-hour open vehicle game drive on arrival at the lodge',
      'Drinks and snacks during the game drive',
      'Direct drop-off at Ivory Tree Game Lodge',
      'Expert Guide',
    ],
    whatIsNotIncluded: [
      'Accommodation at Ivory Tree Game Lodge (unless booked separately)',
      'Return transfer to Johannesburg or Pretoria (R1,500 per person if booked separately)',
      'Meals or drinks during the transfer (excluding game drive drinks/snacks)',
      'Personal expenses or optional lodge activities (e.g., spa treatments, extra food, beverages)',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg or Pretoria hotels between 05:30 and 06:00, arriving at Manyane Gate by 08:45.' },
      { title: 'Game Drive & Arrival', description: 'Entrance to Pilanesberg National Park at 09:00, exploring the central middle area for remarkable wildlife encounters. Arrive at Ivory Tree Game Lodge between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'Optional Return Transfer to Johannesburg or Pretoria is R1,500 per person.',
      'A private transfer for a personalized and flexible return: R3,500 or R4,500 for a 1-4 seater vehicle.'
    ]
  },
  
  // 2. Daily Pilanesberg Shuttle and Transfer Services
  { 
    id: 't2', 
    category: 'Transfers', 
    subCategory: 'Shuttle Transfer',
    region: 'Pilanesberg',
    title: 'Daily Pilanesberg Shuttle and Transfer Services', 
    description: 'Our Moafrika Tours shuttle service offers various seating options for affordable, reliable transportation to and from the Greater Pretoria/Johannesburg area and Pilanesberg National Park, accommodating individuals, couples, and large groups.', 
    priceType: 'per-person',
    basePrice: 1500, 
    hotelPickupAvailable: true, // Door-to-door pickup/drop-off from your hotel included
    pricingTiers: [
      { maxPax: 4, price: 3500 }, // Private Transfers - 1 to 4 Pax
      { maxPax: 7, price: 4100 }  // Private Transfers - 5 to 7 Pax
    ],
    img: images.dailyPilanesbergShuttleAndTransferServicesOne,
    gallery: [images.dailyPilanesbergShuttleAndTransferServicesTwo, images.dailyPilanesbergShuttleAndTransferServicesThree, images.dailyPilanesbergShuttleAndTransferServicesFour, images.dailyPilanesbergShuttleAndTransferServicesFive, images.dailyPilanesbergShuttleAndTransferServicesSix, images.dailyPilanesbergShuttleAndTransferServicesSeven, images.dailyPilanesbergShuttleAndTransferServicesEight, images.dailyPilanesbergShuttleAndTransferServicesNine, images.dailyPilanesbergShuttleAndTransferServicesTen],
    overview: 'This is a daily shuttle service, offering affordable and reliable transport between Johannesburg/Pretoria and various lodges/gates in Pilanesberg National Park.',
    duration: '1 Day',
    whatIsIncluded: [
      'Door-to-door shuttle service from your hotel/accommodation',
      'Drop-off at your destination',
      'Driver during the transfer',
    ],
    whatIsNotIncluded: [
      'Park conservation or entrance fees',
      'The cost of a game drive',
      'Gratuities paid to the guide or driver',
      'Accommodation',
    ],
    itinerary: [
      { title: 'Depart from Gauteng', description: 'Your shuttle will pick you up from your accommodation in Johannesburg or Pretoria (between 05:30 and 06:00) and travel directly to Pilanesberg National Park.' },
      { title: 'Pilanesberg National Park', description: 'Arrive at the park between 08:00 and 09:00. The shuttle drops guests off at their specified lodge or gate, such as Bakubung, Kwa Maritane, or Manyane Gate.' }
    ],
    additionalInfo: [
      'Moafrika Shuttle Services is willing to drop you off at any of the lodges located in the Black Rhino Game Reserve.',
      'Check drop-off/pick-up times carefully (e.g., 08:00-09:00 arrival, 12:00-12:30 pick-up for return).'
    ]
  },
  
  // 3. Exclusive Black Rhino Transfer Safari in Pilanesberg
  { 
    id: 't3', 
    category: 'Transfers', 
    subCategory: 'Lodge Transfer & Safari',
    region: 'Pilanesberg',
    title: 'Exclusive Black Rhino Transfer Safari', 
    description: 'Experience an unforgettable journey to Black Rhino Reserve, a private concession within Pilanesberg National Park. This package includes a door-to-door transfer from Johannesburg or Pretoria and a thrilling 3-hour open-vehicle safari game drive.', 
    priceType: 'per-person',
    basePrice: 2300, 
    hotelPickupAvailable: true, // Door-to-door shuttle/pickup from Johannesburg or Pretoria included
    pricingTiers: [],
    img: images.exclusiveBlackRhinoTransferSafariInPilanesbergOne,
    gallery: [images.exclusiveBlackRhinoTransferSafariInPilanesbergTwo, images.exclusiveBlackRhinoTransferSafariInPilanesbergThree, images.exclusiveBlackRhinoTransferSafariInPilanesbergFour, images.exclusiveBlackRhinoTransferSafariInPilanesbergFive, images.exclusiveBlackRhinoTransferSafariInPilanesbergSix],
    overview: 'All-inclusive package featuring a private concession game drive at Black Rhino Reserve and comfortable door-to-door transfer from Gauteng.',
    duration: '5 Hours',
    whatIsIncluded: [
      'Door-to-door shuttle to Black Rhino Game Reserve',
      'Pickup from Johannesburg or Pretoria hotels/airport',
      'Entrance fees (Pilanesberg & Black Rhino Game Reserve)',
      '3-hour Open Vehicle Game Drive',
      'Drinks, water, and snacks during the game drive',
      'Drop-off at the lodge',
      'Expert-guided safari',
    ],
    whatIsNotIncluded: [
      'Accommodation at Black Rhino Lodge',
      'Return transfer to Johannesburg or Pretoria (R1,500 per person)',
      'Meals or drinks during the transfer/game drive (excluding included items)',
      'Personal expenses or optional lodge activities (e.g., spa treatments, extra food, beverages)',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg or Pretoria hotels between 05:30 and 06:00, arriving at Black Rhino Gate by 09:00.' },
      { title: 'Black Rhino Safari', description: 'Enter the reserve at 09:00 for the 3-hour open-vehicle game drive. Drop-off at the chosen Black Rhino Lodge between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'Optional Return Transfer to Johannesburg or Pretoria is R1,500 per person.',
      'Private return transfer options available at a flat rate (e.g., R3,500 or R4,500 for a 1-4 seater).'
    ]
  },
  
  // 4. Pilanesberg Transfer and Safari
  { 
    id: 't4', 
    category: 'Transfers', 
    subCategory: 'Shuttle Transfer & Safari',
    region: 'Pilanesberg',
    title: 'Pilanesberg Transfer and Safari', 
    description: 'A combined package of a comfortable door-to-door shuttle transfer from Gauteng and a 3-hour open-vehicle game drive in the Pilanesberg National Park, offering reliable and affordable transport and an incredible safari experience.', 
    priceType: 'per-person',
    basePrice: 2000, 
    hotelPickupAvailable: true, // Door-to-door shuttle/pickup from Johannesburg or Pretoria included
    pricingTiers: [
       { maxPax: 4, price: 6500 } // Executive BMW X5 (1 to 4 passengers) - Private
    ],
    img: images.pilanesbergTransferAndSafariOne,
    gallery: [images.pilanesbergTransferAndSafariTwo, images.pilanesbergTransferAndSafariThree, images.pilanesbergTransferAndSafariFour, images.pilanesbergTransferAndSafariFive, images.pilanesbergTransferAndSafariSix, images.pilanesbergTransferAndSafariSeven],
    overview: 'Affordable transfer and safari combo package to Pilanesberg, including park entrance fees and a game drive.',
    duration: '5 Hours',
    whatIsIncluded: [
      'Door-to-door Shuttle Transfer from Johannesburg or Pretoria',
      'Pickup from Johannesburg or Pretoria accommodation/airport',
      'Park entrance and conservation fees',
      '3-hour Open Vehicle Game Drive',
      'Drop-Off at Your Destination/Lodge',
    ],
    whatIsNotIncluded: [
      'Accommodation',
      'Personal purchases',
      'Food and Drinks',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup between 05:30 and 06:00, departing for Pilanesberg.' },
      { title: 'Transfer and Pilanesberg Safari', description: 'Arrive at Pilanesberg gate around 08:30. Start the 3-hour game drive at 09:00. Drop-off at the lodge between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'If you\'d like to book a shuttle back to Johannesburg or Pretoria, this is also possible.',
      'The pick-up time for return shuttle is between 12:30 and 13:00.',
      'Private transfer option available.'
    ]
  },
  
  // 5. Kruger National Park Private Transfers
  { 
    id: 't5', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Kruger National Park',
    title: 'Kruger National Park Private Transfers', 
    description: 'Book a private transfer to the Greater Kruger National Park from anywhere in Johannesburg, including the O.R. Tambo International Airport, to ensure comfort and convenience for your safari start.', 
    priceType: 'per-vehicle',
    basePrice: 2333, // ZAR 7000 / 3 passengers = ZAR 2333 (approx) - Price shown is 'sharing' ZAR 7,000, assuming ZAR 2,333 per person for 3 pax.
    hotelPickupAvailable: true, // Pickup from anywhere in Johannesburg, Pretoria, including OR Tambo Airport
    pricingTiers: [], // Base price is likely ZAR 7,000 for the vehicle
    img: images.krugerNationalParkPrivateTransferOne,
    gallery: [images.krugerNationalParkPrivateTransferTwo, images.krugerNationalParkPrivateTransferThree, images.krugerNationalParkPrivateTransferFour, images.krugerNationalParkPrivateTransferFive, images.krugerNationalParkPrivateTransferSix, images.krugerNationalParkPrivateTransferSeven],
    overview: 'This is a private, direct transfer service to Kruger National Park lodges, offering luxury, comfort, and speed from Johannesburg/Pretoria.',
    duration: '1 Day',
    whatIsIncluded: [
      'Transport by private vehicle',
      'Luxury sedan or air-conditioned vehicle',
      'A local pre-paid Sim Card (on-request)',
      'In-car Wi-Fi (optional)',
    ],
    whatIsNotIncluded: [
      'Baby Car Seat/Booster',
      'Entrance/Access Fees',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'The private driver will pick you up at your preferred location in Johannesburg/Pretoria/OR Tambo Airport and drive directly to your lodge in the Kruger area.' },
      { title: 'Kruger National Park', description: 'The transfer is a direct route, dropping you off at the requested lodge entrance. Travel time is approximately 4 hours 15 minutes to 6 hours 30 minutes depending on the gate/lodge.' }
    ],
    additionalInfo: [
      'Transfer cost is per vehicle, not per person.',
      'The final cost depends on the size of the vehicle and the distance to the lodge.',
      'Approximately travel times: Numbi Gate: 4 h 15 min; Paul Kruger Gate: 4 h 30 min; Phabeni Gate: 4 h 45 min; Phalaborwa Gate: 6 h 30 min.'
    ]
  },
  
  // 6. Kwa Maritane Safari Transfer Package
  { 
    id: 't6', 
    category: 'Transfers', 
    subCategory: 'Lodge Transfer & Safari',
    region: 'Pilanesberg',
    title: 'Kwa Maritane Safari Transfer Package', 
    description: 'A luxurious and all-inclusive package including door-to-door transfer to Kwa Maritane Bush Lodge from Johannesburg or Pretoria, park entrance fees, and a 3-hour open vehicle game drive on arrival.', 
    priceType: 'per-person',
    basePrice: 2000, 
    hotelPickupAvailable: true, // Pickup from Johannesburg or Pretoria included
    pricingTiers: [],
    img: images.kwaMaritaneSafariTransferPackageOne,
    gallery: [images.kwaMaritaneSafariTransferPackageTwo, images.kwaMaritaneSafariTransferPackageThree, images.kwaMaritaneSafariTransferPackageFour, images.kwaMaritaneSafariTransferPackageFive, images.kwaMaritaneSafariTransferPackageSix, images.kwaMaritaneSafariTransferPackageSeven],
    overview: 'All-inclusive package offering a seamless transfer and safari experience to Kwa Maritane Bush Lodge.',
    duration: '5 Hours',
    whatIsIncluded: [
      'One-way shuttle to Kwa Maritane Bush Lodge',
      'Entrance fees to Pilanesberg National Park',
      '3-hour open vehicle game drive on arrival',
      'Drinks and snacks during the game drive',
      'Direct drop-off at Kwa Maritane Bush Lodge',
    ],
    whatIsNotIncluded: [
      'Accommodation at Kwa Maritane Bush Lodge (unless booked separately)',
      'Return transfer to Johannesburg or Pretoria (R1,500 per person if booked separately)',
      'Meals or drinks during the transfer (excluding included game drive drinks/snacks)',
      'Personal expenses or optional lodge activities (e.g., spa treatments, extra food, beverages)',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg or Pretoria hotels between 05:30 and 06:00, arriving at Manyane Gate by 08:45.' },
      { title: 'Game Drive & Arrival', description: 'Entrance to Pilanesberg National Park at 09:00, exploring the central middle area for remarkable wildlife encounters. Arrive at Kwa Maritane Bush Lodge between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'Optional Return Transfer to Johannesburg or Pretoria is R1,500 per person.',
      'A private transfer for a personalized and flexible return: R3,500 or R4,500 for a 1-4 seater vehicle.'
    ]
  },
  
  // 7. Private Kruger National Park Transfers (Different Service to t5)
  { 
    id: 't7', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Kruger National Park',
    title: 'Private Kruger National Park Transfers', 
    description: 'This private transfer service for up to four people allows you to travel in comfort from anywhere in Johannesburg, including the O.R. Tambo International Airport, to Kruger National Park and surrounding private lodges.', 
    priceType: 'per-vehicle',
    basePrice: 7000, // ZAR 7,000 for sharing (1-4 pax)
    hotelPickupAvailable: true, // Pickup from Johannesburg, Pretoria, including OR Tambo Airport
    pricingTiers: [], // Base price is ZAR 7,000 for the vehicle
    img: images.privateKrugerNationalParkTransfersOne,
    gallery: [images.privateKrugerNationalParkTransfersTwo, images.privateKrugerNationalParkTransfersThree, images.privateKrugerNationalParkTransfersFour, images.privateKrugerNationalParkTransfersFive, images.privateKrugerNationalParkTransfersSix, images.privateKrugerNationalParkTransfersSeven, images.privateKrugerNationalParkTransfersEight, images.privateKrugerNationalParkTransfersNine, images.privateKrugerNationalParkTransfersTen],
    overview: 'A dedicated, comfortable, and air-conditioned private transfer service to Kruger National Park area lodges from Gauteng.',
    duration: '1 Day',
    whatIsIncluded: [
      'Transport by private vehicle',
      'Luxury sedan or air-conditioned vehicle',
      'A local pre-paid Sim Card (on-request)',
      'In-car Wi-Fi (optional)',
    ],
    whatIsNotIncluded: [
      'Baby Car Seat/Booster',
      'Entrance/Access Fees',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Moafrika picks up and drops off clients in Johannesburg and Pretoria, as well as at O.R. Tambo International Airport. A minimum transport cost is applied for the transfer.' },
      { title: 'Kruger National Park', description: 'Direct transfer to the requested lodge entrance. Approximate travel times: Numbi Gate: 4 h 15 min; Paul Kruger Gate: 4 h 30 min; Phabeni Gate: 4 h 45 min.' }
    ],
    additionalInfo: [
      'The transport cost is a flat charge for the vehicle (up to four passengers) and is determined by the size and distance to the lodge.',
      'It is highly recommended to book both ways (return transfer) for peace of mind.'
    ]
  },
  
  // 8. Exclusive Shepherd's Tree Safari Transfer
  { 
    id: 't8', 
    category: 'Transfers', 
    subCategory: 'Lodge Transfer & Safari',
    region: 'Pilanesberg',
    title: 'Exclusive Shepherd\'s Tree Safari Transfer', 
    description: 'A smooth and exhilarating trip to Shepherd\'s Tree Game Lodge with Moafrika Tours Exclusive Shepherd\'s Tree Safari Transfer. This all-inclusive package provides a door-to-door transfer from Johannesburg or Pretoria and a 3-hour open vehicle game drive.', 
    priceType: 'per-person',
    basePrice: 2000, 
    hotelPickupAvailable: true, // Pickup from Johannesburg or Pretoria included
    pricingTiers: [],
    img: images.exclusiveShepherdSTreeSafariTransferInPilanesbergOne,
    gallery: [images.exclusiveShepherdSTreeSafariTransferInPilanesbergTwo, images.exclusiveShepherdSTreeSafariTransferInPilanesbergThree, images.exclusiveShepherdSTreeSafariTransferInPilanesbergFour, images.exclusiveShepherdSTreeSafariTransferInPilanesbergFive, images.exclusiveShepherdSTreeSafariTransferInPilanesbergSix, images.exclusiveShepherdSTreeSafariTransferInPilanesbergSeven, images.exclusiveShepherdSTreeSafariTransferInPilanesbergEight],
    overview: 'All-inclusive package offering a seamless transfer and safari experience to Shepherd\'s Tree Game Lodge.',
    duration: '5 Hours',
    whatIsIncluded: [
      'One-way shuttle to Shepherd\'s Tree Lodge',
      'Entrance fees to Pilanesberg National Park',
      '3-hour open vehicle game drive on arrival',
      'Drinks and snacks during the game drive',
      'Direct drop-off at Shepherd\'s Tree Lodge',
    ],
    whatIsNotIncluded: [
      'Accommodation at Shepherd\'s Tree Lodge (unless booked separately)',
      'Return transfer to Johannesburg or Pretoria (R1,500 per person if booked separately)',
      'Meals or drinks during the transfer (excluding included game drive drinks/snacks)',
      'Personal expenses or optional lodge activities',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg or Pretoria hotels between 05:30 and 06:00, arriving at Shepherd\'s Tree Gate by 08:45.' },
      { title: 'Game Drive & Arrival', description: 'Entrance to Pilanesberg National Park at 09:00, exploring the central middle area for remarkable wildlife encounters. Arrive at Shepherd\'s Tree Game Lodge between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'Optional Return Transfer to Johannesburg or Pretoria is R1,500 per person.',
      'A private transfer for a personalized and flexible return: R3,500 or R4,500 for a 1-4 seater vehicle.'
    ]
  },
  
  // 9. Private Bakubung Transfers
  { 
    id: 't9', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Pilanesberg',
    title: 'Private Bakubung Transfers', 
    description: 'Moafrika Tours offers a private transfer service to Bakubung Bush Lodge in Pilanesberg National Park. This transfer service is for individuals, couples, small and large groups, as well as private transportation from the Greater Pretoria/Johannesburg area.', 
    priceType: 'per-vehicle',
    basePrice: 3500, // Based on ZAR 3,500 sharing price (1-4 pax)
    hotelPickupAvailable: true, // Door-to-door pick-up service from your hotel/accommodation
    pricingTiers: [
       { maxPax: 7, price: 4100 } // ZAR 4,100 for 5 to 7 passengers
    ],
    img: images.privateBakubungTransfersOne,
    gallery: [images.privateBakubungTransfersTwo, images.privateBakubungTransfersThree, images.privateBakubungTransfersFour, images.privateBakubungTransfersFive, images.privateBakubungTransfersSix, images.privateBakubungTransfersSeven, images.privateBakubungTransfersEight],
    overview: 'Private door-to-door shuttle service to Bakubung Bush Lodge from Johannesburg/Pretoria, ensuring safety and convenience.',
    duration: '1 Day',
    whatIsIncluded: [
      'A door-to-door pick-up service from your hotel/accommodation',
      'The price includes a private transfer.',
    ],
    whatIsNotIncluded: [
      'Your quoted price will not include park entrance',
      'Any conservation or entrance fees',
      'All purchases of a personal nature',
      'Gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from Gauteng', description: 'Your shuttle will pick you up from your hotel or accommodation in Johannesburg or Pretoria (between 05:30 and 06:00) and travel directly to Pilanesberg National Park.' },
      { title: 'Bakubung Bush Lodge', description: 'Arrive at Bakubung Bush Lodge between 08:00 and 09:00, where you can enjoy the rest of your day.' }
    ],
    additionalInfo: [
      'Safety First: Moafrika Tours is highly rated and uses reliable, efficient vehicles.',
      'A private Bakubung transfer is a transportation service that avoids exclusive use of the vehicle and is available for up to 7 passengers (ZAR 3,500 for 1-4 pax, ZAR 4,100 for 5-7 pax).'
    ]
  },
  
  // 10. Bakubung Safari Transfer Package
  { 
    id: 't10', 
    category: 'Transfers', 
    subCategory: 'Lodge Transfer & Safari',
    region: 'Pilanesberg',
    title: 'Bakubung Safari Transfer Package', 
    description: 'Begin your adventure to Bakubung Bush Lodge with Moafrika Tours Exclusive Bakubung Safari Transfer Package. This all-inclusive package provides a convenient door-to-door transfer from Johannesburg or Pretoria and a thrilling 3-hour open vehicle game drive in Pilanesberg National Park.', 
    priceType: 'per-person',
    basePrice: 2000, 
    hotelPickupAvailable: true, // Pickup from Johannesburg or Pretoria included
    pricingTiers: [],
    img: images.bakubungSafariTransferPackageOne,
    gallery: [images.bakubungSafariTransferPackageTwo, images.bakubungSafariTransferPackageThree, images.bakubungSafariTransferPackageFour, images.bakubungSafariTransferPackageFive, images.bakubungSafariTransferPackageSix, images.bakubungSafariTransferPackageSeven, images.bakubungSafariTransferPackageEight],
    overview: 'All-inclusive package offering a seamless transfer and safari experience to Bakubung Bush Lodge.',
    duration: '5 Hours',
    whatIsIncluded: [
      'One-way shuttle to Bakubung Bush Lodge',
      'Entrance fees to Pilanesberg National Park',
      '3-hour open vehicle game drive on arrival',
      'Drinks and snacks during the game drive',
      'Direct drop-off at Bakubung Bush Lodge',
    ],
    whatIsNotIncluded: [
      'Accommodation at Bakubung Bush Lodge (unless booked separately)',
      'Return transfer to Johannesburg or Pretoria (R1,500 per person if booked separately)',
      'Meals or drinks during the transfer (excluding included game drive drinks/snacks)',
      'Personal expenses or optional lodge activities (e.g., spa treatments, extra food, beverages)',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg or Pretoria hotels between 05:30 and 06:00, arriving at Manyane Gate by 08:45.' },
      { title: 'Game Drive & Arrival', description: 'Entrance to Pilanesberg National Park at 09:00, exploring the central middle area for remarkable wildlife encounters. Arrive at Bakubung Bush Lodge between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'Optional Return Transfer to Johannesburg or Pretoria is R1,500 per person.',
      'A private transfer for a personalized and flexible return: R3,500 or R4,500 for a 1-4 seater vehicle.'
    ]
  },
  { 
    id: 't11', 
    category: 'Transfers', 
    subCategory: 'Day Tour & Transfer',
    region: 'Gauteng',
    title: 'Private Transfer Cradle of Humankind & Sterkfontein Caves Tour', 
    description: 'A private tour and transfer to explore the Cradle of Humankind, a UNESCO World Heritage Site, including a visit to Sterkfontein Caves and Maropeng Visitor Centre.', 
    priceType: 'per-person',
    basePrice: 920, // Based on ZAR 3680 sharing for 4 pax (ZAR 920 pp)
    hotelPickupAvailable: true, // Pickup from any hotel or address in Johannesburg
    pricingTiers: [],
    img: images.privateTransferCradleOfHumankindSterkfonteinCavesTourOne,
    gallery: [images.privateTransferCradleOfHumankindSterkfonteinCavesTourTwo, images.privateTransferCradleOfHumankindSterkfonteinCavesTourThree, images.privateTransferCradleOfHumankindSterkfonteinCavesTourFour, images.privateTransferCradleOfHumankindSterkfonteinCavesTourFive, images.privateTransferCradleOfHumankindSterkfonteinCavesTourSix],
    overview: 'A private, fully guided day tour including comfortable transfer from Johannesburg to the Cradle of Humankind.',
    duration: '1 Day',
    whatIsIncluded: [
      'Departures/drop-off onboard',
      'Door-to-door transfer service',
      'Transfer and tour guide services done in a private vehicle',
      'All entrance fees are done in a private vehicle', // Assuming this means all fees are covered by the price
      'Return to Johannesburg in the late afternoon/early evening',
    ],
    whatIsNotIncluded: [
      'Any purchases of a personal nature',
      'Lunch and beverages at the restaurant in Maropeng',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg/Pretoria between 08:30 and 09:00. Transfer to the Cradle of Humankind.' },
      { title: 'Cradle of Humankind', description: 'Visit Maropeng Visitor Centre (45-60 minutes) and Sterkfontein Caves (45-60 minutes). Drop off at your hotel/address around 17:00.' }
    ],
    additionalInfo: [
      'The tour typically lasts 4 to 5 hours, excluding travel time (which is approximately 1 hour each way).'
    ]
  },
  
  // 12. Private Transfer from Hazyview to Johannesburg
  { 
    id: 't12', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Mpumalanga / Gauteng',
    title: 'Private Transfer from Hazyview to Johannesburg', 
    description: 'A safe and reliable private shuttle service between Hazyview (Perry’s Bridge Trading Post) and Johannesburg O.R. Tambo International Airport, offering a comfortable, air-conditioned journey.', 
    priceType: 'per-person',
    basePrice: 2333, // ZAR 7,000 sharing / 3 pax = ZAR 2,333 (approx)
    hotelPickupAvailable: false, // Pickup is restricted to Perry's Bridge Trading Post in Hazyview
    pricingTiers: [
      { pax: 1, price: 2700 }, { pax: 2, price: 2500 }, { pax: 3, price: 2333 }, { pax: 4, price: 1900 }, { pax: 5, price: 1800 }
    ],
    img: images.privateTransferFromHazyviewToJohannesburgOne,
    gallery: [images.privateTransferFromHazyviewToJohannesburgTwo, images.privateTransferFromHazyviewToJohannesburgThree, images.privateTransferFromHazyviewToJohannesburgFour, images.privateTransferFromHazyviewToJohannesburgFive, images.privateTransferFromHazyviewToJohannesburgSix, images.privateTransferFromHazyviewToJohannesburgSeven, images.privateTransferFromHazyviewToJohannesburgEight, images.privateTransferFromHazyviewToJohannesburgNine],
    overview: 'Comfortable private transfer from Hazyview to OR Tambo International Airport or Johannesburg.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from Perry’s Bridge Trading Post in Hazyview',
      'Air-conditioned shuttle',
      'Transferring directly to your destination',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any purchases of a personal nature',
      'Any gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from Perry’s Bridge Trading Post', description: 'Travelers will be picked up from the Trading Post in Hazyview at the scheduled time.' },
      { title: 'Arrival at O.R. Tambo International Airport (JNB)', description: 'Drop off at OR Tambo Airport or Johannesburg accommodation, passing scenic landscapes en route.' }
    ],
    additionalInfo: [
      'Transfer rates are charged at a per-person rate, decreasing as the number of passengers increases.'
    ]
  },
  
  // 13. Private Transfers from Johannesburg to Sun City : Pilanesberg
  { 
    id: 't13', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Gauteng / North West',
    title: 'Private Transfers from Johannesburg to Sun City', 
    description: 'An easy and quick one-way airport private transfer from Johannesburg to Sun City. Enjoy personalized attention and luggage assistance.', 
    priceType: 'per-vehicle',
    basePrice: 3500, // ZAR 3,500 sharing for 1-3 pax
    hotelPickupAvailable: true, // Pickup from any hotel or address in Johannesburg
    pricingTiers: [
      { maxPax: 3, price: 3500 }, // ZAR 3,500 for 1 to 3 passengers
      { minPax: 4, price: 4100 } // ZAR 4,100 for 4 to 7 passengers (assumed based on similar transfers)
    ],
    img: images.privateTransfersFromJohannesburgToSunCityOne,
    gallery: [images.privateTransfersFromJohannesburgToSunCityTwo, images.privateTransfersFromJohannesburgToSunCityThree, images.privateTransfersFromJohannesburgToSunCityFour, images.privateTransfersFromJohannesburgToSunCityFive, images.privateTransfersFromJohannesburgToSunCitySix, images.privateTransfersFromJohannesburgToSunCitySeven, images.privateTransfersFromJohannesburgToSunCityEight, images.privateTransfersFromJohannesburgToSunCityNine, images.privateTransfersFromJohannesburgToSunCityTen, images.privateTransfersFromJohannesburgToSunCityEleven],
    overview: 'Comfortable private transfer from Johannesburg/OR Tambo Airport to Sun City and Pilanesberg.',
    duration: '1 Day',
    whatIsIncluded: [
      'Bottled water during the transfer',
      'Transfer by air-conditioned vehicle',
      'Wifi in the vehicle',
    ],
    whatIsNotIncluded: [
      'Excess luggage charges if they apply',
      'Entrance fees',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'The private shuttle will pick you up from the airport, your hotel, or your home at the time you choose.' },
      { title: 'Sun City', description: 'You will enjoy the smooth travel, passing the beautiful Magaliesberg mountains. Arrive at Sun City or your Pilanesberg lodge (e.g., Bakubung, Kwa Maritane).' }
    ],
    additionalInfo: [
      'The time travel between Johannesburg and Pilanesberg/Sun City is usually between 2 and 2.5 hours.'
    ]
  },
  
  // 14. Private Transfers to Kwa Maritane Bush Lodge (Private)
  { 
    id: 't14', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Pilanesberg',
    title: 'Private Transfers to Kwa Maritane Bush Lodge', 
    description: 'Book a private, comfortable transfer service to Kwa Maritane Bush Lodge in the Pilanesberg National Park from Johannesburg, including the airport.', 
    priceType: 'per-vehicle',
    basePrice: 3500, // ZAR 3,500 sharing for 1-4 pax
    hotelPickupAvailable: true, // Pickup from any hotel or address in Johannesburg/Pretoria area
    pricingTiers: [
      { maxPax: 4, price: 3500 }, // ZAR 3,500 for 1 to 4 passengers
      { minPax: 5, price: 4100 } // ZAR 4,100 for 5 to 7 passengers (assumed based on similar transfers)
    ],
    img: images.privateTransfersToKwaMaritaneBushLodgeOne,
    gallery: [images.privateTransfersToKwaMaritaneBushLodgeTwo, images.privateTransfersToKwaMaritaneBushLodgeThree, images.privateTransfersToKwaMaritaneBushLodgeFour, images.privateTransfersToKwaMaritaneBushLodgeFive, images.privateTransfersToKwaMaritaneBushLodgeSix, images.privateTransfersToKwaMaritaneBushLodgeSeven],
    overview: 'Private, door-to-door transfer service to Kwa Maritane Bush Lodge, ensuring a relaxed start to your safari.',
    duration: '1 Day',
    whatIsIncluded: [
      'Transfer in a clean, air-conditioned vehicle',
      'Bottled water',
      'WiFi during the transfer',
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Air-conditioned vehicle (this is included, so this exclusion seems misplaced, but maintaining source accuracy)',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'The driver will pick you up from the airport, your hotel, or your home at the time you choose.' },
      { title: 'Pilanesberg National Park', description: 'Direct transfer to Kwa Maritane Bush Lodge. Travel time is approximately 2 to 2.5 hours.' }
    ],
    additionalInfo: [
      'You can arrange your reservation point for arrival at the airport terminals or any other location in Johannesburg/Pretoria.',
      'The time travel is between 2 and 2.5 hours.'
    ]
  },
  
  // 15. Private Transfer from Hoedspruit to Johannesburg (Private)
  { 
    id: 't15', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Limpopo / Gauteng',
    title: 'Private Transfer from Hoedspruit to Johannesburg', 
    description: 'A safe and reliable daily private shuttle service between Hoedspruit Limpopo (Eastgate Airport) to Johannesburg O.R. Tambo International Airport. Enjoy a comfortable, air-conditioned journey.', 
    priceType: 'per-person',
    basePrice: 2333, // ZAR 7,000 sharing / 3 pax = ZAR 2,333 (approx)
    hotelPickupAvailable: false, // Pickup is restricted to Eastgate Airport in Hoedspruit
    pricingTiers: [
      { pax: 1, price: 2700 }, { pax: 2, price: 2500 }, { pax: 3, price: 2333 }, { pax: 4, price: 1900 }, { pax: 5, price: 1800 }
    ],
    img: images.privateTransferFromHoedspruitToJohannesburgOne,
    gallery: [images.privateTransferFromHoedspruitToJohannesburgTwo, images.privateTransferFromHoedspruitToJohannesburgThree, images.privateTransferFromHoedspruitToJohannesburgFour, images.privateTransferFromHoedspruitToJohannesburgFive, images.privateTransferFromHoedspruitToJohannesburgSix, images.privateTransferFromHoedspruitToJohannesburgSeven, images.privateTransferFromHoedspruitToJohannesburgEight, images.privateTransferFromHoedspruitToJohannesburgNine],
    overview: 'Comfortable private transfer from Hoedspruit to OR Tambo International Airport or Johannesburg accommodation.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from Eastgate Airport in Hoedspruit',
      'Air-conditioned shuttle',
      'Drop off at OR Tambo Airport',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any purchases of a personal nature',
      'Any gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from Hoedspruit Airport - HDS', description: 'Travelers will be picked up from Eastgate Airport at the scheduled time.' },
      { title: 'Arrival at O.R. Tambo International Airport (JNB)', description: 'Drop off at OR Tambo Airport or Johannesburg accommodation, passing scenic landscapes en route.' }
    ],
    additionalInfo: [
      'Transfer rates are charged at a per-person rate, decreasing as the number of passengers increases.'
    ]
  },
  
  // 16. Private Transfer from Johannesburg to Hazyview
  { 
    id: 't16', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Gauteng / Mpumalanga',
    title: 'Private Transfer from Johannesburg to Hazyview', 
    description: 'A convenient and comfortable private shuttle service from Johannesburg (O.R. Tambo International Airport) to Hazyview, exploring the scenic Mpumalanga landscapes.', 
    priceType: 'per-person',
    basePrice: 2333, // ZAR 7,000 sharing / 3 pax = ZAR 2,333 (approx)
    hotelPickupAvailable: true, // Pickup from OR Tambo Airport or Johannesburg accommodation
    pricingTiers: [
      { pax: 1, price: 2700 }, { pax: 2, price: 2500 }, { pax: 3, price: 2333 }, { pax: 4, price: 1900 }, { pax: 5, price: 1800 }
    ],
    img: images.privateTransferFromJohannesburgToHazyviewOne,
    gallery: [images.privateTransferFromJohannesburgToHazyviewTwo, images.privateTransferFromJohannesburgToHazyviewThree, images.privateTransferFromJohannesburgToHazyviewFour, images.privateTransferFromJohannesburgToHazyviewFive, images.privateTransferFromJohannesburgToHazyviewSix, images.privateTransferFromJohannesburgToHazyviewSeven, images.privateTransferFromJohannesburgToHazyviewEight],
    overview: 'Comfortable private transfer from Johannesburg/OR Tambo Airport to Hazyview.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from OR Tambo Airport',
      'Air-conditioned vehicle',
      'Drop off at Hazyview accommodation or Perry\'s Bridge',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any purchases of a personal nature',
      'Any gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'The shuttle service will pick up from the airport or designated hotel/address.' },
      { title: 'Arrival at Hazyview', description: 'Drop off at the Hazyview designated address, often Perry\'s Bridge Trading Post.' }
    ],
    additionalInfo: [
      'Transfer rates are charged at a per-person rate, decreasing as the number of passengers increases.'
    ]
  },
  
  // 17. Transfer from Hoedspruit to Johannesburg (Shared Shuttle)
  { 
    id: 't17', 
    category: 'Transfers', 
    subCategory: 'Shared Shuttle Transfer',
    region: 'Limpopo / Gauteng',
    title: 'Transfer from Hoedspruit to Johannesburg', 
    description: 'A safe and reliable daily shared shuttle service between Hoedspruit (Eastgate Airport) and Johannesburg O.R. Tambo International Airport, offering comfort at an affordable price.', 
    priceType: 'per-person',
    basePrice: 1125, // ZAR 1,125 single rate
    hotelPickupAvailable: false, // Pickup is restricted to Eastgate Airport in Hoedspruit
    pricingTiers: [
      { pax: 1, price: 1125 }, // Single rate
      { pax: 2, price: 1125 } // Sharing rate ZAR 1,125
    ],
    img: images.privateTransferFromHoedspruitToJohannesburgOne,
    gallery: [images.privateTransferFromHoedspruitToJohannesburgTwo, images.privateTransferFromHoedspruitToJohannesburgThree, images.privateTransferFromHoedspruitToJohannesburgFour, images.privateTransferFromHoedspruitToJohannesburgFive, images.privateTransferFromHoedspruitToJohannesburgSix, images.privateTransferFromHoedspruitToJohannesburgSeven, images.privateTransferFromHoedspruitToJohannesburgEight, images.privateTransferFromHoedspruitToJohannesburgNine],
    overview: 'Affordable shared shuttle service from Hoedspruit to Johannesburg/OR Tambo Airport.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from Eastgate Airport in Hoedspruit',
      'Air-conditioned vehicle',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any purchases of a personal nature',
      'Any gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from Hoedspruit Airport', description: 'Travelers will be picked up from Eastgate Airport at the scheduled time.' },
      { title: 'Arrival at O.R. Tambo International Airport (JNB)', description: 'Drop off at OR Tambo Airport or Johannesburg accommodation.' }
    ],
    additionalInfo: [
      'The shuttle service stops en-route, allowing passengers to have a bathroom break.'
    ]
  },
  
  // 18. Transfer from Hazyview to Johannesburg (Shared Shuttle)
  { 
    id: 't18', 
    category: 'Transfers', 
    subCategory: 'Shared Shuttle Transfer',
    region: 'Mpumalanga / Gauteng',
    title: 'Transfer from Hazyview to Johannesburg', 
    description: 'A safe and reliable daily shared shuttle service between Hazyview (Perry’s Bridge Trading Post) and Johannesburg O.R. Tambo International Airport, offering scenic views and a comfortable journey.', 
    priceType: 'per-person',
    basePrice: 1125, // ZAR 1,125 single rate
    hotelPickupAvailable: false, // Pickup is restricted to Perry's Bridge Trading Post in Hazyview
    pricingTiers: [
      { pax: 1, price: 1125 }, // Single rate
      { pax: 2, price: 1125 } // Sharing rate ZAR 1,125
    ],
    img: images.privateTransferFromHazyviewToJohannesburgOne,
    gallery: [images.privateTransferFromHazyviewToJohannesburgTwo, images.privateTransferFromHazyviewToJohannesburgThree, images.privateTransferFromHazyviewToJohannesburgFour, images.privateTransferFromHazyviewToJohannesburgFive, images.privateTransferFromHazyviewToJohannesburgSix, images.privateTransferFromHazyviewToJohannesburgSeven, images.privateTransferFromHazyviewToJohannesburgEight, images.privateTransferFromHazyviewToJohannesburgNine],
    overview: 'Affordable shared shuttle service from Hazyview to Johannesburg/OR Tambo Airport.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from Perry’s Bridge Trading Post in Hazyview',
      'Air-conditioned vehicle',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any purchases of a personal nature',
      'Any gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from Perry’s Bridge Trading Post', description: 'Travelers will be picked up from the Trading Post in Hazyview at the scheduled time.' },
      { title: 'Arrival at O.R. Tambo International Airport (JNB)', description: 'Drop off at OR Tambo Airport or Johannesburg accommodation.' }
    ],
    additionalInfo: [
      'The shuttle service stops en-route, allowing passengers to have a bathroom break.'
    ]
  },
  
  // 19. Private Transfer from Johannesburg to Hoedspruit
  { 
    id: 't19', 
    category: 'Transfers', 
    subCategory: 'Private Transfer',
    region: 'Gauteng / Limpopo',
    title: 'Private Transfer from Johannesburg to Hoedspruit', 
    description: 'A reliable private shuttle service from Johannesburg (O.R. Tambo International Airport Bus Terminals) to Hoedspruit (Eastgate Airport) for travelers heading to or from Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 2240, // ZAR 6,720 sharing / 3 pax = ZAR 2,240 (approx)
    hotelPickupAvailable: true, // Pickup from OR Tambo Airport
    pricingTiers: [
      { pax: 1, price: 2720 }, { pax: 2, price: 2520 }, { pax: 3, price: 2240 }, { pax: 4, price: 1950 }, { pax: 5, price: 1850 }
    ],
    img: images.privateTransferFromJohannesburgToHoedspruitOne,
    gallery: [images.privateTransferFromJohannesburgToHoedspruitTwo, images.privateTransferFromJohannesburgToHoedspruitThree, images.privateTransferFromJohannesburgToHoedspruitFour, images.privateTransferFromJohannesburgToHoedspruitFive, images.privateTransferFromJohannesburgToHoedspruitSix, images.privateTransferFromJohannesburgToHoedspruitSeven, images.privateTransferFromJohannesburgToHoedspruitEight, images.privateTransferFromJohannesburgToHoedspruitNine],
    overview: 'Comfortable private transfer from Johannesburg/OR Tambo Airport to Hoedspruit Eastgate Airport.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from OR Tambo Airport',
      'Air-conditioned vehicle',
      'Drop off at Hoedspruit',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any purchases of a personal nature',
      'Any gratuities paid to the guide or driver',
    ],
    itinerary: [
      { title: 'Depart from O.R. Tambo International Airport', description: 'The private shuttle will pick up from the airport or designated hotel/address.' },
      { title: 'Return to Hoedspruit', description: 'Drop off at Hoedspruit Eastgate Airport.' }
    ],
    additionalInfo: [
      'Transfer rates are charged at a per-person rate, decreasing as the number of passengers increases.'
    ]
  },
  
  // 20. Sun City Safari & Transfer Adventure Package
  { 
    id: 't20', 
    category: 'Transfers', 
    subCategory: 'Lodge Transfer & Safari',
    region: 'Pilanesberg / North West',
    title: 'Sun City Safari & Transfer Adventure Package', 
    description: 'A luxurious all-inclusive package including a door-to-door transfer from Johannesburg or Pretoria to Sun City, accommodation at Sun City Resort, and a 3-hour game drive in Pilanesberg National Park.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 sharing (assuming a base per-person rate before accommodation costs)
    hotelPickupAvailable: true, // Pickup from Johannesburg or Pretoria included
    pricingTiers: [],
    img: images.sunCitySafariTransferAdventurePackageOne,
    gallery: [images.sunCitySafariTransferAdventurePackageTwo, images.sunCitySafariTransferAdventurePackageThree, images.sunCitySafariTransferAdventurePackageFour, images.sunCitySafariTransferAdventurePackageFive, images.sunCitySafariTransferAdventurePackageSix, images.sunCitySafariTransferAdventurePackageSeven, images.sunCitySafariTransferAdventurePackageEight, images.sunCitySafariTransferAdventurePackageNine],
    overview: 'An all-inclusive package combining transfer, safari, and access to Sun City entertainment.',
    duration: '1 Day',
    whatIsIncluded: [
      'One-way shuttle to Sun City',
      'Entrance fees to Pilanesberg National Park',
      '3-hour open vehicle game drive on arrival',
      'Drinks and snacks during the game drive',
      'Door-to-door transfer from Johannesburg or Pretoria',
      'Park entry fees for the game drive',
    ],
    whatIsNotIncluded: [
      'Accommodation (unless booked separately)',
      'Return transfer (R1,500 pp or private transfer R3,500/R4,500)',
      'Meals or drinks during the transfer',
      'Personal expenses or optional resort activities (e.g., casino, golf, waterworld, etc.)',
    ],
    itinerary: [
      { title: 'Depart from Johannesburg', description: 'Pickup from Johannesburg or Pretoria hotels between 05:30 and 06:00, arriving at Manyane Gate by 08:45.' },
      { title: 'Game Drive & Arrival at Sun City', description: 'Entrance to Pilanesberg National Park at 09:00 for the 3-hour game drive. Arrive at Sun City Resort between 12:30 and 13:30.' }
    ],
    additionalInfo: [
      'Optional Return Transfer to Johannesburg or Pretoria is R1,500 per person.'
    ]
  },
  // 21. Transfer from Johannesburg to Hoedspruit (Shared Shuttle)
  { 
    id: 't21', 
    category: 'Transfers', 
    subCategory: 'Shared Shuttle Transfer',
    region: 'Gauteng / Limpopo',
    title: 'Transfer from Johannesburg to Hoedspruit', 
    description: 'A safe and reliable daily shuttle service from Johannesburg (O.R. Tambo Airport) to Hoedspruit (Eastgate Airport), offering comfort and an affordable price for your journey to Kruger National Park.', 
    priceType: 'per-person',
    basePrice: 1125, // ZAR 1,125 single/sharing rate
    hotelPickupAvailable: false, // Pickup is restricted to O.R. Tambo Airport Bus Terminals
    pricingTiers: [
      { pax: 1, price: 1125 }, // Single rate ZAR 1,125
      { pax: 2, price: 1125 } // Sharing rate ZAR 1,125
    ],
    img: images.privateTransferFromJohannesburgToHoedspruitOne,
    gallery: [images.privateTransferFromJohannesburgToHoedspruitTwo, images.privateTransferFromJohannesburgToHoedspruitThree, images.privateTransferFromJohannesburgToHoedspruitFour, images.privateTransferFromJohannesburgToHoedspruitFive, images.privateTransferFromJohannesburgToHoedspruitSix, images.privateTransferFromJohannesburgToHoedspruitSeven, images.privateTransferFromJohannesburgToHoedspruitEight, images.privateTransferFromJohannesburgToHoedspruitNine],
    overview: 'Affordable shared shuttle service from Johannesburg/OR Tambo Airport to Hoedspruit Eastgate Airport.',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from OR Tambo Airport',
      'Air-conditioned vehicle',
      'Pick up from OR Tambo Airport (duplicate entry in highlights, maintained for accuracy)',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any gratuities paid to the guide or driver',
      'All purchases of a personal nature',
    ],
    itinerary: [
      { title: 'Depart from O.R. Tambo International Airport (JNB)', description: 'The shuttle service departs from OR Tambo International Airport Bus Terminals.' },
      { title: 'Arrival at Hoedspruit - Eastgate Airport', description: 'Travelers are dropped off at Hoedspruit Eastgate Airport, with comfort stops en-route for bathroom and refreshment breaks.' }
    ],
    additionalInfo: [
      'The shuttle service stops en-route, allowing passengers to have a bathroom break, and buy refreshments for the journey ahead.'
    ]
  },
  
  // 22. Transfer from Johannesburg to Hazyview (Shared Shuttle)
  { 
    id: 't22', 
    category: 'Transfers', 
    subCategory: 'Shared Shuttle Transfer',
    region: 'Gauteng / Mpumalanga',
    title: 'Transfer from Johannesburg to Hazyview', 
    description: 'A safe and reliable daily shuttle service from Johannesburg (O.R. Tambo Airport) to Hazyview, offering a comfortable ride and allowing passengers to enjoy the beautiful landscapes of the region.', 
    priceType: 'per-person',
    basePrice: 1125, // ZAR 1,125 single/sharing rate
    hotelPickupAvailable: false, // Pickup is restricted to O.R. Tambo Airport Bus Terminals
    pricingTiers: [
      { pax: 1, price: 1125 }, // Single rate ZAR 1,125
      { pax: 2, price: 1125 } // Sharing rate ZAR 1,125
    ],
    img: images.privateTransferFromJohannesburgToHazyviewOne,
    gallery: [images.privateTransferFromJohannesburgToHazyviewTwo, images.privateTransferFromJohannesburgToHazyviewThree, images.privateTransferFromJohannesburgToHazyviewFour, images.privateTransferFromJohannesburgToHazyviewFive, images.privateTransferFromJohannesburgToHazyviewSix, images.privateTransferFromJohannesburgToHazyviewSeven, images.privateTransferFromJohannesburgToHazyviewEight],
    overview: 'Affordable shared shuttle service from Johannesburg/OR Tambo Airport to Hazyview (Perry\'s Bridge Trading Post).',
    duration: '1 Day',
    whatIsIncluded: [
      'Pick up from OR Tambo Airport',
      'Air-conditioned vehicle',
      'Pick up from OR Tambo Airport (duplicate entry in highlights, maintained for accuracy)',
    ],
    whatIsNotIncluded: [
      'Any conservation or entrance fees',
      'Any gratuities paid to the guide or driver',
      'All purchases of a personal nature',
    ],
    itinerary: [
      { title: 'Depart from O.R. Tambo International Airport (JNB)', description: 'The shuttle service departs from OR Tambo International Airport Bus Terminals.' },
      { title: 'Arrival at Perry’s Bridge Trading Post', description: 'Travelers are dropped off at Perry’s Bridge Trading Post in Hazyview, with comfort stops en-route for bathroom and refreshment breaks.' }
    ],
    additionalInfo: [
      'The shuttle service stops en-route, allowing passengers to have a bathroom break, and buy refreshments for the journey ahead.'
    ]
  }
];