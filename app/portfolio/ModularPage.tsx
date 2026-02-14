"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Import komponen admin yang sudah dipisah
import Home from "../components/admin/Home";
import About from "../components/admin/About";
import Skill from "../components/admin/Skill";
import Projects from "../components/admin/Projects";
import Experience from "../components/admin/Experience";
import Blog from "../components/admin/Blog";
import Contact from "../components/admin/Contact";

import { toast } from "@/hooks/use-toast";
import { personalInfo, skills } from "../frontend/src/mock/mockData";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [displayText, setDisplayText] = useState("");
  const [skillsInView, setSkillsInView] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: number]: number}>({});
  const [skillsCompleted, setSkillsCompleted] = useState<{[key: number]: boolean}>({});
  const [loveHearts, setLoveHearts] = useState<Array<{id: number, x: number, y: number}>>([]);
  const isTyping = true;
  const fullText = personalInfo.tagline;

  // Typewriter effect
  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, fullText]);

  // Skills animation effect
  useEffect(() => {
    if (skillsInView) {
      skills.forEach((skill, index) => {
        const animationDelay = index * 150; // Stagger animation
        setTimeout(() => {
          const duration = 2500; // 2.5 seconds for smoother animation
          const steps = 80; // More steps for smoother animation
          const increment = skill.level / steps;
          let currentValue = 0;
          
          const timer = setInterval(() => {
            // Easing function for smooth animation
            const progress = currentValue / skill.level;
            const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
            currentValue += increment;
            
            if (currentValue >= skill.level) {
              currentValue = skill.level;
              clearInterval(timer);
              // Mark skill as completed untuk wave animation
              setTimeout(() => {
                setSkillsCompleted(prev => ({
                  ...prev,
                  [index]: true
                }));
              }, 500); // Delay sebelum wave dimulai
            }
            
            setAnimatedSkills(prev => ({
              ...prev,
              [index]: Math.round(currentValue)
            }));
          }, duration / steps);
        }, animationDelay);
      });
    }
  }, [skillsInView]);

  // Intersection Observer for skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'skills') {
            setSkillsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Love hearts effect
  const createLoveHearts = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX + (Math.random() - 0.5) * 40,
      y: centerY + (Math.random() - 0.5) * 40,
    }));
    
    setLoveHearts(prev => [...prev, ...newHearts]);
    
    // Remove hearts after animation
    setTimeout(() => {
      setLoveHearts(prev => prev.filter(heart => !newHearts.find(newHeart => newHeart.id === heart.id)));
    }, 3000);
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, saya akan segera menghubungi Anda.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark-purple text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gradient-primary">
              &lt;Dev Area /&gt;
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-gray-300 hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === link.id ? "text-purple-400" : ""
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-purple-800/30">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors ${
                  activeSection === link.id ? "text-purple-400" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Sections menggunakan komponen admin yang sudah dipisah */}
      <Home displayText={displayText} scrollToSection={scrollToSection} />
      <About loveHearts={loveHearts} createLoveHearts={createLoveHearts} />
      <Skill animatedSkills={animatedSkills} skillsCompleted={skillsCompleted} />
      <Projects />
      <Experience />
      <Blog />
      <Contact 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
      />

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Card */}
          <div className="bg-gray-900 border border-gray-700 hover:border-purple-500 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-300 glow-purple">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="md:col-span-1">
                <div className="text-2xl font-bold text-gradient-primary mb-4">
                  &lt;Dev Area /&gt;
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Frontend Developer yang passionate dalam menciptakan user interface yang indah dan fungsional. 
                  Selalu siap untuk project dan kolaborasi baru.
                </p>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.social.github}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={personalInfo.social.twitter}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={personalInfo.social.instagram}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-purple-300 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {navLinks.slice(0, 5).map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold text-purple-300 mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">Available for freelance</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="border-t border-purple-800/30 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
                    <span>Dibuat dengan</span>
                    <svg className="w-4 h-4 text-purple-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>oleh <span className="text-purple-400 font-semibold">{personalInfo.name}</span></span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    © 2024 All rights reserved. Built with Next.js & Tailwind CSS
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <button className="hover:text-purple-400 transition-colors">Privacy Policy</button>
                  <span>•</span>
                  <button className="hover:text-purple-400 transition-colors">Terms of Service</button>
                  <span>•</span>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-1 hover:text-purple-400 transition-colors group"
                  >
                    <span>Back to Top</span>
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;