"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "../../frontend/src/mock/mockData";

import LightPillar from "@/components/ui/LightPillar";

interface HomeProps {
  displayText: string;
  scrollToSection: (sectionId: string) => void;
}

const Home: React.FC<HomeProps> = ({ displayText, scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden bg-[#030014]"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-[#030014]">
        <LightPillar
          topColor="#a522e2"
          bottomColor="#9b1cca"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={4}
          pillarHeight={4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          quality="high"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
        <FadeUp>
          <div className="mb-6">
            <span className="text-purple-300 text-lg font-mono drop-shadow-md">
              Hi, nama saya Alfian Jack
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tighter">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white/90 mb-6 drop-shadow-lg">
            {personalInfo.title}
          </h2>
          <p className="text-white/80 mb-10 h-8 font-mono text-xl md:text-2xl min-h-[2rem] flex items-center justify-center drop-shadow-md">
            {displayText || " "}
            <span className="animate-pulse ml-1 text-white">|</span>
          </p>
          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full px-10 py-4 text-base font-bold min-w-[180px]"
            >
              Proyek Saya
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all duration-300 rounded-full px-10 py-4 text-base font-bold min-w-[180px]"
            >
              Hubungi Saya
            </button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Home;