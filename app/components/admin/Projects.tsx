"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import { projects } from "../../frontend/src/mock/mockData";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient-primary font-mono text-xl">
              03.
            </span>{" "}
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <FadeUp key={project.id} delayMs={(idx % 3) * 80}>
                <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 motion-safe:transition-all motion-safe:duration-300 hover:transform hover:-translate-y-2 hover:scale-105 overflow-hidden group glow-purple">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-purple-400 border-purple-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        noHoverShadow
                        className="border-purple-500 text-purple-400 hover:bg-gradient-primary hover:text-white"
                      >
                        <ExternalLink size={16} className="mr-1" /> Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        noHoverShadow
                        className="border-purple-500 text-purple-400 hover:bg-gradient-primary hover:text-white"
                      >
                        <Github size={16} className="mr-1" /> Code
                      </Button>
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

export default Projects;