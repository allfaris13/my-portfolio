"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import { blogPosts } from "../../frontend/src/mock/mockData";

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient-primary font-mono text-xl">
              05.
            </span>{" "}
            Blog & Artikel
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, idx) => (
              <FadeUp key={post.id} delayMs={idx * 80}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 motion-safe:transition-all motion-safe:duration-300 hover:transform hover:-translate-y-1 hover:scale-105 overflow-hidden group cursor-pointer glow-purple">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {post.category}
                        </Badge>
                        <span className="text-gray-400 text-sm">
                          {post.readTime} read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Blog;