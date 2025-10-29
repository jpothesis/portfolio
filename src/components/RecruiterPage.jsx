"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; 
import TileRow from "./TileRow";
import RectTileRow from "./RectTileRow";

import RecruiterVideo from "../assets/recruiter.mp4";

// Import local images
import skillsImg from "../assets/skills.png";
import certificationsImg from "../assets/certifications.png";
import projectsImg from "../assets/projects.png";
import experienceImg from "../assets/experience.png";
import resumeImg from "../assets/resume.png";
import contactMeImg from "../assets/contactme.png";

import musicImg from "../assets/music.png";
import photographyImg from "../assets/photography.png";
import readingImg from "../assets/reading.png";
import contactMe1Img from "../assets/contactme1.png";

const RecruiterPage = () => {
  const navigate = useNavigate();

  const topPicks = [
    { title: "Skills", route: "/skills", image: skillsImg }, 
    { title: "Certifications", route: "/certifications", image: certificationsImg }, 
    { title: "Projects", route: "/projects", image: projectsImg },
    { title: "Experience", route: "/professional", image: experienceImg },
      {
    title: "Resume",
    external: true, // ✅ Add this flag
    link: "https://drive.google.com/file/d/1FQYYZtIwEUKNlBeisLGgiHJOGouuPZDS/view?usp=drive_link",
    image: resumeImg,
  },
    { title: "Contact Me", route: "/contact-me", image: contactMeImg },
  ];

  const continueWatching = [
    { title: "Music", route: "/music", image: musicImg },
    { title: "Photography", route: "/reading", image: photographyImg },
    { title: "Reading", route: "/blogs", image: readingImg },
    { title: "Contact Me", route: "/contact-me", image: contactMe1Img },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans overflow-x-hidden relative">
      <Navbar />
      

      {/* Hero/Header Section with video */}
      <header className="relative w-full h-[60vh] flex flex-col justify-center bg-black overflow-hidden">
        <video
          src={RecruiterVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Buttons and Description */}
        <div className="relative z-10 flex flex-col gap-4 pl-10 mt-28">
          <div className="flex items-center space-x-4">
            {/* Resume Button */}
<a
  href="https://drive.google.com/file/d/1FQYYZtIwEUKNlBeisLGgiHJOGouuPZDS/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/90 text-black font-semibold px-6 py-2 rounded-md hover:bg-white transition text-lg"
>
  Resume
</a>


            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/jaanvi-choudhary-9277872a3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.74-2.6 5.08 0 6 3.34 6 7.68V24h-5v-7c0-1.67-.03-3.83-2.33-3.83-2.33 0-2.68 1.82-2.68 3.7V24h-5V8z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Description */}
          <div>
            <p className="text-white text-lg md:text-xl">
              <span className="font-bold text-2xl md:text-4xl">Jaanvi Choudhary - Full Stack Developer</span><br /><br />
              Skilled Full-Stack Developer with expertise in React, Node.js, MongoDB, Tailwind CSS, and AI-powered integrations. I successfully led a college-wide platform serving 1,000–2,000 users, streamlining resource management and daily workflows. Experienced in building scalable, high-performance applications with clean architecture, responsive UIs, and intelligent AI features. Passionate about delivering innovative, user-centric solutions that make an impact.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-8 bg-gray-900/95">
        <div className="max-w-full mx-auto">
          <TileRow 
            title="Today's Top Picks for recruiter"
            tiles={topPicks}
            navigate={navigate}
          />

          <RectTileRow
            title="Continue Watching for recruiter"
            tiles={continueWatching}
            navigate={navigate}
          />
        </div>
      </section>
    </div>
  );
};

export default RecruiterPage;
