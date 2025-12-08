import { images } from './images'; // Assuming 'images' module contains relevant image references

// --- Pilanesberg National Park Tours Data ---
export const pilanesbergNationalParkData = [

  { 
    id: 'p1', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Camping Adventure Pilanesberg', 
    description: 'Welcome to Pilanesberg National Park, a malaria-free gem nestled in South Africa’s North West Province. Pilanesberg National Park is home to the Big Five and all other animal species endemic to Southern Africa. Discover the magic of Pilanesberg on an exciting 2-day camping safari. This tour is operated by MoAfrika Tours, includes 2 days/1 night in a luxury tented camp, air-conditioned transfers, and thrilling open safari drives.', 
    priceType: 'per-person',
    basePrice: 3895, // ZAR 3,895
    pricingTiers: [],
    img: images.twoDayCampingAdventurePilanesbergOne,
    gallery: [
        images.twoDayCampingAdventurePilanesbergTwo,
        images.twoDayCampingAdventurePilanesbergThree,
        images.twoDayCampingAdventurePilanesbergFour,
        images.twoDayCampingAdventurePilanesbergFive,
        images.twoDayCampingAdventurePilanesbergSix,
        images.twoDayCampingAdventurePilanesbergSeven,
        images.twoDayCampingAdventurePilanesbergEight,
        images.twoDayCampingAdventurePilanesbergNine
    ],
    overview: '3 heart-pounding open safari drives in top-quality, superior open vehicles. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 1 night at a private tented safari camp, with full bedding and en suite bathrooms. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 heart-pounding open safari drives in top-quality, superior open vehicles',
      'Luxury air-conditioned transfers between Johannesburg and Pilanesberg',
      '1 night at a private tented safari camp',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees',
      'Services conducted by MoAfrika Tours in luxurious open vehicles'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Scheduled domestic and international airfare',
      'Meals not specified in the itinerary',
      'Drinks and refreshments at the safari camp or lodges (Cash Bar facility)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport / Pretoria / Pilanesberg Game Reserve (Approx 176 km / 2 hours)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive in a luxury air-conditioned vehicle to Pilanesberg. Check into Tent Safari Camp, enjoy a light lunch. Afternoon open-vehicle game drive. Evening Boma Dinner, followed by a night drive (approx 3 hours). Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg Game Reserve - Johannesburg', description: 'Morning game drive and bush walk. Enjoy a hearty breakfast. Drive to Johannesburg/Pretoria and drop-off at a hotel or the airport around 5 PM.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p2', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Shepherd\'s Tree Game Lodge Safari', 
    description: 'Experience an unforgettable luxury safari at Shepherd\'s Tree Game Lodge, located within the Pilanesberg Game Reserve. The lodge features an exceptional architectural design, modern comforts, and world-class spa facilities. This tour includes three open-vehicle game drives and luxury accommodation.', 
    priceType: 'per-person',
    basePrice: 7995, // ZAR 7,995
    pricingTiers: [],
    img: images.twoDayLuxuryShepherdSTreeGameLodgeSafariOne,
    gallery: [
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariTwo,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariThree,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariFour, 
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariFive,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariSix,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariSeven,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariEight,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariNine,
        images.twoDayLuxuryShepherdSTreeGameLodgeSafariTen
    ],
    overview: '3 heart-pounding open safari drives in top-quality, superior open vehicles. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 1 night at Shepherd\'s Tree Game Lodge, with full bedding and en suite bathrooms. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included. Complimentary use of the spa facilities.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '1 night at Shepherd\'s Tree Game Lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees',
      'Complimentary use of spa treatments'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Scheduled domestic and international airfare',
      'Meals not specified in the itinerary',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo Airport Road', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Shepherd\'s Tree Game Lodge. Check in and enjoy lunch. Afternoon open-vehicle game drive. Dinner followed by a night drive. Includes: Lunch, dinner.' },
      { title: 'Day 2: Wildlife & Relaxation', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria and drop-off at a hotel or the airport around 5 PM.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p3', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Tented Pilanesberg Safari', 
    description: 'Stay in luxury tented accommodation inside the Pilanesberg Game Reserve. The tour is run exclusively by Moafrika Tours and ensures comfort and an authentic bush experience. Includes three thrilling game drives and all meals.', 
    priceType: 'per-person',
    basePrice: 5695, // ZAR 5,695
    pricingTiers: [],
    img: images.twoDayLuxuryTentedPilanesbergSafariOne,
    gallery: [
        images.twoDayLuxuryTentedPilanesbergSafariTwo,
        images.twoDayLuxuryTentedPilanesbergSafariThree,
        images.twoDayLuxuryTentedPilanesbergSafariFour,
        images.twoDayLuxuryTentedPilanesbergSafariFive,
        images.twoDayLuxuryTentedPilanesbergSafariSix,
        images.twoDayLuxuryTentedPilanesbergSafariSeven,
        images.twoDayLuxuryTentedPilanesbergSafariEight,
        images.twoDayLuxuryTentedPilanesbergSafariNine,
        images.twoDayLuxuryTentedPilanesbergSafariTen,
        images.twoDayLuxuryTentedPilanesbergSafariEleven,
        images.twoDayLuxuryTentedPilanesbergSafariTwelve,
        images.twoDayLuxuryTentedPilanesbergSafariThirteen,
        images.twoDayLuxuryTentedPilanesbergSafariFourteen,
        images.twoDayLuxuryTentedPilanesbergSafariFifteen
    ],
    overview: '3 x game drives in an open safari vehicle. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 1 night at a closed-vehicle tented camp with private amenities. All meals as per itinerary. Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 x game drives in an open safari vehicle',
      'Luxury air-conditioned transfers',
      '1 night in luxury tented accommodation',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal expenses',
      'Scheduled domestic and international airfare',
      'Lunch on Day 2'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo International Airport (JNB)', description: 'Morning pickup from Johannesburg. Drive to Pilanesberg. Check in and enjoy the afternoon game drive. Dinner in the boma.' },
      { title: 'Day 2: Pilanesberg National Park', description: 'Early morning game drive. Enjoy breakfast. Depart for Johannesburg after breakfast, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p4', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day 3 Star Pilanesberg Safari', 
    description: 'A 2-day budget-friendly safari staying at Manyane Resort or Bakgatla Resort. This tour provides an affordable opportunity to see the Big 5 and includes three game drives.', 
    priceType: 'per-person',
    basePrice: 5772, // ZAR 5,772
    pricingTiers: [],
    img: images.twoDay3StarPilanesbergSafariOne,
    gallery: [
        images.twoDay3StarPilanesbergSafariTwo,
        images.twoDay3StarPilanesbergSafariThree,
        images.twoDay3StarPilanesbergSafariFour,
        images.twoDay3StarPilanesbergSafariFive,
        images.twoDay3StarPilanesbergSafariSix,
        images.twoDay3StarPilanesbergSafariSeven,
        images.twoDay3StarPilanesbergSafariEight,
        images.twoDay3StarPilanesbergSafariNine
    ],
    overview: '3 heart-pounding open safari drives. Transfers in an air-conditioned vehicle. 1 night at a 3-star lodge (Manyane or Bakgatla Resort). All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 x game drives in an open safari vehicle',
      'Transfers in an air-conditioned vehicle',
      '1 night at a 3-star accommodation',
      'All meals as per itinerary (breakfast, dinner on Day 1, breakfast on Day 2)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Lunch on Day 2',
      'Personal expenses and gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo / Pretoria', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Pilanesberg. Check in and enjoy lunch. Afternoon game drive. Dinner followed by an optional night drive (extra cost). Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg Game Reserve - Johannesburg/Pretoria', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p5', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Bakubung Safari Package', 
    description: 'A luxurious safari experience at Bakubung Bush Lodge, known for its superb setting and excellent wildlife viewing opportunities. The package includes transfers, two game drives, and full board.', 
    priceType: 'per-person',
    basePrice: 7595, // ZAR 7,595
    pricingTiers: [],
    img: images.twoDayBakubungSafariPackageOne,
    gallery: [
        images.twoDayBakubungSafariPackageTwo,
        images.twoDayBakubungSafariPackageThree,
        images.twoDayBakubungSafariPackageFour,
        images.twoDayBakubungSafariPackageFive,
        images.twoDayBakubungSafariPackageSix,
        images.twoDayBakubungSafariPackageSeven,
        images.twoDayBakubungSafariPackageEight,
        images.twoDayBakubungSafariPackageNine,
        images.twoDayBakubungSafariPackageTen
    ],
    overview: '2 closed-vehicle game drives. Transfers in a closed-vehicle. 1 night at a 4-star Bakubung Bush Lodge. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '2 closed-vehicle game drives',
      'Transfers in a closed-vehicle',
      '1 night at Bakubung Bush Lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Scheduled domestic and international airfare',
      'Meals not specified in the itinerary',
      'Drinks (cash bar)'
    ],
    itinerary: [
      { title: 'Day 1: Adventure Begins', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Bakubung. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Wildlife & Relaxation', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p6', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Black Rhino Game Lodge Safari', 
    description: 'A romantic, luxury safari experience at Black Rhino Game Lodge in the Pilanesberg Game Reserve. Located in a private concession, this lodge offers exclusive game viewing in a pristine setting. Includes four game drives and all meals.', 
    priceType: 'per-person',
    basePrice: 7595, // ZAR 7,595
    pricingTiers: [],
    img: images.twoDayLuxuryBlackRhinoGameLodgeSafariOne,
    gallery: [
        images.twoDayLuxuryBlackRhinoGameLodgeSafariTwo,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariThree,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariFour,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariFive,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariSix,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariSeven,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariEight,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariNine,
        images.twoDayLuxuryBlackRhinoGameLodgeSafariTen
    ],
    overview: '4 x game drives in an open safari vehicle. Transfers in an air-conditioned vehicle. 1 night at Black Rhino Game Lodge. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 x game drives in an open safari vehicle',
      'Transfers in an air-conditioned vehicle',
      '1 night at Black Rhino Game Lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Scheduled domestic and international airfare',
      'Meals not specified in the itinerary',
      'Drinks and refreshments'
    ],
    itinerary: [
      { title: 'Day 1: Departure from O.R. Tambo Airport Road', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Black Rhino Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Great Pilanesberg - Johannesburg', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p7', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Ivory Tree Game Lodge Safari', 
    description: 'A premier safari staying at the renowned Ivory Tree Game Lodge, offering luxury accommodation and excellent game viewing opportunities. Includes three open-vehicle game drives and all meals.', 
    priceType: 'per-person',
    basePrice: 7295, // ZAR 7,295
    pricingTiers: [],
    img: images.twoDayIvoryTreeGameLodgeSafariOne,
    gallery: [
        images.twoDayIvoryTreeGameLodgeSafariTwo,
        images.twoDayIvoryTreeGameLodgeSafariThree,
        images.twoDayIvoryTreeGameLodgeSafariFour,
        images.twoDayIvoryTreeGameLodgeSafariFive,
        images.twoDayIvoryTreeGameLodgeSafariSix
    ],
    overview: '3 heart-racing open safari drives. Transfers in an air-conditioned vehicle. 1 night at Ivory Tree Game Lodge. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 exciting open safari drives',
      'Transfers in an air-conditioned vehicle',
      '1 night at Ivory Tree Game Lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Meals not specified in the itinerary',
      'Drinks and refreshments'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport Road', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Ivory Tree Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Wildlife & Relaxation', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p8', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Pilanesberg Private Lodge Safari', 
    description: 'An exclusive luxury safari staying at a private lodge within the Pilanesberg Game Reserve, providing intimate game viewing and high-end services. The tour includes two daily game drives.', 
    priceType: 'per-person',
    basePrice: 8025, // ZAR 8,025
    pricingTiers: [],
    img: images.twoDayLuxuryPilanesbergPrivateLodgeSafariOne,
    gallery: [
        images.twoDayLuxuryPilanesbergPrivateLodgeSafariTwo,
        images.twoDayLuxuryPilanesbergPrivateLodgeSafariThree,
        images.twoDayLuxuryPilanesbergPrivateLodgeSafariFour,
        images.twoDayLuxuryPilanesbergPrivateLodgeSafariFive,
        images.twoDayLuxuryPilanesbergPrivateLodgeSafariSix
    ],
    overview: '4 x game drives in an open safari vehicle. Transfers in an air-conditioned vehicle. 1 night at a luxury private lodge. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 x game drives in an open safari vehicle',
      'Transfers in an air-conditioned vehicle',
      '1 night at a luxury private lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Meals not specified in the itinerary',
      'Drinks and refreshments'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg - Greater Pilanesberg (Approx 190 Kilometers)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to the private lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Greater Pilanesberg - Johannesburg', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p9', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Kwa Maritane Bush Lodge All Inclusive Safari Package', 
    description: 'An all-inclusive luxury safari package at Kwa Maritane Bush Lodge, featuring premium accommodation and spectacular views of the Pilanesberg landscape. Includes transfers, game drives, and full board.', 
    priceType: 'per-person',
    basePrice: 7595, // ZAR 7,595
    pricingTiers: [],
    img: images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageOne,
    gallery: [
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageTwo,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageThree,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageFour,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageFive,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageSix,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageSeven,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageEight,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageNine,
        images.twoDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageTen
    ],
    overview: '3 adrenaline-pumping open safari drives. Transfers in an air-conditioned vehicle. 1 night at Kwa Maritane Bush Lodge. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 adrenaline-pumping open safari drives',
      'Transfers in an air-conditioned vehicle',
      '1 night at Kwa Maritane Bush Lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Scheduled domestic and international airfare',
      'Meals not specified in the itinerary',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Into the Wild', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Kwa Maritane. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg National Park', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p10', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Safari to Lush Safari Lodge', 
    description: 'An intimate, high-end safari experience at Lush Private Lodge, which is located in a private concession adjacent to the Pilanesberg Game Reserve. This luxurious package includes private game drives and gourmet meals.', 
    priceType: 'per-person',
    basePrice: 12095, // ZAR 12,095
    pricingTiers: [],
    img: images.twoDayLuxurySafariToLushSafariLodgeOne,
    gallery: [
        images.twoDayLuxurySafariToLushSafariLodgeTwo,
        images.twoDayLuxurySafariToLushSafariLodgeThree,
        images.twoDayLuxurySafariToLushSafariLodgeFour,
        images.twoDayLuxurySafariToLushSafariLodgeFive,
        images.twoDayLuxurySafariToLushSafariLodgeSix,
        images.twoDayLuxurySafariToLushSafariLodgeSeven,
        images.twoDayLuxurySafariToLushSafariLodgeEight,
        images.twoDayLuxurySafariToLushSafariLodgeNine,
        images.twoDayLuxurySafariToLushSafariLodgeTen,
        images.twoDayLuxurySafariToLushSafariLodgeEleven, 
        images.twoDayLuxurySafariToLushSafariLodgeTwelve,
        images.twoDayLuxurySafariToLushSafariLodgeThirteen,
        images.twoDayLuxurySafariToLushSafariLodgeFourteen,
        images.twoDayLuxurySafariToLushSafariLodgeFifteen,
        images.twoDayLuxurySafariToLushSafariLodgeSixteen,
        images.twoDayLuxurySafariToLushSafariLodgeSeventeen,
        images.twoDayLuxurySafariToLushSafariLodgeEighteen,
        images.twoDayLuxurySafariToLushSafariLodgeNineteen,
        images.twoDayLuxurySafariToLushSafariLodgeTwenty,
        images.twoDayLuxurySafariToLushSafariLodgeTwentyOne
    ],
    overview: '2 x exclusive block Rhino Game Reserve and 2 x Pilanesberg Game Reserve open safari vehicle drives. Transfers in a closed luxury air-conditioned vehicle. 1 night at Lush Private Lodge. All meals as per itinerary (breakfast, lunch, dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '2 x open safari vehicle drives in the exclusive Black Rhino Game Reserve',
      '2 x open safari vehicle drives in the Pilanesberg Game Reserve',
      'Transfers in a luxury closed air-conditioned vehicle',
      '1 night at Lush Private Lodge',
      'All meals as per itinerary (breakfast, lunch, dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Meals not specified in the itinerary',
      'Drinks and refreshments (Cash Bar)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo International Airport (JNB)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Lush Private Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Lush Safari Lodge to Johannesburg', description: 'Early morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 17:30.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p11', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Pilanesberg Tlou Tented Safari', 
    description: 'Welcome to Pilanesberg National Park, a malaria-free gem nestled in South Africa’s North West Province. Pilanesberg National Park is home to the Big Five and all other animal species endemic to Southern Africa. Discover the magic of Pilanesberg on an exciting 2-day tented safari. This tour is operated by MoAfrika Tours, delivers the same thrilling 5-star itinerary as luxury packages, with open vehicle game drives, and accommodation at Tlou Tented Safari Camp.', 
    priceType: 'per-person',
    basePrice: 6495, // ZAR 6,495
    pricingTiers: [],
    img: images.twoDayPilanesbergTlouTentedSafariOne,
    gallery: [
        images.twoDayPilanesbergTlouTentedSafariTwo,
        images.twoDayPilanesbergTlouTentedSafariThree,
        images.twoDayPilanesbergTlouTentedSafariFour,
        images.twoDayPilanesbergTlouTentedSafariFive,
        images.twoDayPilanesbergTlouTentedSafariSix,
        images.twoDayPilanesbergTlouTentedSafariSeven,
        images.twoDayPilanesbergTlouTentedSafariEight,
        images.twoDayPilanesbergTlouTentedSafariNine,
        images.twoDayPilanesbergTlouTentedSafariTen,
        images.twoDayPilanesbergTlouTentedSafariEleven,
        images.twoDayPilanesbergTlouTentedSafariTwelve,
        images.twoDayPilanesbergTlouTentedSafariThirteen,
        images.twoDayPilanesbergTlouTentedSafariFourteen
    ],
    overview: '3 heart-pounding open safari drives in top-quality, superior open vehicles. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 1 night at Tlou Tented Safari Camp, just 4 km from the park gate. All meals as per itinerary (2 x Breakfast, 1 x Lunch, 2 x Dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '1 night at Tlou Tented Safari Camp',
      'All meals as per itinerary (2 x Breakfast, 1 x Lunch, 2 x Dinner)',
      'Park entrance and conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Scheduled domestic and international airfare',
      'Drinks and refreshments (Cash Bar facility available)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from Johannesburg', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tlou Tented Safari Camp. Check in and enjoy lunch. Afternoon open-vehicle game drive and night drive. Dinner at the camp. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg National Park', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in Johannesburg or Pretoria on request',
      'Pick-up from Johannesburg is between 5:30 AM and 6:30 AM',
      'Drop-off at Johannesburg is between 5:30 PM and 6:30 PM'
    ]
  },
  { 
    id: 'p12', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day 3 Star Pilanesberg Safari', 
    description: 'A 3-day budget-friendly safari staying at Manyane Resort or Bakgatla Resort. This tour provides an affordable opportunity to see the Big 5 and includes three game drives.', 
    priceType: 'per-person',
    basePrice: 10801, // ZAR 10,801
    pricingTiers: [],
    img: images.threeDay3StarPilanesbergSafariOne,
    gallery: [
        images.threeDay3StarPilanesbergSafariOne
    ],
    overview: '4 x game drives in an open safari vehicle. Transfers in an air-conditioned vehicle. 2 nights at a 3-star lodge (Manyane or Bakgatla Resort). All meals as per itinerary (2 x Breakfast, 2 x Dinner). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 x game drives in an open safari vehicle',
      'Transfers in an air-conditioned vehicle',
      '2 nights at a 3-star accommodation',
      'All meals as per itinerary (2 x Breakfast, 2 x Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Lunches'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo / Pretoria - Pilanesberg Game Reserve (Approx 176 km)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Pilanesberg. Check in. Afternoon game drive. Dinner at the lodge. Includes: Dinner.' },
      { title: 'Day 2: Pilanesberg Game Reserve', description: 'Morning game drive. Lunch (optional) and afternoon activities. Dinner at the lodge. Includes: Breakfast, Dinner.' },
      { title: 'Day 3: Pilanesberg Game Reserve - Johannesburg/Pretoria', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 21h00.'
    ]
  },
  { 
    id: 'p13', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Bakubung Bush Lodge All Inclusive Safari Package', 
    description: 'Experience an all-inclusive luxury safari at Bakubung Bush Lodge, located in the Pilanesberg National Park. This package includes multiple game drives and full board in a stunning reserve, created in an ancient volcano crater.', 
    priceType: 'per-person',
    basePrice: 14995, // ZAR 14,995
    pricingTiers: [],
    img: images.threeDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageOne,
    gallery: [
        images.threeDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageTwo,
        images.threeDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageThree,
        images.threeDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageFour,
        images.threeDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageFive,
        images.threeDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageSix
    ],
    overview: '5 x pulse-racing open safari drives. Transfers in a closed-vehicle. 2 nights at 4-star Bakubung Bush Lodge. All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch). Park entrance and conservation fee included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '5 x open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at Bakubung Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Drinks and refreshments',
      'Optional closed-vehicle game drive'
    ],
    itinerary: [
      { title: 'Day 1: Wild Beginnings', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Bakubung. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Safari Immersion', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Wildlife & Calm', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 21h00.'
    ]
  },
  { 
    id: 'p14', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Camping Adventure Pilanesberg', 
    description: 'This 3-day camping safari offers an authentic bush experience in Pilanesberg National Park. Stay in a luxury tented camp and enjoy multiple game drives to spot the Big 5 in a malaria-free setting.', 
    priceType: 'per-person',
    basePrice: 6363, // ZAR 6,363
    pricingTiers: [],
    img: images.threeDayCampingAdventurePilanesbergOne,
    gallery: [
        images.threeDayCampingAdventurePilanesbergOne
    ],
    overview: '6 x heart-pounding open safari drives. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 2 nights at a private tented safari camp. All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at a private tented safari camp',
      'All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport Road', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Pilanesberg. Check into Tent Safari Camp, enjoy lunch. Afternoon game drive and night drive (optional, extra cost). Dinner at the camp. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg Game Reserve', description: 'Morning game drive. Enjoy breakfast. Afternoon game drive. Dinner at the camp. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Pilanesberg Game Reserve - Johannesburg', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 21h00.'
    ]
  },
  { 
    id: 'p15', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Johannesburg / Pilanesberg',
    title: '3 Day Johannesburg Radisson Blu Hotel Tour', 
    description: 'A combined city and safari tour. Spend one day exploring Johannesburg and Soweto from the luxurious Radisson Blu Hotel, followed by two days of game viewing in Pilanesberg National Park.', 
    priceType: 'per-person',
    basePrice: 11860, // ZAR 11,860
    pricingTiers: [],
    img: images.threeDayJohannesburgRadissonBluHotelTourOne,
    gallery: [
        images.threeDayJohannesburgRadissonBluHotelTourTwo,
        images.threeDayJohannesburgRadissonBluHotelTourThree,
        images.threeDayJohannesburgRadissonBluHotelTourFour,
        images.threeDayJohannesburgRadissonBluHotelTourFive,
        images.threeDayJohannesburgRadissonBluHotelTourSix,
        images.threeDayJohannesburgRadissonBluHotelTourSeven
    ],
    overview: 'Explore the wildlife of Pilanesberg National Park on a full-day safari. Guided Johannesburg and Soweto day tour. 2 nights accommodation at the 4-star Radisson Blu Hotel Sandton. Includes park entrance fees, traditional lunch, and transportation.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: false, // Pickup is only from the hotel which is part of the package
    whatIsIncluded: [
      'Accommodation at Radisson Blu Hotel Sandton (2 nights)',
      'Full-day Pilanesberg safari including fees and 2 game drives',
      'Soweto and Apartheid Museum tour including lunch',
      'Daily breakfast'
    ],
    whatIsNotIncluded: [
      'Personal expenses',
      'Dinners'
    ],
    itinerary: [
      { title: 'Day 1: Sandton, Johannesburg', description: 'Arrive and check into Radisson Blu Hotel Sandton. Enjoy the day at leisure to explore the area. Dinner is excluded.' },
      { title: 'Day 2: Pilanesberg Safari', description: 'Early morning breakfast and pickup from the hotel for a full-day safari to Pilanesberg National Park. Includes 2 game drives and lunch. Return to the hotel in the evening. Dinner is excluded.' },
      { title: 'Day 3: Johannesburg and Soweto', description: 'Breakfast. Full-day guided tour of Soweto and Johannesburg, including a traditional lunch. Depart for airport or hotel in the late afternoon. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'The tour starts and ends in Johannesburg (not Pilanesberg)',
      'Day one and day three can easily be switched around'
    ]
  },
  { 
    id: 'p16', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Pilanesberg Camping Safari', 
    description: 'A thrilling 2-day camping safari that provides an authentic bush experience in Pilanesberg National Park. Stay in a luxury tented camp and enjoy multiple game drives to spot the Big 5 in a malaria-free setting.', 
    priceType: 'per-person',
    basePrice: 4995, // ZAR 4,995
    pricingTiers: [],
    img: images.twoDayPilanesbergCampingSafariOne,
    gallery: [
        images.twoDayPilanesbergCampingSafariTwo,
        images.twoDayPilanesbergCampingSafariThree,
        images.twoDayPilanesbergCampingSafariFour,
        images.twoDayPilanesbergCampingSafariFive,
        images.twoDayPilanesbergCampingSafariSix,
        images.twoDayPilanesbergCampingSafariSeven,
        images.twoDayPilanesbergCampingSafariEight,
        images.twoDayPilanesbergCampingSafariNine
    ],
    overview: '3 x heart-pounding open safari drives. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 1 night at a private tented safari camp. All meals as per itinerary (1 x Breakfast, 1 x Lunch, 1 x Dinner). Park entrance and conservation fee included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 x heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '1 night at a private tented safari camp',
      'All meals as per itinerary (1 x Breakfast, 1 x Lunch, 1 x Dinner)',
      'Park entrance and conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Safari Begins', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Pilanesberg. Check into Tent Safari Camp, enjoy a light lunch. Afternoon open-vehicle game drive. Evening Boma Dinner, followed by a night drive (approx 3 hours). Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg National Park', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Melanie-free',
      'Pick-up from Johannesburg is between 5:30 AM and 6:30 AM',
      'Drop-off at Johannesburg is between 5:30 PM and 6:30 PM'
    ]
  },
  { 
    id: 'p17', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '2 Day Luxury Tshukudu Bush Lodge Safari', 
    description: 'An exclusive luxury safari staying at the prestigious Tshukudu Bush Lodge, famous for its elevated position offering spectacular views and intimate game viewing. The package includes transfers, game drives, and full board.', 
    priceType: 'per-person',
    basePrice: 12995, // ZAR 12,995
    pricingTiers: [],
    img: images.twoDayLuxuryTshukuduBushLodgeSafariOne,
    gallery: [
        images.twoDayLuxuryTshukuduBushLodgeSafariTwo,
        images.twoDayLuxuryTshukuduBushLodgeSafariThree,
        images.twoDayLuxuryTshukuduBushLodgeSafariFour,
        images.twoDayLuxuryTshukuduBushLodgeSafariFive,
        images.twoDayLuxuryTshukuduBushLodgeSafariSix,
        images.twoDayLuxuryTshukuduBushLodgeSafariSeven,
        images.twoDayLuxuryTshukuduBushLodgeSafariEight,
        images.twoDayLuxuryTshukuduBushLodgeSafariNine,
        images.twoDayLuxuryTshukuduBushLodgeSafariTen,
        images.twoDayLuxuryTshukuduBushLodgeSafariEleven,
        images.twoDayLuxuryTshukuduBushLodgeSafariTwelve,
        images.twoDayLuxuryTshukuduBushLodgeSafariThirteen,
        images.twoDayLuxuryTshukuduBushLodgeSafariFourteen,
        images.twoDayLuxuryTshukuduBushLodgeSafariFifteen,
        images.twoDayLuxuryTshukuduBushLodgeSafariSixteen,
        images.twoDayLuxuryTshukuduBushLodgeSafariSeventeen
    ],
    overview: '3 x open safari vehicle game drives. Transfers in a luxury air-conditioned vehicle. 1 night at Tshukudu Bush Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '3 x open safari vehicle game drives',
      'Transfers in a luxury air-conditioned vehicle',
      '1 night at Tshukudu Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar facility)',
      'Videos, if required'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tshukudu Bush Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg Game Reserve - Johannesburg', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 21h00.'
    ]
  },
  { 
    id: 'p18', 
    category: 'Pilanesberg', 
    subCategory: 'Hotel & Safari',
    region: 'Pilanesberg',
    title: '2 Day Sundown Country Estate Hotel Tour', 
    description: 'A 2-day tour combining luxury accommodation at Sundown Country Estate with game viewing in Pilanesberg National Park. The package includes transfers, two game drives, and full board.', 
    priceType: 'per-person',
    basePrice: 5995, // ZAR 5,995
    pricingTiers: [],
    img: images.twoDaySundownCountryEstateHotelTourOne,
    gallery: [
        images.twoDaySundownCountryEstateHotelTourTwo,
        images.twoDaySundownCountryEstateHotelTourThree,
        images.twoDaySundownCountryEstateHotelTourFour,
        images.twoDaySundownCountryEstateHotelTourFive,
        images.twoDaySundownCountryEstateHotelTourSix,
        images.twoDaySundownCountryEstateHotelTourSeven,
        images.twoDaySundownCountryEstateHotelTourEight,
        images.twoDaySundownCountryEstateHotelTourNine,
        images.twoDaySundownCountryEstateHotelTourTen,
        images.twoDaySundownCountryEstateHotelTourEleven
    ],
    overview: 'Luxury lodge experience in Pilanesberg. Transfers to and from the lodge in a closed air-conditioned vehicle. 1 night at Sundown Country Estate Hotel. 2 x 3-hour game drives in an open safari vehicle. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '2 Days / 1 Night',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '2 x 3-hour open safari vehicle game drives',
      'Transfers to and from the lodge in a closed air-conditioned vehicle',
      '1 night at Sundown Country Estate Hotel',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Meals not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Into the Wilderness', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Sundown Country Estate. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Sunrise Magic and Farewell', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 19h30.'
    ]
  },
  { 
    id: 'p19', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Ivory Tree Game Lodge Safari', 
    description: 'A 3-day premier safari staying at the renowned Ivory Tree Game Lodge, offering luxury accommodation and excellent game viewing opportunities. Includes five open-vehicle game drives and all meals.', 
    priceType: 'per-person',
    basePrice: 13595, // ZAR 13,595
    pricingTiers: [],
    img: images.threeDayLuxuryIvoryTreeGameLodgeSafariOne,
    gallery: [
        images.threeDayLuxuryIvoryTreeGameLodgeSafariTwo,
        images.threeDayLuxuryIvoryTreeGameLodgeSafariThree,
        images.threeDayLuxuryIvoryTreeGameLodgeSafariFour,
        images.threeDayLuxuryIvoryTreeGameLodgeSafariFive,
        images.threeDayLuxuryIvoryTreeGameLodgeSafariSix
    ],
    overview: '5 x exhilarating open safari drives. Transfers in an air-conditioned vehicle. 2 nights at Ivory Tree Game Lodge. All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch). Park entrance and conservation fees included. Complimentary use of the world-class spa.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '5 x open safari drives',
      'Transfers in an air-conditioned vehicle',
      '2 nights at Ivory Tree Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Drinks and refreshments',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Adventure Begins', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Ivory Tree Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Wildlife & Relaxation', description: 'Morning game drive. Lunch, optional activities or spa/pool. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Wildlife & Returning', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 21h00.'
    ]
  },
  { 
    id: 'p20', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Black Rhino Game Lodge Safari', 
    description: 'A romantic, luxury safari experience at Black Rhino Game Lodge in the Pilanesberg Game Reserve. Located in a private concession, this 3-day tour offers six game drives, luxury accommodation, and all meals.', 
    priceType: 'per-person',
    basePrice: 13095, // ZAR 13,095
    pricingTiers: [],
    img: images.threeDayLuxuryBlackRhinoGameLodgeSafariOne,
    gallery: [
        images.threeDayLuxuryBlackRhinoGameLodgeSafariTwo,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariThree,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariFour,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariFive,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariSix,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariSeven,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariEight,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariNine,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariTen,
        images.threeDayLuxuryBlackRhinoGameLodgeSafariEleven
    ],
    overview: '6 x Black Rhino Game Reserve/Pilanesberg open safari drives. Transfers in a luxury air-conditioned vehicle. 2 nights at Black Rhino Game Lodge. All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x Black Rhino Game Reserve/Pilanesberg open safari drives',
      'Transfers in a luxury air-conditioned vehicle',
      '2 nights at Black Rhino Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Drinks and refreshments',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport Road', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Black Rhino Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Greater Pilanesberg - Greater Pilanesberg (Approx 200 Kilometers)', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Afternoon Tea and dinner.' },
      { title: 'Day 3: Greater Pilanesberg - Johannesburg', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.',
      'Drop-off at O.R. Tambo International Airport on the last day of your travels, on condition your flight departs no earlier than 21h00.'
    ]
  },
  { 
    id: 'p21', 
    category: 'Pilanesberg', 
    subCategory: 'Safari & City',
    region: 'Pilanesberg / Johannesburg',
    title: '3 Day Pilanesberg & Johannesburg Luxury Package', 
    description: 'A luxurious combination tour featuring two nights of accommodation—one near Pilanesberg Game Reserve and one at the Catalyst Hotel in Sandton. The package includes a full-day Pilanesberg safari and a historical tour of Soweto and the Apartheid Museum.', 
    priceType: 'per-person',
    basePrice: 11220, // ZAR 11,220
    pricingTiers: [],
    img: images.threeDayPilanesbergJohannesburgLuxuryPackageOne,
    gallery: [
        images.threeDayPilanesbergJohannesburgLuxuryPackageTwo,
        images.threeDayPilanesbergJohannesburgLuxuryPackageThree,
        images.threeDayPilanesbergJohannesburgLuxuryPackageFour,
        images.threeDayPilanesbergJohannesburgLuxuryPackageFive,
        images.threeDayPilanesbergJohannesburgLuxuryPackageSix,
        images.threeDayPilanesbergJohannesburgLuxuryPackageSeven,
        images.threeDayPilanesbergJohannesburgLuxuryPackageEight
    ],
    overview: 'Full day Pilanesberg National Park safari. Soweto and Apartheid Museum full day tour. Stay at the Catalyst Hotel in Sandton. Transfers between the hotel and airport.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: false, // Tour starts/ends at the hotel which is part of the package, or OR Tambo.
    whatIsIncluded: [
      'Accommodation at the Catalyst Hotel in Sandton (2 nights)',
      'Pilanesberg full day safari (2 game drives)',
      'Soweto and Apartheid Museum tour',
      'Lunch on Days 2 and 3',
      'All relevant entrance fees'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Dinners',
      'Meals not mentioned in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Depart from Johannesburg', description: 'Arrive at OR Tambo International Airport (JNB) or be picked up in Johannesburg. Transfer to the Catalyst Hotel in Sandton. Enjoy the day at leisure. Dinner excluded.' },
      { title: 'Day 2: Pilanesberg National Park Safari', description: 'Early morning pickup from the hotel for a full-day Pilanesberg National Park safari. Includes 2 game drives and lunch. Return to the hotel in the evening. Dinner excluded. Includes: Lunch.' },
      { title: 'Day 3: Soweto', description: 'Enjoy breakfast before a pickup for the Soweto and Apartheid Museum full-day tour. Includes a traditional lunch. Transfer to OR Tambo International Airport (JNB) for departure around 17:00. Includes: Breakfast, Lunch.' }
    ],
    additionalInfo: [
      'This itinerary can be modified to suit your travel needs'
    ]
  },
  { 
    id: 'p22', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Safari to Lush Safari Lodge', 
    description: 'An intimate, high-end 3-day safari experience at Lush Private Lodge, located in a private concession adjacent to Pilanesberg. This luxurious package includes private game drives and gourmet meals.', 
    priceType: 'per-person',
    basePrice: 24295, // ZAR 24,295
    pricingTiers: [],
    img: images.threeDayLuxurySafariToLushSafariLodgeOne,
    gallery: [
        images.threeDayLuxurySafariToLushSafariLodgeTwo,
        images.threeDayLuxurySafariToLushSafariLodgeThree,
        images.threeDayLuxurySafariToLushSafariLodgeFour,
        images.threeDayLuxurySafariToLushSafariLodgeFive,
        images.threeDayLuxurySafariToLushSafariLodgeSix,
        images.threeDayLuxurySafariToLushSafariLodgeSeven,
        images.threeDayLuxurySafariToLushSafariLodgeEight,
        images.threeDayLuxurySafariToLushSafariLodgeNine,
        images.threeDayLuxurySafariToLushSafariLodgeTen,
        images.threeDayLuxurySafariToLushSafariLodgeEleven,
        images.threeDayLuxurySafariToLushSafariLodgeTwelve,
        images.threeDayLuxurySafariToLushSafariLodgeThirteen,
        images.threeDayLuxurySafariToLushSafariLodgeFourteen
    ],
    overview: '4 x exclusive block Rhino Game Reserve and 2 x Pilanesberg Game Reserve open safari vehicle drives. Luxury closed-vehicle transfers. 2 nights accommodation at Lush Private Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner).',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x open safari vehicle drives',
      'Luxury air-conditioned transfers',
      '2 nights at Lush Private Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar facility)',
      'Meals not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo International Airport (JNB) to Lush Safari Lodge', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Lush Private Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg National Park', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Lush Safari Lodge to Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p23', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Pilanesberg Private Lodge Safari', 
    description: 'An exclusive 3-day luxury safari staying at a private lodge within the Pilanesberg Game Reserve, providing intimate game viewing and high-end services. The tour includes multiple game drives.', 
    priceType: 'per-person',
    basePrice: 11765, // ZAR 11,765
    pricingTiers: [],
    img: images.threeDayLuxuryPilanesbergPrivateLodgeSafariOne,
    gallery: [
        images.threeDayLuxuryPilanesbergPrivateLodgeSafariOne
    ],
    overview: '6 x game drives in an open safari vehicle. Transfers in an air-conditioned vehicle. 2 nights at a luxury private lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x game drives in an open safari vehicle',
      'Transfers in an air-conditioned vehicle',
      '2 nights at a luxury private lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Meals not specified in the itinerary',
      'Drinks and refreshments (Cash Bar facility)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to the private lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Greater Pilanesberg', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Greater Pilanesberg - Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p24', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Kwa Maritane Bush Lodge All Inclusive Safari Package', 
    description: 'An all-inclusive 3-day luxury safari package at Kwa Maritane Bush Lodge, featuring premium accommodation and spectacular views of the Pilanesberg landscape. Includes five game drives and full board.', 
    priceType: 'per-person',
    basePrice: 12095, // ZAR 12,095
    pricingTiers: [],
    img: images.threeDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageOne,
    gallery: [
        images.threeDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageTwo,
        images.threeDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageThree,
        images.threeDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageFour,
        images.threeDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageFive,
        images.threeDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageSix
    ],
    overview: '5 x adrenaline-pumping open safari drives. Transfers in a closed-vehicle. 2 nights at 4-star Kwa Maritane Bush Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '5 x open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at Kwa Maritane Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Into the Wild', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Kwa Maritane. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Full Safari Adventure', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Pilanesberg National Park', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p25', 
    category: 'Pilanesberg', 
    subCategory: 'Safari & Leisure',
    region: 'Pilanesberg / Sun City',
    title: '3 Day Sun City Cabanas Safaris', 
    description: 'Enjoy a 3-day journey at Sun City Cabanas, including Pilanesberg Safaris. Where luxury meets adventure, you will have two nights accommodation at the Sun City Cabanas Hotel with breakfast, a full-day Pilanesberg Safari, and access to the Valley of Waves.', 
    priceType: 'per-person',
    basePrice: 8730, // ZAR 8,730
    pricingTiers: [],
    img: images.threeDaySunCityCabanasSafarisOne,
    gallery: [
        images.threeDaySunCityCabanasSafarisTwo,
        images.threeDaySunCityCabanasSafarisThree,
        images.threeDaySunCityCabanasSafarisFour,
        images.threeDaySunCityCabanasSafarisFive,
        images.threeDaySunCityCabanasSafarisSix,
        images.threeDaySunCityCabanasSafarisSeven
    ],
    overview: 'Accommodation at Sun City Cabanas Hotel (2 nights). Full-day Pilanesberg safari (2 game drives). Access to the Valley of Waves entry. Transfers between Johannesburg and Sun City.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Accommodation at Sun City Cabanas Hotel (2 nights)',
      'Pilanesberg morning & sunset game drives',
      'Access to the Valley of Waves',
      'Breakfast',
      'Transfers throughout the package'
    ],
    whatIsNotIncluded: [
      'Lunches, dinners & beverages',
      'Personal purchases',
      'Entrance fees',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sun City Adventure Begins', description: 'Morning departure from Johannesburg/OR Tambo. Drive to Sun City Cabanas Hotel. Check in and enjoy the resort. Dinner excluded.' },
      { title: 'Day 2: Pilanesberg National Park Safari', description: 'Full day Pilanesberg safari including morning and sunset game drives. Lunch included. Return to Sun City. Dinner excluded. Includes: Lunch.' },
      { title: 'Day 3: Sunrise Safari and Departure', description: 'Enjoy breakfast. Optional early morning safari (extra cost). Depart from Sun City around 2 PM for transfer back to Johannesburg/OR Tambo. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Accommodation in the Johannesburg area on request'
    ]
  },
  { 
    id: 'p26', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Pilanesberg Camping Safari', 
    description: 'This 3-day camping safari provides an authentic bush experience in Pilanesberg National Park. Stay in a luxury tented camp and enjoy multiple game drives to spot the Big 5 in a malaria-free setting.', 
    priceType: 'per-person',
    basePrice: 7495, // ZAR 7,495
    pricingTiers: [],
    img: images.threeDayPilanesbergCampingSafariOne,
    gallery: [
        images.threeDayPilanesbergCampingSafariTwo,
        images.threeDayPilanesbergCampingSafariThree,
        images.threeDayPilanesbergCampingSafariFour,
        images.threeDayPilanesbergCampingSafariFive,
        images.threeDayPilanesbergCampingSafariSix,
        images.threeDayPilanesbergCampingSafariSeven,
        images.threeDayPilanesbergCampingSafariEight,
        images.threeDayPilanesbergCampingSafariNine
    ],
    overview: '5 x heart-pounding open safari drives. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 2 nights at Tlou Tented Safari Camp. All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '5 x heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at Tlou Tented Safari Camp',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Sunrise Safari Experience', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tlou Tented Safari Camp. Check in and enjoy lunch. Afternoon game drive. Dinner at the camp. Includes: Lunch, dinner.' },
      { title: 'Day 2: Sunrise and Sunset Safaris', description: 'Morning game drive. Lunch at the camp. Afternoon game drive. Dinner at the camp. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Safari and Departure', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in Johannesburg on request',
      'Pick-up from Johannesburg is between 5:30 AM and 6:30 AM'
    ]
  },
  { 
    id: 'p27', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Tshukudu Bush Lodge Safari', 
    description: 'An exclusive 3-day luxury safari staying at the prestigious Tshukudu Bush Lodge, famous for its elevated position offering spectacular views and intimate game viewing. The package includes transfers, game drives, and full board.', 
    priceType: 'per-person',
    basePrice: 18495, // ZAR 18,495
    pricingTiers: [],
    img: images.threeDayLuxuryTshukuduBushLodgeSafariOne,
    gallery: [
        images.threeDayLuxuryTshukuduBushLodgeSafariOne
    ],
    overview: '6 x game drives in an open safari vehicle. Transfers in a luxury air-conditioned vehicle. 2 nights at Tshukudu Bush Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x game drives in an open safari vehicle',
      'Transfers in a luxury air-conditioned vehicle',
      '2 nights at Tshukudu Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Meals not specified in the itinerary',
      'Drinks and refreshments (Cash Bar facility)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo International Airport (JNB)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tshukudu Bush Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg Game Reserve', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Pilanesberg Game Reserve - Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p28', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Tented Pilanesberg Safari', 
    description: 'Stay in luxury tented accommodation inside the Pilanesberg Game Reserve. The 3-day tour includes four thrilling game drives and all meals (excluding lunch on Day 3).', 
    priceType: 'per-person',
    basePrice: 7731, // ZAR 7,731
    pricingTiers: [],
    img: images.threeDayLuxuryTentedPilanesbergSafariOne,
    gallery: [
        images.threeDayLuxuryTentedPilanesbergSafariOne
    ],
    overview: '4 x game drives in an open safari vehicle. Transfers in an air-conditioned vehicle. 2 nights at a closed-vehicle tented camp. All meals as per itinerary (2 x Breakfast, 2 x Dinner, 2 x Lunch). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 x game drives in an open safari vehicle',
      'Transfers in an air-conditioned vehicle',
      '2 nights in luxury tented accommodation',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Lunch on Day 3',
      'Personal expenses',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo International Airport (JNB)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Pilanesberg. Check in and enjoy lunch. Afternoon game drive. Dinner in the boma. Includes: Lunch, dinner.' },
      { title: 'Day 2: Pilanesberg National Park', description: 'Morning game drive. Lunch at the camp. Afternoon game drive. Dinner in the boma. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Pilanesberg National Park', description: 'Morning game drive. Enjoy breakfast. Depart for Johannesburg after breakfast, arriving around 17:30. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p29', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Luxury Shepherd\'s Tree Game Lodge Safari', 
    description: 'Experience an unforgettable 3-day luxury safari at Shepherd\'s Tree Game Lodge, located within the Pilanesberg Game Reserve. The lodge features an exceptional architectural design, modern comforts, and includes five open-vehicle game drives.', 
    priceType: 'per-person',
    basePrice: 15085, // ZAR 15,085
    pricingTiers: [],
    img: images.threeDayLuxuryShepherdSTreeGameLodgeSafariOne,
    gallery: [
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariTwo,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariThree,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariFour,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariFive,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariSix,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariSeven,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariEight,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariNine,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariTen,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariEleven,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariTwelve,
        images.threeDayLuxuryShepherdSTreeGameLodgeSafariThirteen
    ],
    overview: '5 x exhilarating open safari drives. Transfers in an air-conditioned vehicle. 2 nights at Shepherd\'s Tree Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Complimentary use of the spa.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '5 x open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at Shepherd\'s Tree Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fees'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Spa treatments',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Shepherd\'s Tree Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Full Safari Immersion', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Wildlife & Bliss', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p30', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Pilanesberg Tlou Tented Safari', 
    description: 'Welcome to Pilanesberg National Park, a malaria-free gem nestled in South Africa’s North West Province. This 3-day tented safari delivers the same thrilling 5-star itinerary as luxury packages, with open vehicle game drives, and accommodation at Tlou Tented Safari Camp.', 
    priceType: 'per-person',
    basePrice: 9995, // ZAR 9,995
    pricingTiers: [],
    img: images.threeDayPilanesbergTlouTentedSafariOne,
    gallery: [
        images.threeDayPilanesbergTlouTentedSafariTwo,
        images.threeDayPilanesbergTlouTentedSafariThree,
        images.threeDayPilanesbergTlouTentedSafariFour,
        images.threeDayPilanesbergTlouTentedSafariFive,
        images.threeDayPilanesbergTlouTentedSafariSix,
        images.threeDayPilanesbergTlouTentedSafariSeven,
        images.threeDayPilanesbergTlouTentedSafariEight,
        images.threeDayPilanesbergTlouTentedSafariNine,
        images.threeDayPilanesbergTlouTentedSafariTen,
        images.threeDayPilanesbergTlouTentedSafariEleven,
        images.threeDayPilanesbergTlouTentedSafariTwelve,
        images.threeDayPilanesbergTlouTentedSafariThirteen,
        images.threeDayPilanesbergTlouTentedSafariFourteen,
        images.threeDayPilanesbergTlouTentedSafariFifteen,
        images.threeDayPilanesbergTlouTentedSafariSixteen,
        images.threeDayPilanesbergTlouTentedSafariSeventeen
    ],
    overview: '6 x heart-pounding open safari drives in top-quality, superior open vehicles. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 2 nights at Tlou Tented Safari Camp. All meals as per itinerary (2 x Breakfast, 2 x Lunch, 2 x Dinner). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at Tlou Tented Safari Camp',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Park entrance and conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Tented Safari Luxury Experience', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tlou Tented Safari Camp. Check in and enjoy lunch. Afternoon game drive. Dinner at the camp. Includes: Lunch, dinner.' },
      { title: 'Day 2: Full Safari Experience of Tlou Tented Camp', description: 'Morning game drive. Lunch at the camp. Afternoon game drive. Dinner at the camp. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Final Safari Day & Return to Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in Johannesburg or Pretoria on request',
      'Pick-up from Johannesburg is between 5:30 AM and 6:30 AM'
    ]
  },
  { 
    id: 'p31', 
    category: 'Pilanesberg', 
    subCategory: 'Activity',
    region: 'Pilanesberg',
    title: '3 Hour Pilanesberg Morning / Afternoon Safari Drive', 
    description: 'A dedicated 3-hour game drive in an open safari vehicle inside Pilanesberg National Park. This option allows you to make your own way to the Manyane Resort where the vehicle departs, and is ideal for quick, focused game viewing.', 
    priceType: 'per-person',
    basePrice: 995, // ZAR 995 (R995 per person sharing)
    pricingTiers: [
        { count: 1, price: 995 },
        { count: 2, price: 800 },
        { count: 3, price: 600 }
    ],
    img: images.threeHourPilanesbergMorningAfternoonSafariDriveOne,
    gallery: [
        images.threeHourPilanesbergMorningAfternoonSafariDriveTwo,
        images.threeHourPilanesbergMorningAfternoonSafariDriveThree,
        images.threeHourPilanesbergMorningAfternoonSafariDriveFour,
        images.threeHourPilanesbergMorningAfternoonSafariDriveFive,
        images.threeHourPilanesbergMorningAfternoonSafariDriveSix,
        images.threeHourPilanesbergMorningAfternoonSafariDriveSeven,
        images.threeHourPilanesbergMorningAfternoonSafariDriveEight,
        images.threeHourPilanesbergMorningAfternoonSafariDriveNine,
        images.threeHourPilanesbergMorningAfternoonSafariDriveTen
    ],
    overview: '3 Hour Afternoon safari drive. Professional guide with vehicle. National Park fees included.',
    duration: 'Approx 3 hours',
    hotelPickupAvailable: false, // Depart/Return from Manyane Resort, self-drive location.
    whatIsIncluded: [
      'National Park fees',
      'Afternoon 3 Hour safari drive'
    ],
    whatIsNotIncluded: [
      'Food and drinks/Gratuities',
      'Accommodation',
      'You will meet your Pilanesberg Safari vehicle at the Manyane Resort'
    ],
    itinerary: [
      { title: 'Day 1: 3-Hour Pilanesberg Morning / Afternoon Safari Drive', description: 'On this self-drive tour, you will make your own way to the Manyane Resort at the Pilanesberg National Park where you will meet your Safari Guide. Once you have boarded the Open 4x4 safari vehicle, you will enjoy a guided 3 hour game drive in the National Park. The open-vehicle safari drive will give you the chance to enjoy the fauna and flora that the National Park has to offer.' }
    ],
    additionalInfo: [
      'Confirmation will be received at time of booking',
      'This tour is self-drive to location',
      'This tour/activity will have a maximum of 10 travelers'
    ]
  },
  { 
    id: 'p32', 
    category: 'Pilanesberg', 
    subCategory: 'Activity',
    region: 'Pilanesberg',
    title: '3 Hour Shared Game Drive in Pilanesberg National Park', 
    description: 'A 3-hour shared open safari drive experience departing from Bakubung Gate or Sun City Resort. This offers a thrilling, cost-effective way to view the Big 5 and other wildlife in the Pilanesberg Game Reserve.', 
    priceType: 'per-person',
    basePrice: 880, // ZAR 880
    pricingTiers: [],
    img: images.threeHourSharedGameDriveInPilanesbergNationalParkOne,
    gallery: [
        images.threeHourSharedGameDriveInPilanesbergNationalParkTwo,
        images.threeHourSharedGameDriveInPilanesbergNationalParkThree,
        images.threeHourSharedGameDriveInPilanesbergNationalParkFour,
        images.threeHourSharedGameDriveInPilanesbergNationalParkFive,
        images.threeHourSharedGameDriveInPilanesbergNationalParkSix,
        images.threeHourSharedGameDriveInPilanesbergNationalParkSeven,
        images.threeHourSharedGameDriveInPilanesbergNationalParkEight,
        images.threeHourSharedGameDriveInPilanesbergNationalParkNine,
        images.threeHourSharedGameDriveInPilanesbergNationalParkTen,
        images.threeHourSharedGameDriveInPilanesbergNationalParkEleven
    ],
    overview: '3 hour Shared Open Vehicle Safari drive. All conservation fees and entrance fees. Professional certified wildlife guides. Bottled water.',
    duration: 'Approx 3 hours',
    hotelPickupAvailable: false, // Pickup is only from specific park gates/resorts.
    whatIsIncluded: [
      '3 hour Shared Open Vehicle Safari drive',
      'All conservation fees and entrance fees',
      'Professional certified wildlife guides'
    ],
    whatIsNotIncluded: [
      'Day visitor entrance fee into Sun City Resort (R20)',
      'Personal purchases of a personal nature',
      'Transfers to the pick-up points'
    ],
    itinerary: [
      { title: 'Day 1: 3 Hour Safari Drive', description: 'Depart on a captivating 3 hour safari drive departing from Sun City or Bakubung Gate. Throughout your safari drive, you can expect to encounter a fascinating array of wildlife. Your expert field guide will provide engaging commentary, offering insights into the natural history of the Pilanesberg region.' }
    ],
    additionalInfo: [
      'Pickup from Bakubung Gate or Sun City Resort',
      'We recommend booking a domestic flight no earlier than 19:30 or an international flight no earlier than 21:00.'
    ]
  },
  { 
    id: 'p33', 
    category: 'Pilanesberg', 
    subCategory: 'Activity',
    region: 'Pilanesberg',
    title: '3 Hour Private Game Drive in Pilanesberg National Park', 
    description: 'A private 3-hour game drive in an open safari vehicle exclusively for your group, departing from Bakubung Gate or Sun City Resort. You choose the time of day, offering a personalized and flexible game viewing experience.', 
    priceType: 'per-person',
    basePrice: 6995, // ZAR 6,995 (Total price, based on the per vehicle fee)
    pricingTiers: [
        { count: 1, price: 6995 },
        { count: 2, price: 6995 },
        { count: 3, price: 6995 } // This price is likely per vehicle for the total group, but the provided price is "starting from R6,995 sharing".
    ],
    img: images.threeHourPrivateGameDriveInPilanesbergNationalParkOne,
    gallery: [
        images.threeHourPrivateGameDriveInPilanesbergNationalParkTwo,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkThree,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkFour,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkFive,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkSix,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkSeven,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkEight,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkNine,
        images.threeHourPrivateGameDriveInPilanesbergNationalParkTen
    ],
    overview: '3 hour Private guided safari tour. Transfers in a closed air-conditioned vehicle. Park entrance fee into Sun City Resort included. You have the option of booking in the morning or afternoon.',
    duration: 'Approx 3 hours',
    hotelPickupAvailable: false, // Pickup is only from specific park gates/resorts.
    whatIsIncluded: [
      '3 hour Private guided safari tour',
      'Park entrance fee into Sun City Resort',
      'Bottled water'
    ],
    whatIsNotIncluded: [
      'Day visitor entrance fee into Sun City Resort',
      'Pilanesberg conservation levy and entrance fee',
      'Gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Private Game Drive in Pilanesberg National Park', description: 'Meet your experienced field guide at Bakubung Gate. An experienced field guide will collect you at either Bakubung Gate or at a location within a 10 km radius of the gate. You have the option of departing from Bakubung Gate, Sun City or Bakubung Bush Lodge in the early-morning, mid-morning or afternoon tour, with the guide and vehicle reserved exclusively for your group.' }
    ],
    additionalInfo: [
      'Pickup from Bakubung Gate or Sun City Resort',
      '1–4 pax = R6 995 per person sharing',
      'Remember that if you intend to fly out of OR Tambo International Airport on the final day of your safari tour, we recommend booking a domestic flight no earlier than 19:30 and an international flight no earlier than 21:00.'
    ]
  },
  { 
    id: 'p34', 
    category: 'Pilanesberg', 
    subCategory: 'Safari & Leisure',
    region: 'Pilanesberg / Sun City',
    title: '3 Day Sun City Cascades 5-Star Safari', 
    description: 'A 3-day luxury safari and leisure package. Enjoy two nights at the 5-star Sun City Cascades Hotel, with a full-day Pilanesberg Safari and access to the Valley of Waves.', 
    priceType: 'per-person',
    basePrice: 11040, // ZAR 11,040
    pricingTiers: [],
    img: images.threeDaySunCityCascades5StarSafariOne,
    gallery: [
        images.threeDaySunCityCascades5StarSafariTwo,
        images.threeDaySunCityCascades5StarSafariThree,
        images.threeDaySunCityCascades5StarSafariFour,
        images.threeDaySunCityCascades5StarSafariFive,
        images.threeDaySunCityCascades5StarSafariSix,
        images.threeDaySunCityCascades5StarSafariSeven,
        images.threeDaySunCityCascades5StarSafariEight
    ],
    overview: '5-Star accommodation at Sun City Cascades Hotel (2 nights). Pilanesberg full-day safari. Valley of Waves entry. Daily breakfast. Transfers throughout the package.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Accommodation at Sun City Cascades Hotel (2 nights)',
      'Pilanesberg morning & sunset safari',
      'Daily breakfast',
      'Valley of Waves entry',
      'Transfers throughout the package'
    ],
    whatIsNotIncluded: [
      'Lunches, dinners & beverages',
      'Gratuities',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sun City Adventure Begin', description: 'Morning departure from Johannesburg/OR Tambo. Drive to Sun City Cascades Hotel. Check in and enjoy the resort. Dinner excluded.' },
      { title: 'Day 2: Pilanesberg Safari', description: 'Full day Pilanesberg safari including morning and sunset game drives. Lunch included. Return to Sun City. Dinner excluded. Includes: Lunch.' },
      { title: 'Day 3: Sunrise Safari and Departure', description: 'Enjoy breakfast. Optional early morning safari (extra cost). Depart from Sun City around 2 PM for transfer back to Johannesburg/OR Tambo. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in the Johannesburg area on request',
      'Transfers depart from Johannesburg at 6:00 AM'
    ]
  },
  { 
    id: 'p35', 
    category: 'Pilanesberg', 
    subCategory: 'Safari & Leisure',
    region: 'Pilanesberg / Sun City',
    title: '3 Day Sun City Palace Safari in Pilanesberg', 
    description: 'The most luxurious 3-day package at Sun City. Stay at the 5-star Sun City Palace Hotel and enjoy a full-day Pilanesberg Safari, with access to the Valley of Waves.', 
    priceType: 'per-person',
    basePrice: 17450, // ZAR 17,450
    pricingTiers: [],
    img: images.threeDaySunCityPalaceSafariInPilanesbergOne,
    gallery: [
        images.threeDaySunCityPalaceSafariInPilanesbergTwo,
        images.threeDaySunCityPalaceSafariInPilanesbergThree,
        images.threeDaySunCityPalaceSafariInPilanesbergFour,
        images.threeDaySunCityPalaceSafariInPilanesbergFive,
        images.threeDaySunCityPalaceSafariInPilanesbergSix,
        images.threeDaySunCityPalaceSafariInPilanesbergSeven,
        images.threeDaySunCityPalaceSafariInPilanesbergEight
    ],
    overview: '5-Star accommodation at Sun City Palace (2 nights). Full-day Pilanesberg safari (2 game drives). Valley of Waves entry. Daily breakfast. Transfers throughout the package.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '2 nights at 5-Star Sun City Palace Hotel',
      'Pilanesberg morning & sunset safari',
      'Daily breakfast',
      'Valley of Waves entry',
      'Transfers throughout the package'
    ],
    whatIsNotIncluded: [
      'Lunches, dinners & beverages',
      'Gratuities',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg & Sun City Arrival', description: 'Morning departure from Johannesburg/OR Tambo. Drive to Sun City Palace Hotel. Check in and enjoy the resort. Dinner excluded.' },
      { title: 'Day 2: Sun City Thrills', description: 'Full day Pilanesberg safari including morning and sunset game drives. Lunch included. Return to Sun City. Dinner excluded. Includes: Lunch.' },
      { title: 'Day 3: Farewell Safari', description: 'Enjoy breakfast. Optional early morning game drive (extra cost). Depart from Sun City around 2 PM for transfer back to Johannesburg/OR Tambo. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in the Johannesburg or Pilanesberg area on request',
      'Transfers depart from Johannesburg at 6:00 AM'
    ]
  },
  { 
    id: 'p36', 
    category: 'Pilanesberg', 
    subCategory: 'Safari & Leisure',
    region: 'Pilanesberg / Sun City',
    title: '3-Day Sun City Hotel Pilanesberg Safari', 
    description: 'A 3-day safari and leisure package. Enjoy two nights at the 4-star Sun City Hotel, with a full-day Pilanesberg Safari and access to the Valley of Waves.', 
    priceType: 'per-person',
    basePrice: 10150, // ZAR 10,150
    pricingTiers: [],
    img: images.threeDaySunCityHotelPilanesbergSafariOne,
    gallery: [
        images.threeDaySunCityHotelPilanesbergSafariTwo,
        images.threeDaySunCityHotelPilanesbergSafariThree,
        images.threeDaySunCityHotelPilanesbergSafariFour,
        images.threeDaySunCityHotelPilanesbergSafariFive,
        images.threeDaySunCityHotelPilanesbergSafariSix,
        images.threeDaySunCityHotelPilanesbergSafariSeven
    ],
    overview: 'Accommodation at Sun City Hotel (2 nights). Full-day Pilanesberg safari (2 game drives). Valley of Waves entry. Daily breakfast. Transfers throughout the package.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Accommodation at Sun City Hotel (2 nights)',
      'Pilanesberg morning & sunset safari',
      'Daily breakfast',
      'Valley of Waves entry',
      'Transfers throughout the package'
    ],
    whatIsNotIncluded: [
      'Lunches, dinners & beverages',
      'Gratuities',
      'Purchases of a personal nature'
    ],
    itinerary: [
      { title: 'Day 1: Sun City Arrival', description: 'Morning departure from Johannesburg/OR Tambo. Drive to Sun City Hotel. Check in and enjoy the resort. Dinner excluded.' },
      { title: 'Day 2: Valley of Waves Enjoyment & Afternoon Pilanesberg Sunset Safari', description: 'Enjoy the Valley of Waves in the morning. Afternoon Pilanesberg safari including a sunset game drive. Return to Sun City. Dinner excluded. Includes: Lunch (provided during safari).' },
      { title: 'Day 3: Sunrise Safari & Return to Johannesburg', description: 'Enjoy breakfast. Optional early morning game drive (extra cost). Depart from Sun City around 2 PM for transfer back to Johannesburg/OR Tambo. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in the Johannesburg area on request',
      'Transfers depart from Johannesburg at 6:00 AM'
    ]
  },
  { 
    id: 'p37', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3 Day Sundown Country Estate Hotel Tour', 
    description: 'A 3-day tour combining luxury accommodation at Sundown Country Estate with game viewing in Pilanesberg National Park. The package includes transfers, four game drives, and full board.', 
    priceType: 'per-person',
    basePrice: 11995, // ZAR 11,995
    pricingTiers: [],
    img: images.threeDaySundownCountryEstateHotelTourOne,
    gallery: [
        images.threeDaySundownCountryEstateHotelTourTwo,
        images.threeDaySundownCountryEstateHotelTourThree,
        images.threeDaySundownCountryEstateHotelTourFour,
        images.threeDaySundownCountryEstateHotelTourFive,
        images.threeDaySundownCountryEstateHotelTourSix,
        images.threeDaySundownCountryEstateHotelTourSeven,
        images.threeDaySundownCountryEstateHotelTourEight,
        images.threeDaySundownCountryEstateHotelTourNine,
        images.threeDaySundownCountryEstateHotelTourTen,
        images.threeDaySundownCountryEstateHotelTourEleven,
        images.threeDaySundownCountryEstateHotelTourTwelve
    ],
    overview: '4 x 3-hour open safari vehicle game drives. Transfers to and from the lodge in a closed air-conditioned vehicle. 2 nights at Sundown Country Estate Hotel. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 x 3-hour open safari vehicle game drives',
      'Luxury air-conditioned transfers',
      '2 nights at Sundown Country Estate Hotel',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Pilanesberg conservation levy'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Meals not specified in the itinerary',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Heading for the Wilderness', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Sundown Country Estate. Check in and enjoy lunch. Afternoon game drive. Dinner at the hotel. Includes: Lunch, dinner.' },
      { title: 'Day 2: Explore the Park', description: 'Morning game drive. Lunch at the hotel. Afternoon game drive. Dinner at the hotel. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 3: Sunrise Magic and Farewell', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p38', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '3-Day Shepherd\'s Tree Game Lodge Safari', 
    description: 'Experience an unforgettable 3-day luxury safari at Shepherd\'s Tree Game Lodge, located within the Pilanesberg Game Reserve. The lodge features an exceptional architectural design, modern comforts, and includes four game drives.', 
    priceType: 'per-person',
    basePrice: 15085, // ZAR 15,085 (Price matches p29, assuming the same package with a different file name/minor variation)
    pricingTiers: [],
    img: images.threeDayShepherdSTreeGameLodgeSafariOne,
    gallery: [
        images.threeDayShepherdSTreeGameLodgeSafariTwo,
        images.threeDayShepherdSTreeGameLodgeSafariThree,
        images.threeDayShepherdSTreeGameLodgeSafariFour,
        images.threeDayShepherdSTreeGameLodgeSafariFive,
        images.threeDayShepherdSTreeGameLodgeSafariSix,
        images.threeDayShepherdSTreeGameLodgeSafariSeven
    ],
    overview: '4 x luxury open safari drives. Luxury air-conditioned transfers between Johannesburg and Pilanesberg. 2 nights at Shepherd\'s Tree Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Complimentary access to the world-class spa.',
    duration: '3 Days / 2 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 x luxury open safari drives',
      'Luxury air-conditioned transfers',
      '2 nights at Shepherd\'s Tree Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Complimentary access to the world-class spa'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Closed vehicle game drive',
      'Spa treatments',
      'Pilanesberg conservation fee'
    ],
    itinerary: [
      { title: 'Day 1: Morning Game Drive, Shepherds Tree Arrival & Sunset Safari', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Shepherd\'s Tree Game Lodge. Lunch included. Afternoon open-vehicle game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Full Safari Immersion', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, lunch, high tea, dinner.' },
      { title: 'Day 3: Final Sunrise Safari & Return to Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p39', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Luxury Black Rhino Game Lodge Safari', 
    description: 'An extended luxury safari at Black Rhino Game Lodge in a private concession. This 4-day tour includes eight game drives, luxury accommodation, and all meals.', 
    priceType: 'per-person',
    basePrice: 20255, // ZAR 20,255
    pricingTiers: [],
    img: images.fourDayLuxuryBlackRhinoGameLodgeSafariOne,
    gallery: [
        images.fourDayLuxuryBlackRhinoGameLodgeSafariTwo,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariThree,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariFour,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariFive,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariSix,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariSeven,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariEight,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariNine,
        images.fourDayLuxuryBlackRhinoGameLodgeSafariTen
    ],
    overview: '8 x Black Rhino Game Reserve open safari drives. Transfers in a luxury air-conditioned vehicle. 3 nights at Black Rhino Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fees included.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '8 x Black Rhino Game Reserve open safari drives',
      'Transfers in a luxury air-conditioned vehicle',
      '3 nights at Black Rhino Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Pilanesberg conservation levy'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Drinks (cash bar)',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Johannesburg - Greater Pilanesberg (Approx 200 Kilometers)', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Black Rhino Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Afternoon Tea and dinner.' },
      { title: 'Day 2 & 3: Greater Pilanesberg - Greater Pilanesberg', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, Afternoon Tea, Lunch and dinner.' },
      { title: 'Day 4: Greater Pilanesberg - Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p40', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Luxury Bakubung Bush Lodge All Inclusive Safari Package', 
    description: 'An extended, all-inclusive luxury safari at Bakubung Bush Lodge, located in the Pilanesberg National Park. This package includes seven open-vehicle game drives and full board over four days.', 
    priceType: 'per-person',
    basePrice: 20195, // ZAR 20,195
    pricingTiers: [],
    img: images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageOne,
    gallery: [
        images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageTwo,
        images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageThree,
        images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageFour,
        images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageFive,
        images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageSix,
        images.fourDayLuxuryBakubungBushLodgeAllInclusiveSafariPackageSeven
    ],
    overview: '7 x pulse-racing open safari drives. Transfers in a luxury air-conditioned vehicle. 3 nights at 4-star Bakubung Bush Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fee included.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '7 x pulse-racing open safari drives',
      'Luxury air-conditioned transfers',
      '3 nights at Bakubung Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Pilanesberg conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal expenses',
      'Gratuities',
      'Scheduled domestic and international airfare',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Wild Beginnings', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Bakubung. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Safari Immersion', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 4: Wildlife & Calm', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p41', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Luxury Shepherd\'s Tree Game Lodge Safari', 
    description: 'An extended luxury safari at Shepherd\'s Tree Game Lodge. This 4-day tour includes seven exhilarating open safari drives, 3 nights of luxury accommodation, and is located in the Pilanesberg Game Reserve.', 
    priceType: 'per-person',
    basePrice: 21495, // ZAR 21,495
    pricingTiers: [],
    img: images.fourDayLuxuryShepherdSTreeGameLodgeSafariOne,
    gallery: [
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariTwo,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariThree,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariFour,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariFive,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariSix,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariSeven,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariEight,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariNine,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariTen,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariEleven,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariTwelve,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariThirteen,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariFourteen,
        images.fourDayLuxuryShepherdSTreeGameLodgeSafariFifteen
    ],
    overview: '7 x exhilarating open safari drives. Luxury air-conditioned transfers. 3 nights at Shepherd\'s Tree Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Complimentary access to the world-class spa.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '7 x open safari drives',
      'Luxury air-conditioned transfers',
      '3 nights at Shepherd\'s Tree Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Complimentary access to spa'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Spa treatments',
      'Closed vehicle game drive'
    ],
    itinerary: [
      { title: 'Day 1: Morning Game Drive, Shepherds Tree Arrival & Sunset Safari', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Shepherd\'s Tree Game Lodge. Lunch included. Afternoon open-vehicle game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Full Safari Immersion in Pilanesberg National Park', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, lunch, high tea, dinner.' },
      { title: 'Day 4: Final Sunrise Safari & Return to Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p42', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Package',
    region: 'Pilanesberg',
    title: 'Bakubung Safari Transfer Package', 
    description: 'A transfer package providing convenient transport to and from Bakubung Bush Lodge in Pilanesberg National Park. The package includes a 2-hour open vehicle game drive on arrival or departure.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 (Starting from R2,000)
    pricingTiers: [],
    img: images.bakubungSafariTransferPackageOne,
    gallery: [
        images.bakubungSafariTransferPackageTwo,
        images.bakubungSafariTransferPackageThree,
        images.bakubungSafariTransferPackageFour,
        images.bakubungSafariTransferPackageFive,
        images.bakubungSafariTransferPackageSix,
        images.bakubungSafariTransferPackageSeven,
        images.bakubungSafariTransferPackageEight
    ],
    overview: 'Convenient transport to Bakubung Bush Lodge. 2-hour open vehicle game drive included. Experienced guide for the game drive. Suitable for guests already booked at Bakubung Bush Lodge.',
    duration: '1 Day (Transfer + Drive)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Convenient transport to Bakubung Bush Lodge',
      '2-hour open vehicle game drive',
      'Professional guide',
      'Big Five Wildlife Encounter'
    ],
    whatIsNotIncluded: [
      'Accommodation at Bakubung Bush Lodge',
      'Personal expenses or optional tours',
      'Meals not included (dinner/lunch recommended but not included)'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Safari', description: 'Pickup from Johannesburg/Pretoria. Drive to Bakubung Bush Lodge. Enjoy a 2-hour open vehicle game drive in the central area of the Pilanesberg National Park. Drop-off at Bakubung Bush Lodge between 12:30 PM and 1:30 PM.' }
    ],
    additionalInfo: [
      'Return transfer option is available (price on request)',
      'This package is designed for guests who have their own accommodation booked'
    ]
  },
  { 
    id: 'p43', 
    category: 'Pilanesberg', 
    subCategory: 'Combo Safari',
    region: 'Kruger / Pilanesberg',
    title: '5 Day Luxury Kruger and Pilanesberg Combo', 
    description: 'A comprehensive 5-day luxury combo safari, spending 2 nights in Kapama Private Game Reserve near Kruger National Park and 2 nights in Pilanesberg Game Reserve, providing Big 5 viewing in two distinct malaria-free regions.', 
    priceType: 'per-person',
    basePrice: 40455, // ZAR 40,455
    pricingTiers: [],
    img: images.fiveDayLuxuryKrugerAndPilanesbergComboOne,
    gallery: [
        images.fiveDayLuxuryKrugerAndPilanesbergComboThree,
        images.fiveDayLuxuryKrugerAndPilanesbergComboFour,
        images.fiveDayLuxuryKrugerAndPilanesbergComboFive,
        images.fiveDayLuxuryKrugerAndPilanesbergComboSix,
        images.fiveDayLuxuryKrugerAndPilanesbergComboSeven,
        images.fiveDayLuxuryKrugerAndPilanesbergComboEight,
        images.fiveDayLuxuryKrugerAndPilanesbergComboNine,
        images.fiveDayLuxuryKrugerAndPilanesbergComboTen,
        images.fiveDayLuxuryKrugerAndPilanesbergComboEleven
    ],
    overview: '7 x game drives (Kruger and Pilanesberg). Luxury accommodation (Kapama Game Reserve & Pilanesberg Game Reserve). All meals as per itinerary. Conservation fees included. Fly-in from Hoedspruit Eastgate Airport (HDS) included.',
    duration: '5 Days / 4 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '4 nights luxury accommodation',
      'Game drives as per itinerary',
      'All meals as per itinerary',
      'Conservation fees as per itinerary',
      'Return transport from O.R. Tambo International Airport'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'All personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Depart from Johannesburg - Kapama Game Reserve', description: 'Morning pickup from Johannesburg/OR Tambo. Fly from JNB to HDS. Transfer to Kapama. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2: Kapama Private Game Reserve', description: 'Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, lunch, dinner.' },
      { title: 'Day 3: Kapama Safari and Johannesburg', description: 'Morning game drive. Breakfast. Transfer to HDS for flight back to Johannesburg/OR Tambo. Transfer to Pilanesberg region. Check into lodge. Includes: Breakfast, lunch, dinner.' },
      { title: 'Day 4: Pilanesberg National Park', description: 'Morning game drive. Lunch at the lodge. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, lunch, dinner.' },
      { title: 'Day 5: Pilanesberg Safari and Departure', description: 'Morning game drive. Breakfast. Transfer back to Johannesburg/OR Tambo. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'This combo includes 2 nights in Kruger/Kapama and 2 nights in Pilanesberg'
    ]
  },
  { 
    id: 'p44', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Luxury Ivory Tree Game Lodge Safari', 
    description: 'An extended premier safari staying at the renowned Ivory Tree Game Lodge. This 4-day tour includes seven open-vehicle game drives, 3 nights of luxury accommodation, and is located in the Pilanesberg Game Reserve.', 
    priceType: 'per-person',
    basePrice: 18695, // ZAR 18,695
    pricingTiers: [],
    img: images.fourDayLuxuryIvoryTreeGameLodgeSafariOne,
    gallery: [
        images.fourDayLuxuryIvoryTreeGameLodgeSafariTwo,
        images.fourDayLuxuryIvoryTreeGameLodgeSafariThree,
        images.fourDayLuxuryIvoryTreeGameLodgeSafariFour,
        images.fourDayLuxuryIvoryTreeGameLodgeSafariFive,
        images.fourDayLuxuryIvoryTreeGameLodgeSafariSix,
        images.fourDayLuxuryIvoryTreeGameLodgeSafariSeven
    ],
    overview: '7 x exhilarating open safari drives. Luxury air-conditioned transfers. 3 nights at Ivory Tree Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Complimentary use of the world-class spa.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '7 x open safari drives',
      'Luxury air-conditioned transfers',
      '3 nights at Ivory Tree Game Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Complimentary use of spa'
    ],
    whatIsNotIncluded: [
      'Personal purchases and gratuities',
      'Spa treatments',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Adventure Begins', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Ivory Tree Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Safari Immersion', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, lunch, high tea, dinner.' },
      { title: 'Day 4: Wildlife & Returning', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p45', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Luxury Tshukudu Bush Lodge Safari', 
    description: 'An extended exclusive luxury safari staying at the prestigious Tshukudu Bush Lodge. This 4-day tour includes seven game drives, 3 nights of luxury accommodation, and is located in the Pilanesberg Game Reserve.', 
    priceType: 'per-person',
    basePrice: 24295, // ZAR 24,295
    pricingTiers: [],
    img: images.fourDayLuxuryTshukuduBushLodgeSafariOne,
    gallery: [
        images.fourDayLuxuryTshukuduBushLodgeSafariTwo,
        images.fourDayLuxuryTshukuduBushLodgeSafariThree,
        images.fourDayLuxuryTshukuduBushLodgeSafariFour,
        images.fourDayLuxuryTshukuduBushLodgeSafariFive,
        images.fourDayLuxuryTshukuduBushLodgeSafariSix,
        images.fourDayLuxuryTshukuduBushLodgeSafariSeven,
        images.fourDayLuxuryTshukuduBushLodgeSafariEight,
        images.fourDayLuxuryTshukuduBushLodgeSafariNine,
        images.fourDayLuxuryTshukuduBushLodgeSafariTen
    ],
    overview: '7 x open safari vehicle game drives. Transfers in a luxury air-conditioned vehicle. 3 nights at Tshukudu Bush Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). All beverages (local fan-favourite) included.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '7 x open safari vehicle game drives',
      'Transfers in a luxury air-conditioned vehicle',
      '3 nights at Tshukudu Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'All beverages (local fan-favourite)',
      'Pilanesberg conservation levy'
    ],
    whatIsNotIncluded: [
      'Gratuities',
      'Purchases of a personal nature',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Depart from O.R. Tambo Airport (JNB) to Tshukudu Bush Lodge', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tshukudu Bush Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Pilanesberg Game Reserve', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals and beverages at the lodge. Includes: Breakfast, lunch, high tea, dinner.' },
      { title: 'Day 4: Pilanesberg Game Reserve - Johannesburg', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p46', 
    category: 'Pilanesberg', 
    subCategory: 'Hotel & Safari',
    region: 'Pilanesberg',
    title: '4 Day Sundown Country Estate Hotel Tour', 
    description: 'An extended 4-day tour combining accommodation at Sundown Country Estate with comprehensive game viewing in Pilanesberg National Park. The package includes six game drives and full board.', 
    priceType: 'per-person',
    basePrice: 15895, // ZAR 15,895
    pricingTiers: [],
    img: images.fourDaySundownCountryEstateHotelTourOne,
    gallery: [
        images.fourDaySundownCountryEstateHotelTourTwo,
        images.fourDaySundownCountryEstateHotelTourThree,
        images.fourDaySundownCountryEstateHotelTourFour,
        images.fourDaySundownCountryEstateHotelTourFive,
        images.fourDaySundownCountryEstateHotelTourSix,
        images.fourDaySundownCountryEstateHotelTourSeven,
        images.fourDaySundownCountryEstateHotelTourEight,
        images.fourDaySundownCountryEstateHotelTourNine,
        images.fourDaySundownCountryEstateHotelTourTen
    ],
    overview: '6 x 3-hour open safari vehicle game drives. Transfers to and from the lodge in a closed air-conditioned vehicle. 3 nights at Sundown Country Estate Hotel. All meals as per itinerary (Breakfast, Lunch, Dinner). Pilanesberg conservation levy.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '6 x 3-hour open safari vehicle game drives',
      'Luxury air-conditioned transfers',
      '3 nights at Sundown Country Estate Hotel',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Pilanesberg conservation levy'
    ],
    whatIsNotIncluded: [
      'Scheduled domestic and international airfare',
      'Personal purchases and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Activities not specified in the itinerary'
    ],
    itinerary: [
      { title: 'Day 1: Heading for the Wilderness', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Sundown Country Estate. Check in and enjoy lunch. Afternoon game drive. Dinner at the hotel. Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Pilanesberg National Park', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 4: Sunrise Magic and Farewell', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p47', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Luxury Kwa Maritane Bush Lodge All Inclusive Safari Package', 
    description: 'An extended, all-inclusive luxury safari package at Kwa Maritane Bush Lodge. This 4-day tour includes seven game drives, 3 nights of luxury accommodation, and is located in the Pilanesberg National Park.', 
    priceType: 'per-person',
    basePrice: 16195, // ZAR 16,195
    pricingTiers: [],
    img: images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageOne,
    gallery: [
        images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageTwo,
        images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageThree,
        images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageFour,
        images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageFive,
        images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageSix,
        images.fourDayLuxuryKwaMaritaneBushLodgeAllInclusiveSafariPackageSeven
    ],
    overview: '7 x adrenaline-pumping open safari drives. Transfers in a closed-vehicle. 3 nights at 4-star Kwa Maritane Bush Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fee included.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '7 x open safari drives',
      'Luxury air-conditioned transfers',
      '3 nights at Kwa Maritane Bush Lodge',
      'All meals as per itinerary (Breakfast, Lunch, Dinner)',
      'Pilanesberg conservation fee'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Gratuities',
      'Scheduled domestic and international airfare',
      'Drinks and refreshments (Cash Bar available)'
    ],
    itinerary: [
      { title: 'Day 1: Into the Wild', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Kwa Maritane. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Full Safari Adventure', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 4: Pilanesberg National Park', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p48', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Tlou and Ivory Tree Safari', 
    description: 'A 4-day safari split between Tlou Tented Safari Camp and Ivory Tree Game Lodge. The tour offers comprehensive game viewing in two different Pilanesberg settings, including seven game drives.', 
    priceType: 'per-person',
    basePrice: 20000, // ZAR 20,000 (Starting from R20,000 sharing)
    pricingTiers: [],
    img: images.fourDayTlouAndIvoryTreeSafariOne,
    gallery: [
        images.fourDayTlouAndIvoryTreeSafariTwo,
        images.fourDayTlouAndIvoryTreeSafariThree,
        images.fourDayTlouAndIvoryTreeSafariFour,
        images.fourDayTlouAndIvoryTreeSafariFive,
        images.fourDayTlouAndIvoryTreeSafariSix,
        images.fourDayTlouAndIvoryTreeSafariSeven,
        images.fourDayTlouAndIvoryTreeSafariEight,
        images.fourDayTlouAndIvoryTreeSafariNine,
        images.fourDayTlouAndIvoryTreeSafariTen
    ],
    overview: '7 x game drives (4 x from Tlou, 3 x from Ivory Tree). Transfers in a luxury air-conditioned vehicle. 2 nights at Tlou Tented Safari Camp, 1 night at Ivory Tree Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner).',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Return transport from Johannesburg in a luxury air-conditioned vehicle',
      '2 nights at Tlou Tented Safari Camp and 1 night at Ivory Tree Game Lodge',
      '7 exhilarating game drives in open safari vehicles',
      'All meals as per itinerary',
      'Pilanesberg National Park entrance fee'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Optional activities not specified in the itinerary',
      'Drinks (cash bar at lodges)'
    ],
    itinerary: [
      { title: 'Day 1 & 2: Tlou Tented Safari Camp', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tlou Tented Safari Camp. Check in. Four game drives and all meals during the two days. Includes: Lunch, dinner (Day 1) and Breakfast, Lunch, dinner (Day 2).' },
      { title: 'Day 3: Tlou Camp to Ivory Tree Lodge', description: 'Morning game drive. Enjoy a hearty breakfast. Transfer to Ivory Tree Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 4: Sunrise Safari and Departure', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.',
      'Drop-off at any hotel or address in Johannesburg from 17:h30.'
    ]
  },
  { 
    id: 'p49', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '4 Day Pilanesberg Camping Safari', 
    description: 'An extended 4-day camping safari that provides an authentic bush experience in Pilanesberg National Park. Stay in a luxury tented camp and enjoy seven game drives to spot the Big 5 in a malaria-free setting.', 
    priceType: 'per-person',
    basePrice: 9995, // ZAR 9,995
    pricingTiers: [],
    img: images.fourDayPilanesbergCampingSafariOne,
    gallery: [
        images.fourDayPilanesbergCampingSafariTwo,
        images.fourDayPilanesbergCampingSafariThree,
        images.fourDayPilanesbergCampingSafariFour,
        images.fourDayPilanesbergCampingSafariFive,
        images.fourDayPilanesbergCampingSafariSix,
        images.fourDayPilanesbergCampingSafariSeven,
        images.fourDayPilanesbergCampingSafariEight,
        images.fourDayPilanesbergCampingSafariNine,
        images.fourDayPilanesbergCampingSafariTen
    ],
    overview: '7 x heart-pounding open safari drives. Luxury air-conditioned transfers. 3 nights at a private tented safari camp. All meals as per itinerary (Breakfast, Lunch, Dinner). Park entrance and conservation fee included.',
    duration: '4 Days / 3 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      '7 x heart-pounding open safari drives',
      'Luxury air-conditioned transfers',
      '3 nights at Tlou Tented Safari Camp',
      'All meals as per itinerary (3 x Breakfast, 3 x Lunch, 3 x Dinner)',
      'Pilanesberg conservation fee'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Drinks and refreshments (Cash Bar available)',
      'Scheduled domestic and international airfare'
    ],
    itinerary: [
      { title: 'Day 1: Your Safari Begins', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tlou Tented Safari Camp. Check in and enjoy lunch. Afternoon game drive. Evening Boma Dinner, followed by a night drive (approx 3 hours). Includes: Lunch, dinner.' },
      { title: 'Day 2 & 3: Sunrise and Sunset Safari', description: 'Two full days of game viewing. Morning and afternoon game drives. All meals at the camp. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 4: Sunrise Safari and Departure', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'Any accommodation in Johannesburg or Pretoria on request',
      'Pick-up from Johannesburg is between 5:30 AM and 6:30 AM'
    ]
  },
  { 
    id: 'p50', 
    category: 'Pilanesberg', 
    subCategory: 'Safari',
    region: 'Pilanesberg',
    title: '5 Day Tlou and Ivory Tree Safari', 
    description: 'An extended 5-day safari split between Tlou Tented Safari Camp and Ivory Tree Game Lodge. The tour offers comprehensive game viewing in two different Pilanesberg settings, including nine game drives.', 
    priceType: 'per-person',
    basePrice: 23000, // ZAR 23,000 (Starting from R23,000 sharing)
    pricingTiers: [],
    img: images.fiveDayTlouAndIvoryTreeSafariOne,
    gallery: [
        images.fiveDayTlouAndIvoryTreeSafariTwo,
        images.fiveDayTlouAndIvoryTreeSafariThree,
        images.fiveDayTlouAndIvoryTreeSafariFour,
        images.fiveDayTlouAndIvoryTreeSafariFive,
        images.fiveDayTlouAndIvoryTreeSafariSix,
        images.fiveDayTlouAndIvoryTreeSafariSeven,
        images.fiveDayTlouAndIvoryTreeSafariEight,
        images.fiveDayTlouAndIvoryTreeSafariNine,
        images.fiveDayTlouAndIvoryTreeSafariTen,
        images.fiveDayTlouAndIvoryTreeSafariEleven,
        images.fiveDayTlouAndIvoryTreeSafariTwelve,
        images.fiveDayTlouAndIvoryTreeSafariThirteen,
        images.fiveDayTlouAndIvoryTreeSafariFourteen
    ],
    overview: '9 x thrilling game drives (6 x from Tlou, 3 x from Ivory Tree). Transfers in a luxury air-conditioned vehicle. 3 nights at Tlou Tented Safari Camp, 1 night at Ivory Tree Game Lodge. All meals as per itinerary (Breakfast, Lunch, Dinner).',
    duration: '5 Days / 4 Nights',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Return transport from Johannesburg in a luxury air-conditioned vehicle',
      '4 nights accommodation (3 x Tlou, 1 x Ivory Tree)',
      '9 exhilarating game drives in open safari vehicles',
      'All meals as per itinerary',
      'Pilanesberg National Park entrance fee'
    ],
    whatIsNotIncluded: [
      'Personal expenses and gratuities',
      'Optional balloon flights from Johannesburg',
      'Drinks (cash bar at lodges)'
    ],
    itinerary: [
      { title: 'Day 1 - 3: Tlou Tented Safari Camp', description: 'Morning pickup from Johannesburg/Pretoria/OR Tambo. Drive to Tlou Tented Safari Camp. Check in. Six game drives and all meals during the three days. Includes: Lunch, dinner (Day 1) and Breakfast, Lunch, dinner (Day 2 & 3).' },
      { title: 'Day 4: Tlou Camp to Ivory Tree Lodge', description: 'Morning game drive. Enjoy a hearty breakfast. Transfer to Ivory Tree Game Lodge. Check in and enjoy lunch. Afternoon game drive. Dinner at the lodge. Includes: Breakfast, Lunch, dinner.' },
      { title: 'Day 5: Sunrise Safari and Departure', description: 'Morning game drive. Enjoy a hearty breakfast. Depart for Johannesburg/Pretoria, arriving around 5:30 PM. Includes: Breakfast.' }
    ],
    additionalInfo: [
      'This safari requires minimum two persons travelling',
      'Pick-up from any hotel or address in Johannesburg between 05:30am - 07:00am.'
    ]
  },
  { 
    id: 'p51', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Service',
    region: 'Pilanesberg',
    title: 'Daily Pilanesberg Shuttle and Transfer Services', 
    description: 'Daily shuttle service offering transfer to and from lodges in the Greater Pilanesberg area (including Sun City) from the Greater Pretoria/Johannesburg area. Available for individuals, couples, small and large groups.', 
    priceType: 'per-person',
    basePrice: 1500, // ZAR 1,500
    pricingTiers: [],
    img: images.dailyPilanesbergShuttleAndTransferServicesOne,
    gallery: [
        images.dailyPilanesbergShuttleAndTransferServicesTwo,
        images.dailyPilanesbergShuttleAndTransferServicesThree,
        images.dailyPilanesbergShuttleAndTransferServicesFour,
        images.dailyPilanesbergShuttleAndTransferServicesFive,
        images.dailyPilanesbergShuttleAndTransferServicesSix,
        images.dailyPilanesbergShuttleAndTransferServicesSeven,
        images.dailyPilanesbergShuttleAndTransferServicesEight,
        images.dailyPilanesbergShuttleAndTransferServicesNine,
        images.dailyPilanesbergShuttleAndTransferServicesTen
    ],
    overview: 'Return door-to-door transfer service. Either the shuttle service or a private vehicle used. Pickup from your hotel/accommodation. Drop-off at selected lodges in the Pilanesberg area (e.g., Black Rhino, Kwa Maritane).',
    duration: '1 Day (Transfer)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Either the shuttle service or a private vehicle',
      'Pickup from your hotel',
      'Drop-off at your destination'
    ],
    whatIsNotIncluded: [
      'Park conservation or entrance fees',
      'Meals or drinks',
      'Gratuities',
      'Accommodation at a personal nature reserve'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg National Park', description: 'Your shuttle will pick you up in Johannesburg or Pretoria between 08:30 and 09:00, arriving at the Pilanesberg National Park entrance or Black Rhino Game Reserve between 12:30 and 1:30 PM. Drop-off at the lodge.' }
    ],
    additionalInfo: [
      'Return service departs from Black Rhino Game Reserve at 3:00 PM and arrives in Johannesburg/Pretoria around 7:00 PM.',
      'Private transfer rates are also available.'
    ]
  },
  { 
    id: 'p52', 
    category: 'Pilanesberg', 
    subCategory: 'Day Tour',
    region: 'Pilanesberg',
    title: 'Pilanesberg Day Tour Lunch excluded', 
    description: 'A full-day Pilanesberg safari departing from Johannesburg or Pretoria. This tour includes two guided game drives in a closed vehicle, park entrance fees, but excludes lunch.', 
    priceType: 'per-person',
    basePrice: 2200, // ZAR 2,200
    pricingTiers: [],
    img: images.pilanesbergDayTourLunchExcludedOne,
    gallery: [
        images.pilanesbergDayTourLunchExcludedTwo,
        images.pilanesbergDayTourLunchExcludedThree,
        images.pilanesbergDayTourLunchExcludedFour,
        images.pilanesbergDayTourLunchExcludedFive,
        images.pilanesbergDayTourLunchExcludedSix,
        images.pilanesbergDayTourLunchExcludedSeven,
        images.pilanesbergDayTourLunchExcludedEight,
        images.pilanesbergDayTourLunchExcludedNine
    ],
    overview: 'Entrance into the Pilanesberg National Park. 2 x 3 hour guided game drives in an air-conditioned closed safari vehicle. Pickup & drop-off in Johannesburg or Pretoria. Small group transfer.',
    duration: '1 Day (Approx 12 hours)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Entrance into the Pilanesberg National Park',
      '2 x 3 hours Guided afternoon closed vehicle safari drive',
      'Round-trip transfer in a closed air-conditioned vehicle'
    ],
    whatIsNotIncluded: [
      'Lunch',
      'Personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Day Tour', description: 'Morning pickup from Johannesburg/Pretoria between 05:30 and 06:30. Drive to Pilanesberg National Park. Morning game drive. Enjoy a rest stop. Afternoon game drive. Depart for Johannesburg/Pretoria before sunset, arriving between 18:30 – 19:30.' }
    ],
    additionalInfo: [
      'Collection / Drop off at any hotel or address in Johannesburg between 05:30am - 07:00am',
      'Drop-off at any hotel or address in Johannesburg from 17:h30'
    ]
  },
  { 
    id: 'p53', 
    category: 'Pilanesberg', 
    subCategory: 'Day Tour',
    region: 'Pilanesberg',
    title: 'Full day Guided Open Vehicle Safari Drive', 
    description: 'A full-day safari departing from Manyane Resort or Bakubung Gate, offering a 6-hour open vehicle game drive inside Pilanesberg National Park. This is a self-drive to location option.', 
    priceType: 'per-person',
    basePrice: 1792, // ZAR 1,792
    pricingTiers: [],
    img: images.fullDayGuidedOpenVehicleSafariDriveOne,
    gallery: [
        images.fullDayGuidedOpenVehicleSafariDriveTwo,
        images.fullDayGuidedOpenVehicleSafariDriveThree,
        images.fullDayGuidedOpenVehicleSafariDriveFour,
        images.fullDayGuidedOpenVehicleSafariDriveFive,
        images.fullDayGuidedOpenVehicleSafariDriveSix,
        images.fullDayGuidedOpenVehicleSafariDriveSeven,
        images.fullDayGuidedOpenVehicleSafariDriveEight,
        images.fullDayGuidedOpenVehicleSafariDriveNine,
        images.fullDayGuidedOpenVehicleSafariDriveTen
    ],
    overview: '6-hour Guided Open 4x4 safari drive. Park entrance fee included. Lunch in the Pilanesberg. Experienced guide.',
    duration: '1 Day (Approx 6 hours driving)',
    hotelPickupAvailable: false, // Depart/Return from Manyane Resort, self-drive location.
    whatIsIncluded: [
      'Park entrance fee',
      'Lunch in the Pilanesberg',
      '4 to 6-hour Guided Open 4x4 safari drive'
    ],
    whatIsNotIncluded: [
      'Transport from your hotel',
      'Personal expenses'
    ],
    itinerary: [
      { title: 'Day 1: Full Day Safari Drive', description: 'Meet the guide at Manyane Resort. Morning game drive (3 to 3.5 hours) with a break for brunch/lunch. Afternoon game drive (3 to 3.5 hours). Return to Manyane Resort. The tour is approx 6 to 7 hours long.' }
    ],
    additionalInfo: [
      'The tour is a self-drive to location option',
      'Collection / Drop off at Boselo Camp at the Manyane entrance gate into the National Park by 15:30.'
    ]
  },
  { 
    id: 'p54', 
    category: 'Pilanesberg', 
    subCategory: 'Activity',
    region: 'Pilanesberg',
    title: 'Pilanesberg Night Safari Tour from Sun City', 
    description: 'A 3-hour night safari drive in an open vehicle inside Pilanesberg National Park, departing from Bakubung Gate or Sun City. Ideal for spotting nocturnal animals.', 
    priceType: 'per-person',
    basePrice: 875, // ZAR 875
    pricingTiers: [],
    img: images.pilanesbergNightSafariTourFromSunCityOne,
    gallery: [
        images.pilanesbergNightSafariTourFromSunCityTwo,
        images.pilanesbergNightSafariTourFromSunCityThree,
        images.pilanesbergNightSafariTourFromSunCityFour,
        images.pilanesbergNightSafariTourFromSunCityFive,
        images.pilanesbergNightSafariTourFromSunCitySix,
        images.pilanesbergNightSafariTourFromSunCitySeven
    ],
    overview: 'Convenient pickup from Sun City or nearby lodges. Spot elusive nocturnal wildlife. Includes an experienced, professional guide.',
    duration: 'Approx 3 hours',
    hotelPickupAvailable: true, // Pickup is offered from Sun City/nearby lodges
    whatIsIncluded: [
      'Pickup from Sun City or nearby lodges',
      '3-hour night safari drive',
      'Spot elusive nocturnal wildlife'
    ],
    whatIsNotIncluded: [
      'Personal Purchases',
      'Park entrance fees (must be paid separately to start your safari)'
    ],
    itinerary: [
      { title: 'Day 1: Night Safari', description: 'Your expert guide will greet you at the Bakubung Gate or Sun City. Depart on an open safari vehicle for a thrilling 3-hour night game drive. Explore the park after dark, when the animals are most active.' }
    ],
    additionalInfo: [
      'The activity starts right after sunset and sets the mood for an exciting evening'
    ]
  },
  { 
    id: 'p55', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Package',
    region: 'Pilanesberg',
    title: 'Exclusive Ivory Tree Transfer Package', 
    description: 'A private transfer package to Ivory Tree Game Lodge. This all-inclusive package includes a convenient door-to-door transfer from Johannesburg/Pretoria and a 3-hour open vehicle game drive.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 (Starting from R2,000 sharing)
    pricingTiers: [],
    img: images.exclusiveIvoryTreeTransferPackageOne,
    gallery: [
        images.exclusiveIvoryTreeTransferPackageTwo,
        images.exclusiveIvoryTreeTransferPackageThree,
        images.exclusiveIvoryTreeTransferPackageFour,
        images.exclusiveIvoryTreeTransferPackageFive,
        images.exclusiveIvoryTreeTransferPackageSix,
        images.exclusiveIvoryTreeTransferPackageSeven
    ],
    overview: 'One-way shuttle to Ivory Tree Game Lodge. 3-hour open vehicle game drive. All conservation and entrance fees. Expert guide. Door-to-door shuttle.',
    duration: '1 Day (Transfer + Drive)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'One-way shuttle to Ivory Tree Game Lodge',
      '3-hour open vehicle game drive',
      'Park entrance and conservation fee',
      'Direct drop-off at Ivory Tree Lodge'
    ],
    whatIsNotIncluded: [
      'Accommodation at Ivory Tree Lodge (booked separately)',
      'Meals or drinks during the transfer',
      'Transfer or game drive gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg National Park', description: 'Pickup from Johannesburg/Pretoria between 05:30 and 06:00. Drive to Ivory Tree Game Lodge, arriving around 9:00 AM. After a short rest, enjoy a 3-hour open vehicle game drive. Drop-off at the lodge around 12:30 PM.' }
    ],
    additionalInfo: [
      'This package is ideal for guests who have their accommodation booked separately',
      'Return shuttle option is available (R1,250 per person).'
    ]
  },
  { 
    id: 'p56', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Package',
    region: 'Pilanesberg',
    title: 'Kwa Maritane Safari Transfer Package', 
    description: 'A private transfer package to Kwa Maritane Bush Lodge. This all-inclusive package includes a convenient door-to-door transfer from Johannesburg/Pretoria and a 3-hour open vehicle game drive.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 (Starting from R2,000 sharing)
    pricingTiers: [],
    img: images.kwaMaritaneSafariTransferPackageOne,
    gallery: [
        images.kwaMaritaneSafariTransferPackageTwo,
        images.kwaMaritaneSafariTransferPackageThree,
        images.kwaMaritaneSafariTransferPackageFour,
        images.kwaMaritaneSafariTransferPackageFive,
        images.kwaMaritaneSafariTransferPackageSix,
        images.kwaMaritaneSafariTransferPackageSeven
    ],
    overview: 'One-way shuttle to Kwa Maritane Bush Lodge. 3-hour open vehicle game drive. All conservation and entrance fees. Expert guide. Door-to-door shuttle.',
    duration: '1 Day (Transfer + Drive)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'One-way shuttle to Kwa Maritane Bush Lodge',
      '3-hour open vehicle game drive',
      'Park entrance and conservation fee',
      'Direct drop-off at Kwa Maritane Lodge'
    ],
    whatIsNotIncluded: [
      'Accommodation at Kwa Maritane Lodge (booked separately)',
      'Meals or drinks during the transfer',
      'Transfer or game drive gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Safari', description: 'Pickup from Johannesburg/Pretoria between 05:30 and 06:00. Drive to Kwa Maritane Bush Lodge, arriving around 9:00 AM. After a short rest, enjoy a 3-hour open vehicle game drive. Drop-off at the lodge around 12:30 PM.' }
    ],
    additionalInfo: [
      'This package is ideal for guests who have their accommodation booked separately',
      'Return shuttle option is available (R1,250 per person).'
    ]
  },
  { 
    id: 'p57', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Service',
    region: 'Pilanesberg',
    title: 'Pilanesberg Transfer and Safari', 
    description: 'A shared transfer package to Pilanesberg National Park. Includes door-to-door shuttle service from Johannesburg/Pretoria and a 3-hour open vehicle game drive.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 (Starting from R2,000 sharing)
    pricingTiers: [],
    img: images.pilanesbergTransferAndSafariOne,
    gallery: [
        images.pilanesbergTransferAndSafariTwo,
        images.pilanesbergTransferAndSafariThree,
        images.pilanesbergTransferAndSafariFour,
        images.pilanesbergTransferAndSafariFive,
        images.pilanesbergTransferAndSafariSix,
        images.pilanesbergTransferAndSafariSeven
    ],
    overview: 'Door-to-door Shuttle Transfer from Johannesburg or Pretoria. 3-hour open vehicle game drive. Expert guide. Park entrance fees included.',
    duration: '1 Day (Transfer + Drive)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Door-to-door Shuttle Transfer from Johannesburg or Pretoria',
      '3-hour open vehicle game drive',
      'Park entrance fees'
    ],
    whatIsNotIncluded: [
      'Personal food and drinks',
      'Accommodation'
    ],
    itinerary: [
      { title: 'Day 1: Transfer and Pilanesberg Safari', description: 'Pickup from Johannesburg/Pretoria between 08:30 and 09:00. Transfer to Pilanesberg National Park. Enjoy a 3-hour game drive. Drop-off at your destination lodge in the park between 12:30 and 1:30 PM.' }
    ],
    additionalInfo: [
      'Return pickups from the park are between 3:30 PM and 4:30 PM',
      'Private transfer options are available (R6,500 per vehicle).'
    ]
  },
  { 
    id: 'p58', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Service',
    region: 'Pilanesberg',
    title: 'Private Bakubung Transfers', 
    description: 'A private, luxury transfer service to/from Bakubung Bush Lodge in Pilanesberg National Park. Offers flexibility and direct pickup/drop-off within the Greater Pretoria/Johannesburg area.', 
    priceType: 'per-person',
    basePrice: 3500, // ZAR 3,500 (Starting from R3,500 sharing)
    pricingTiers: [],
    img: images.privateBakubungTransfersOne,
    gallery: [
        images.privateBakubungTransfersTwo,
        images.privateBakubungTransfersThree,
        images.privateBakubungTransfersFour,
        images.privateBakubungTransfersFive,
        images.privateBakubungTransfersSix,
        images.privateBakubungTransfersSeven,
        images.privateBakubungTransfersSeven
    ],
    overview: 'Private vehicle door-to-door service. Guaranteed safe and efficient transfer. Flexibility in pick-up time.',
    duration: '1 Day (Transfer)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'A door-to-door pick-up service',
      'Transportation in a luxury vehicle',
      'Transfer to/from Bakubung Lodge'
    ],
    whatIsNotIncluded: [
      'Your quoted price will not include park fees',
      'Accommodation or entrance fees',
      'Any conservation or entrance fees',
      'All purchases paid to the guide'
    ],
    itinerary: [
      { title: 'Day 1: Depart from Gauteng', description: 'Your shuttle will pick you up from the airport, your hotel or your preferred Johannesburg or Pretoria location and transfer you directly to Bakubung Bush Lodge. The driver will make a stop for you to enjoy the cultural activities at Sun City (entrance fee excluded).' }
    ],
    additionalInfo: [
      'Transfer price (R3,500) is per person sharing. This service is ideal for guests who have booked their own accommodation.'
    ]
  },
  { 
    id: 'p59', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Package',
    region: 'Pilanesberg',
    title: 'Exclusive Shepherd\'s Tree Safari Transfer in Pilanesberg', 
    description: 'A private transfer package to Shepherd\'s Tree Game Lodge. This all-inclusive package includes a convenient door-to-door transfer from Johannesburg/Pretoria and a 3-hour open vehicle game drive.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 (Starting from R2,000 sharing)
    pricingTiers: [],
    img: images.exclusiveShepherdSTreeSafariTransferInPilanesbergOne,
    gallery: [
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergTwo,
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergThree,
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergFour,
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergFive,
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergSix,
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergSeven,
        images.exclusiveShepherdSTreeSafariTransferInPilanesbergEight
    ],
    overview: 'One-way shuttle to Shepherd\'s Tree Game Lodge. 3-hour open vehicle game drive. All conservation and entrance fees. Expert guide.',
    duration: '1 Day (Transfer + Drive)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'One-way shuttle to Shepherd\'s Tree Game Lodge',
      '3-hour open vehicle game drive',
      'Park entrance and conservation fee',
      'Direct drop-off at Shepherd\'s Tree Lodge'
    ],
    whatIsNotIncluded: [
      'Accommodation at Shepherd\'s Tree Lodge (booked separately)',
      'Meals or drinks during the transfer',
      'Transfer or game drive gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Safari', description: 'Pickup from Johannesburg/Pretoria between 05:30 and 06:00. Drive to Shepherd\'s Tree Game Lodge, arriving around 9:00 AM. After a short rest, enjoy a 3-hour open vehicle game drive. Drop-off at the lodge around 12:30 PM.' }
    ],
    additionalInfo: [
      'This package is ideal for guests who have their accommodation booked separately',
      'Return shuttle option is available (R1,250 per person).'
    ]
  },
  { 
    id: 'p60', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Package',
    region: 'Pilanesberg',
    title: 'Exclusive Black Rhino Transfer Safari in Pilanesberg', 
    description: 'A private transfer package to Black Rhino Game Reserve. This all-inclusive package includes a convenient door-to-door transfer from Johannesburg/Pretoria and a 3-hour open vehicle game drive.', 
    priceType: 'per-person',
    basePrice: 2300, // ZAR 2,300 (Starting from R2,300 sharing)
    pricingTiers: [],
    img: images.exclusiveBlackRhinoTransferSafariInPilanesbergOne,
    gallery: [
        images.exclusiveBlackRhinoTransferSafariInPilanesbergTwo,
        images.exclusiveBlackRhinoTransferSafariInPilanesbergThree,
        images.exclusiveBlackRhinoTransferSafariInPilanesbergFour,
        images.exclusiveBlackRhinoTransferSafariInPilanesbergFive,
        images.exclusiveBlackRhinoTransferSafariInPilanesbergSix
    ],
    overview: 'One-way shuttle to Black Rhino Game Reserve. 3-hour open vehicle game drive. All conservation and entrance fees. Expert guide.',
    duration: '1 Day (Transfer + Drive)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'One-way shuttle to Black Rhino Game Lodge',
      '3-hour open vehicle game drive',
      'Park entrance and conservation fee',
      'Direct drop-off at Black Rhino Game Lodge'
    ],
    whatIsNotIncluded: [
      'Accommodation at Black Rhino Lodge (booked separately)',
      'Meals or drinks during the transfer',
      'Transfer or game drive gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Safari', description: 'Pickup from Johannesburg/Pretoria between 05:30 and 06:00. Drive to Black Rhino Game Lodge, arriving around 9:00 AM. After a short rest, enjoy a 3-hour open vehicle game drive. Drop-off at the lodge around 12:30 PM.' }
    ],
    additionalInfo: [
      'This package is ideal for guests who have their accommodation booked separately',
      'Return shuttle option is available (R1,250 per person).'
    ]
  },
  { 
    id: 'p61', 
    category: 'Pilanesberg', 
    subCategory: 'Day Tour',
    region: 'Pilanesberg',
    title: 'Ultimate Pilanesberg Open Vehicle Day Tour', 
    description: 'A full-day safari departing from Johannesburg or Pretoria. This tour includes a 2.5 to 3 hour morning and 2.5 to 3 hour afternoon game drive in a guided open safari vehicle, offering the ultimate game viewing experience.', 
    priceType: 'per-person',
    basePrice: 2800, // ZAR 2,800
    pricingTiers: [],
    img: images.ultimatePilanesbergOpenVehicleDayTourOne,
    gallery: [
        images.ultimatePilanesbergOpenVehicleDayTourTwo,
        images.ultimatePilanesbergOpenVehicleDayTourThree,
        images.ultimatePilanesbergOpenVehicleDayTourFour,
        images.ultimatePilanesbergOpenVehicleDayTourFive,
        images.ultimatePilanesbergOpenVehicleDayTourSix,
        images.ultimatePilanesbergOpenVehicleDayTourSeven,
        images.ultimatePilanesbergOpenVehicleDayTourEight,
        images.ultimatePilanesbergOpenVehicleDayTourNine,
        images.ultimatePilanesbergOpenVehicleDayTourTen,
        images.ultimatePilanesbergOpenVehicleDayTourEleven
    ],
    overview: 'Approx 2½ to 3 hour morning guided open vehicle safari drive. Approx 2 hour afternoon open vehicle safari drive. Collection and drop off from any hotel or address in Johannesburg. Transfers in an air-conditioned vehicle. Light lunch and water in Pilanesberg.',
    duration: '1 Day (Full Day)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Collection and drop off from any hotel or address in Johannesburg',
      'Transfers in an air-conditioned vehicle',
      '2 to 3 hours Guided open 4x4 morning game drive',
      '2 to 2½ hours Guided open 4x4 afternoon game drive',
      'Light lunch and water'
    ],
    whatIsNotIncluded: [
      'Personal purchases',
      'All beverages'
    ],
    itinerary: [
      { title: 'Day 1: Open Vehicle Safari Drives', description: 'Morning pickup from Johannesburg/Pretoria between 06:00 and 06:30. Drive to Pilanesberg National Park. Morning game drive in an open vehicle. Enjoy lunch. Afternoon game drive. Depart for Johannesburg/Pretoria before sunset, arriving between 18:30 – 19:30.' }
    ],
    additionalInfo: [
      'Collection / Drop off at any hotel or address in Johannesburg between 05:30am - 07:00am',
      'Drop-off at any hotel or address in Johannesburg from 17:h30'
    ]
  },
  { 
    id: 'p62', 
    category: 'Pilanesberg', 
    subCategory: 'Day Tour',
    region: 'Pilanesberg',
    title: 'Private Pilanesberg Closed Vehicle Day Tour', 
    description: 'A full-day private safari for your group only, departing from Johannesburg or Pretoria. The tour includes two guided game drives in a closed, air-conditioned vehicle.', 
    priceType: 'per-person',
    basePrice: 3500, // ZAR 3,500
    pricingTiers: [],
    img: 'images.pilanesberg.private_closed_vehicle_day_tour',
    gallery: [

    ],
    overview: 'Private guided full-day safari. Transfers in an air-conditioned vehicle. Entrance into the Pilanesberg National Park. A privately guided afternoon 2 to 3 hours closed vehicle game drive.',
    duration: '1 Day (Full Day)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Entrance into the Pilanesberg National Park',
      'Round trip transfer in a private closed vehicle',
      '2 to 3 hours guided morning game drive',
      'A privately guided afternoon 2 to 3 hours closed vehicle game drive',
      'A light picnic lunch and water in a cooler box'
    ],
    whatIsNotIncluded: [
      'Personal purchases'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Day Tour', description: 'Morning pickup from Johannesburg/Pretoria. Drive to Pilanesberg National Park. Morning game drive. Enjoy a light picnic lunch. Afternoon game drive. Depart for Johannesburg/Pretoria, arriving around 18:00.' }
    ],
    additionalInfo: [
      'Collection drop off from any address in Johannesburg by a private guide',
      'It is safe to do a closed vehicle tour in Pilanesberg'
    ]
  },
  { 
    id: 'p63', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Service',
    region: 'Pilanesberg',
    title: 'Private Luxury Pilanesberg Shuttle', 
    description: 'A private luxury shuttle service for 1 to 3 people, offering door-to-door transfer from Johannesburg/Pretoria to any Pilanesberg lodge. Price is per vehicle.', 
    priceType: 'per-vehicle',
    basePrice: 6000, // ZAR 6,000
    pricingTiers: [],
    img: images.privateLuxuryPilanesbergShuttleOne,
    gallery: [
        images.privateLuxuryPilanesbergShuttleTwo,
        images.privateLuxuryPilanesbergShuttleThree,
        images.privateLuxuryPilanesbergShuttleFour,
        images.privateLuxuryPilanesbergShuttleFive,
        images.privateLuxuryPilanesbergShuttleSix
    ],
    overview: 'The price includes booking the whole vehicle. Door-to-door pickup from Johannesburg or Pretoria. Transfer in a luxury sedan or SUV. Game drive is scheduled to begin at roughly 09:00 and continue until approximately 12:30 PM.',
    duration: '1 Day (Transfer)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'The price includes booking the whole vehicle',
      'Transfer in a luxury sedan or SUV',
      'Park entrance fees for the game drive'
    ],
    whatIsNotIncluded: [
      'Any fees of a personal nature',
      'Additional safari drives or excursions',
      'Transfer or game drive gratuities'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg National Park', description: 'Your private shuttle will pick you up from Johannesburg or Pretoria and take you to the park. The price includes a 3-hour open safari game drive. Drop-off at a lodge of your choice in the Pilanesberg area.' }
    ],
    additionalInfo: [
      'Price based on booking the whole vehicle',
      'A drop-off service to any of the lodges in the Black Rhino Game Reserve is also included in this service'
    ]
  },
  { 
    id: 'p64', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Service',
    region: 'Pilanesberg',
    title: 'Private Pilanesberg Shuttle 4 - 9 persons', 
    description: 'A private shuttle service for small groups (4-9 persons), offering door-to-door transfer from Johannesburg/Pretoria to any Pilanesberg lodge. Price is per vehicle.', 
    priceType: 'per-vehicle',
    basePrice: 4250, // ZAR 4,250
    pricingTiers: [
        { count: 1, price: 4250 },
        { count: 2, price: 4250 },
        { count: 3, price: 4250 }
    ],
    img: images.privatePilanesbergShuttle49PersonsOne,
    gallery: [
        images.privatePilanesbergShuttle49PersonsTwo,
        images.privatePilanesbergShuttle49PersonsThree,
        images.privatePilanesbergShuttle49PersonsFour,
        images.privatePilanesbergShuttle49PersonsFive,
        images.privatePilanesbergShuttle49PersonsSix,
        images.privatePilanesbergShuttle49PersonsSeven,
        images.privatePilanesbergShuttle49PersonsEight,
        images.privatePilanesbergShuttle49PersonsNine,
        images.privatePilanesbergShuttle49PersonsTen,
        images.privatePilanesbergShuttle49PersonsEleven
    ],
    overview: 'The price includes booking the whole vehicle (for 4 to 9 pax). Transfers in an air-conditioned vehicle. Game drive can be added for an extra R880.00 per person. Door-to-door pickup from Johannesburg or Pretoria.',
    duration: '1 Day (Transfer)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'The price includes booking the whole vehicle (for 4 to 9 pax)',
      'Transfer in an air-conditioned vehicle',
      'Door-to-door service'
    ],
    whatIsNotIncluded: [
      'Game drive (available for an extra R880.00 per person)',
      'Meals or drinks'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg National Park', description: 'Your private shuttle will pick you up from Johannesburg or Pretoria. Drive to Pilanesberg National Park and be dropped off at your destination lodge in the park.' }
    ],
    additionalInfo: [
      '1 - 3 pax R3 500 per way',
      'Game drive add-on is for a 3-hour open-vehicle safari drive',
      'This service guarantees a smooth journey'
    ]
  },
  { 
    id: 'p65', 
    category: 'Pilanesberg', 
    subCategory: 'Transfer Service',
    region: 'Pilanesberg',
    title: 'Private Transfers to Kwa Maritane Bush Lodge', 
    description: 'A private transfer service to Kwa Maritane Bush Lodge, offering convenient transport in an air-conditioned vehicle from Johannesburg/Pretoria.', 
    priceType: 'per-person',
    basePrice: 925, // ZAR 925 (R925 single)
    pricingTiers: [],
    img: images.privateTransfersToKwaMaritaneBushLodgeOne,
    gallery: [
        images.privateTransfersToKwaMaritaneBushLodgeTwo,
        images.privateTransfersToKwaMaritaneBushLodgeThree,
        images.privateTransfersToKwaMaritaneBushLodgeFour,
        images.privateTransfersToKwaMaritaneBushLodgeFive,
        images.privateTransfersToKwaMaritaneBushLodgeSix,
        images.privateTransfersToKwaMaritaneBushLodgeSeven
    ],
    overview: 'Transfer in a closed, air-conditioned vehicle. Bottled water. Pickup from your hotel/accommodation.',
    duration: '1 Day (Transfer)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'Transfer in a closed, air-conditioned vehicle',
      'Bottled water during the transfer'
    ],
    whatIsNotIncluded: [
      'Purchases of a personal nature',
      'Any Pilanesberg park fees'
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg National Park', description: 'Your driver will pick you up from the airport, your hotel, or your home around 08:30 and 09:00, and transport you safely and on time to the Pilanesberg area.' }
    ],
    additionalInfo: [
      'Book private transfers to Kwa Maritane Bush Lodge easily',
      'Travel time is 2 to 2.5 hours'
    ]
  },
  { 
    id: 'p66', 
    category: 'Pilanesberg', 
    subCategory: 'Safari & Transfer',
    region: 'Pilanesberg / Sun City',
    title: 'Sun City Safari & Transfer Adventure Package', 
    description: 'A full-day safari and transfer adventure, including door-to-door transfer from Johannesburg/Pretoria to Sun City Resort, a 3-hour game drive, and access to Sun City attractions.', 
    priceType: 'per-person',
    basePrice: 2000, // ZAR 2,000 (Starting from R2,000 sharing)
    pricingTiers: [],
    img: images.sunCitySafariTransferAdventurePackageOne,
    gallery: [
        images.sunCitySafariTransferAdventurePackageTwo,
        images.sunCitySafariTransferAdventurePackageThree,
        images.sunCitySafariTransferAdventurePackageFour,
        images.sunCitySafariTransferAdventurePackageFive,
        images.sunCitySafariTransferAdventurePackageSix,
        images.sunCitySafariTransferAdventurePackageSeven,
        images.sunCitySafariTransferAdventurePackageEight,
        images.sunCitySafariTransferAdventurePackageNine
    ],
    overview: 'One-way shuttle to Sun City Resort. 3-hour open vehicle game drive. Park entry fee for the game drive. Access to Sun City complex, casino, golf course, and Valley of Waves.',
    duration: '1 Day (Full Day)',
    hotelPickupAvailable: true,
    whatIsIncluded: [
      'One-way shuttle to Sun City Resort',
      '3-hour open vehicle game drive',
      'Park entry fee for the game drive'
    ],
    whatIsNotIncluded: [
      'Accommodation (booked separately)',
      'Meals or drinks during the transfer',
      'Personal expenses (e.g., casino, golf, water park, etc.)',
      'The Valley of Waves entrance fee (included but not included)' // Note: Contradictory info in included/excluded, following the explicit exclusion as per image.
    ],
    itinerary: [
      { title: 'Day 1: Pilanesberg Safari', description: 'Pickup from Johannesburg/Pretoria between 05:30 and 06:30. Drive to Pilanesberg National Park. Enjoy a 3-hour open vehicle game drive. Drop-off at Sun City Resort between 12:30 and 1:30 PM.' }
    ],
    additionalInfo: [
      'Optional return transfer is available (price on request)',
      'This package is ideal for guests who have their own accommodation booked at Sun City'
    ]
  }
];