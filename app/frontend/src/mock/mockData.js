export const personalInfo = {
  name: "Alfian Jack",
  title: "Frontend Developer",
  tagline: "Membangun pengalaman web yang indah dan interaktif",
  bio: "Saya adalah seorang Frontend Developer yang passionate dalam menciptakan user interface yang intuitif dan menarik. Dengan pengalaman dalam React, Next.js, dan modern web technologies, saya fokus untuk menghadirkan solusi web yang responsif dan user-friendly.",
  email: "your.email@example.com",
  location: "Indonesia",
  avatar: "https://ui-avatars.com/api/?name=Your+Name&size=200&background=a78bfa&color=0a192f&bold=true",
  resumeLink: "#",
  social: {
    github: "https://github.com/allfaris13",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/alvntruth"
  }
};

export const skills = [
  { name: "React", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Language", level: 90 },
  { name: "TypeScript", category: "Language", level: 80 },
  { name: "HTML5", category: "Frontend", level: 95 },
  { name: "CSS3", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Styling", level: 90 },
  { name: "Redux", category: "State Management", level: 75 },
  { name: "Git", category: "Tools", level: 85 },
  { name: "Figma", category: "Design", level: 70 },
  { name: "Responsive Design", category: "Frontend", level: 95 },
  { name: "REST API", category: "Integration", level: 85 }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur lengkap seperti product catalog, shopping cart, checkout, dan payment integration. Dibangun dengan Next.js dan optimized untuk performa tinggi.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "React", "Tailwind CSS", "Redux", "Stripe API"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    category: "Web App"
  },
  {
    id: 2,
    title: "Sistem Perpustakaan Digital",
    description: "Aplikasi manajemen perpustakaan digital dengan fitur peminjaman buku, katalog online, dan sistem pencarian yang powerful. Interface yang user-friendly untuk admin dan member.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    category: "Web App"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website dengan design modern dan animasi yang smooth. Fully responsive dan optimized untuk SEO.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    technologies: ["React", "CSS3", "Framer Motion", "React Router"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Website"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur drag-and-drop, real-time collaboration, dan notifikasi. Perfect untuk tim yang produktif.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Web App"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Dashboard cuaca dengan visualisasi data yang menarik, forecast 7 hari, dan lokasi favorite. Menggunakan OpenWeather API.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Web App"
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "Aplikasi pencarian resep makanan dengan ribuan resep dari berbagai negara. Fitur filter berdasarkan ingredients dan dietary restrictions.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
    technologies: ["React", "Spoonacular API", "Redux", "Styled Components"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Web App"
  }
];

export const experiences = [
  {
    id: 1,
    company: "Tech Startup Indonesia",
    position: "Frontend Developer",
    duration: "2023 - Sekarang",
    location: "Remote",
    description: [
      "Mengembangkan dan maintain aplikasi web menggunakan React dan Next.js",
      "Berkolaborasi dengan UI/UX designer untuk implementasi design system",
      "Optimasi performa website untuk meningkatkan loading speed 40%",
      "Mentoring junior developer dalam best practices frontend development"
    ],
    current: true
  },
  {
    id: 2,
    company: "Digital Agency",
    position: "Junior Frontend Developer",
    duration: "2021 - 2023",
    location: "Jakarta, Indonesia",
    description: [
      "Membangun responsive websites untuk berbagai klien",
      "Integrasi REST API dengan frontend applications",
      "Implementasi animasi dan micro-interactions",
      "Testing dan debugging cross-browser compatibility"
    ],
    current: false
  },
  {
    id: 3,
    company: "Freelance",
    position: "Web Developer",
    duration: "2020 - 2021",
    location: "Remote",
    description: [
      "Mengerjakan berbagai project web untuk klien lokal dan internasional",
      "Custom WordPress theme development",
      "Landing page design dan development",
      "Website maintenance dan optimization"
    ],
    current: false
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Memahami React Hooks: useState dan useEffect",
    excerpt: "Panduan lengkap untuk memahami dan menggunakan React Hooks dalam project Anda. Mulai dari basic hingga advanced patterns.",
    date: "2024-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "React",
    slug: "react-hooks-guide"
  },
  {
    id: 2,
    title: "Best Practices CSS untuk Website Responsif",
    excerpt: "Tips dan trik untuk membuat website yang responsif di semua device. Dari mobile-first approach hingga modern CSS techniques.",
    date: "2024-01-10",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80",
    category: "CSS",
    slug: "responsive-css-best-practices"
  },
  {
    id: 3,
    title: "Optimasi Performa Web dengan Next.js",
    excerpt: "Cara mengoptimalkan performa aplikasi Next.js Anda. Image optimization, code splitting, dan caching strategies.",
    date: "2024-01-05",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Next.js",
    slug: "nextjs-performance-optimization"
  },
  {
    id: 4,
    title: "Design System: Membangun Konsistensi UI",
    excerpt: "Pentingnya design system dalam development modern. Cara membuat dan maintain component library untuk team.",
    date: "2023-12-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "UI/UX",
    slug: "design-system-guide"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizki",
    position: "Product Manager",
    company: "Tech Startup",
    content: "Bekerja dengan developer yang sangat talented. Selalu deliver project tepat waktu dengan kualitas code yang excellent.",
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Rizki&size=100&background=a78bfa&color=0a192f"
  },
  {
    id: 2,
    name: "Sarah Putri",
    position: "UI/UX Designer",
    company: "Digital Agency",
    content: "Collaboration yang smooth! Mampu mengimplementasikan design dengan pixel-perfect dan memberikan feedback yang konstruktif.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Putri&size=100&background=a78bfa&color=0a192f"
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "CTO",
    company: "E-Commerce Platform",
    content: "Expertise dalam React dan Next.js sangat membantu dalam mengembangkan platform kami. Highly recommended!",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&size=100&background=a78bfa&color=0a192f"
  }
];
