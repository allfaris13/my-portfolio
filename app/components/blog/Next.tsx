import React from 'react';
import { Badge } from '@/components/ui/Badge';

const NextJsOptimizationArticle = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
          Next.js
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary leading-tight">
          Optimasi Performa Web dengan Next.js
        </h1>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          Next.js menyediakan banyak fitur built-in untuk optimasi performa. Mari pelajari cara memanfaatkannya 
          untuk membuat aplikasi yang super cepat dan memberikan user experience yang excellent.
        </p>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Image Optimization</h2>
        <p>
          Next.js Image component adalah salah satu fitur paling powerful untuk optimasi performa. 
          Component ini otomatis mengoptimalkan gambar dengan berbagai teknik modern.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`import Image from 'next/image';

function Hero() {
  return (
    <div className="hero">
      <Image
        src="/hero.jpg"
        alt="Hero image"
        width={800}
        height={600}
        priority // Load immediately untuk above-the-fold
        placeholder="blur" // Show blur while loading
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
}

// Untuk gambar dari external source
function ProfileImage({ user }) {
  return (
    <Image
      src={user.avatar}
      alt={user.name}
      width={200}
      height={200}
      className="rounded-full"
      // Untuk external images, tambahkan domain di next.config.js
    />
  );
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Fitur Image Optimization:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Format conversion:</strong> Otomatis convert ke WebP/AVIF</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Responsive images:</strong> Generate multiple sizes</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Lazy loading:</strong> Load images saat dibutuhkan</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Blur placeholder:</strong> Smooth loading experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Priority loading:</strong> Load critical images first</span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Konfigurasi Image Optimization</h3>
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Domains untuk external images
    domains: ['example.com', 'cdn.example.com'],
    
    // Atau gunakan remotePatterns (recommended)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    
    // Custom image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Image formats
    formats: ['image/webp', 'image/avif'],
    
    // Quality (1-100)
    quality: 75,
  },
}

module.exports = nextConfig`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Code Splitting</h2>
        <p>
          Next.js otomatis melakukan code splitting per page, tapi kita bisa mengoptimalkan lebih lanjut 
          dengan dynamic imports untuk components yang besar atau tidak selalu dibutuhkan.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic import dengan loading component
const HeavyComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <div className="animate-pulse">Loading...</div>,
  ssr: false // Disable SSR untuk component ini
});

// Dynamic import dengan named exports
const Chart = dynamic(() => 
  import('../components/Chart').then(mod => mod.Chart)
);

// Dynamic import dengan conditional loading
const AdminPanel = dynamic(() => import('../components/AdminPanel'), {
  ssr: false,
});

function Dashboard({ user }) {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Load heavy component only when needed */}
      <Suspense fallback={<div>Loading chart...</div>}>
        <Chart data={chartData} />
      </Suspense>
      
      {/* Conditional loading */}
      {user.isAdmin && <AdminPanel />}
    </div>
  );
}

// Dynamic import untuk pages
const DynamicPage = dynamic(() => import('../pages/heavy-page'), {
  loading: () => <p>Loading page...</p>,
});`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Rendering Strategies</h2>
        <p>
          Next.js menyediakan berbagai rendering strategies. Pilih yang tepat berdasarkan kebutuhan data dan user experience.
        </p>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Static Site Generation (SSG)</h3>
        <p>Ideal untuk content yang tidak sering berubah:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  // Fetch data at build time
  const post = await fetchPost(params.slug);
  
  return {
    props: {
      post,
    },
    // ISR - Revalidate every hour
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  // Generate paths at build time
  const posts = await fetchAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // atau true, false
  };
}

function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default BlogPost;`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Server-Side Rendering (SSR)</h3>
        <p>Untuk data yang selalu berubah atau personalized content:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// pages/profile.js
export async function getServerSideProps(context) {
  // Fetch data on each request
  const { req, res, query } = context;
  
  // Get user from session/cookie
  const user = await getUserFromSession(req);
  
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  const profile = await fetchUserProfile(user.id);
  
  return {
    props: {
      profile,
    },
  };
}

function Profile({ profile }) {
  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
      <p>Last login: {profile.lastLogin}</p>
    </div>
  );
}

export default Profile;`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Client-Side Rendering (CSR)</h3>
        <p>Untuk data yang tidak perlu SEO atau loading setelah user interaction:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`import { useEffect, useState } from 'react';
import useSWR from 'swr';

