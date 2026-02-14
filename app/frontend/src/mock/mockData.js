export const personalInfo = {
  name: "Alfian Jack",
  title: "Frontend Developer",
  tagline: "Membangun pengalaman web yang indah dan interaktif",
  bio: "Saya adalah seorang Frontend Developer yang passionate dalam menciptakan user interface yang intuitif dan menarik. Dengan pengalaman dalam React, Next.js, dan modern web technologies, saya fokus untuk menghadirkan solusi web yang responsif dan user-friendly.",
  email: "alfinzaki@gmail.com",
  location: "Indonesia",
  // `photo` is the recommended place for your actual portrait (local file under /public/images/profile.svg)
  // Set this to a local path (e.g. "/images/profile.svg") or a remote URL (add domain to next.config.js).
  photo: "/images/gekyume.jpg",
  avatar:
    "https://ui-avatars.com/api/?name=Your+Name&size=200&background=a78bfa&color=0a192f&bold=true",
  resumeLink: "#",
  social: {
    github: "https://github.com/allfaris13",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/allfariaz",
  },
};

export const skills = [
  { name: "React", category: "Frontend", level: 70 },
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
  { name: "REST API", category: "Integration", level: 85 },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur lengkap seperti product catalog, shopping cart, checkout, dan payment integration. Dibangun dengan Next.js dan optimized untuk performa tinggi.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "React", "Tailwind CSS", "Redux", "Stripe API"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: 2,
    title: "Sistem Perpustakaan Digital",
    description:
      "Aplikasi manajemen perpustakaan digital dengan fitur peminjaman buku, katalog online, dan sistem pencarian yang powerful. Interface yang user-friendly untuk admin dan member.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website dengan design modern dan animasi yang smooth. Fully responsive dan optimized untuk SEO.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    technologies: ["React", "CSS3", "Framer Motion", "React Router"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Website",
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas dengan fitur drag-and-drop, real-time collaboration, dan notifikasi. Perfect untuk tim yang produktif.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca dengan visualisasi data yang menarik, forecast 7 hari, dan lokasi favorite. Menggunakan OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description:
      "Aplikasi pencarian resep makanan dengan ribuan resep dari berbagai negara. Fitur filter berdasarkan ingredients dan dietary restrictions.",
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
    technologies: ["React", "Spoonacular API", "Redux", "Styled Components"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    category: "Web App",
  },
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
      "Mentoring junior developer dalam best practices frontend development",
    ],
    current: true,
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
      "Testing dan debugging cross-browser compatibility",
    ],
    current: false,
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
      "Website maintenance dan optimization",
    ],
    current: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Memahami React Hooks: useState dan useEffect",
    excerpt:
      "Panduan lengkap untuk memahami dan menggunakan React Hooks dalam project Anda. Mulai dari basic hingga advanced patterns.",
    date: "2024-01-15",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "React",
    slug: "react-hooks-guide",
    content: `
# Memahami React Hooks: useState dan useEffect

React Hooks telah mengubah cara kita menulis komponen React. Dengan hooks, kita bisa menggunakan state dan lifecycle methods dalam functional components tanpa perlu class components.

## Apa itu React Hooks?

React Hooks adalah fungsi khusus yang memungkinkan kita untuk "hook into" fitur-fitur React dari functional components. Hooks dimulai dengan kata "use" dan hanya bisa dipanggil di top level komponen atau custom hooks lainnya.

## useState Hook

useState adalah hook paling dasar untuk mengelola state dalam functional component:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Tips useState:
- State bisa berupa tipe data apapun (string, number, object, array)
- Untuk object dan array, selalu buat copy baru saat update
- Gunakan functional update untuk state yang bergantung pada nilai sebelumnya

## useEffect Hook

useEffect menggabungkan componentDidMount, componentDidUpdate, dan componentWillUnmount:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetchUser(userId).then(setUser);
    
    // Cleanup function (optional)
    return () => {
      // Cleanup code here
    };
  }, [userId]); // Dependency array

  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
\`\`\`

### Dependency Array:
- **Kosong []**: Effect hanya run sekali setelah mount
- **Tidak ada**: Effect run setiap render
- **[dep1, dep2]**: Effect run ketika dependencies berubah

## Best Practices

1. **Pisahkan concerns**: Gunakan multiple useEffect untuk logic yang berbeda
2. **Custom hooks**: Extract logic yang reusable ke custom hooks
3. **Avoid infinite loops**: Hati-hati dengan dependency array
4. **Cleanup**: Selalu cleanup subscriptions dan timers

## Kesimpulan

React Hooks membuat kode lebih clean dan reusable. useState dan useEffect adalah fondasi yang harus dikuasai sebelum mempelajari hooks lainnya seperti useContext, useReducer, dan useMemo.

Dengan memahami konsep dasar ini, Anda sudah siap untuk membangun aplikasi React yang lebih modern dan maintainable!
    `,
  },
  {
    id: 2,
    title: "Best Practices CSS untuk Website Responsif",
    excerpt:
      "Tips dan trik untuk membuat website yang responsif di semua device. Dari mobile-first approach hingga modern CSS techniques.",
    date: "2024-01-10",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80",
    category: "CSS",
    slug: "responsive-css-best-practices",
    content: `
# Best Practices CSS untuk Website Responsif

Responsive design bukan lagi pilihan, tapi keharusan di era mobile-first ini. Mari pelajari teknik-teknik modern untuk membuat website yang tampil sempurna di semua device.

## Mobile-First Approach

Mulai design dari layar terkecil, lalu scale up:

\`\`\`css
/* Base styles untuk mobile */
.container {
  padding: 1rem;
  font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    font-size: 18px;
  }
}
\`\`\`

## Flexible Units

Gunakan unit yang responsif:

### Relative Units:
- **rem**: Relative to root font-size
- **em**: Relative to parent font-size  
- **%**: Relative to parent element
- **vw/vh**: Relative to viewport

\`\`\`css
.hero {
  height: 100vh; /* Full viewport height */
  padding: 5vw;   /* 5% of viewport width */
  font-size: clamp(1.5rem, 4vw, 3rem); /* Responsive font */
}
\`\`\`

## CSS Grid & Flexbox

### CSS Grid untuk Layout:
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

### Flexbox untuk Components:
\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
\`\`\`

## Responsive Images

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}

/* Art direction dengan picture element */
\`\`\`

\`\`\`html
<picture>
  <source media="(min-width: 768px)" srcset="desktop.jpg">
  <source media="(min-width: 480px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="Responsive image">
</picture>
\`\`\`

## Container Queries (Modern)

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## Performance Tips

1. **Minimize CSS**: Gunakan tools seperti PurgeCSS
2. **Critical CSS**: Load critical styles inline
3. **Avoid @import**: Gunakan link tags
4. **Optimize fonts**: Use font-display: swap

## Testing Responsiveness

- Chrome DevTools device simulation
- Real device testing
- Tools seperti BrowserStack
- Responsive design checkers

## Common Breakpoints

\`\`\`css
/* Mobile first breakpoints */
@media (min-width: 480px)  { /* Small mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
\`\`\`

## Kesimpulan

Responsive design yang baik membutuhkan perencanaan dari awal. Dengan menggunakan mobile-first approach, flexible units, dan modern CSS techniques, kita bisa membuat website yang tampil optimal di semua device.

Ingat: test di real devices, bukan hanya browser DevTools!
    `,
  },
  {
    id: 3,
    title: "Optimasi Performa Web dengan Next.js",
    excerpt:
      "Cara mengoptimalkan performa aplikasi Next.js Anda. Image optimization, code splitting, dan caching strategies.",
    date: "2024-01-05",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Next.js",
    slug: "nextjs-performance-optimization",
    content: `
# Optimasi Performa Web dengan Next.js

Next.js menyediakan banyak fitur built-in untuk optimasi performa. Mari pelajari cara memanfaatkannya untuk membuat aplikasi yang super cepat.

## Image Optimization

Next.js Image component otomatis mengoptimalkan gambar:

\`\`\`jsx
import Image from 'next/image';

function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority // Load immediately
      placeholder="blur" // Show blur while loading
      blurDataURL="data:image/jpeg;base64,..." // Blur placeholder
    />
  );
}
\`\`\`

### Fitur Image Optimization:
- Automatic WebP/AVIF conversion
- Responsive images
- Lazy loading by default
- Blur placeholder
- Priority loading untuk above-the-fold images

## Code Splitting

Next.js otomatis melakukan code splitting per page:

\`\`\`jsx
// Dynamic imports untuk component besar
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR untuk component ini
});

// Dynamic imports dengan named exports
const Chart = dynamic(() => import('../components/Chart').then(mod => mod.Chart));
\`\`\`

## Rendering Strategies

### Static Site Generation (SSG)
\`\`\`jsx
// getStaticProps - build time
export async function getStaticProps() {
  const data = await fetchData();
  
  return {
    props: { data },
    revalidate: 3600 // ISR - revalidate every hour
  };
}
\`\`\`

### Server-Side Rendering (SSR)
\`\`\`jsx
// getServerSideProps - request time
export async function getServerSideProps(context) {
  const data = await fetchUserData(context.req);
  
  return {
    props: { data }
  };
}
\`\`\`

### Client-Side Rendering (CSR)
\`\`\`jsx
import { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);
  
  return user ? <UserProfile user={user} /> : <Loading />;
}
\`\`\`

## Caching Strategies

### HTTP Caching Headers
\`\`\`javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          }
        ]
      }
    ];
  }
};
\`\`\`

### SWR untuk Data Fetching
\`\`\`jsx
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return <div>Hello {data.name}!</div>;
}
\`\`\`

## Bundle Analysis

Analisis bundle size dengan webpack-bundle-analyzer:

\`\`\`bash
npm install --save-dev @next/bundle-analyzer
\`\`\`

\`\`\`javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  // config
});
\`\`\`

\`\`\`bash
ANALYZE=true npm run build
\`\`\`

## Font Optimization

\`\`\`jsx
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
\`\`\`

## Performance Monitoring

### Web Vitals
\`\`\`jsx
// pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics
}
\`\`\`

### Lighthouse CI
\`\`\`json
// .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.8.x
          lhci autorun
\`\`\`

## Best Practices Checklist

- ✅ Gunakan Next.js Image component
- ✅ Implement proper caching headers
- ✅ Use dynamic imports untuk code splitting
- ✅ Pilih rendering strategy yang tepat
- ✅ Monitor Web Vitals
- ✅ Optimize fonts dengan font-display: swap
- ✅ Minimize JavaScript bundle
- ✅ Use CDN untuk static assets

## Kesimpulan

Next.js memberikan tools yang powerful untuk optimasi performa. Dengan memanfaatkan fitur-fitur built-in dan mengikuti best practices, kita bisa membuat aplikasi yang loading-nya super cepat dan memberikan user experience yang excellent.

Remember: Performance is a feature, not an afterthought!
    `,
  },
  {
    id: 4,
    title: "Design System: Membangun Konsistensi UI",
    excerpt:
      "Pentingnya design system dalam development modern. Cara membuat dan maintain component library untuk team.",
    date: "2023-12-28",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "UI/UX",
    slug: "design-system-guide",
    content: `
# Design System: Membangun Konsistensi UI

Design system adalah kumpulan reusable components dan guidelines yang membantu tim membangun produk dengan konsisten dan efisien.

## Apa itu Design System?

Design system terdiri dari:
- **Design tokens**: Colors, typography, spacing
- **Components**: Button, Input, Card, dll
- **Patterns**: Layout patterns, interaction patterns
- **Guidelines**: Usage guidelines, do's and don'ts

## Manfaat Design System

### Untuk Developer:
- Faster development
- Consistent codebase
- Easier maintenance
- Better collaboration

### Untuk Designer:
- Design consistency
- Faster prototyping
- Clear specifications
- Scalable design

### Untuk Business:
- Brand consistency
- Reduced development cost
- Faster time to market
- Better user experience

## Membangun Design System

### 1. Design Tokens

\`\`\`css
:root {
  /* Colors */
  --color-primary-50: #f0f9ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}
\`\`\`

### 2. Base Components

\`\`\`jsx
// Button component
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-md transition-colors';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 hover:bg-gray-50'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

### 3. Compound Components

\`\`\`jsx
// Card component system
const Card = ({ children, className = '' }) => (
  <div className={\`bg-white rounded-lg shadow-md \${className}\`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">
    {children}
  </div>
);

const CardBody = ({ children }) => (
  <div className="px-6 py-4">
    {children}
  </div>
);

const CardFooter = ({ children }) => (
  <div className="px-6 py-4 border-t border-gray-200">
    {children}
  </div>
);

// Usage
<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
\`\`\`

## Documentation

### Storybook untuk Component Library

\`\`\`javascript
// Button.stories.js
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline']
    }
  }
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const AllVariants = () => (
  <div className="space-x-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </div>
);
\`\`\`

## Tools & Technologies

### Design Tools:
- **Figma**: Design system management
- **Sketch**: Design libraries
- **Adobe XD**: Component states

### Development Tools:
- **Storybook**: Component documentation
- **Chromatic**: Visual testing
- **Lerna**: Monorepo management
- **Rollup/Webpack**: Bundle components

### CSS-in-JS Solutions:
- **Styled Components**: Dynamic styling
- **Emotion**: Performance-focused
- **Stitches**: Type-safe CSS-in-JS

## Maintenance & Governance

### Versioning Strategy:
\`\`\`json
{
  "name": "@company/design-system",
  "version": "2.1.0",
  "peerDependencies": {
    "react": ">=16.8.0"
  }
}
\`\`\`

### Breaking Changes:
- Major version untuk breaking changes
- Migration guides
- Deprecation warnings
- Codemods untuk automated migration

## Best Practices

1. **Start small**: Mulai dengan components yang paling sering digunakan
2. **Document everything**: Usage, props, examples
3. **Test thoroughly**: Unit tests, visual regression tests
4. **Version carefully**: Semantic versioning
5. **Gather feedback**: Regular reviews dengan team
6. **Automate**: CI/CD untuk testing dan publishing

## Kesimpulan

Design system adalah investasi jangka panjang yang memberikan ROI tinggi. Dengan planning yang baik dan execution yang konsisten, design system akan mempercepat development dan meningkatkan kualitas produk.

Mulai dari yang kecil, iterate berdasarkan feedback, dan jangan lupa untuk selalu maintain documentation!
    `
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizki",
    position: "Product Manager",
    company: "Tech Startup",
    content:
      "Bekerja dengan developer yang sangat talented. Selalu deliver project tepat waktu dengan kualitas code yang excellent.",
    avatar:
      "https://ui-avatars.com/api/?name=Ahmad+Rizki&size=100&background=a78bfa&color=0a192f",
  },
  {
    id: 2,
    name: "Sarah Putri",
    position: "UI/UX Designer",
    company: "Digital Agency",
    content:
      "Collaboration yang smooth! Mampu mengimplementasikan design dengan pixel-perfect dan memberikan feedback yang konstruktif.",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Putri&size=100&background=a78bfa&color=0a192f",
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "CTO",
    company: "E-Commerce Platform",
    content:
      "Expertise dalam React dan Next.js sangat membantu dalam mengembangkan platform kami. Highly recommended!",
    avatar:
      "https://ui-avatars.com/api/?name=Budi+Santoso&size=100&background=a78bfa&color=0a192f",
  },
];
