"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "../../frontend/src/mock/mockData";

interface HomeProps {
  displayText: string;
  scrollToSection: (sectionId: string) => void;
}

const Home: React.FC<HomeProps> = ({ displayText, scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-gradient-primary text-lg font-mono">
            Hi, nama saya Alfian Jack
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-100">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-gradient-primary mb-8 h-8 font-mono text-xl md:text-2xl">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-gradient-primary hover:text-white transition-all duration-300 glow-purple"
          >
            Lihat Projects
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-primary text-white hover:opacity-95 transition-all duration-300 glow-purple"
          >
            Hubungi Saya
          </Button>
        </div>
        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Home;