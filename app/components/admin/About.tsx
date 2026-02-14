"use client";
import React from "react";
import Image from "next/image";
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { personalInfo } from "../../frontend/src/mock/mockData";

interface AboutProps {
  loveHearts: Array<{id: number, x: number, y: number}>;
  createLoveHearts: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const About: React.FC<AboutProps> = ({ loveHearts, createLoveHearts }) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient-primary font-mono text-xl">
              01.
            </span>{" "}
            Tentang Saya
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex items-center gap-4 text-gray-400 mb-4">
                <MapPin size={20} className="text-purple-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <Mail size={20} className="text-purple-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.github}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={personalInfo.social.instagram}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative overflow-visible">
                <div 
                  className="w-64 h-64 rounded-lg overflow-hidden border-4 border-purple-500 transform hover:scale-105 transition-transform duration-300 glow-purple cursor-pointer"
                  onMouseEnter={createLoveHearts}
                >
                  <Image
                    src={personalInfo.photo || personalInfo.avatar}
                    alt={`Foto ${personalInfo.name}`}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Love Hearts Container - Extended area */}
                <div className="absolute inset-0 pointer-events-none" style={{ 
                  left: '-100px', 
                  right: '-100px', 
                  top: '-100px', 
                  bottom: '-100px',
                  width: 'calc(100% + 200px)',
                  height: 'calc(100% + 200px)'
                }}>
                  {loveHearts.map((heart, index) => (
                    <div
                      key={heart.id}
                      className={`love-heart love-heart-${(index % 8) + 1}`}
                      style={{
                        left: `${heart.x + 100}px`,
                        top: `${heart.y + 100}px`,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default About;