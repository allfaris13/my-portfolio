import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { blogPosts } from "../../frontend/src/mock/mockData";
import { Button } from "@/components/ui/Button";
import ShareButton from "@/components/blog/ShareButton";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Debug: log the slug
  console.log("Current slug:", slug);
  console.log("Available posts:", blogPosts.map(p => p.slug));
  
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    console.log("Post not found for slug:", slug);
    return notFound();
  }

  // Simple content rendering for now
  const renderContent = () => {
    switch (slug) {
      case 'react-hooks-guide':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-6">
              Memahami React Hooks: useState dan useEffect
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              React Hooks telah mengubah cara kita menulis komponen React. Dengan hooks, kita bisa menggunakan state dan lifecycle methods dalam functional components tanpa perlu class components.
            </p>
            <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">useState Hook</h2>
              <p className="text-gray-300 mb-4">
                useState adalah hook paling dasar untuk mengelola state dalam functional component.
              </p>
              <div className="bg-black/50 rounded p-4">
                <pre className="text-sm text-gray-300">
                  <code>{`import React, { useState } from 'react';

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
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        );
      
      case 'responsive-css-best-practices':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-6">
              Best Practices CSS untuk Website Responsif
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Responsive design bukan lagi pilihan, tapi keharusan di era mobile-first ini. Mari pelajari teknik-teknik modern untuk membuat website yang tampil sempurna di semua device.
            </p>
            <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Mobile-First Approach</h2>
              <p className="text-gray-300 mb-4">
                Mobile-first approach berarti kita mendesign untuk layar terkecil terlebih dahulu, kemudian scale up untuk layar yang lebih besar.
              </p>
            </div>
          </div>
        );
      
      case 'nextjs-performance-optimization':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-6">
              Optimasi Performa Web dengan Next.js
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Next.js menyediakan banyak fitur built-in untuk optimasi performa. Mari pelajari cara memanfaatkannya untuk membuat aplikasi yang super cepat.
            </p>
            <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Image Optimization</h2>
              <p className="text-gray-300 mb-4">
                Next.js Image component adalah salah satu fitur paling powerful untuk optimasi performa.
              </p>
            </div>
          </div>
        );
      
      case 'design-system-guide':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-6">
              Design System: Membangun Konsistensi UI
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Design system adalah kumpulan reusable components dan guidelines yang membantu tim membangun produk dengan konsisten dan efisien.
            </p>
            <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Apa itu Design System?</h2>
              <p className="text-gray-300 mb-4">
                Design system adalah lebih dari sekedar component library. Ini adalah ecosystem lengkap yang mencakup design principles, components, patterns, dan guidelines.
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary mb-6">
              {post.title}
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              {post.excerpt}
            </p>
            <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-6">
              <p className="text-gray-300">
                Artikel ini sedang dalam pengembangan. Silakan kembali lagi nanti untuk konten lengkap.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark-purple text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gradient-primary">
              &lt;Dev Area /&gt;
            </Link>
            <Link href="/#blog">
              <Button variant="ghost" className="text-gray-300 hover:text-purple-400">
                <ArrowLeft size={20} className="mr-2" />
                Kembali ke Blog
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="bg-purple-500/20 text-purple-400 border border-purple-500/30 px-3 py-1 text-xs font-semibold rounded-full inline-block mb-4">
              {post.category}
            </div>
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <span>{new Date(post.date).toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none mb-12">
            {renderContent()}
          </article>

          {/* Article Footer */}
          <div className="border-t border-purple-800/30 pt-8 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <Link href="/#blog">
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  <ArrowLeft size={18} className="mr-2" />
                  Kembali ke Blog
                </Button>
              </Link>
              
              <ShareButton title={post.title} excerpt={post.excerpt} />
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gradient-primary mb-8">Artikel Lainnya</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-gray-900 border border-gray-700 hover:border-purple-500 rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 group">
                      <div className="relative h-32 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <span className="text-purple-400 text-2xl font-bold">
                          {relatedPost.category}
                        </span>
                      </div>
                      <div className="bg-purple-500/20 text-purple-400 border border-purple-500/30 px-3 py-1 text-xs font-semibold rounded-full inline-block mb-3">
                        {relatedPost.category}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-100 group-hover:text-purple-400 transition-colors mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
