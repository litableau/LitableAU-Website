import { Event } from '@/components/ui/EventsOutline';

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'SHIPWRECK',
    description: 'A thrilling adventure where participants must solve puzzles and navigate through challenges to survive a shipwreck scenario.',
    date: '2024-09-15',
    time: '7:00 PM - 10:00 PM',
    location: 'Mystery Theater, Downtown',
    category: {
      id: 'adventure',
      name: 'Adventure',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 45,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 28,
    maxAttendees: 30,
    tags: ['Adventure', 'Puzzle', 'Team Building'],
    isLiked: false,
    isRegistered: false,
    type: 'upcoming'
  },
  {
    id: '2',
    title: 'TREASURE HUNT',
    description: 'An exciting treasure hunt adventure through the city, solving clues and discovering hidden gems.',
    date: '2024-09-20',
    time: '2:00 PM - 5:00 PM',
    location: 'City Center, Downtown',
    category: {
      id: 'adventure',
      name: 'Adventure',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 25,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 15,
    maxAttendees: 20,
    tags: ['Adventure', 'Puzzle', 'Exploration'],
    isLiked: true,
    isRegistered: true,
    type: 'ongoing'
  },
  {
    id: '3',
    title: 'MURDER MYSTERY',
    description: 'Step into a classic whodunit mystery where you must solve a murder case through clues and deduction.',
    date: '2024-09-25',
    time: '7:30 PM - 10:30 PM',
    location: 'Victorian Manor, Old Town',
    category: {
      id: 'mystery',
      name: 'Mystery',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 55,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 22,
    maxAttendees: 25,
    tags: ['Mystery', 'Deduction', 'Role Playing'],
    isLiked: false,
    isRegistered: false,
    type: 'upcoming'
  },
  {
    id: '4',
    title: 'CHANNEL SURFING',
    description: 'A nostalgic journey through classic TV shows and commercials from different eras.',
    date: '2024-09-10',
    time: '6:00 PM - 9:00 PM',
    location: 'Retro Theater, Midtown',
    category: {
      id: 'entertainment',
      name: 'Entertainment',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 30,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 18,
    maxAttendees: 30,
    tags: ['Nostalgia', 'TV', 'Entertainment'],
    isLiked: true,
    isRegistered: false,
    type: 'past'
  },
  {
    id: '5',
    title: 'QUIZ NIGHT',
    description: 'Test your knowledge in our weekly trivia competition with vintage themes and literary questions.',
    date: '2024-09-12',
    time: '8:00 PM - 10:00 PM',
    location: 'Cozy Corner Cafe, Downtown',
    category: {
      id: 'quiz',
      name: 'Quiz',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 15,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 35,
    maxAttendees: 40,
    tags: ['Trivia', 'Knowledge', 'Competition'],
    isLiked: false,
    isRegistered: true,
    type: 'ongoing'
  },
  {
    id: '6',
    title: 'VINTAGE BOOK CLUB',
    description: 'Join our monthly discussion of classic literature and vintage novels in a cozy, intimate setting.',
    date: '2024-09-18',
    time: '7:00 PM - 9:00 PM',
    location: 'Historic Library, Old Town',
    category: {
      id: 'literature',
      name: 'Literature',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 0,
    isFree: true,
    organizer: 'LITABLEAU Events',
    attendees: 12,
    maxAttendees: 15,
    tags: ['Books', 'Literature', 'Discussion'],
    isLiked: true,
    isRegistered: true,
    type: 'ongoing'
  },
  {
    id: '7',
    title: 'ANTIQUE SHOWCASE',
    description: 'Discover and learn about vintage antiques, collectibles, and historical artifacts.',
    date: '2024-09-05',
    time: '10:00 AM - 4:00 PM',
    location: 'Heritage Museum, Arts District',
    category: {
      id: 'antiques',
      name: 'Antiques',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 20,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 45,
    maxAttendees: 50,
    tags: ['Antiques', 'History', 'Collectibles'],
    isLiked: false,
    isRegistered: false,
    type: 'past'
  },
  {
    id: '8',
    title: 'VINTAGE TEA PARTY',
    description: 'An elegant afternoon tea party with vintage china, traditional pastries, and period-appropriate attire.',
    date: '2024-09-28',
    time: '2:00 PM - 5:00 PM',
    location: 'Victorian Garden, Estate District',
    category: {
      id: 'social',
      name: 'Social',
      color: '#2f4f4f'
    },
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
    price: 40,
    isFree: false,
    organizer: 'LITABLEAU Events',
    attendees: 20,
    maxAttendees: 25,
    tags: ['Tea Party', 'Elegant', 'Social'],
    isLiked: false,
    isRegistered: false,
    type: 'upcoming'
  }
];
