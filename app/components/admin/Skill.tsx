"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import { skills } from "../../frontend/src/mock/mockData";

interface SkillProps {
  animatedSkills: {[key: number]: number};
  skillsCompleted: {[key: number]: boolean};
}

const Skill: React.FC<SkillProps> = ({ animatedSkills, skillsCompleted }) => {
  const [localAnimatedSkills, setLocalAnimatedSkills] = useState<{[key: number]: number}>({});
  const [localSkillsCompleted, setLocalSkillsCompleted] = useState<{[key: number]: boolean}>({});

  // Fallback animation jika props tidak bekerja
  useEffect(() => {
    // Jika tidak ada animatedSkills dari props, buat animasi lokal
    if (Object.keys(animatedSkills).length === 0) {
      console.log('No animated skills from props, starting local animation');
      
      skills.forEach((skill, index) => {
        const animationDelay = index * 150;
        setTimeout(() => {
          const duration = 2500;
          const steps = 80;
          const increment = skill.level / steps;
          let currentValue = 0;
          
          const timer = setInterval(() => {
            currentValue += increment;
            
            if (currentValue >= skill.level) {
              currentValue = skill.level;
              clearInterval(timer);
              setTimeout(() => {
                setLocalSkillsCompleted(prev => ({
                  ...prev,
                  [index]: true
                }));
              }, 500);
            }
            
            setLocalAnimatedSkills(prev => ({
              ...prev,
              [index]: Math.round(currentValue)
            }));
          }, duration / steps);
        }, animationDelay);
      });
    }
  }, [animatedSkills]);

  // Use props if available, otherwise use local state
  const currentAnimatedSkills = Object.keys(animatedSkills).length > 0 ? animatedSkills : localAnimatedSkills;
  const currentSkillsCompleted = Object.keys(skillsCompleted).length > 0 ? skillsCompleted : localSkillsCompleted;

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient-primary font-mono text-xl">
              02.
            </span>{" "}
            Skills & Teknologi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <FadeUp key={index} delayMs={(index % 4) * 60}>
                <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 motion-safe:transition-all motion-safe:duration-300 hover:transform hover:-translate-y-1 hover:scale-105 glow-purple h-full flex flex-col">
                  <CardContent className="p-4 md:p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-base md:text-lg font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {skill.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs"
                      >
                        {skill.category}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      {/* Progress Bar */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out progress-animate"
                              style={{ 
                                width: `${currentAnimatedSkills[index] || 0}%`,
                                transformOrigin: 'left',
                                boxShadow: currentAnimatedSkills[index] > 0 
                                  ? `0 0 8px rgba(147, 51, 234, 0.5)` 
                                  : 'none'
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="w-10 text-right">
                          <span className="text-xs text-purple-400 font-medium tabular-nums">
                            {currentAnimatedSkills[index] || 0}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Volume/Level Indicator */}
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500 mr-1">Level:</span>
                        <div className={`flex gap-1 ${currentSkillsCompleted[index] ? 'skill-completed' : ''}`}>
                          {[...Array(5)].map((_, i) => {
                            const currentSkillValue = currentAnimatedSkills[index] || 0;
                            const isActive = i < Math.ceil(currentSkillValue / 20);
                            const isCompleted = currentSkillsCompleted[index];
                            
                            // Wave class berdasarkan posisi bar
                            const waveClass = isCompleted && isActive 
                              ? `wave-bar-${(i % 5) + 1}` 
                              : '';
                            
                            return (
                              <div
                                key={i}
                                className={`w-1.5 h-3 rounded-sm transition-all duration-500 ${
                                  isActive
                                    ? `bg-gradient-primary shadow-sm shadow-purple-500/50 ${waveClass}`
                                    : 'bg-gray-600'
                                }`}
                                style={{
                                  animationDelay: isCompleted ? `${i * 0.2}s` : undefined,
                                  transform: !isCompleted && isActive 
                                    ? `scaleY(${1.2 + (i * 0.1)}) scaleX(1.1)` 
                                    : undefined,
                                  filter: isActive && !isCompleted
                                    ? 'brightness(1.2) saturate(1.3)' 
                                    : undefined,
                                  boxShadow: isActive 
                                    ? `0 0 ${4 + i * 2}px rgba(147, 51, 234, ${isCompleted ? 0.9 : 0.6})` 
                                    : 'none'
                                }}
                              />
                            );
                          })}
                        </div>
                        
                        {/* Skill level text with animation */}
                        <div className="ml-1 text-xs text-purple-300 font-medium flex items-center gap-1">
                          {/* Emoji berdasarkan skill level */}
                          <span className={`text-sm transition-all duration-500 ${
                            currentSkillsCompleted[index] ? 'animate-pulse skill-emoji-purple' : 'skill-emoji-purple'
                          }`}>
                            {(currentAnimatedSkills[index] || 0) >= 90 && '🔥'}
                            {(currentAnimatedSkills[index] || 0) >= 80 && (currentAnimatedSkills[index] || 0) < 90 && '⭐'}
                            {(currentAnimatedSkills[index] || 0) >= 70 && (currentAnimatedSkills[index] || 0) < 80 && '💪'}
                            {(currentAnimatedSkills[index] || 0) >= 50 && (currentAnimatedSkills[index] || 0) < 70 && '📈'}
                            {(currentAnimatedSkills[index] || 0) < 50 && '🌱'}
                          </span>
                          
                          {/* Completion indicator */}
                          {currentSkillsCompleted[index] && (
                            <span className="text-purple-400 animate-pulse text-xs">●</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Skill;