export const profiles = [
  {
    id: 'work',
    name: 'Work',
    icon: '💼',
    description: 'Professional Projects'
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: '⚡',
    description: 'Technical Expertise'
  },
  {
    id: 'experience',
    name: 'Experience',
    icon: '🎯',
    description: 'Career Journey'
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: '📧',
    description: 'Get In Touch'
  }
];

export const projectCategories = [
  {
    id: 'featured',
    title: 'Featured Projects',
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack shopping experience with payment integration',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tags: ['React', 'Node.js', 'MongoDB'],
        year: '2024'
      },
      {
        id: 2,
        title: 'AI Dashboard',
        description: 'Data visualization platform with ML insights',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        tags: ['Python', 'TensorFlow', 'React'],
        year: '2024'
      },
      {
        id: 3,
        title: 'Social Media App',
        description: 'Real-time messaging and content sharing platform',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
        tags: ['React Native', 'Firebase', 'WebRTC'],
        year: '2023'
      },
      {
        id: 4,
        title: 'Portfolio CMS',
        description: 'Content management system for creative professionals',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
        year: '2023'
      }
    ]
  },
  {
    id: 'web',
    title: 'Web Applications',
    projects: [
      {
        id: 5,
        title: 'Task Management Tool',
        description: 'Collaborative project management with real-time updates',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        tags: ['Vue.js', 'Express', 'Socket.io'],
        year: '2024'
      },
      {
        id: 6,
        title: 'Learning Platform',
        description: 'Online education portal with video courses',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
        tags: ['React', 'AWS', 'Stripe'],
        year: '2023'
      },
      {
        id: 7,
        title: 'Weather Analytics',
        description: 'Real-time weather tracking and forecasting',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
        tags: ['Angular', 'D3.js', 'API Integration'],
        year: '2023'
      },
      {
        id: 8,
        title: 'Recipe Finder',
        description: 'Discover and share culinary creations',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
        tags: ['React', 'Node.js', 'MongoDB'],
        year: '2022'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    projects: [
      {
        id: 9,
        title: 'Fitness Tracker',
        description: 'Health and workout monitoring app',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
        tags: ['React Native', 'Redux', 'Firebase'],
        year: '2024'
      },
      {
        id: 10,
        title: 'Budget Manager',
        description: 'Personal finance tracking and planning',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
        tags: ['Flutter', 'Dart', 'SQLite'],
        year: '2023'
      },
      {
        id: 11,
        title: 'Travel Companion',
        description: 'Trip planning and exploration guide',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
        tags: ['Swift', 'CoreData', 'MapKit'],
        year: '2023'
      },
      {
        id: 12,
        title: 'Music Player',
        description: 'Custom audio streaming application',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        tags: ['Kotlin', 'ExoPlayer', 'Material UI'],
        year: '2022'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    projects: [
      {
        id: 13,
        title: 'Banking App Redesign',
        description: 'Modern interface for financial services',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        tags: ['Figma', 'Prototyping', 'User Research'],
        year: '2024'
      },
      {
        id: 14,
        title: 'Brand Identity System',
        description: 'Complete visual identity for tech startup',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        tags: ['Adobe Suite', 'Brand Strategy', 'Design Systems'],
        year: '2023'
      },
      {
        id: 15,
        title: 'Dashboard UI Kit',
        description: 'Reusable components for admin panels',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
        tags: ['Sketch', 'Component Library', 'Documentation'],
        year: '2023'
      },
      {
        id: 16,
        title: 'Mobile Game Interface',
        description: 'Engaging UI for casual gaming experience',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        tags: ['Unity', 'Game Design', 'Animation'],
        year: '2022'
      }
    ]
  }
];

export const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'TypeScript', level: 88, category: 'Language' },
  { name: 'MongoDB', level: 82, category: 'Database' },
  { name: 'AWS', level: 78, category: 'Cloud' },
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'Figma', level: 92, category: 'Design' }
];

export const experience = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: 'Leading development of enterprise solutions and mentoring junior developers',
    achievements: ['Increased performance by 40%', 'Led team of 5 developers', 'Architected microservices']
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd.',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Built responsive web applications and improved user experience',
    achievements: ['Reduced load time by 60%', 'Implemented design system', 'Mentored 3 interns']
  },
  {
    id: 3,
    company: 'Startup Ventures',
    role: 'Junior Developer',
    period: '2019 - 2020',
    description: 'Developed features for SaaS products and maintained codebases',
    achievements: ['Shipped 15+ features', 'Fixed critical bugs', 'Learned modern frameworks']
  }
];

export const contactInfo = {
  email: 'jaanvi.choudhary@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  linkedin: 'linkedin.com/in/jaanvichoudhary',
  github: 'github.com/jaanvichoudhary',
  portfolio: 'jaanvichoudhary.com'
};