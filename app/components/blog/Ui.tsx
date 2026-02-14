import React from 'react';
import { Badge } from '@/components/ui/Badge';

const DesignSystemArticle = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
          UI/UX
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary leading-tight">
          Design System: Membangun Konsistensi UI
        </h1>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          Design system adalah kumpulan reusable components dan guidelines yang membantu tim membangun produk 
          dengan konsisten dan efisien. Mari pelajari cara membangun design system yang scalable dan maintainable.
        </p>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Apa itu Design System?</h2>
        <p>
          Design system adalah lebih dari sekedar component library. Ini adalah ecosystem lengkap yang mencakup 
          design principles, components, patterns, dan guidelines yang membantu tim bekerja lebih efisien.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Komponen Design System:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Design tokens:</strong> Colors, typography, spacing, shadows</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Components:</strong> Button, Input, Card, Modal, dll</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Patterns:</strong> Layout patterns, interaction patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Guidelines:</strong> Usage guidelines, do's and don'ts</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span><strong>Documentation:</strong> How to use, examples, API reference</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Manfaat Design System</h2>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Untuk Developer</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Faster development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Consistent codebase</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Easier maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Better collaboration</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Untuk Designer</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Design consistency</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Faster prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Clear specifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Scalable design</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Untuk Business</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Brand consistency</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Reduced development cost</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Faster time to market</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Better user experience</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Membangun Design System</h2>
        
        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">1. Design Tokens</h3>
        <p>Design tokens adalah nilai-nilai fundamental yang mendefinisikan visual design:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`:root {
  /* Colors */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-900: #1e3a8a;
  
  /* Typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">2. Base Components</h3>
        <p>Mulai dengan components yang paling fundamental dan sering digunakan:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// Button component dengan variants
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  disabled = false,
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
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Documentation dengan Storybook</h2>
        <p>Storybook adalah tool terbaik untuk mendokumentasikan dan testing component library.</p>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Best Practices</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">1. Start Small</h3>
            <p className="mb-3">Mulai dengan components yang paling sering digunakan:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Button, Input, Card, Modal</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Typography, Colors, Spacing</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Basic layout components</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">2. Document Everything</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Usage guidelines dan examples</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Props API documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Do's and don'ts</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Accessibility guidelines</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">3. Gather Feedback</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Regular reviews dengan design dan development team</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Usage analytics dari component library</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Feedback channels untuk improvement suggestions</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Kesimpulan</h2>
        <p>
          Design system adalah investasi jangka panjang yang memberikan ROI tinggi. Dengan planning yang baik, 
          execution yang konsisten, dan maintenance yang proper, design system akan mempercepat development 
          dan meningkatkan kualitas produk secara signifikan.
        </p>
        
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">🎯 Implementation Roadmap</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-purple-400 mr-3 font-bold">Phase 1:</span>
              <span>Design tokens, basic components (Button, Input, Card)</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-400 mr-3 font-bold">Phase 2:</span>
              <span>Complex components, patterns, Storybook setup</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-400 mr-3 font-bold">Phase 3:</span>
              <span>Testing, CI/CD, versioning strategy</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-400 mr-3 font-bold">Phase 4:</span>
              <span>Adoption, feedback, iteration, governance</span>
            </div>
          </div>
        </div>

        <p className="text-lg text-purple-300 mt-8">
          Mulai dari yang kecil, iterate berdasarkan feedback, dan jangan lupa untuk selalu maintain documentation. 
          Design system yang sukses adalah yang digunakan dan diadopsi oleh seluruh tim!
        </p>
      </div>
    </div>
  );
};

export default DesignSystemArticle;