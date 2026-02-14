"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import FadeUp from "@/components/ui/FadeUp";
import { personalInfo } from "../../frontend/src/mock/mockData";

interface ContactProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    message: string;
  }>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Contact: React.FC<ContactProps> = ({ formData, setFormData, handleSubmit }) => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-4x2 font-bold mb-6 text-gradient-primary">
              Hubungi Alfian Jack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Punya pertanyaan mengenai project atau ingin melakukan kolaborasi? Kami siap membantu 
              mewujudkan ide Anda menjadi kenyataan.
            </p>
          </div>
          
          {/* Contact Container - Transparent Wrapper */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-purple-500/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-3 max-w-7x1 mx-auto">
              {/* Contact Info Card */}
              <div className="bg-gray-900/80 rounded-3xl p-4 border border-purple-500/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informasi Kontak
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Layanan developer kami tersedia setiap hari untuk menjawab kebutuhan project Anda
                </p>
                
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">TELEPON</p>
                      <p className="text-white font-semibold">+62 895 325 797 281</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">EMAIL</p>
                      <p className="text-white font-semibold">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">LOKASI</p>
                      <p className="text-white font-semibold">
                         {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.social.instagram}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                      </svg>
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={personalInfo.social.github}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form - Transparent */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nama Lengkap
                      </label>
                      <Input
                        name="from_name"
                        placeholder="Contoh: Budi Setiawan"
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/10 border-purple-500/30 text-gray-100 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl py-3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Alamat Email
                      </label>
                      <Input
                        name="from_email"
                        type="email"
                        placeholder="budi@email.com"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/10 border-purple-500/30 text-gray-100 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl py-3"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Pesan Anda
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                      value={formData.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/10 border-purple-500/30 text-gray-100 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 min-h-[120px] rounded-xl resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="bg-gradient-primary text-white hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-xl py-3 px-8 font-semibold shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
                  >
                    Kirim Pesan
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;