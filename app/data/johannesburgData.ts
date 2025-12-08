import { images } from './images'

// --- Johannesburg Tours Data ---
export const johannesburgData = [
  { 
    id: 'j1', 
    category: 'Johannesburg', 
    subCategory: 'Private Custom Tour',
    region: 'Johannesburg',
    title: 'Customizable Private Johannesburg Day Tour with Guide', 
    description: 'Due to the overwhelming interest, Moafrika Tours is now providing visitors and residents of Johannesburg with the opportunity to travel with a driver and guide and create their own personalized itinerary for a tour of their own making.', 
    priceType: 'per-person',
    basePrice: 4500, // ZAR 4,500 sharing
    pricingTiers: [],
    img: images.customizablePrivateJohannesburgDayTourWithGuideOne,
    gallery: [images.customizablePrivateJohannesburgDayTourWithGuideTwo, images.customizablePrivateJohannesburgDayTourWithGuideThree, images.customizablePrivateJohannesburgDayTourWithGuideFour, images.customizablePrivateJohannesburgDayTourWithGuideFive, images.customizablePrivateJohannesburgDayTourWithGuideEight, images.customizablePrivateJohannesburgDayTourWithGuideNine, images.customizablePrivateJohannesburgDayTourWithGuideTen, images.customizablePrivateJohannesburgDayTourWithGuideEleven, images.customizablePrivateJohannesburgDayTourWithGuideThirteen, images.customizablePrivateJohannesburgDayTourWithGuideFourteen, images.customizablePrivateJohannesburgDayTourWithGuideFifteen, images.customizablePrivateJohannesburgDayTourWithGuideSixteen, images.customizablePrivateJohannesburgDayTourWithGuideSeventeen, images.customizablePrivateJohannesburgDayTourWithGuideEighteen, images.customizablePrivateJohannesburgDayTourWithGuideNineteen, images.customizablePrivateJohannesburgDayTourWithGuideTwenty, images.customizablePrivateJohannesburgDayTourWithGuideTwentyOne],
    overview: 'Design your own itinerary to explore Johannesburg\'s highlights, including the Apartheid Museum and Pilanesberg Game Reserve, with a private driver and guide.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Private Car Rental with Tour Guide',
      'Fuel for the day',
      'Water and soft drinks on abundance'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'Entrance fees to sights/attractions',
      'Food and Drinks'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Private Johannesburg Day Tour', 
        description: 'Create your own personalized itinerary. Potential stops include the Apartheid Museum, lunch at one of Joburg\'s haute cuisine restaurants, or a visit to Pilanesberg Game Reserve.' 
      }
    ],
    additionalInfo: [
      'Normal Car (Non-Luxury) 2-3 travelers - R5,500 (Full day)',
      '4-12 travelers - R5,000 (Full day)',
      'Luxury SUV 2-3 travelers - R6,000 (Full day)',
      '4-12 travelers - R5,500 (Half day)'
    ]
  },
  { 
    id: 'j2', 
    category: 'Johannesburg', 
    subCategory: 'Wildlife & Cultural Tour',
    region: 'Johannesburg',
    title: 'Lion Safari Park and Lesedi Cultural Village Tour', 
    description: 'This tour package near Johannesburg includes a guided tour of Lesedi Cultural Village showcasing five South African traditional tribes, amazing traditional song and dance performance, and a visit to Lion & Safari Park for a mini safari guided by a ranger in a malaria-free zone.', 
    priceType: 'per-person',
    basePrice: 3045, // ZAR 3,045 sharing
    pricingTiers: [],
    img: images.lionSafariParkAndLesediCulturalVillageTourFour,
    gallery: [ images.lionSafariParkAndLesediCulturalVillageTourFour, images.lionSafariParkAndLesediCulturalVillageTourFive, images.lionSafariParkAndLesediCulturalVillageTourSeven, images.lionSafariParkAndLesediCulturalVillageTourEight, images.lionSafariParkAndLesediCulturalVillageTourNine, images.lionSafariParkAndLesediCulturalVillageTourTen],
    overview: 'Experience the best of wildlife and culture with a 2-hour game drive at Lion & Safari Park and a guided tour of five traditional villages at Lesedi Cultural Village.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Lion & Safari Park',
      'Lesedi Cultural Village',
      'Traditional African feast/lunch',
      'Traditional song and dance show',
      'Guided tour of 5 traditional villages',
      'Transfers in an air-conditioned vehicle and customized safari vehicle',
      'Collection and drop-off from any address in Johannesburg'
    ],
    whatIsNotIncluded: [
      'Beverages',
      'Personal purchases',
      'Gratuities'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Lesedi Cultural Village and Lion Park', 
        description: 'Morning pickup followed by a guided tour of Lesedi Cultural Village. Afterwards, proceed to Lion & Safari Park for a 2-hour guided game drive in a specialized open safari vehicle.' 
      }
    ],
    additionalInfo: []
  },
  { 
    id: 'j3', 
    category: 'Johannesburg', 
    subCategory: 'Private Transfer / Historical Tour',
    region: 'Johannesburg',
    title: 'Private Transfer Cradle of Humankind & Sterkfontein Caves Tour', 
    description: 'Private Transfers Cradle of Humankind & Sterkfontein Caves Tour is a journey back in time to the dawn of time - where you\'ll see the Cradle of Humankind, a UNESCO World Heritage site and home to one of the world\'s most significant human fossil discoveries.', 
    priceType: 'per-person',
    basePrice: 920, // ZAR 920 sharing
    pricingTiers: [],
    img: images.privateTransferCradleOfHumankindSterkfonteinCavesTourOne,
    gallery: [images.privateTransferCradleOfHumankindSterkfonteinCavesTourTwo, images.privateTransferCradleOfHumankindSterkfonteinCavesTourThree, images.privateTransferCradleOfHumankindSterkfonteinCavesTourFour],
    overview: 'Enjoy a private transfer service to the Cradle of Humankind UNESCO World Heritage Site, including the Sterkfontein Caves.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Departure/drop-off on board',
      'Private air-conditioned transport',
      'Bottle of mineral water',
      'Driver/guide on a private basis',
      'Return transfers in a private air-conditioned vehicle'
    ],
    whatIsNotIncluded: [
      'Any purchases of a personal nature',
      'Lunch and beverages at the restaurant',
      'Entrance fees'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Cradle of Humankind', 
        description: 'Private transfer and visit to the Cradle of Humankind, including the Sterkfontein Caves and Maropeng Visitor Centre.' 
      }
    ],
    additionalInfo: [
      'Drop-off at any hotel or address in Johannesburg between 08:30 and 09:30 for a morning tour and between 12:30 and 13:00 for an afternoon tour.'
    ]
  },
  { 
    id: 'j4', 
    category: 'Johannesburg', 
    subCategory: 'Wildlife Tour',
    region: 'Johannesburg / Pretoria',
    title: 'Ann Van Dyk Cheetah Centre', 
    description: 'The Ann Van Dyk Cheetah Centre was previously known as the De Wildt Cheetah and Wildlife Centre. It is a captive breeding facility that has achieved great success in cheetah conservation.', 
    priceType: 'per-person',
    basePrice: 1925, // ZAR 1,925 sharing
    pricingTiers: [],
    img: images.annVanDykCheetahCentreOne,
    gallery: [images.annVanDykCheetahCentreTwo, images.annVanDykCheetahCentreThree, images.annVanDykCheetahCentreFour, images.annVanDykCheetahCentreFive, images.annVanDykCheetahCentreSix, images.annVanDykCheetahCentreSeven],
    overview: 'Visit the world\'s first facility to breed captive cheetahs on a sustainable basis and enjoy a guided tour of the centre, including an open safari vehicle experience.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Vehicle',
      'Your quoted rate includes all meals',
      'A guide and driver on a private basis',
      'Entrance fee',
      'Guided tour of the centre in an open safari vehicle'
    ],
    whatIsNotIncluded: [
      'Excluded any purchases of a personal nature'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Ann Van Dyk Cheetah Centre', 
        description: 'Morning pickup from Johannesburg or Pretoria and transfer to the centre. Enjoy the morning/afternoon tour including the guided cheetah centre tour and time for pictures before returning.' 
      }
    ],
    additionalInfo: [
      'Collection and Drop off: Pick-up and drop-off between 06:30 and 07:00 for a morning tour and between 12:30 and 13:00 for an afternoon tour.'
    ]
  },
  { 
    id: 'j5', 
    category: 'Johannesburg', 
    subCategory: 'Cultural Tour',
    region: 'Johannesburg',
    title: 'Lesedi Cultural Village Tour', 
    description: 'Lesedi Cultural Village is located in the heart of The Cradle of Humankind which is a UNESCO World Heritage Site. Set in the lush African bushveld on the outskirts of Johannesburg, Lesedi Cultural Village offers a unique perspective of South Africa\'s cultural diversity.', 
    priceType: 'per-person',
    basePrice: 2800, // ZAR 2,800 sharing
    pricingTiers: [],
    img: images.lesediCulturalVillageTourOne,
    gallery: [images.lesediCulturalVillageTourTwo, images.lesediCulturalVillageTourThree, images.lesediCulturalVillageTourFour, images.lesediCulturalVillageTourFive, images.lesediCulturalVillageTourSix, images.lesediCulturalVillageTourSeven],
    overview: 'Experience the traditional customs, song, and dance of five Southern African tribes in a guided tour, followed by a traditional African feast.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Collection and drop off from any address in Johannesburg',
      'English-speaking guide',
      'Traditional song and dance show',
      'Traditional African feast',
      'Guided tour of 5 traditional villages',
      'Free onboard Wi-Fi for transfers'
    ],
    whatIsNotIncluded: [
      'Beverages',
      'Purchases of a personal nature',
      'Gratuities'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Lesedi Cultural Village', 
        description: 'Transfer from Johannesburg, guided tour of five traditional villages, enjoy the cultural dance show, and finish with a traditional African feast.' 
      }
    ],
    additionalInfo: [
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 09:00am - 09:30am and 15:00 - 15:30.'
    ]
  },
  { 
    id: 'j6', 
    category: 'Johannesburg', 
    subCategory: 'Historical Tour',
    region: 'Johannesburg',
    title: 'Cradle of Humankind & Sterkfontein Caves Tour', 
    description: 'Prepare for a thrilling journey into the heart of human history. The Sterkfontein Caves and Maropeng Visitor Centre, located within the Cradle of Humankind, offer a captivating blend of adventure, science, and awe.', 
    priceType: 'per-person',
    basePrice: 1795, // ZAR 1,795 sharing
    pricingTiers: [],
    img: images.cradleOfHumankindSterkfonteinCavesTourOne,
    gallery: [images.cradleOfHumankindSterkfonteinCavesTourTwo, images.cradleOfHumankindSterkfonteinCavesTourThree, images.cradleOfHumankindSterkfonteinCavesTourFour, images.cradleOfHumankindSterkfonteinCavesTourFive, images.cradleOfHumankindSterkfonteinCavesTourSix, images.cradleOfHumankindSterkfonteinCavesTourSeven, images.cradleOfHumankindSterkfonteinCavesTourEight, images.cradleOfHumankindSterkfonteinCavesTourNine, images.cradleOfHumankindSterkfonteinCavesTourTen, images.cradleOfHumankindSterkfonteinCavesTourEleven],
    overview: 'Discover the birthplace of humanity at the UNESCO World Heritage Site, including a tour of the Sterkfontein Caves and the Maropeng Visitor Centre.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Expert guide who is flexible',
      'Access to Maropeng Visitor Centre',
      'Transfers in air-conditioned vehicle',
      'Entrance fee to Sterkfontein Caves',
      'Bottled mineral water on board',
      'Guided tour of the Cradle of Humankind'
    ],
    whatIsNotIncluded: [
      'Personal expenses (e.g., shopping/souvenirs)',
      'Beverages',
      'Lunch (pre-booking at an additional cost)',
      'Gratuities'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Cradle of Humankind & Sterkfontein Caves', 
        description: 'Detailed timeline including arrival at Maropeng Visitor Centre (8:00 AM), Sterkfontein Caves (12:30 PM), and return to Johannesburg (4:30 PM).' 
      }
    ],
    additionalInfo: [
      'Tour is NOT available on Mondays.',
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 17:30 - 18:30.'
    ]
  },
  { 
    id: 'j7', 
    category: 'Johannesburg', 
    subCategory: 'Historical Tour',
    region: 'Johannesburg, Soweto',
    title: 'Apartheid Museum Tour', 
    description: 'The Apartheid Museum showcases South Africa in the turbulent years of the apartheid era. During this period, millions were oppressed, displaced, and killed by a government that enforced racial segregation.', 
    priceType: 'per-person',
    basePrice: 1350, // ZAR 1,350 sharing
    pricingTiers: [],
    img: images.apartheidMuseumTourOne,
    gallery: [images.apartheidMuseumTourTwo, images.apartheidMuseumTourThree, images.apartheidMuseumTourFour, images.apartheidMuseumTourFive],
    overview: 'A full-day guided tour of the Apartheid Museum to explore the history of racial segregation in South Africa.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Currently only available on Wednesday, Thursday, Fridays, Saturdays, and Sundays',
      '24-hour cancellation available',
      'Vehicle',
      'English speaking guide',
      'Transfers in air-conditioned vehicle'
    ],
    whatIsNotIncluded: [
      'Food',
      'Beverages',
      'Souvenirs',
      'Apartheid Museum entrance fee'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Apartheid Museum Tour', 
        description: 'Morning pickup, arrive at the Apartheid Museum, enjoy a full tour with your guide, and return to your accommodation in the afternoon.' 
      }
    ],
    additionalInfo: [
      'Currently only available on Wednesday, Thursday, Fridays, Saturdays, and Sundays.',
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 17:30 - 18:30.'
    ]
  },
  { 
    id: 'j8', 
    category: 'Johannesburg', 
    subCategory: 'City Tour',
    region: 'Johannesburg / Pretoria',
    title: 'Johannesburg Half Day Tour', 
    description: 'Learn more about the political history of Johannesburg with a tour of Constitutional Hill, take a trip to the \'Top of Africa\' observation deck, or just marvel at the experience of being in Soweto, a hub of culture and history.', 
    priceType: 'per-person',
    basePrice: 1850, // ZAR 1,850 sharing
    pricingTiers: [],
    img: images.johannesburgHalfDayTourOne,
    gallery: [images.johannesburgHalfDayTourTwo, images.johannesburgHalfDayTourThree, images.johannesburgHalfDayTourFour],
    overview: 'Explore Johannesburg\'s key historical and cultural sites including Constitutional Hill, Mary Fitzgerald Square, and Soweto on a half-day tour.',
    duration: 'Half Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Constitutional Hill entrance fee',
      'Transfer in air-conditioned vehicle',
      'Collection and drop off from any address in Johannesburg',
      'Vehicle'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Johannesburg', 
        description: 'Morning/Afternoon pickup and tour including Constitutional Hill, Constitutional Court, Mary Fitzgerald Square, and a visit to Soweto (Ghandi Square and Luthuli House).' 
      }
    ],
    additionalInfo: [
      'Group tours are available.',
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 13:30 and 17:30.'
    ]
  },
  { 
    id: 'j9', 
    category: 'Johannesburg', 
    subCategory: 'Wildlife Tour',
    region: 'Johannesburg / Pretoria',
    title: 'Rhino and Lion Park Tour', 
    description: 'Right outside the city, the Rhino and Lion Park, situated 45 minutes North-West of Johannesburg, is a top day trip destination. The protected reserve is home to crush of rhino and a variety of predators including lion, wild dog, leopard and cheetah.', 
    priceType: 'per-person',
    basePrice: 3045, // ZAR 3,045 sharing
    pricingTiers: [],
    img: images.rhinoAndLionParkTourOne,
    gallery: [images.rhinoAndLionParkTourTwo, images.rhinoAndLionParkTourThree, images.rhinoAndLionParkTourFour, images.rhinoAndLionParkTourFive, images.rhinoAndLionParkTourSix, images.rhinoAndLionParkTourSeven, images.rhinoAndLionParkTourEight, images.rhinoAndLionParkTourNine, images.rhinoAndLionParkTourTen],
    overview: 'Enjoy a full-day guided game drive in a specialized open safari vehicle at the Rhino and Lion Park, home to rhino, lion, and various other predators and antelope.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Rhino & Lion Nature Reserve entrance fee',
      'Tour entrance fee',
      'Collection and drop-off from any address in Johannesburg',
      'Transfers in an air-conditioned vehicle',
      'Driver/guide',
      'Entrance fee to Bothongo Wanderscope'
    ],
    whatIsNotIncluded: [
      'Snacks and beverages',
      'Personal purchases'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Rhino & Lion Nature Reserve', 
        description: 'Pickup from Johannesburg/Pretoria, transfer to the reserve, and enjoy a 2-hour guided game drive in a specialized open safari vehicle.' 
      }
    ],
    additionalInfo: [
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 13:30 and 17:30.'
    ]
  },
  { 
    id: 'j10', 
    category: 'Johannesburg', 
    subCategory: 'Wildlife Tour',
    region: 'Johannesburg',
    title: 'Lion Park Tour', 
    description: 'The Lion & Safari Park is a 30-minute drive from Johannesburg, located in the historic Cradle of Humankind. It\'s a protected reserve and home to four of the "Big Five" (lion, buffalo, rhino, and leopard) as well as cheetah, hyena, wild dogs, various antelope and a tower of tame giraffes.', 
    priceType: 'per-person',
    basePrice: 1800, // ZAR 1,800 sharing
    pricingTiers: [],
    img: images.lionParkTourOne,
    gallery: [images.lionParkTourTwo, images.lionParkTourThree, images.lionParkTourFour, images.lionParkTourFive],
    overview: 'Visit the Lion & Safari Park for an open vehicle safari drive and a guided tour of the center with the animals.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Open vehicle safari drive',
      'Collection and drop off from any address in Johannesburg',
      'Guided tour of the centre with the animals',
      'Transfer in air-conditioned vehicle',
      'Lion & Safari Park entrance fee',
      'Driver/guide in an open safari vehicle'
    ],
    whatIsNotIncluded: [
      'Food',
      'Personal purchases'
    ],
    itinerary: [
      { 
        title: 'Day 1 - The King of Africa', 
        description: 'Morning pickup and transfer to the Lion and Safari Park. Enjoy a guided tour of the centre with the animals and time to watch the lions and other animals before returning to Johannesburg.' 
      }
    ],
    additionalInfo: [
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 13:30 and 17:30.'
    ]
  },
  { 
    id: 'j11', 
    category: 'Johannesburg', 
    subCategory: 'Combo Tour',
    region: 'Johannesburg / Pretoria',
    title: 'Soweto and Lion Park Tour', 
    description: 'This tour combines history and culture with a fun safari experience. Start in Soweto and experience the vibrant cultural hub. Soweto is a city within a city and home to over 2 million people.', 
    priceType: 'per-person',
    basePrice: 3045, // ZAR 3,045 sharing
    pricingTiers: [],
    img: images.sowetoAndLionParkTourOne,
    gallery: [images.sowetoAndLionParkTourTwo],
    overview: 'Explore the history and culture of Soweto, including major landmarks, followed by a guided safari and game drive at the Lion & Safari Park.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Collection and drop off from any address in Johannesburg',
      'Hector Pieterson Museum entrance fee',
      'Transfers in an air-conditioned vehicle',
      'Lion & Safari Park entrance fee',
      'Guided game drive'
    ],
    whatIsNotIncluded: [
      'Snacks and beverages',
      'Gratuities',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Culture and Nature', 
        description: 'Guided tour of Soweto (stadiums, Hector Pieterson Museum, Vilakazi Street, Soweto Towers) followed by a 2-hour guided game drive at Lion & Safari Park.'
      }
    ],
    additionalInfo: [
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 13:30 and 17:30'
    ]
  },
  { 
    id: 'j12', 
    category: 'Johannesburg', 
    subCategory: 'Historical Tour with Lunch',
    region: 'Johannesburg, Soweto',
    title: 'Soweto Apartheid Museum & Lunch Tour', 
    description: 'Ready to experience the lively atmosphere and bustling streets of Soweto? This tour will also take you to the Apartheid Museum, Constitution Hill, and the \'Top of Africa\' observation deck.', 
    priceType: 'per-person',
    basePrice: 1800, // ZAR 1,800 sharing
    pricingTiers: [],
    img: images.sowetoApartheidMuseumLunchTourOne,
    gallery: [images.sowetoApartheidMuseumLunchTourTwo, images.sowetoApartheidMuseumLunchTourThree, images.sowetoApartheidMuseumLunchTourFour, images.sowetoApartheidMuseumLunchTourFive, images.sowetoApartheidMuseumLunchTourSix, images.sowetoApartheidMuseumLunchTourSeven, images.sowetoApartheidMuseumLunchTourEight],
    overview: 'A cultural and historical tour covering Soweto\'s major landmarks, the Apartheid Museum, and includes lunch.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Collection and drop off from any address in Johannesburg',
      'Hector Pieterson Museum entrance fee',
      'Lunch',
      'Transfers in air-conditioned vehicle'
    ],
    whatIsNotIncluded: [
      'Entrance fees for Nelson Mandela House Museum',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Soweto, Apartheid Museum and Lunch', 
        description: 'Guided tour of Soweto, including a visit to the Apartheid Museum, followed by lunch at a local restaurant.'
      }
    ],
    additionalInfo: [
      'Currently only available on Wednesdays, Thursdays, Fridays, Saturdays, and Sundays',
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 07:30am - 08:30am and 17:30'
    ]
  },
  { 
    id: 'j13', 
    category: 'Johannesburg', 
    subCategory: 'City & Historical Tour',
    region: 'Johannesburg, Soweto',
    title: 'Ultimate Johannesburg Tour', 
    description: 'The Ultimate Johannesburg Tour takes place in Johannesburg, Soweto, and Constitution Hill. It is currently only available on Thursdays, Fridays, Saturdays, and Sundays (due to Apartheid Museum opening days).', 
    priceType: 'per-person',
    basePrice: 1800, // ZAR 1,800 sharing
    pricingTiers: [],
    img: images.ultimateJohannesburgTourOne,
    gallery: [images.ultimateJohannesburgTourTwo, images.ultimateJohannesburgTourThree, images.ultimateJohannesburgTourFour, images.ultimateJohannesburgTourFive, images.ultimateJohannesburgTourSix, images.ultimateJohannesburgTourSeven, images.ultimateJohannesburgTourEight, images.ultimateJohannesburgTourEight, images.ultimateJohannesburgTourTen],
    overview: 'A comprehensive full-day tour covering Johannesburg, Soweto, the Apartheid Museum, and Constitution Hill.',
    duration: '1 Day',
    localHotelPickup: true,
    whatIsIncluded: [
      'Collection and drop off from any address in Johannesburg',
      'Constitution Hill entrance fee',
      'Transfers in air-conditioned vehicle',
      'Hector Pieterson Museum entrance fee'
    ],
    whatIsNotIncluded: [
      'Lunch for own account',
      'Entrance fee into the Nelson Mandela House Museum',
      'Gratuities'
    ],
    itinerary: [
      { 
        title: 'Day 1 - Soweto, Constitution Hill and Apartheid Museum', 
        description: 'Morning pickup, visit to Soweto, Constitution Hill, and the Apartheid Museum before returning to Johannesburg.'
      }
    ],
    additionalInfo: [
      'Currently only available on Thursdays, Fridays, Saturdays, and Sundays',
      'Collection / Drop off: Drop-off at any hotel or address in Johannesburg between 08:00am - 08:30am and 17:00'
    ]
  }
// ... Your existing 10 tours (j1 to j10) would be here
// The final export const johannesburgData = [ ... all 13 tours ... ];
]