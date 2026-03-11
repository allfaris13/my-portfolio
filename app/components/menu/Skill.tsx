"use client";
import React, { useEffect, useState, useRef } from "react";
import FadeUp from "@/components/ui/FadeUp";
import { skills } from "../../frontend/src/mock/mockData";

// Icon components for frameworks
const Icons = {
  "Next.js": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-white">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 103.3 128 85 128 64c0-35.3-28.7-64-64-64zm0 10.6c25.4 0 46.5 18.2 51.2 42.1L40 13.1C47 11.5 54.4 10.6 64 10.6zm53.4 53.4c0 1.2 0 2.5-.1 3.7L66.9 36.6h-5.9v53.4h5.9V51.7l50.5 75.8c-11.2 0-21.7 2.9-30.8 7.9L36.6 59.4v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 103.3 128 85 128 64c0-35.3-28.7-64-64-64zm0 0" />
      <path d="M120.2 101.5L46.4 36.6h5.9v41.9l67.9 23zm0 0" />
    </svg>
  ),
  "Laravel": () => (
    <svg viewBox="0 0 512 512" className="w-8 h-8 fill-[#FF2D20]">
      <path d="M495.1 82.5c-.1-.1-.1-.1-.1-.2-.1-.1-.2-.2-.3-.3l-96.1-96c-.1-.1-.2-.2-.3-.3l-.1-.1C396.1 2.2 391.7 0 387 0s-9.1 2.2-11.4 5.6l-.1.1-.3.3-96.1 96c-.1.1-.2.2-.3.3l-.1.2c-3.4 2.2-5.6 6.6-5.6 11.3 0 4.6 2.2 8.9 5.4 11.3l.1.1.3.3 16 16 .3.3.1.1c3.4 2.2 7.7 3.4 11.3 3.4 4.6 0 8.9-2.2 11.4-5.6l.1-.1.3-.3 64.1-64v240.3c0 7.3-6 13.3-13.3 13.3H26.7c-7.4 0-13.3-6-13.3-13.3V106.7c0-7.3 6-13.3 13.3-13.3H160c7.4 0 13.3 6 13.3 13.3 0 7.3-6 13.3-13.3 13.3H40v213.3h320c7.4 0 13.3-6 13.3-13.3V13.3c0-7.3-6-13.3-13.3-13.3-7.4 0-13.3 6-13.3 13.3V96H160c-7.4 0-13.3 6-13.3 13.3 0 7.3 6 13.3 13.3 13.3h106.7c7.4 0 13.3-6 13.3-13.3 0-7.3-6-13.3-13.3-13.3H160V80h111l-.1-.1-.3-.3-16-16-.3-.3-.1-.1c-2.2-3.4-3.4-7.7-3.4-11.3 0-4.6 2.2-9 5.6-11.4l.1-.1.3-.3 96.1-96c.1-.1.2-.2.3-.3l.1-.2C359.8 1.1 364.2 0 368.9 0c4.7 0 9.1 1.1 11.5 3.3l.1.2.3.3 96.1 96c.1.1.2.2.3.3l.1.1c3.4 2.2 5.6 6.6 5.6 11.3s-2.1 9.1-5.5 11.4l-.1.1-.3.3-16 16-.3.3-.1.1c-2.4 3.4-6.8 5.6-11.4 5.6s-9-2.1-11.3-5.4l-.1-.1-.3-.3-64.1-64.1V120H320l.1-.1.3-.3 16-16 .3-.3.1-.1c2.2-3.4 3.4-7.7 3.4-11.3s-2.2-9-5.6-11.4l-.1-.1-.3-.3-96.1-96c-.1-.1-.2-.2-.3-.3l-.1-.2C239.8 1.1 235.4 0 230.7 0c-4.7 0-9.1 1.1-11.5 3.3l-.1.2-.3.3-96.1 96c-.1.1-.2.2-.3.3l-.1.1c-3.4 2.2-5.6 6.6-5.6 11.3s2.1 9.1 5.5 11.4l.1.1.3.3 16 16 .3.3.1.1c2.4 3.4 6.8 5.6 11.4 5.6s9-2.1 11.3-5.4l.1-.1.3-.3 64.1-64.1V512h117.3c7.4 0 13.3-6 13.3-13.3s-6-13.3-13.3-13.3H384V168h26.7c7.4 0 13.3-6 13.3-13.3V106.7c0-4.7-2.1-9.1-5.4-11.5l-.1-.1-.3-.3-16-16-.3-.3-.1-.1c-2.2-3.4-3.4-7.7-3.4-11.3s2.2-8.9 5.5-11.3l.1-.1.3-.3 64.1-64.1V408.8l-42.7-42.7c-5.2-5.2-13.6-5.2-18.9 0s-5.2 13.6 0 18.9l52.1 52.1c2.5 2.5 5.9 3.9 9.4 3.9 3.5 0 6.9-1.4 9.4-3.9s3.9-5.9 3.9-9.4v-312c-.1-4.7-2.3-9.1-5.5-11.5z" />
    </svg>
  ),
  "React": () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-none stroke-[#61DAFB]">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "JavaScript": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.184H1.408z" />
      <path d="M118.067 101.99c-.192-3.213-2.355-6-7.859-8.423-1.68-.781-6.17-2-.768-4.32-.474-1.12.192-1.741 1.056-1.741 2.016 0 3.322 1.056 4.39 2.803l7.354-4.691c-1.392-2.182-2.88-4.205-4.883-5.61s-5-2.285-8.813-2.285c-11.971 0-18.57 6.419-18.57 15.36s5.328 14.162 16.736 18.23c2.832 1 6.845 2.5 6.845 5.254 0 2.227-2.131 3.431-5.542 3.431-4.48 0-6.118-2.368-7.597-5.325l-7.795 4.544c1.68 4.224 4.192 7.152 7.744 8.784 3.744 1.76 8.525 2.336 12.822 2.336 12.48 0 18.288-5.3 18.288-14.363zM76.992 78.432c0-8.627-5.04-12.72-13.44-12.72-3.84 0-7.056.96-9.168 2.688l2.64 6.96c1.152-.672 2.544-1.296 4.176-1.296s2.832.72 2.832 2.784v23.52c0 2.227-.864 3.024-3.072 3.024-1.632 0-3.36-.576-4.944-1.248l-2.064 7.008c2.688 1.584 6.72 2.352 9.552 2.352 10.368 0 13.488-4.416 13.488-13.248V78.432z" />
    </svg>
  ),
  "PHP": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#777BB4]">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm37.8 77.1c-1.2 3.8-4.1 6.3-8.7 7.5-4.6 1.2-10 1.8-16.2 1.8H62.3l.2-1.3c-.6 0-1.2.1-1.8.2-3.1 1-6.1 1.1-8.9 1.1-5.9 0-10.7-.8-14.4-2.5-3.7-1.7-5.6-4.6-5.6-8.7V57.8c0-4.1 1.9-7 5.6-8.7 3.7-1.7 8.5-2.5 14.4-2.5 3.3 0 6.6.2 9.9.6.6.1 1.1.2 1.6.3L63 46h14.6c6.2 0 11.6.6 16.2 1.8 4.6 1.2 7.5 3.7 8.7 7.5 1.2 3.8 1.8 8.1 1.8 12.9s-.7 9.1-2.5 12.9zm-49.5-6.6c0 1.9.9 3.2 2.6 4 1.7.8 3.9 1.2 6.6 1.2 2.7 0 4.9-.4 6.6-1.2 1.7-.8 2.6-2.1 2.6-4V57.8c0-1.9-.9-3.2-2.6-4-1.7-.8-3.9-1.2-6.6-1.2-2.7 0-4.9.4-6.6 1.2-1.7.8-2.6 2.1-2.6 4v12.7zm38.1 0c0 1.9.9 3.2 2.6 4 1.7.8 3.9 1.2 6.6 1.2 2.7 0 4.9-.4 6.6-1.2 1.7-.8 2.6-2.1 2.6-4V57.8c0-1.9-.9-3.2-2.6-4-1.7-.8-3.9-1.2-6.6-1.2-2.7 0-4.9.4-6.6 1.2-1.7.8-2.6 2.1-2.6 4v12.7z" />
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#38B2AC]">
      <path d="M64 32c-15.6 0-24.8 7.8-27.6 23.4 5.6-7.8 11.9-10.5 18.9-8.1 4 1.3 6.9 4.3 10.1 7.6 5.2 5.3 11.2 11.5 24.2 11.5 15.6 0 24.8-7.8 27.6-23.4-5.6 7.8-11.9 10.5-18.9 8.1-4-1.3-6.9-4.3-10.1-7.6C82.9 38.2 77 32 64 32zm-27.6 34.2c-15.6 0-24.8 7.8-27.6 23.4 5.6-7.8 11.9-10.5 18.9-8.1 4 1.3 6.9 4.3 10.1 7.6 5.2 5.3 11.2 11.5 24.2 11.5 15.6 0 24.8-7.8 27.6-23.4-5.6 7.8-11.9 10.5-18.9 8.1-4-1.3-6.9-4.3-10.1-7.6c-5.3-5.3-11.2-11.5-24.2-11.5z" />
    </svg>
  ),
  "TypeScript": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#3178C6]">
      <path d="M1.408 1.408h125.184v125.184H1.408z" />
      <path d="M115.824 104.97c0 1.2-.42 2.22-1.26 3.06-.84.84-1.86 1.26-3.06 1.26s-2.22-.42-3.06-1.26c-.84-.84-1.26-1.86-1.26-3.06V85.77h-12.18v19.14c0 1.24-.42 2.28-1.26 3.12-.84.84-1.88 1.26-3.12 1.26s-2.28-.42-3.12-1.26c-.84-.84-1.26-1.88-1.26-3.12V68.31c0-1.24.42-2.28 1.26-3.12.84-.84 1.88-1.26 3.12-1.26s2.28.42 3.12 1.26c.84.84 1.26 1.88 1.26 3.12v8.52h12.18v-8.52c0-1.2.42-2.22 1.26-3.06.84-.84 1.86-1.26 3.06-1.26s2.22.42 3.06 1.26c.84.84 1.26 1.86 1.26 3.06v36.66zM76.992 78.432c0-8.627-5.04-12.72-13.44-12.72-3.84 0-7.056.96-9.168 2.688l2.64 6.96c1.152-.672 2.544-1.296 4.176-1.296s2.832.72 2.832 2.784v23.52c0 2.227-.864 3.024-3.072 3.024-1.632 0-3.36-.576-4.944-1.248l-2.064 7.008c2.688 1.584 6.72 2.352 9.552 2.352 10.368 0 13.488-4.416 13.488-13.248V78.432z" fill="white" />
    </svg>
  ),
  "HTML": () => (
    <svg viewBox="0 0 512 512" className="w-8 h-8 fill-[#E34F26]">
      <path d="M71.5 452.1l-33.6-376.1h374.2l-33.6 376.1-153.2 42.5-153.8-42.5z" />
      <path d="M256 461.2v-343.3h145.4l-26.6 297.6-118.8 33z" fill="#EF652A" />
      <path d="M125 178.6h262l-5.3 59h-197.7l5.3 59h187.1l-18.1 202.4-102.3 28.3-102.3-28.4-6.6-74.1h59.1l3.5 39.5 39.7 10.8 39.7-10.8 7-78.5h-212.5l-19.1-212.5z" fill="white" />
    </svg>
  ),
  "CSS": () => (
    <svg viewBox="0 0 512 512" className="w-8 h-8 fill-[#1572B6]">
      <path d="M71.5 452.1l-33.6-376.1h374.2l-33.6 376.1-153.2 42.5-153.8-42.5z" />
      <path d="M256 461.2v-343.3h145.4l-26.6 297.6-118.8 33z" fill="#33A9DC" />
      <path d="M125 178.6h262l-13.3 149h-188.7l5.3 59h134l-11.3 126.4-78.1 21.6-78.1-21.6-4.9-55.1h-59.1l9.6 108.1 132.5 36.6 132.5-36.6 22.8-255.4h-262l-19.1-212.5z" fill="white" />
    </svg>
  ),
  "Git": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#F05032]">
      <path d="M125.7 60L68 2.3c-3.1-3.1-8.1-3.1-11.2 0L45.4 13.7l14.2 14.2c3.1-1.1 6.8-.2 9.2 2.2 2.5 2.5 3.3 6.1 2.3 9.3l14 14c3.2-1 6.8-.2 9.3 2.3 3.5 3.5 3.5 9.1 0 12.6-3.5 3.5-9.1 3.5-12.6 0-2.5-2.5-3.3-6.1-2.3-9.3l-13-13v24.5c1 1.6.8 3.8-.5 5.2-1.7 1.7-4.4 1.7-6.1 0-1.7-1.7-1.7-4.4 0-6.1 1.3-1.3 3.3-1.5 5.1-.6V43.2l-13-13c-3.2 1-6.8.2-9.3-2.3-2.5-2.5-3.3-6.1-2.3-9.3L27.4 4.4 2.3 29.5c-3.1 3.1-3.1 8.1 0 11.2L60 108.4c3.1 3.1 8.1 3.1 11.2 0l54.5-54.5c3.1-3.1 3.1-8.1 0-11.2z" />
    </svg>
  ),
  "Figma": () => (
    <svg viewBox="0 0 38 57" className="w-8 h-8">
      <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5h9.5v19H28.5c-5.247 0-9.5-4.253-9.5-9.5z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" fill="#0ACF83" />
      <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
      <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
    </svg>
  ),
  "Responsive Design": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-white">
      <path d="M112.4 34H91c-2.2 0-4 1.8-4 4v52c0 2.2 1.8 4 4 4h21.4c2.2 0 4-1.8 4-4V38c0-2.2-1.8-4-4-4zm-2.4 50H93.4V43.6h16.6V84zM70.8 17.6h-54c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h54c2.2 0 4-1.8 4-4v-32c0-2.2-1.8-4-4-4zm-2.4 30.4h-49.2V27.1h49.2V48zM53.4 69.4H15.6c-2.2 0-4 1.8-4 4v37c0 2.2 1.8 4 4 4h37.8c2.2 0 4-1.8 4-4v-37c0-2.2-1.8-4-4-4zm-2.4 35.5H18.1V78.9H51v26z" />
    </svg>
  ),
  "Alpine.js": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#2D333B]">
      <path d="M121.2 87.2L68.8 34.8c-1.3-1.3-3.4-1.3-4.7 0L11.7 87.2c-1.3 1.3-1.3 3.4 0 4.7l5.4 5.4c1.3 1.3 3.4 1.3 4.7 0l42.1-42.1 42.1 42.1c1.3 1.3 3.4 1.3 4.7 0l5.4-5.4c1.5-1.5 1.5-3.6.1-4.7z" />
      <path d="M86.1 52.1L68.8 34.8c-1.3-1.3-3.4-1.3-4.7 0L46.8 52.1c-1.3 1.3-1.3 3.4 0 4.7l5.4 5.4c1.3 1.3 3.4 1.3 4.7 0l7.2-7.2 7.2 7.2c1.3 1.3 3.4 1.3 4.7 0l5.4-4.7c1.3-1.3 1.3-3.4.1-5.4z" />
    </svg>
  ),
  "MySQL": () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#4479A1]">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm2.2 96c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z" />
    </svg>
  ),
};

