"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, ExternalLink, Code2, Briefcase, BookOpen, MessageSquare, Menu, X, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

import { toast } from "@/hooks/use-toast";

import { personalInfo, skills, projects, experiences, blogPosts } from '../frontend/src/mock/mockData';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [displayText, setDisplayText] = useState('');
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

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    setFormData({ name: '', email: '', message: '' });
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: Code2 },
    { id: 'about', label: 'About', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a192f]/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-[#a78bfa]">
              &lt;Dev Area /&gt;
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-gray-300 hover:text-[#a78bfa] transition-colors duration-300 ${activeSection === link.id ? 'text-[#a78bfa]' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#112240] border-t border-gray-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#1d3557] hover:text-[#a78bfa] transition-colors ${activeSection === link.id ? 'text-[#a78bfa]' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-[#a78bfa] text-lg font-mono">Hi, nama saya Alfian Jack</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-100">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-xl md:text-2xl text-[#a78bfa] mb-8 h-8 font-mono">
            {displayText}<span className="animate-pulse">|</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#8b5cf6] hover:text-white transition-all duration-300"
            >
              Lihat Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#a78bfa] text-white hover:bg-[#8b5cf6] transition-all duration-300"
            >
              Hubungi Saya
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-[#a78bfa]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#a78bfa] font-mono text-xl">01.</span> Tentang Saya
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex items-center gap-4 text-gray-400 mb-4">
                <MapPin size={20} className="text-[#a78bfa]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <Mail size={20} className="text-[#a78bfa]" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex gap-4">
                <a href={personalInfo.social.github} className="text-gray-400 hover:text-[#a78bfa] transition-colors">
                  <Github size={24} />
                </a>
                <a href={personalInfo.social.linkedin} className="text-gray-400 hover:text-[#a78bfa] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={personalInfo.social.twitter} className="text-gray-400 hover:text-[#a78bfa] transition-colors">
                  <Twitter size={24} />
                </a>
                <a href={personalInfo.social.instagram} className="text-gray-400 hover:text-[#a78bfa] transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-[#a78bfa] transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#a78bfa] font-mono text-xl">02.</span> Skills & Teknologi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-[#1d3557] border-gray-700 hover:border-[#a78bfa] transition-all duration-300 hover:transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">{skill.name}</h3>
                  <Badge variant="secondary" className="bg-[#a78bfa]/20 text-[#a78bfa] border-[#a78bfa]/30">
                    {skill.category}
                  </Badge>
                  <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#a78bfa] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#a78bfa] font-mono text-xl">03.</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-[#112240] border-gray-700 hover:border-[#a78bfa] transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#a78bfa]/10 group-hover:bg-[#a78bfa]/20 transition-colors"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-[#a78bfa] border-[#a78bfa]/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-[#a78bfa] text-[#a78bfa] hover:bg-[#8b5cf6] hover:text-white">
                      <ExternalLink size={16} className="mr-1" /> Live
                    </Button>
                    <Button size="sm" variant="outline" className="border-[#a78bfa] text-[#a78bfa] hover:bg-[#8b5cf6] hover:text-white">
                      <Github size={16} className="mr-1" /> Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-[#112240]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#a78bfa] font-mono text-xl">04.</span> Pengalaman
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="bg-[#1d3557] border-gray-700 hover:border-[#a78bfa] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#a78bfa] mb-1">{exp.position}</h3>
                      <p className="text-lg text-gray-100">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-2 md:mt-0">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-[#a78bfa] mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#a78bfa] font-mono text-xl">05.</span> Blog & Artikel
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-[#112240] border-gray-700 hover:border-[#a78bfa] transition-all duration-300 hover:transform hover:-translate-y-1 overflow-hidden group cursor-pointer">
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
                    <Badge className="bg-[#a78bfa]/20 text-[#a78bfa] border-[#a78bfa]/30">
                      {post.category}
                    </Badge>
                    <span className="text-gray-400 text-sm">{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-[#a78bfa] transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-gray-500 text-xs">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#112240]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            <span className="text-[#a78bfa] font-mono text-xl">06.</span> Hubungi Saya
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Punya project atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                className="bg-[#1d3557] border-gray-700 text-gray-100 focus:border-[#a78bfa]"
                required
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                className="bg-[#1d3557] border-gray-700 text-gray-100 focus:border-[#a78bfa]"
                required
              />
            </div>
            <div>
              <Textarea 
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                className="bg-[#1d3557] border-gray-700 text-gray-100 focus:border-[#a78bfa] min-h-[150px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-[#a78bfa] text-white hover:bg-[#8b5cf6] transition-all duration-300"
            >
              Kirim Pesan
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Dibuat dengan <span className="text-[#a78bfa]">❤</span> oleh {personalInfo.name}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
