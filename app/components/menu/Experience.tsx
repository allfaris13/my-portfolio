"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import FadeUp from "@/components/ui/FadeUp";
import { experiences } from "../../frontend/src/mock/mockData";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient-primary font-mono text-xl">
              04.
            </span>{" "}
            Pengalaman
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <FadeUp key={exp.id} delayMs={idx * 90}>
                <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 glow-purple">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-purple-400 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-gray-100">{exp.company}</p>
                      </div>
                      <div className="text-gray-400 text-sm mt-2 md:mt-0">
                        <p>{exp.duration}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-purple-400 mr-2">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;