// Dengan useState dan useEffect
function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <div>Loading...</div>;
  return user ? <UserProfile user={user} /> : <div>No user</div>;
}

// Dengan SWR (recommended)
const fetcher = (url) => fetch(url).then((res) => res.json());

function ProfileWithSWR() {
  const { data: user, error, isLoading } = useSWR('/api/user', fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  
  return <UserProfile user={user} />;
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Caching Strategies</h2>
        
        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">HTTP Caching Headers</h3>
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// next.config.js
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
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};

// API route dengan caching
// pages/api/posts.js
export default function handler(req, res) {
  // Set cache headers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  
  const posts = getPosts();
  res.json(posts);
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">SWR untuk Data Fetching</h3>
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error, mutate } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 30000, // Refresh every 30 seconds
    dedupingInterval: 2000, // Dedupe requests within 2 seconds
  });
  
  const updateProfile = async (newData) => {
    // Optimistic update
    mutate({ ...data, ...newData }, false);
    
    // Update on server
    await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(newData),
    });
    
    // Revalidate
    mutate();
  };
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return <div>Hello {data.name}!</div>;
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Bundle Analysis</h2>
        <p>Analisis bundle size untuk mengidentifikasi bottleneck dan optimasi yang diperlukan:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  // Your Next.js config
  experimental: {
    // Enable modern bundling
    esmExternals: true,
  },
  
  webpack: (config, { isServer }) => {
    // Custom webpack config
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
});

# Run analysis
ANALYZE=true npm run build`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Font Optimization</h2>
        <p>Next.js menyediakan built-in font optimization untuk Google Fonts dan custom fonts:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// app/layout.js (App Router)
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

// Custom font
import localFont from 'next/font/local';

const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
});

// pages/_document.js (Pages Router)
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
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Performance Monitoring</h2>
        
        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Web Vitals</h3>
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// pages/_app.js
export function reportWebVitals(metric) {
  const { id, name, label, value } = metric;
  
  // Log to console
  console.log(metric);
  
  // Send to analytics
  if (typeof window !== 'undefined') {
    // Google Analytics
    window.gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    });
    
    // Custom analytics
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify(metric),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Custom performance measurement
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send metric to your analytics service
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Lighthouse CI</h3>
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_APP_TOKEN }}

# lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm start',
      url: ['http://localhost:3000', 'http://localhost:3000/about'],
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Advanced Optimizations</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">1. Preloading</h3>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`import Link from 'next/link';
import { useRouter } from 'next/router';

// Preload pages on hover
<Link href="/about" prefetch={true}>
  <a>About</a>
</Link>

// Programmatic preloading
const router = useRouter();
router.prefetch('/dashboard');

// Preload resources
<link rel="preload" href="/api/data" as="fetch" crossorigin="anonymous" />
<link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossorigin />`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">2. Service Worker</h3>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // Your Next.js config
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">3. Edge Functions</h3>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`// pages/api/edge-example.js
export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  return new Response(
    JSON.stringify({ message: 'Hello from Edge!' }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Best Practices Checklist</h2>
        
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">🚀 Performance Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Gunakan Next.js Image component</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Implement proper caching headers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Use dynamic imports untuk code splitting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Pilih rendering strategy yang tepat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Monitor Web Vitals</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Optimize fonts dengan font-display: swap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Minimize JavaScript bundle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Use CDN untuk static assets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Implement proper error boundaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Regular performance audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Kesimpulan</h2>
        <p>
          Next.js memberikan tools yang powerful untuk optimasi performa out-of-the-box. Dengan memanfaatkan fitur-fitur 
          built-in seperti Image optimization, automatic code splitting, dan berbagai rendering strategies, kita bisa 
          membuat aplikasi yang loading-nya super cepat.
        </p>
        
        <p className="text-lg text-purple-300 mt-6">
          Remember: Performance is a feature, not an afterthought! Selalu monitor, measure, dan optimize berdasarkan 
          data real user metrics untuk memberikan experience terbaik kepada users.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">🎯 Next Steps</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">1.</span>
              <span>Audit aplikasi existing dengan Lighthouse</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">2.</span>
              <span>Implement bundle analyzer untuk identify bottlenecks</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">3.</span>
              <span>Set up Web Vitals monitoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">4.</span>
              <span>Optimize images dan fonts</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">5.</span>
              <span>Implement proper caching strategy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextJsOptimizationArticle;