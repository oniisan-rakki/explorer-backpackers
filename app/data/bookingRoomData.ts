import { images } from './images';

// --- NEW: Booking Page Data ---
// This holds the static info for the booking page room selections
export const bookingRoomData = [
  {
    id: 'femSix',
    roomTypeId: '221298',
    name: 'Female Six Bed Dorm',
    description: "Experience Ultimate Comfort in our thoughtfully equipped room. Discover 6 extra-long single bunk beds, lockable storage lockers, a full-length mirror, vanity table, and chair. Convenient plug points throughout ensure easy device charging. Each bed features a reading light for personalized comfort. The en-suite bathroom offers a luxurious bathtub and separate shower for your relaxation.",
    images: [images.room6, images.room6Bath, images.roomLounge],
  },
  {
    id: 'femFour',
    roomTypeId: '221297',
    name: 'Female Four Bed Dorm',
    description: "Your Serene Sanctuary for Solitude. Step into our vibrant dorm, specially designed for quiet moments and privacy. Indulge in the comfort of extra-length single bunk beds, thoughtfully arranged on one side of the room, creating a cozy cocoon just for you. Discover convenience with a full-length mirror, vanity table, chair, and wall plug at your disposal. Feel the Glow of Personalized Comfort.",
    images: [images.room4, images.room4Bath, images.roomLounge],
  },
  {
    id: 'mixEight',
    roomTypeId: '221245',
    name: 'Mixed Eight Bed Dorm',
    description: "Boundless Space for All. Our vibrant room welcomes you with 8 extra-long single bunk beds, lockable lockers, full-length mirror, vanity table, and chair. It's not just about comfort; there's even room for a lively game of Twister. Experience ultimate excitement and relaxation in this inviting haven.",
    images: [images.room8mixed, images.room8Bath, images.roomLounge],
  },
  {
    id: 'mixEightOut',
    roomTypeId: '221299',
    name: 'Mixed Eight Bed Dorm (Cottage)',
    description: "Boundless Space for All. Our vibrant room welcomes you with 8 extra-long single bunk beds, lockable lockers, full-length mirror, vanity table, and chair. It's not just about comfort; there's even room for a lively game of Twister. Experience ultimate excitement and relaxation in this inviting haven.",
    images: [images.room8mixed2, images.room8Bath, images.roomOutside],
  },
  {
    id: 'priRoom',
    roomTypeId: '605330',
    name: 'Private Queen Room',
    description: "Indulge in Modern Luxury in our meticulously designed Queen Room. Sink into the plush comfort of a queen-sized bed, perfect for couples or solo travelers seeking extra space. Stay connected with high-speed Wi-Fi, ideal for streaming, working, or staying in touch with loved ones. The sleek, contemporary décor creates a soothing atmosphere, while the private bathroom with a refreshing shower ensures your utmost convenience.",
    images: [images.roomPrivate, images.roomPrivateBath, images.roomOutside],
  }
];