const Skill: React.FC = () => {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        } else {
          // Reset when leaving view so it can animate again next time
          setHasAnimated(false);
          setAnimatedLevels(skills.map(() => 0));
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    skills.forEach((skill, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = skill.level / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= skill.level) {
          current = skill.level;
          clearInterval(timer);
        }
        setAnimatedLevels(prev => {
          const newLevels = [...prev];
          newLevels[index] = Math.round(current);
          return newLevels;
        });
      }, duration / steps);
    });
  };
  // Translate level to text
  const getLevelText = (level: number) => {
    if (level >= 90) return "EXPERT";
    if (level >= 80) return "ADVANCED";
    return "INTERMEDIATE";
  };

  const getDotColor = (level: number) => {
    if (level >= 90) return "bg-blue-400";
    if (level >= 80) return "bg-indigo-400";
    return "bg-purple-400";
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <FadeUp>
            <div className="flex flex-col">
              <span className="text-gradient-primary font-mono text-xl mb-4 text-left">02</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)] uppercase leading-none transition-colors">
                TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500" style={{ WebkitTextStroke: '0' }}>STACK</span>
              </h1>
            </div>
          </FadeUp>
          <FadeUp delayMs={200}>
            <h4 className="max-w-md text-[var(--text-secondary)] text-base md:text-lg leading-relaxed md:text-right font-medium transition-colors">
              Eksplorasi teknologi modern yang saya gunakan untuk mentransformasi ide kompleks menjadi arsitektur digital yang premium.
            </h4>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {skills.map((skill, index) => {
            const Icon = Icons[skill.name as keyof typeof Icons] || (() => <div className="w-8 h-8 rounded-full bg-purple-900/20" />);

            return (
              <FadeUp key={index} delayMs={index * 50}>
                <div className="group relative p-6 bg-[var(--card-bg)] backdrop-blur-md rounded-[2rem] border border-[var(--card-border)] hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden min-h-[200px] flex flex-col justify-center">
                  {/* Card background animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-500/15 rounded-2xl group-hover:scale-110 group-hover:bg-purple-500/25 transition-all duration-500 border border-purple-500/10 group-hover:border-purple-500/30 shadow-inner">
                      <div className="scale-90 origin-center">
                        <Icon />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-1.5 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors line-clamp-1">
                          {skill.name}
                        </h3>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${getDotColor(skill.level)} shadow-[0_0_8px_rgba(168,85,247,0.8)]`}></span>
                            <span className="text-[10px] font-bold tracking-widest text-purple-400/80 uppercase">
                              {getLevelText(skill.level)}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-purple-300/40">
                            {animatedLevels[index]}%
                          </span>
                        </div>
                      </div>

                      {/* Premium Progress Bar */}
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5 shadow-inner">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 transition-all duration-300 ease-out relative"
                          style={{
                            width: `${animatedLevels[index]}%`,
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle corner light */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/25 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
