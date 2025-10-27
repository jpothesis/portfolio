import React from "react";
import Navbar from "./Navbar";
import { Card } from "./ui/card";
import { Github, Globe } from "lucide-react";

import IGDTUW_Verse from "../assets/IGDTUW_Verse.png";
import ThreeDWebsite from "../assets/3d_Website.png";
import CareerGenie_AI from "../assets/CareerGenie_AI.png";
import Portfolio from "../assets/portfolio.png";
import EcoTransform from "../assets/EcoTransform.png";

const projectsData = [
  {
    id: "1",
    title: "IGDTUW_Verse",
    description:
      "A digital community platform for IGDTUW students featuring updates, discussions, events, and resources in one place — building a connected campus experience.",
    image: IGDTUW_Verse,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    siteUrl: "https://igdtuw-verse.netlify.app",
  },
  {
    id: "2",
    title: "3D Interactive Website",
    description:
      "A creative frontend-only 3D portfolio experiment that integrates dynamic 3D models and smooth animations — built to explore advanced WebGL and Three.js rendering.",
    image: ThreeDWebsite,
    tags: ["React", "Three.js", "Vite", "Framer Motion", "Tailwind CSS"],
    siteUrl: "https://3-d-website-jpothesis.vercel.app/",
  },
  {
    id: "3",
    title: "CareerGenie.AI",
    description:
      "An AI-powered full-stack career assistant that helps users create resumes, prepare for interviews, and receive personalized career guidance — all through an intelligent, interactive dashboard.",
    image: CareerGenie_AI,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Vite",
    ],
    githubUrl: "https://github.com/jpothesis/CareerGenie_AI",
    status: "Ongoing",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects, skills, and achievements with a clean UI, smooth animations, and responsive design.",
    image: Portfolio,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    siteUrl: "https://portfolio-nu-three-41.vercel.app/",
  },
  {
    id: "5",
    title: "EcoTransform",
    description:
      "A sustainability-driven platform connecting small-scale artisans and waste suppliers — promoting recycling and upcycling with AI-driven recommendations and blockchain-based transparency.",
    image: EcoTransform,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Blockchain",
      "AI Integration",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/jpothesis-alt/EcoTransform",
    status: "Ongoing",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="pt-24 pb-16 px-4 md:px-8 bg-[#0a0f25] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col overflow-hidden border border-gray-700 bg-gray-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-800 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.status && (
                      <p className="text-xs text-gray-400 italic mb-2">
                        {project.status}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-blue-500 text-white py-2 rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_15px_#3b82f6] active:shadow-[0_0_25px_#3b82f6]"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Globe className="w-4 h-4" />
                          Visit Site
                        </div>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-blue-500 text-white py-2 rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_15px_#3b82f6] active:shadow-[0_0_25px_#3b82f6]"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
