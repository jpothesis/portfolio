import React from "react";
import Navbar from "./Navbar"; 
import { Card } from "./ui/card";
import Button from "./ui/button";
import { Github } from "lucide-react";

const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/ecommerce-dashboard.png",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.",
    image: "/task-management-app.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts, real-time metrics, and customizable reports.",
    image: "/analytics-dashboard.png",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Social Media App",
    description:
      "Social networking platform with user profiles, messaging, and content sharing capabilities.",
    image: "/social-media-application-interface.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool with multiple templates and customization options.",
    image: "/ai-content-generator-interface.png",
    tags: ["Next.js", "OpenAI", "TypeScript", "Vercel"],
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Design System",
    description:
      "Comprehensive design system and component library for enterprise applications.",
    image: "/design-system-components.png",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    githubUrl: "https://github.com",
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
                className="overflow-hidden border border-gray-700 bg-gray-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-800 h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech Stack Pills */}
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

                  {/* GitHub Button */}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
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
