import React from 'react';
import { Badge } from '@/components/ui/Badge';

const CssResponsiveArticle = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
          CSS
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary leading-tight">
          Best Practices CSS untuk Website Responsif
        </h1>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          Responsive design bukan lagi pilihan, tapi keharusan di era mobile-first ini. Mari pelajari teknik-teknik modern 
          untuk membuat website yang tampil sempurna di semua device.
        </p>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Mobile-First Approach</h2>
        <p>
          Mobile-first approach berarti kita mendesign untuk layar terkecil terlebih dahulu, kemudian scale up untuk layar yang lebih besar. 
          Pendekatan ini lebih efisien karena lebih mudah menambahkan fitur daripada menghilangkannya.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`/* Base styles untuk mobile (320px+) */
.container {
  padding: 1rem;
  font-size: 14px;
  max-width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 16px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    font-size: 18px;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Flexible Units</h2>
        <p>
          Menggunakan unit yang responsif adalah kunci untuk membuat layout yang fleksibel. 
          Hindari fixed units seperti px untuk dimensi yang perlu beradaptasi.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Relative Units:</h3>
          <div className="space-y-3">
            <div>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">rem</code>
              <span className="ml-2">Relative to root font-size (16px default)</span>
            </div>
            <div>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">em</code>
              <span className="ml-2">Relative to parent element font-size</span>
            </div>
            <div>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">%</code>
              <span className="ml-2">Relative to parent element</span>
            </div>
            <div>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">vw/vh</code>
              <span className="ml-2">Relative to viewport width/height</span>
            </div>
            <div>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">vmin/vmax</code>
              <span className="ml-2">Relative to smaller/larger viewport dimension</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`.hero {
  height: 100vh; /* Full viewport height */
  padding: 5vw;   /* 5% of viewport width */
  font-size: clamp(1.5rem, 4vw, 3rem); /* Responsive font */
}

.card {
  width: min(90%, 500px); /* Max 500px, but 90% on small screens */
  margin: 2rem auto;
  padding: clamp(1rem, 5%, 3rem); /* Fluid padding */
}

/* Modern CSS functions */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">CSS Grid & Flexbox</h2>
        
        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">CSS Grid untuk Layout</h3>
        <p>CSS Grid sangat powerful untuk membuat layout yang kompleks dan responsif:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`/* Auto-fit grid - kolom otomatis menyesuaikan */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Grid areas untuk layout kompleks */
.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .layout {
    grid-template-areas: 
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Flexbox untuk Components</h3>
        <p>Flexbox ideal untuk alignment dan distribusi space dalam components:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

.card-header {
  flex-shrink: 0; /* Tidak mengecil */
}

.card-body {
  flex-grow: 1; /* Mengambil space yang tersisa */
}

.card-footer {
  flex-shrink: 0;
  margin-top: auto; /* Push ke bawah */
}

/* Responsive flex direction */
.flex-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
    align-items: center;
  }
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Responsive Images</h2>
        <p>Images adalah salah satu elemen terberat di website. Optimasi yang tepat sangat penting:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`/* Basic responsive image */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Object-fit untuk kontrol aspect ratio */
.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* atau contain, fill */
  object-position: center;
}

/* Responsive background images */
.hero-bg {
  background-image: url('mobile.jpg');
  background-size: cover;
  background-position: center;
  min-height: 50vh;
}

@media (min-width: 768px) {
  .hero-bg {
    background-image: url('desktop.jpg');
    min-height: 100vh;
  }
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Picture Element untuk Art Direction</h3>
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`<!-- Art direction dengan picture element -->
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="desktop-large.jpg 1x, desktop-large@2x.jpg 2x">
  <source 
    media="(min-width: 768px)" 
    srcset="tablet.jpg 1x, tablet@2x.jpg 2x">
  <img 
    src="mobile.jpg" 
    srcset="mobile.jpg 1x, mobile@2x.jpg 2x"
    alt="Responsive image"
    loading="lazy">
</picture>`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Container Queries (Modern)</h2>
        <p>Container queries memungkinkan styling berdasarkan ukuran container, bukan viewport:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Style berdasarkan ukuran container */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    width: 200px;
    flex-shrink: 0;
  }
}

@container card (min-width: 600px) {
  .card {
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Performance Tips</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">1. Minimize CSS</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Gunakan tools seperti PurgeCSS untuk remove unused CSS</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Minify CSS untuk production</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Gunakan CSS-in-JS untuk automatic tree shaking</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">2. Critical CSS</h3>
            <p className="mb-3">Load critical styles inline untuk above-the-fold content:</p>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`<!-- Inline critical CSS -->
<style>
  .hero { /* critical styles */ }
  .navigation { /* critical styles */ }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">3. Font Optimization</h3>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`/* Use font-display for better loading */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Show fallback font immediately */
}

/* Preload important fonts */
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Common Breakpoints</h2>
        <p>Gunakan breakpoints yang masuk akal berdasarkan content, bukan device spesifik:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`/* Mobile first breakpoints */
/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) { }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media (min-width: 600px) { }

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (laptops/desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) { }

/* Custom breakpoints berdasarkan content */
@media (min-width: 480px)  { /* Small mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Testing Responsiveness</h2>
        
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Tools untuk Testing:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Chrome DevTools:</strong> Device simulation dan responsive mode</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Real devices:</strong> Test di device fisik untuk akurasi</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>BrowserStack:</strong> Cross-browser dan cross-device testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Responsive Design Checker:</strong> Online tools untuk quick check</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Modern CSS Features</h2>
        
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`/* CSS Custom Properties untuk theming */
:root {
  --spacing-unit: 1rem;
  --max-width: 1200px;
  --breakpoint-md: 768px;
}

.container {
  max-width: var(--max-width);
  padding: var(--spacing-unit);
}

/* CSS Logical Properties */
.card {
  margin-block: 2rem; /* margin-top + margin-bottom */
  margin-inline: auto; /* margin-left + margin-right */
  padding-inline: 1rem; /* padding-left + padding-right */
}

/* Modern layout dengan subgrid */
.grid-parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.grid-child {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Kesimpulan</h2>
        <p>
          Responsive design yang baik membutuhkan perencanaan dari awal dan pemahaman mendalam tentang CSS modern. 
          Dengan menggunakan mobile-first approach, flexible units, dan modern CSS techniques, kita bisa membuat website 
          yang tampil optimal di semua device.
        </p>
        
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">🎯 Checklist Responsive Design</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>Mobile-first approach</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>Flexible units (rem, %, vw/vh)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>Responsive images dengan srcset</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>CSS Grid dan Flexbox</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>Performance optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>Real device testing</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-purple-300 mt-8">
          Remember: Test di real devices, bukan hanya browser DevTools. User experience yang baik adalah tujuan utama responsive design!
        </p>
      </div>
    </div>
  );
};

export default CssResponsiveArticle;