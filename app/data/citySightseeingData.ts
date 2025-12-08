import { images } from './images';

// --- City Sightseeing Tours Data (All Regions) ---
export const citySightseeingData = [
  // --- JOHANNESBURG REGION ---

  // 1. 1-Day Hop-on-Hop-off Ticket (Johannesburg)
  { 
    id: 'cs-joburg-1day', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Tour',
    region: 'Johannesburg',
    title: '1-Day Hop-on-Hop-off Ticket Johannesburg', 
    description: 'Explore the City of Gold at your own pace with a 1-Day Classic Bus Ticket. The Red City Tour takes you to over 20 of Johannesburg\'s top attractions.', 
    priceType: 'per-person',
    basePrice: 345, 
    pricingTiers: [],
    img: images.oneDayHopOnHopOffTicketJohannesburgOne,
    gallery: [
      images.oneDayHopOnHopOffTicketJohannesburgTwo,
      images.oneDayHopOnHopOffTicketJohannesburgThree,
      images.oneDayHopOnHopOffTicketJohannesburgFour,
      images.oneDayHopOnHopOffTicketJohannesburgFive,
      images.oneDayHopOnHopOffTicketJohannesburgSix,
      images.oneDayHopOnHopOffTicketJohannesburgSeven,
      images.oneDayHopOnHopOffTicketJohannesburgEight,
      images.oneDayHopOnHopOffTicketJohannesburgNine,
      images.oneDayHopOnHopOffTicketJohannesburgTen,
      images.oneDayHopOnHopOffTicketJohannesburgEleven
    ],
    overview: 'A flexible way to see Joburg. Hop on and off as many times as you like at designated stops. Enjoy panoramic views from the open-top deck.',
    duration: '1 Day',
    whatIsIncluded: [
      '1-Day access to the Red Tour Loop',
      'Audio commentary in 15 languages',
      'Special Kids Audio Channel',
      'Complimentary hotel shuttle (selected hotels)',
      'Free Wi-Fi on board'
    ],
    whatIsNotIncluded: [
      'Entrance fees to attractions',
      'Meals and drinks'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Selected Sandton & Rosebank Hotels',
    itinerary: [
      { title: 'Red City Tour', description: 'Stops include Rosebank, Killarney, Constitution Hill, Mining District, Gold Reef City, Apartheid Museum, and Newtown.' }
    ],
    additionalInfo: [
      'Main departure point: Rosebank @ The Zone.'
    ]
  },

  // 2. 2-Day Hop-on-Hop-off Ticket (Johannesburg)
  { 
    id: 'cs-joburg-2day', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Tour',
    region: 'Johannesburg',
    title: '2-Day Hop-on-Hop-off Ticket', 
    description: 'Explore Johannesburg at your own pace with a ticket valid for 2 consecutive days. Access the Red Tour Loop and complimentary hotel shuttle.', 
    priceType: 'per-person',
    basePrice: 445, 
    pricingTiers: [],
    img: images.twoDayHopOnHopOffTicketJohannesburgOne,
    gallery: [
      images.twoDayHopOnHopOffTicketJohannesburgTwo,
      images.twoDayHopOnHopOffTicketJohannesburgThree,
      images.twoDayHopOnHopOffTicketJohannesburgFour,
      images.twoDayHopOnHopOffTicketJohannesburgFive,
      images.twoDayHopOnHopOffTicketJohannesburgSix,
      images.twoDayHopOnHopOffTicketJohannesburgSeven
    ],
    overview: 'This ticket offers extended time to explore the city. Hop on and off as many times as you like across two days.',
    duration: '2 Days',
    whatIsIncluded: [
      '2 Consecutive Days on the buses',
      'Complimentary hotel shuttle (selected hotels)',
      'Red Tour Loop',
      'On-board audio commentary',
      'Additional discounts'
    ],
    whatIsNotIncluded: [
      'Entrance fees to attractions',
      'Meals and drinks'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Selected Sandton hotels',
    itinerary: [
      { title: 'Red Tour Loop', description: 'Visits over 20 attractions including Constitution Hill and Mining District.' }
    ],
    additionalInfo: [
      'Check the back of your ticket for additional discounts.'
    ]
  },

  // 3. 1-Day Bus + Soweto tour (Johannesburg)
  { 
    id: 'cs-joburg-1day-soweto', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Combo',
    region: 'Johannesburg',
    title: '1-Day Bus + Soweto tour Johannesburg', 
    description: 'Experience the best of Johannesburg with a 1-Day Hop-on Hop-off Bus ticket and a 2-hour guided van tour of Soweto.', 
    priceType: 'per-person',
    basePrice: 795, 
    pricingTiers: [],
    img: images.oneDayBusSowetoTourJohannesburgOne,
    gallery: [
      images.oneDayBusSowetoTourJohannesburgTwo,
      images.oneDayBusSowetoTourJohannesburgThree,
      images.oneDayBusSowetoTourJohannesburgFour,
      images.oneDayBusSowetoTourJohannesburgFive,
      images.oneDayBusSowetoTourJohannesburgSix,
      images.oneDayBusSowetoTourJohannesburgSeven,
      images.oneDayBusSowetoTourJohannesburgEight
    ],
    overview: 'This combo offers the Red City Tour loop and a live-guided excursion into Soweto to see the home of Nelson Mandela and Orlando Towers.',
    duration: '1 Day',
    whatIsIncluded: [
      '1-Day Hop-on Hop-off Bus Ticket (Red Loop)',
      '2-hour guided Soweto Tour (Live Guide)',
      'Complimentary hotel shuttle (selected hotels)'
    ],
    whatIsNotIncluded: [
      'Entrance fees to attractions',
      'Lunch and beverages'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Selected Sandton & Rosebank Hotels',
    itinerary: [
      { title: 'Soweto Extension', description: 'Transfer at Gold Reef City (Stop 13) to the Soweto van. Visit FNB Stadium, Diepkloof, and Vilakazi Street.' }
    ],
    additionalInfo: [
      'Change point for the Soweto Tour is inside the lobby of the Gold Reef Casino Hotel.'
    ]
  },

  // 4. 2-Day Bus + Soweto tour (Johannesburg)
  { 
    id: 'cs-joburg-2day-soweto', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Combo',
    region: 'Johannesburg',
    title: '2-Day Bus + Soweto tour Johannesburg', 
    description: 'Maximize your Johannesburg experience with a 2-Day Bus Ticket and a guided Soweto Tour.', 
    priceType: 'per-person',
    basePrice: 865, 
    pricingTiers: [],
    img: images.twoDayBusSowetoTourJohannesburgOne,
    gallery: [
      images.twoDayBusSowetoTourJohannesburgTwo,
      images.twoDayBusSowetoTourJohannesburgThree,
      images.twoDayBusSowetoTourJohannesburgFour,
      images.twoDayBusSowetoTourJohannesburgFive,
      images.twoDayBusSowetoTourJohannesburgSix,
      images.twoDayBusSowetoTourJohannesburgSeven
    ],
    overview: 'Valid for 2 consecutive days on the bus, plus a 2-hour live-guided tour of Soweto.',
    duration: '2 Days',
    whatIsIncluded: [
      '2 Consecutive Days on the Red Tour Loop',
      '2-hour guided Soweto Tour (Live Guide)',
      'Complimentary hotel shuttle (selected hotels)'
    ],
    whatIsNotIncluded: [
      'Entrance fees to attractions',
      'Meals and drinks'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Selected Sandton & Rosebank Hotels',
    itinerary: [
      { title: 'Soweto Excursion', description: 'Join the Soweto tour from Gold Reef City (Stop 13) on either day of your ticket validity.' }
    ],
    additionalInfo: [
      'Great value for travelers wanting to see everything.'
    ]
  },

  // 5. Bus & Guided Art Tour (Johannesburg)
  { 
    id: 'cs-joburg-art-tour', 
    category: 'City Sightseeing', 
    subCategory: 'Guided Tour',
    region: 'Johannesburg',
    title: 'Bus & Guided Art Tour', 
    description: 'A unique Red Bus experience visiting 4 of Jozi\'s Top Art Galleries. Accompanied by your own personal Art Guide.', 
    priceType: 'per-person',
    basePrice: 525, 
    pricingTiers: [],
    img: images.busGuidedArtTourJohannesburgOne,
    gallery: [
      images.busGuidedArtTourJohannesburgTwo,
      images.busGuidedArtTourJohannesburgThree,
      images.busGuidedArtTourJohannesburgFour,
      images.busGuidedArtTourJohannesburgFive,
      images.busGuidedArtTourJohannesburgSix,
      images.busGuidedArtTourJohannesburgSeven,
      images.busGuidedArtTourJohannesburgEight
    ],
    overview: 'Visit Keyes Art Mile, Melrose Gallery, and Transwerke Studios with an art-tourism connoisseur.',
    duration: '1 Day',
    whatIsIncluded: [
      'Official hop-On Hop-Off Red Tour',
      'Visit 4 Art Galleries',
      'Your own personal Art Guide',
      '1 Day on the bus'
    ],
    whatIsNotIncluded: [
      'Lunch and beverages'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Starts from Rosebank',
    itinerary: [
      { title: 'Keyes Art Precinct', description: 'Visit Everard Read Gallery & Origin Art Gallery.' },
      { title: 'The Melrose Gallery', description: 'Iconic names like Dr Esther Mahlangu.' },
      { title: 'Transwerke Studios', description: 'A creative hub with a great vibe.' }
    ],
    additionalInfo: [
      'Tour involves walking between galleries.'
    ]
  },

  // --- CAPE TOWN REGION ---

  // 6. Classic Hop-on-Hop-off Ticket (Cape Town)
  { 
    id: 'cs-capetown-classic-1day', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Tour',
    region: 'Cape Town',
    title: 'Classic Hop-on-Hop-off Ticket', 
    description: 'The Classic package gives you one full day on the bus covering all Hop-on-Hop-off Cape Town tours. Access all 3 bus routes.', 
    priceType: 'per-person',
    basePrice: 345, 
    pricingTiers: [],
    img: images.classicHopOnHopOffTicketCapeTownOne,
    gallery: [
      images.classicHopOnHopOffTicketCapeTownTwo,
      images.classicHopOnHopOffTicketCapeTownThree,
      images.classicHopOnHopOffTicketCapeTownFour,
      images.classicHopOnHopOffTicketCapeTownFive,
      images.classicHopOnHopOffTicketCapeTownSix,
      images.classicHopOnHopOffTicketCapeTownSeven,
      images.classicHopOnHopOffTicketCapeTownEight,
      images.classicHopOnHopOffTicketCapeTownNine,
      images.classicHopOnHopOffTicketCapeTownTen
    ],
    overview: 'Valid for one day. Includes access to the Table Mountain Cableway (bus stop), Constantia Valley Wine tour, and walking tours.',
    duration: '1 Day',
    whatIsIncluded: [
      'Red City Tour',
      'Mini Peninsula Tour (Blue)',
      'Purple Wine Tour',
      'Free Walking tour'
    ],
    whatIsNotIncluded: [
      'Harbour OR Canal cruise',
      'Sunset bus tour'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront or Long Street offices',
    itinerary: [
      { title: 'Red City Tour', description: 'Stops including Table Mountain Cableway.' },
      { title: 'Blue Mini Peninsula Tour', description: 'Scenic drive around the peninsula.' }
    ],
    additionalInfo: [
      'Tour assistance office at V&A Waterfront.'
    ]
  },

  // 7. Premium Hop-on-Hop-off Ticket (Cape Town)
  { 
    id: 'cs-capetown-premium', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Tour',
    region: 'Cape Town',
    title: 'Premium Hop-on-Hop-off Ticket', 
    description: 'Valid for 2 consecutive days. Access to all 3 bus tour routes and a Walking Tour. Includes a choice between the Harbour OR Canal Cruise, plus the Sunset Bus Tour.', 
    priceType: 'per-person',
    basePrice: 445, 
    pricingTiers: [],
    img: images.premiumHopOnHopOffTicketOne,
    gallery: [
      images.premiumHopOnHopOffTicketTwo,
      images.premiumHopOnHopOffTicketThree,
      images.premiumHopOnHopOffTicketFour,
      images.premiumHopOnHopOffTicketFive,
      images.premiumHopOnHopOffTicketSix,
      images.premiumHopOnHopOffTicketSeven,
      images.premiumHopOnHopOffTicketEight,
      images.premiumHopOnHopOffTicketNine
    ],
    overview: 'Offers over 30 stops taking you to over 50 of Cape Town\'s top attractions.',
    duration: '2 Days',
    whatIsIncluded: [
      '3 Hop on-Hop-off routes & Walking Tour',
      'Choose Harbour OR Canal Cruise',
      'Sunset bus tour'
    ],
    whatIsNotIncluded: [
      'Entrance fees to attractions'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront or Long Street offices',
    itinerary: [
      { title: 'Full Access', description: 'Unlimited access to Red, Blue, and Purple loops for 2 days.' }
    ],
    additionalInfo: [
      'Sunset bus available in October - April.'
    ]
  },

  // 8. Deluxe Hop-on-Hop-off Ticket (Cape Town)
  { 
    id: 'cs-capetown-deluxe', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Tour',
    region: 'Cape Town',
    title: 'Deluxe Hop-on-Hop-off Ticket', 
    description: '3 Days to cover over 30 stops. Includes all 3 bus tour routes, Harbour Cruise AND Canal Cruise, and the Sunset Bus tour.', 
    priceType: 'per-person',
    basePrice: 545, 
    pricingTiers: [],
    img: images.deluxeHopOnHopOffTicketOne,
    gallery: [
      images.deluxeHopOnHopOffTicketTwo,
      images.deluxeHopOnHopOffTicketThree,
      images.deluxeHopOnHopOffTicketFour,
      images.deluxeHopOnHopOffTicketFive,
      images.deluxeHopOnHopOffTicketSix,
      images.deluxeHopOnHopOffTicketSeven,
      images.deluxeHopOnHopOffTicketEight,
      images.deluxeHopOnHopOffTicketNine
    ],
    overview: 'The most comprehensive bus ticket. Valid for 3 consecutive days.',
    duration: '3 Days',
    whatIsIncluded: [
      '3 Hop on-Hop off routes & Walking Tour',
      'Harbour cruise AND Canal cruise',
      'Sunset bus tour'
    ],
    whatIsNotIncluded: [
      'Entrance fees to attractions'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront or Long Street',
    itinerary: [
      { title: 'Touring', description: 'Unlimited travel on Red, Blue, and Purple loops.' }
    ],
    additionalInfo: [
      'Sunset bus available in October - April.'
    ]
  },

  // 9. Sunset Bus Tour (Cape Town)
  { 
    id: 'cs-capetown-sunset-bus', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Tour',
    region: 'Cape Town',
    title: 'Sunset Bus Tour', 
    description: 'Experience the famous Cape Town sunset over the Atlantic Ocean from the open-top bus.', 
    priceType: 'per-person',
    basePrice: 235, 
    pricingTiers: [],
    img: images.sunsetBusTourOne,
    gallery: [
      images.sunsetBusTourTwo,
      images.sunsetBusTourThree
    ],
    overview: 'Discover the brilliant lights and views. This is a direct tour to the sunset viewing point.',
    duration: '2-3 Hours',
    whatIsIncluded: [
      'Don\'t forget your picnic!',
      'Sunset over the Atlantic Ocean',
      'Comfort and safety in the open-air'
    ],
    whatIsNotIncluded: [],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront',
    itinerary: [
      { title: 'Sunset Drive', description: 'Drive to a prime viewpoint to watch the sunset over the ocean.' }
    ],
    additionalInfo: [
      'Bring a jacket as it gets cool after sunset.'
    ]
  },

  // 10. Bus + Table Mountain ticket
  { 
    id: 'cs-capetown-bus-tablemtn', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Combo',
    region: 'Cape Town',
    title: 'Bus + Table Mountain ticket', 
    description: 'Save time and catch the Hop-on-Hop-off bus directly to Table Mountain. Enjoy unlimited access to all 3 Hop-on-Hop-off bus routes plus a return Aerial Cableway ticket.', 
    priceType: 'per-person',
    basePrice: 795, 
    pricingTiers: [],
    img: images.busTableMountainTicketOne,
    gallery: [
      images.busTableMountainTicketTwo,
      images.busTableMountainTicketThree,
      images.busTableMountainTicketFour,
      images.busTableMountainTicketFive,
      images.busTableMountainTicketSix,
      images.busTableMountainTicketSeven,
      images.busTableMountainTicketEight,
      images.busTableMountainTicketNine
    ],
    overview: 'Benefit from a flexible combo ticket valid for 14 days from first use. Includes a free walking tour.',
    duration: '14 Days Validity',
    whatIsIncluded: [
      '3 Hop-on-Hop-off loops & Walking Tour',
      'Ticket for the Table Mountain Aerial Cableway'
    ],
    whatIsNotIncluded: [
      'Entrance fees to other attractions'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront',
    itinerary: [
      { title: 'Table Mountain', description: 'Take the Red bus to the Lower Cableway Station and ascend the mountain.' }
    ],
    additionalInfo: [
      'Save time and catch the bus directly to the mountain.'
    ]
  },

  // 11. Cape Point & Penguin Xplorer Tour
  { 
    id: 'cs-capetown-capepoint-penguin', 
    category: 'City Sightseeing', 
    subCategory: 'Day Tour',
    region: 'Cape Town',
    title: 'Cape Point & Penguin Xplorer Tour', 
    description: 'A guided day tour to Cape Point in a luxury air-conditioned coach. Explore the Cape Floral Kingdom, Boulders Beach (African Penguins), and the Cape of Good Hope.', 
    priceType: 'per-person',
    basePrice: 1110, 
    pricingTiers: [],
    img: images.capePointPenguinXplorerTourOne,
    gallery: [
      images.capePointPenguinXplorerTourTwo,
      images.capePointPenguinXplorerTourThree,
      images.capePointPenguinXplorerTourFour,
      images.capePointPenguinXplorerTourFive,
      images.capePointPenguinXplorerTourSix,
      images.capePointPenguinXplorerTourSeven,
      images.capePointPenguinXplorerTourEight,
      images.capePointPenguinXplorerTourNine,
      images.capePointPenguinXplorerTourTen,
      images.capePointPenguinXplorerTourEleven,
      images.capePointPenguinXplorerTourTwelve,
      images.capePointPenguinXplorerTourThirteen,
      images.capePointPenguinXplorerTourFourteen
    ],
    overview: 'Drive via Ou Kaapse Weg, Kommetjie, and Scarborough. Includes a stop at Boulders Beach.',
    duration: 'Full Day',
    whatIsIncluded: [
      'Led by passionate local guide',
      'Visit Cape Point & Cape of Good Hope',
      'Visit Penguin beach',
      'Penguin beach admission',
      'Complimentary pick-up near most hotels'
    ],
    whatIsNotIncluded: [
      'Funicular',
      'Lunch, snacks & drinks'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Most hotels',
    itinerary: [
      { title: 'Cape Point', description: 'Enjoy the views, optional hike, or take the Funicular.' },
      { title: 'Boulders Beach', description: 'Visit the colony of endangered African penguins.' }
    ],
    additionalInfo: [
      'Please bring easy walking shoes and a jersey.'
    ]
  },

  // 12. Paarl, Franschhoek, Stellenbosch Three Region Xplorer Wine Tour
  { 
    id: 'cs-capetown-3region-wine', 
    category: 'City Sightseeing', 
    subCategory: 'Wine Tour',
    region: 'Cape Town',
    title: 'Paarl, Franschhoek, Stellenbosch Three Region Xplorer Wine Tour', 
    description: 'Enjoy a Full day tour to all 3 Cape Wine regions. Includes tastings in all three regions and a cheese/wine pairing.', 
    priceType: 'per-person',
    basePrice: 795, 
    pricingTiers: [],
    img: images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourOne,
    gallery: [
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourTwo,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourThree,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourFour,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourFive,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourSix,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourSeven,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourEight,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourNine,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourTen,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourEleven,
      images.paarlFranschhoekStellenboschThreeRegionXplorerWineTourTwelve
    ],
    overview: 'An action and value-packed day exploring the "City of Oaks", the French corner, and Paarl.',
    duration: 'Full Day',
    whatIsIncluded: [
      'Cost INCLUDES 3 tastings (3 regions)',
      'Wine Cellar tour',
      'Sweet & Decadent Pairing & Cheese',
      'Photo Stop @ Nelson Mandela prison',
      'Complimentary pick-up near most hotels'
    ],
    whatIsNotIncluded: [
      'Lunch and additional snacks'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Near most hotels',
    itinerary: [
      { title: 'Stellenbosch', description: 'Cellar tour and tasting.' },
      { title: 'Franschhoek', description: 'Wine tasting.' },
      { title: 'Paarl', description: 'Wine tasting with pairing.' }
    ],
    additionalInfo: [
      'Return to Cape Town by approximately 17h45.'
    ]
  },

  // 13. Franschhoek Wine Tram Xplorer Tour
  { 
    id: 'cs-capetown-franschhoek-tram', 
    category: 'City Sightseeing', 
    subCategory: 'Wine Tour',
    region: 'Cape Town',
    title: 'Franschhoek Wine Tram Xplorer Tour', 
    description: 'A guided day tour to the Franschhoek Valley including the hop-on hop-off Wine Tram.', 
    priceType: 'per-person',
    basePrice: 795, 
    pricingTiers: [],
    img: images.franschhoekWineTramXplorerTourOne,
    gallery: [
      images.franschhoekWineTramXplorerTourTwo,
      images.franschhoekWineTramXplorerTourThree,
      images.franschhoekWineTramXplorerTourFour,
      images.franschhoekWineTramXplorerTourFive,
      images.franschhoekWineTramXplorerTourSix,
      images.franschhoekWineTramXplorerTourSeven,
      images.franschhoekWineTramXplorerTourEight,
      images.franschhoekWineTramXplorerTourNine,
      images.franschhoekWineTramXplorerTourTen,
      images.franschhoekWineTramXplorerTourEleven,
      images.franschhoekWineTramXplorerTourTwelve,
      images.franschhoekWineTramXplorerTourThirteen,
      images.franschhoekWineTramXplorerTourFourteen
    ],
    overview: 'Experience a unique and leisurely way to see the Franschhoek Valley. Includes transfer from Cape Town.',
    duration: 'Full Day',
    whatIsIncluded: [
      'Return transfer to the Wine Tram',
      'Tram Line ticket',
      'Best vineyard views from the tram',
      'Complimentary pick-up near most hotels'
    ],
    whatIsNotIncluded: [
      'Wine tasting fees at the estates',
      'Lunch'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Near most hotels',
    itinerary: [
      { title: 'Wine Tram', description: 'Hop-on hop-off access to various wine estates via tram and tram-bus.' }
    ],
    additionalInfo: [
      'Tickets are only valid for the stipulated day of booking.'
    ]
  },

  // 14. Stellenbosch Wine Tractor
  { 
    id: 'cs-capetown-wine-tractor', 
    category: 'City Sightseeing', 
    subCategory: 'Wine Tour',
    region: 'Cape Town',
    title: 'Stellenbosch Wine Tractor', 
    description: 'Travel through the vineyards and backroads on a unique open-air tractor and trailer tour.', 
    priceType: 'per-person',
    basePrice: 665, 
    pricingTiers: [],
    img: images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsOne,
    gallery: [
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsTwo,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsThree,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsFour,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsFive,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsSix,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsSeven,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsEight,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsNine,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsTen,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsEleven,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsTwelve,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsThirteen,
      images.stellenboschWineTractorTravelThroughTheVineyardsAndBackroadsFourteen
    ],
    overview: 'An off-road adventure through working farms and private backroads.',
    duration: 'Full Day',
    whatIsIncluded: [
      'Return transfer to Stellenbosch',
      'Hop-on Hop-off open-air tractor tour ticket',
      'Welcome local beverage'
    ],
    whatIsNotIncluded: [
      'Wine tasting fees',
      'Lunch'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Transfer included',
    itinerary: [
      { title: 'Tractor Tour', description: 'Visit up to 10 remarkable estates in the Golden Triangle.' }
    ],
    additionalInfo: [
      'Bottle storage service available.'
    ]
  },

  // 15. Whale and Hermanus Tour
  { 
    id: 'cs-capetown-whale-hermanus', 
    category: 'City Sightseeing', 
    subCategory: 'Day Tour',
    region: 'Cape Town',
    title: 'Whale and Hermanus Tour', 
    description: 'Visit Hermanus, the best shore-based whale watching destination in the world (seasonal).', 
    priceType: 'per-person',
    basePrice: 879, 
    pricingTiers: [],
    img: images.whaleAndHermanusTourOne,
    gallery: [
      images.whaleAndHermanusTourTwo,
      images.whaleAndHermanusTourThree,
      images.whaleAndHermanusTourFour,
      images.whaleAndHermanusTourFive,
      images.whaleAndHermanusTourSix,
      images.whaleAndHermanusTourSeven,
      images.whaleAndHermanusTourEight,
      images.whaleAndHermanusTourNine,
      images.whaleAndHermanusTourTen
    ],
    overview: 'A full day out including Sir Lowry\'s Pass and wine tasting in the Hemel-en-Aarde Valley.',
    duration: 'Full Day',
    whatIsIncluded: [
      'Live guide in English',
      'Optional whale sightseeing cruise',
      'Up to 3 hours of dwell time in Hermanus',
      'Wine tasting',
      'Pick up from many locations'
    ],
    whatIsNotIncluded: [
      'Boat-based whale sightseeing cruise (optional extra)',
      'Lunch'
    ],
    hotelPickupAvailable: true,
    pickupRestriction: 'Many locations',
    itinerary: [
      { title: 'Hermanus', description: 'Free time for whale watching, shopping, or galleries.' }
    ],
    additionalInfo: [
      'Look out for the "Whale Crier".'
    ]
  },

  // 16. Canal Cruise
  { 
    id: 'cs-capetown-canal-cruise', 
    category: 'City Sightseeing', 
    subCategory: 'Cruise',
    region: 'Cape Town',
    title: 'Canal Cruise', 
    description: 'A 20-minute cruise between Cape Town\'s Foreshore area and the V&A Waterfront.', 
    priceType: 'per-person',
    basePrice: 85, 
    pricingTiers: [],
    img: images.canalCruiseOne,
    gallery: [
      images.canalCruiseTwo,
      images.canalCruiseThree,
      images.canalCruiseFour,
      images.canalCruiseFive,
      images.canalCruiseSix
    ],
    overview: 'An efficient water taxi and fun way to see the city. Stops include One & Only Hotel and CTICC.',
    duration: '20 Minutes',
    whatIsIncluded: [
      'Learn about interesting canal stories',
      'Efficient water taxi between the CBD & V&A',
      'Comfort and safety in the open-air'
    ],
    whatIsNotIncluded: [
      'Food and drinks'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront or CTICC',
    itinerary: [
      { title: 'Route', description: 'Connects the CBD (CTICC) and V&A Waterfront via the canals.' }
    ],
    additionalInfo: [
      'Regular departures.'
    ]
  },

  // 17. V&A Harbour & Seal Cruise
  { 
    id: 'cs-capetown-harbour-seal', 
    category: 'City Sightseeing', 
    subCategory: 'Cruise',
    region: 'Cape Town',
    title: 'V&A Harbour & Seal Cruise', 
    description: 'Departing from the jetty outside the Two Oceans Aquarium, this cruise puts Cape Town\'s bustling harbour in the spotlight.', 
    priceType: 'per-person',
    basePrice: 85, 
    pricingTiers: [],
    img: images.vAHarbourSealCruiseOne,
    gallery: [
      images.vAHarbourSealCruiseTwo,
      images.vAHarbourSealCruiseThree,
      images.vAHarbourSealCruiseFour,
      images.vAHarbourSealCruiseFive,
      images.vAHarbourSealCruiseSix
    ],
    overview: 'See the SAS Somerset, Bascule Bridge, and Cape Fur Seals.',
    duration: '25-30 Minutes',
    whatIsIncluded: [
      'Come and see the Cape Fur seals',
      'Hear about Cape Town\'s nautical history',
      'Close up views of seals and ships'
    ],
    whatIsNotIncluded: [
      'Food, drinks & refreshments'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Two Oceans Aquarium jetty',
    itinerary: [
      { title: 'Harbour Loop', description: 'Views of SAS Somerset, Bascule Bridge, Clock Tower, and seals.' }
    ],
    additionalInfo: [
      'Includes the "suitcase of money" commentary.'
    ]
  },

  // 18. Seal Island Cruise (Hout Bay)
  { 
    id: 'cs-capetown-seal-island-houtbay', 
    category: 'City Sightseeing', 
    subCategory: 'Cruise',
    region: 'Cape Town',
    title: 'Seal Island Cruise (Hout Bay)', 
    description: 'Join a thrilling boat cruise to Duiker Island to see thousands of Cape fur seals in their natural environment.', 
    priceType: 'per-person',
    basePrice: 139, 
    pricingTiers: [],
    img: images.sealIslandCruiseHoutBayOne,
    gallery: [
      images.sealIslandCruiseHoutBayTwo,
      images.sealIslandCruiseHoutBayThree,
      images.sealIslandCruiseHoutBayFour
    ],
    overview: '40-minute seal island cruise offering a family-friendly boat trip around picturesque Hout Bay.',
    duration: '40 Minutes',
    whatIsIncluded: [
      'Visit the Cape Fur Seals',
      'Instant confirmation - Mobile ticket',
      'Family boat cruise around picturesque Hout Bay'
    ],
    whatIsNotIncluded: [
      'Transport to/from Hout Bay',
      'Food and drinks'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Hout Bay Harbour',
    itinerary: [
      { title: 'Cruise', description: 'Depart Hout Bay harbour and cruise to Duiker Island.' }
    ],
    additionalInfo: [
      'You might also encounter some dolphins and whales.'
    ]
  },

  // 19. Sunset Champagne Cruise
  { 
    id: 'cs-capetown-sunset-champagne', 
    category: 'City Sightseeing', 
    subCategory: 'Cruise',
    region: 'Cape Town',
    title: 'Sunset Champagne Cruise', 
    description: 'Watch the sunset from Table Bay with a glass of sparkling wine.', 
    priceType: 'per-person',
    basePrice: 450, 
    pricingTiers: [],
    img: images.sunsetChampagneCruiseOne,
    gallery: [
      images.sunsetChampagneCruiseTwo,
      images.sunsetChampagneCruiseThree,
      images.sunsetChampagneCruiseFour,
      images.sunsetChampagneCruiseFive,
      images.sunsetChampagneCruiseSix
    ],
    overview: 'Daily departures from the V&A Waterfront offering views of the coastline from the Atlantic Ocean.',
    duration: '90 Minutes (approx)',
    whatIsIncluded: [
      'Views of the coastline from the Atlantic Ocean',
      'Glass of Sparkling wine',
      'Cash bar available'
    ],
    whatIsNotIncluded: [
      'Additional drinks'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'V&A Waterfront',
    itinerary: [
      { title: 'Cruise', description: 'Cruise out of the harbour for sunset views.' }
    ],
    additionalInfo: [
      'Alcohol served on the vessels is for persons over the age of 18 only.'
    ]
  },

  // 20. District Six Museum
  { 
    id: 'cs-capetown-district-six', 
    category: 'City Sightseeing', 
    subCategory: 'Attraction',
    region: 'Cape Town',
    title: 'District Six Museum', 
    description: 'Learn about the vibrant community that was forcibly removed during apartheid. The museum is a remembrance of the once lively multi-racial area.', 
    priceType: 'per-person',
    basePrice: 60, 
    pricingTiers: [],
    img: images.districtSixMuseumOne,
    gallery: [
      images.districtSixMuseumTwo
    ],
    overview: 'Located in the Buitenkamp Methodist Mission Church.',
    duration: 'Flexible',
    whatIsIncluded: [
      'History & impact of racial segregation',
      'Learn about District Six area',
      'Instant confirmation - Mobile ticket'
    ],
    whatIsNotIncluded: [
      'Transport'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'CBD',
    itinerary: [
      { title: 'Visit', description: 'Self-guided or staff-assisted exploration of exhibitions.' }
    ],
    additionalInfo: [
      'Understand the history and impact of racial segregation in Cape Town.'
    ]
  },

  // 21. Castle of Good Hope
  { 
    id: 'cs-capetown-castle-good-hope', 
    category: 'City Sightseeing', 
    subCategory: 'Attraction',
    region: 'Cape Town',
    title: 'Castle of Good Hope', 
    description: 'The oldest colonial building in South Africa, built between 1666 and 1679.', 
    priceType: 'per-person',
    basePrice: 50, 
    pricingTiers: [],
    img: images.castleOfGoodHopeOne,
    gallery: [
      images.castleOfGoodHopeTwo,
      images.castleOfGoodHopeThree
    ],
    overview: 'A pentagonal fortress that has served as a prison and military base.',
    duration: 'Flexible',
    whatIsIncluded: [
      'Guided Tour',
      'Key Ceremony (Monday to Friday)',
      'Instant confirmation - Mobile ticket'
    ],
    whatIsNotIncluded: [
      'Transport'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'CBD',
    itinerary: [
      { title: 'Visit', description: 'Explore the ramparts, cells, and museums within the castle.' }
    ],
    additionalInfo: [
      'Declared a national monument in 1936.'
    ]
  },

  // 22. South African Jewish Museum
  { 
    id: 'cs-capetown-jewish-museum', 
    category: 'City Sightseeing', 
    subCategory: 'Attraction',
    region: 'Cape Town',
    title: 'South African Jewish Museum', 
    description: 'Housed in South Africa\'s first synagogue, built in 1863. Includes a record of the history of South Africa\'s Jewish community.', 
    priceType: 'per-person',
    basePrice: 250, 
    pricingTiers: [],
    img: images.southAfricanJewishMuseumOne,
    gallery: [
      images.southAfricanJewishMuseumTwo,
      images.southAfricanJewishMuseumThree
    ],
    overview: 'Hosts different exhibitions and includes the Cape Town Holocaust Centre.',
    duration: 'Flexible',
    whatIsIncluded: [
      'Hosts different exhibitions',
      'Holocaust Centre emotional experience',
      'Instant confirmation - Mobile ticket'
    ],
    whatIsNotIncluded: [
      'Transport'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Gardens District',
    itinerary: [
      { title: 'Visit', description: 'Tour the historical building and exhibitions.' }
    ],
    additionalInfo: [
      'Photo ID required for all visitors.'
    ]
  },

  // 23. Groot Constantia Wine Estate
  { 
    id: 'cs-capetown-groot-constantia', 
    category: 'City Sightseeing', 
    subCategory: 'Attraction',
    region: 'Cape Town',
    title: 'Groot Constantia Wine Estate', 
    description: 'Visit the oldest wine estate of South Africa, founded in 1685. Visit includes the estate, the Manor House Museum, and wine tasting.', 
    priceType: 'per-person',
    basePrice: 145, 
    pricingTiers: [],
    img: images.grootConstantiaWineEstateOne,
    gallery: [
      images.grootConstantiaWineEstateTwo,
      images.grootConstantiaWineEstateThree,
      images.grootConstantiaWineEstateFour,
      images.grootConstantiaWineEstateFive,
      images.grootConstantiaWineEstateSix,
      images.grootConstantiaWineEstateSeven
    ],
    overview: 'Producing wine since 1685. Napoleon was a fan!',
    duration: 'Flexible',
    whatIsIncluded: [
      'Taste 5 wines',
      'Cellar Tour',
      'Entrance to the Manor House'
    ],
    whatIsNotIncluded: [
      'Transport'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Constantia Valley',
    itinerary: [
      { title: 'Tasting & Tour', description: 'Enjoy the historical Cloete Cellar and a tasting of 5 wines.' }
    ],
    additionalInfo: [
      'South Africa\'s oldest wine estate.'
    ]
  },

  // 24. World of Birds
  { 
    id: 'cs-capetown-world-of-birds', 
    category: 'City Sightseeing', 
    subCategory: 'Attraction',
    region: 'Cape Town',
    title: 'World of Birds', 
    description: 'Africa\'s largest bird sanctuary with over 3,000 birds and 400 different species in 100 walk-through aviaries.', 
    priceType: 'per-person',
    basePrice: 130, 
    pricingTiers: [],
    img: images.worldOfBirdsOne,
    gallery: [
      images.worldOfBirdsTwo,
      images.worldOfBirdsThree,
      images.worldOfBirdsFour,
      images.worldOfBirdsFive
    ],
    overview: 'Located in Hout Bay. Includes a Monkey Jungle.',
    duration: 'Flexible',
    whatIsIncluded: [
      'Over 3,000 birds',
      'Interactive Monkey Jungle',
      'Instant confirmation - Mobile ticket'
    ],
    whatIsNotIncluded: [
      'Transport to Hout Bay'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'Hout Bay',
    itinerary: [
      { title: 'Explore', description: 'Walk through aviaries and visit the Monkey Jungle.' }
    ],
    additionalInfo: [
      'A paradise for nature lovers.'
    ]
  },

  // 25. Bus + FREE entry to 3 Top Attractions
  { 
    id: 'cs-capetown-bus-3attractions', 
    category: 'City Sightseeing', 
    subCategory: 'Bus Combo',
    region: 'Cape Town',
    title: 'Bus + FREE entry to 3 Top Attractions', 
    description: 'Includes the red bus Classic Package (1 day open-top bus ticket) + FREE entry to any 3 of 12 top attractions.', 
    priceType: 'per-person',
    basePrice: 695, 
    pricingTiers: [],
    img: images.busFREEEntryTo3TopAttractionsOne,
    gallery: [images.busFREEEntryTo3TopAttractionsTwo, images.busFREEEntryTo3TopAttractionsThree, images.busFREEEntryTo3TopAttractionsFour, images.busFREEEntryTo3TopAttractionsFive, images.busFREEEntryTo3TopAttractionsSix, images.busFREEEntryTo3TopAttractionsSeven, images.busFREEEntryTo3TopAttractionsEight, images.busFREEEntryTo3TopAttractionsNine, images.busFREEEntryTo3TopAttractionsTen], 
    overview: 'Your e-Pass to any 3 of 12 top Attractions. Choose from Groot Constantia, World of Birds, Seal Island Cruise, and more.',
    duration: '1 Day (Bus)',
    whatIsIncluded: [
      'Classic (1 Day) bus ticket + choose 3 attractions',
      'Hassle free entry at attractions'
    ],
    whatIsNotIncluded: [
      'Entrance to attractions not selected'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Choice', description: 'Select 3: Groot Constantia, World of Birds, Drumbeat Charters, Mariner\'s Wharf, Hard Rock Cafe, Canal Cruise, Harbour Cruise, Mojo Market, Cave Golf, Up Cycles, The Cape Wheel.' }
    ],
    additionalInfo: [
      'Instant confirmation.'
    ]
  },

  // 26. Bus + All 80 Top Attractions (Mega Pass)
  { 
    id: 'cs-capetown-mega-pass-one-day', 
    category: 'City Sightseeing', 
    subCategory: 'Pass',
    region: 'Cape Town',
    title: 'Bus + All 80 Top Attractions 1 Day', 
    description: 'The only e-Pass in Cape Town to offer 80+ attractions. Includes a Red Bus ticket for the duration of your pass.', 
    priceType: 'per-person',
    basePrice: 1545, 
    pricingTiers: [],
    img: images.busAll80TopAttractions123Or5DaysOne,
    gallery: [
      images.busAll80TopAttractions123Or5DaysTwo,
      images.busAll80TopAttractions123Or5DaysThree,
      images.busAll80TopAttractions123Or5DaysFour,
      images.busAll80TopAttractions123Or5DaysFive,
      images.busAll80TopAttractions123Or5DaysSix,
      images.busAll80TopAttractions123Or5DaysSeven,
      images.busAll80TopAttractions123Or5DaysEight,
      images.busAll80TopAttractions123Or5DaysNine,
      images.busAll80TopAttractions123Or5DaysTen,
      images.busAll80TopAttractions123Or5DaysEleven
    ],
    overview: 'Unlimited single entry for the duration of your pass.',
    duration: '1 Day',
    whatIsIncluded: [
      'Only e-Pass in CPT to offer 80+ attractions',
      'Unlimited single entry for duration of your pass',
      'Red Bus ticket for duration of your pass'
    ],
    whatIsNotIncluded: [
      'Food and drinks unless specified'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Flexible', description: 'Choose from over 80 attractions.' }
    ],
    additionalInfo: [
      'Refunds can be requested for all unused passes.'
    ]
  },

  { 
    id: 'cs-capetown-mega-pass-two-day', 
    category: 'City Sightseeing', 
    subCategory: 'Pass',
    region: 'Cape Town',
    title: 'Bus + All 80 Top Attractions 2 Days', 
    description: 'The only e-Pass in Cape Town to offer 80+ attractions. Includes a Red Bus ticket for the duration of your pass.', 
    priceType: 'per-person',
    basePrice: 1095, 
    pricingTiers: [],
    img: images.busAll80TopAttractions123Or5DaysOne,
    gallery: [
      images.busAll80TopAttractions123Or5DaysTwo,
      images.busAll80TopAttractions123Or5DaysThree,
      images.busAll80TopAttractions123Or5DaysFour,
      images.busAll80TopAttractions123Or5DaysFive,
      images.busAll80TopAttractions123Or5DaysSix,
      images.busAll80TopAttractions123Or5DaysSeven,
      images.busAll80TopAttractions123Or5DaysEight,
      images.busAll80TopAttractions123Or5DaysNine,
      images.busAll80TopAttractions123Or5DaysTen,
      images.busAll80TopAttractions123Or5DaysEleven
    ],
    overview: 'Unlimited single entry for the duration of your pass.',
    duration: '2 Days',
    whatIsIncluded: [
      'Only e-Pass in CPT to offer 80+ attractions',
      'Unlimited single entry for duration of your pass',
      'Red Bus ticket for duration of your pass'
    ],
    whatIsNotIncluded: [
      'Food and drinks unless specified'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Flexible', description: 'Choose from over 80 attractions.' }
    ],
    additionalInfo: [
      'Refunds can be requested for all unused passes.'
    ]
  },

    { 
    id: 'cs-capetown-mega-pass-three-day', 
    category: 'City Sightseeing', 
    subCategory: 'Pass',
    region: 'Cape Town',
    title: 'Bus + All 80 Top Attractions 3 Days', 
    description: 'The only e-Pass in Cape Town to offer 80+ attractions. Includes a Red Bus ticket for the duration of your pass.', 
    priceType: 'per-person',
    basePrice: 1395, 
    pricingTiers: [],
    img: images.busAll80TopAttractions123Or5DaysOne,
    gallery: [
      images.busAll80TopAttractions123Or5DaysTwo,
      images.busAll80TopAttractions123Or5DaysThree,
      images.busAll80TopAttractions123Or5DaysFour,
      images.busAll80TopAttractions123Or5DaysFive,
      images.busAll80TopAttractions123Or5DaysSix,
      images.busAll80TopAttractions123Or5DaysSeven,
      images.busAll80TopAttractions123Or5DaysEight,
      images.busAll80TopAttractions123Or5DaysNine,
      images.busAll80TopAttractions123Or5DaysTen,
      images.busAll80TopAttractions123Or5DaysEleven
    ],
    overview: 'Unlimited single entry for the duration of your pass.',
    duration: '3 Days',
    whatIsIncluded: [
      'Only e-Pass in CPT to offer 80+ attractions',
      'Unlimited single entry for duration of your pass',
      'Red Bus ticket for duration of your pass'
    ],
    whatIsNotIncluded: [
      'Food and drinks unless specified'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Flexible', description: 'Choose from over 80 attractions.' }
    ],
    additionalInfo: [
      'Refunds can be requested for all unused passes.'
    ]
  },

  { 
    id: 'cs-capetown-mega-pass-five-days', 
    category: 'City Sightseeing', 
    subCategory: 'Pass',
    region: 'Cape Town',
    title: 'Bus + All 80 Top Attractions 5 Days', 
    description: 'The only e-Pass in Cape Town to offer 80+ attractions. Includes a Red Bus ticket for the duration of your pass.', 
    priceType: 'per-person',
    basePrice: 1595, 
    pricingTiers: [],
    img: images.busAll80TopAttractions123Or5DaysOne,
    gallery: [
      images.busAll80TopAttractions123Or5DaysTwo,
      images.busAll80TopAttractions123Or5DaysThree,
      images.busAll80TopAttractions123Or5DaysFour,
      images.busAll80TopAttractions123Or5DaysFive,
      images.busAll80TopAttractions123Or5DaysSix,
      images.busAll80TopAttractions123Or5DaysSeven,
      images.busAll80TopAttractions123Or5DaysEight,
      images.busAll80TopAttractions123Or5DaysNine,
      images.busAll80TopAttractions123Or5DaysTen,
      images.busAll80TopAttractions123Or5DaysEleven
    ],
    overview: 'Unlimited single entry for the duration of your pass.',
    duration: '5 Days',
    whatIsIncluded: [
      'Only e-Pass in CPT to offer 80+ attractions',
      'Unlimited single entry for duration of your pass',
      'Red Bus ticket for duration of your pass'
    ],
    whatIsNotIncluded: [
      'Food and drinks unless specified'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Flexible', description: 'Choose from over 80 attractions.' }
    ],
    additionalInfo: [
      'Refunds can be requested for all unused passes.'
    ]
  },

  // 27. Mega Pass + 1 Premium experience
  { 
    id: 'cs-capetown-mega-pass-premium-three-day', 
    category: 'City Sightseeing', 
    subCategory: 'Pass',
    region: 'Cape Town',
    title: 'Mega Pass + 1 Premium experience 3 Days', 
    description: 'Offers 80+ attractions plus a choice of 1 of 12 PREMIUM Experiences. Includes Red Bus ticket.', 
    priceType: 'per-person',
    basePrice: 2995, 
    pricingTiers: [],
    img: images.megaPass1PremiumExperience3Or5DaysOne,
    gallery: [
      images.megaPass1PremiumExperience3Or5DaysTwo,
      images.megaPass1PremiumExperience3Or5DaysThree,
      images.megaPass1PremiumExperience3Or5DaysFour,
      images.megaPass1PremiumExperience3Or5DaysFive,
      images.megaPass1PremiumExperience3Or5DaysSix,
      images.megaPass1PremiumExperience3Or5DaysSeven,
      images.megaPass1PremiumExperience3Or5DaysEight,
      images.megaPass1PremiumExperience3Or5DaysNine,
      images.megaPass1PremiumExperience3Or5DaysTen,
      images.megaPass1PremiumExperience3Or5DaysEleven,
      images.megaPass1PremiumExperience3Or5DaysTwelve,
      images.megaPass1PremiumExperience3Or5DaysThirteen,
      images.megaPass1PremiumExperience3Or5DaysFourteen,
      images.megaPass1PremiumExperience3Or5DaysFifteen,
      images.megaPass1PremiumExperience3Or5DaysSixteen,
      images.megaPass1PremiumExperience3Or5DaysSeventeen,
      images.megaPass1PremiumExperience3Or5DaysEighteen,
      images.megaPass1PremiumExperience3Or5DaysNineteen,
      images.megaPass1PremiumExperience3Or5DaysTwenty, 
      images.megaPass1PremiumExperience3Or5DaysTwentyOne,
      images.megaPass1PremiumExperience3Or5DaysTwentyTwo
    ],
    overview: 'Get everything in the standard Mega Pass plus one high-value activity like a Shark Cage Dive or Helicopter Ride.',
    duration: '3 Days',
    whatIsIncluded: [
      'Unlimited single entry for 3 days',
      'Choose 1 of 12 PREMIUM Experiences',
      'Red Bus ticket for duration of your pass'
    ],
    whatIsNotIncluded: [
      'Food and drinks'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Premium Choice', description: 'Examples: Big 5 Safari, Abseil Table Mountain, Cobra Car Hire, Breathless Quad-biking, Mangwanani Spa Treatment.' }
    ],
    additionalInfo: [
      '25% Off any of the 3 Explorer Day Tours.'
    ]
  },

  // 27. Mega Pass + 1 Premium experience
  { 
    id: 'cs-capetown-mega-pass-premium-five-day', 
    category: 'City Sightseeing', 
    subCategory: 'Pass',
    region: 'Cape Town',
    title: 'Mega Pass + 1 Premium experience 5 Days', 
    description: 'Offers 80+ attractions plus a choice of 1 of 12 PREMIUM Experiences. Includes Red Bus ticket.', 
    priceType: 'per-person',
    basePrice: 3195, 
    pricingTiers: [],
    img: images.megaPass1PremiumExperience3Or5DaysOne,
    gallery: [
      images.megaPass1PremiumExperience3Or5DaysTwo,
      images.megaPass1PremiumExperience3Or5DaysThree,
      images.megaPass1PremiumExperience3Or5DaysFour,
      images.megaPass1PremiumExperience3Or5DaysFive,
      images.megaPass1PremiumExperience3Or5DaysSix,
      images.megaPass1PremiumExperience3Or5DaysSeven,
      images.megaPass1PremiumExperience3Or5DaysEight,
      images.megaPass1PremiumExperience3Or5DaysNine,
      images.megaPass1PremiumExperience3Or5DaysTen,
      images.megaPass1PremiumExperience3Or5DaysEleven,
      images.megaPass1PremiumExperience3Or5DaysTwelve,
      images.megaPass1PremiumExperience3Or5DaysThirteen,
      images.megaPass1PremiumExperience3Or5DaysFourteen,
      images.megaPass1PremiumExperience3Or5DaysFifteen,
      images.megaPass1PremiumExperience3Or5DaysSixteen,
      images.megaPass1PremiumExperience3Or5DaysSeventeen,
      images.megaPass1PremiumExperience3Or5DaysEighteen,
      images.megaPass1PremiumExperience3Or5DaysNineteen,
      images.megaPass1PremiumExperience3Or5DaysTwenty, 
      images.megaPass1PremiumExperience3Or5DaysTwentyOne,
      images.megaPass1PremiumExperience3Or5DaysTwentyTwo
    ],
    overview: 'Get everything in the standard Mega Pass plus one high-value activity like a Shark Cage Dive or Helicopter Ride.',
    duration: '5 Days',
    whatIsIncluded: [
      'Unlimited single entry for 5 days',
      'Choose 1 of 12 PREMIUM Experiences',
      'Red Bus ticket for duration of your pass'
    ],
    whatIsNotIncluded: [
      'Food and drinks'
    ],
    hotelPickupAvailable: false,
    pickupRestriction: 'N/A',
    itinerary: [
      { title: 'Premium Choice', description: 'Examples: Big 5 Safari, Abseil Table Mountain, Cobra Car Hire, Breathless Quad-biking, Mangwanani Spa Treatment.' }
    ],
    additionalInfo: [
      '25% Off any of the 3 Explorer Day Tours.'
    ]
  }
];