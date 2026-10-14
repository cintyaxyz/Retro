export const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'coding', name: 'Coding', icon: 'code', bg: 'bg-[#FEE580]', color: '#D97706' },
  { id: 'design', name: 'Design', icon: 'palette', bg: 'bg-[#CBE4FF]', color: '#2563EB' },
  { id: 'marketing', name: 'Marketing', icon: 'target', bg: 'bg-[#FCD2DC]', color: '#DB2777' },
  { id: 'accounting', name: 'Accounting', icon: 'calculator', bg: 'bg-[#D1F0E4]', color: '#059669' },
];

export const recentSearches = [
  {
    id: 'recent-1',
    title: 'Daily Practices Drawing',
    author: 'Lyndles Torney',
    authorRole: 'Master Illustrator',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    price: 40,
    badge: 'Featured',
    badgeType: 'pink',
    image: '/images/daily_drawing.jpg',
    category: 'design',
    rating: 4.9,
    students: '1.2k',
    duration: '4h 15m',
    lessons: 18,
    description: 'Build an intuitive daily sketching habit through warm-up exercises, line rhythm, and character design fundamentals.'
  },
  {
    id: 'recent-2',
    title: 'The Power of Procreate',
    author: 'Brokito Remest',
    authorRole: 'Digital Concept Artist',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    price: 45,
    badge: 'New',
    badgeType: 'mint',
    image: '/images/procreate_cloud.jpg',
    category: 'design',
    rating: 4.8,
    students: '840',
    duration: '6h 30m',
    lessons: 24,
    description: 'Master digital illustration from blank canvas to final exported artwork using custom brushes and animation layers.'
  },
  {
    id: 'recent-3',
    title: 'Expressive Sketching',
    author: 'Hriew Bayer',
    authorRole: 'Urban Sketcher & Storyteller',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    price: 35,
    badge: null,
    badgeType: null,
    image: '/images/expressive_bike.jpg',
    category: 'design',
    rating: 4.9,
    students: '2.1k',
    duration: '3h 45m',
    lessons: 14,
    description: 'Capture emotion and motion in freeform sketching, using watercolors, dip pens, and outdoor observational techniques.'
  }
];

export const popularClasses = [
  {
    id: 'popular-1',
    title: 'Lunacy Design Class',
    author: 'Lunacy Het Name',
    authorRole: 'Senior UI/UX Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    price: 40,
    badge: 'Featured',
    badgeType: 'pink',
    image: '/images/lunacy_design.jpg',
    category: 'design',
    isLarge: true,
    rating: 5.0,
    students: '4.8k',
    duration: '8h 20m',
    lessons: 32,
    description: 'Design comprehensive UI kits, responsive dashboards, and interactive vector mockups in a collaborative environment.'
  },
  {
    id: 'popular-2',
    title: 'Digital Art for Print',
    author: 'Gork Eomkueter',
    authorRole: 'Printmaker & Typographer',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    price: 30,
    badge: 'Featured',
    badgeType: 'pink',
    image: '/images/digital_art.jpg',
    category: 'marketing',
    isLarge: false,
    rating: 4.7,
    students: '1.9k',
    duration: '5h 10m',
    lessons: 20,
    description: 'Learn CMYK color spaces, screen printing preparation, risograph techniques, and tactile poster art production.'
  }
];

export const newestClasses = [
  {
    id: 'newest-1',
    title: 'Drawing Toward Illustration',
    author: 'Tarah Lahidry',
    authorRole: 'Children Book Author',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    price: 35,
    badge: 'New',
    badgeType: 'mint',
    image: '/images/drawing_loudspeaker.jpg',
    category: 'marketing',
    rating: 4.8,
    students: '620',
    duration: '4h 00m',
    lessons: 16,
    description: 'Turn spontaneous creative ideas into cohesive narrative illustrations ready for editorial publishing and brands.'
  },
  {
    id: 'newest-2',
    title: 'Color Theory for Illustrators',
    author: 'Mersiel Mooeter',
    authorRole: 'Visual Development Artist',
    authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    price: 45,
    badge: 'New',
    badgeType: 'mint',
    image: '/images/color_piggy.jpg',
    category: 'design',
    rating: 4.9,
    students: '910',
    duration: '5h 45m',
    lessons: 22,
    description: 'Decode harmonious palettes, emotional color weighting, and light temperature for digital paintings and branding.'
  },
  {
    id: 'newest-3',
    title: 'Illustrations to Life',
    author: 'Boria Schull',
    authorRole: 'Animation Director',
    authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    price: 50,
    badge: 'New',
    badgeType: 'mint',
    image: '/images/stacked_books.jpg',
    category: 'coding',
    rating: 5.0,
    students: '1.5k',
    duration: '7h 15m',
    lessons: 28,
    description: 'Bring static 2D vector illustrations into playful motion graphics using frame-by-frame timing and easing principles.'
  }
];

export const latestLearnedHero = {
  id: 'learned-hero',
  title: 'Productivity Masterclass',
  part: 'Part 1',
  author: 'Cliften Alderman',
  authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
  duration: '29 minutes',
  badge: 'Featured',
  badgeType: 'pink',
  image: '/images/retro_camera.jpg',
  progress: 75,
  description: 'Unlocking deep flow states, visual task mapping, and time audit workflows designed specifically for creative professionals.'
};

export const progressCourses = [
  {
    id: 'prog-1',
    title: 'Adobe Illustrator Training',
    instructor: 'Terence Price',
    avatarBg: 'bg-[#9333EA]',
    part: 'Part 03',
    progress: 50,
    image: '/images/thumb_illustrator.jpg',
    customType: 'illustrator'
  },
  {
    id: 'prog-2',
    title: 'Hand-Painted Textures',
    instructor: 'Rebecca Fisherty',
    avatarBg: 'bg-[#EC4899]',
    part: 'Part 05',
    progress: 30,
    image: '/images/thumb_textures.jpg',
    customType: 'textures'
  },
  {
    id: 'prog-3',
    title: 'Create a Bold Album Cover',
    instructor: 'Annett Lanty',
    avatarBg: 'bg-[#3B82F6]',
    part: 'Part 03',
    progress: 50,
    customType: 'albumCover'
  },
  {
    id: 'prog-4',
    title: 'How to Use Procreate 5X',
    instructor: 'Troman Hartman',
    avatarBg: 'bg-[#10B981]',
    part: 'Part 03',
    progress: 50,
    customType: 'procreate5x'
  }
];

export const userProfile = {
  name: 'Basith Ali',
  subtitle: 'Your doing great, keep practicing',
  avatar: '/images/retro_user.jpg',
  points: 1240,
  completedCourses: 8,
  inProgressCount: 5
};
