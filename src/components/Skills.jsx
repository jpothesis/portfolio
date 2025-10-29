"use client";

import React, { useEffect } from "react"; 
import Navbar from "./Navbar";
import { Card } from "./ui/card";
import MobileBackButton from "./MobileBackButton"; // 👈 Added back button import

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        description: "UI library for building interactive interfaces",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        description: "Core language for web development",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        description: "Typed superset of JavaScript for safer code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI design",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Next.js",
        description: "React framework for server-side rendering",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        description: "High-level language for backend & AI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "AI / ML Basics",
        description: "Fundamentals of artificial intelligence & machine learning",
        logo: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png",
      },
      {
        name: "REST APIs",
        description: "Design principles for scalable web APIs",
        logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
      },
      {
        name: "MongoDB",
        description: "NoSQL database for flexible data storage",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        description: "Version control system for tracking changes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "AWS",
        description: "Cloud platform for hosting & services",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Vercel",
        description: "Frontend deployment platform",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "GitHub",
        description: "Platform for hosting Git repositories",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "DSA & Algorithms",
        description: "Fundamentals of data structures & algorithms",
        logo: "https://cdn-icons-png.flaticon.com/512/1231/1231515.png",
      },
      {
        name: "C / C++",
        description: "Core programming languages for system-level programming",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "Android Studio",
        description: "IDE for Android app development",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      {
        name: "Kotlin",
        description: "Modern programming language for Android apps",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
    ],
  },
  {
    category: "Design",
    skills: [
      {
        name: "Figma",
        description: "UI/UX design & prototyping tool",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "UI/UX Design",
        description: "Designing intuitive interfaces",
        logo: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
      },
      {
        name: "Responsive Design",
        description: "Building layouts for all screen sizes",
        logo: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
      },
      {
        name: "Accessibility",
        description: "Making interfaces usable for everyone",
        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
    ],
  },
];

const Skills = () => {
  // ✅ Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <MobileBackButton /> {/* 👈 Appears only on mobile */}

      <section className="pt-24 pb-16 px-4 md:px-8 bg-[#0a0f25] min-h-screen">
        <div className="max-w-7xl mx-auto space-y-12">
          {skillsData.map((group) => (
            <div key={group.category}>
              {/* Category Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 relative inline-block">
                {group.category}
                <span className="block w-20 h-1 bg-blue-500 rounded-full mt-3"></span>
              </h2>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="p-4 flex flex-col items-center justify-between h-48 sm:h-52 bg-gray-900 border border-gray-700 hover:border-blue-500/60 hover:shadow-[0_0_15px_#3b82f6] hover:scale-105 transition-all duration-300 text-center rounded-xl"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-14 h-14 mb-3 object-contain"
                    />
                    <div>
                      <span className="text-white font-bold text-base sm:text-lg block mb-1">
                        {skill.name}
                      </span>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
