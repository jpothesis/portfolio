import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; 
import TileRow from "./TileRow";
import RectTileRow from "./RectTileRow"; // New component
import RecruiterVideo from "../assets/recruiter.mp4"; // MP4

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
    { title: "Skills", route: "/work-permit", image: skillsImg },
    { title: "Certifications", route: "/skills", image: certificationsImg },
    { title: "Projects", route: "/experience", image: projectsImg },
    { title: "Experience", route: "/certifications", image: experienceImg },
    { title: "Resume", route: "/recommendations", image: resumeImg },
    { title: "Contact Me", route: "/projects", image: contactMeImg },
  ];

  const continueWatching = [
    { title: "Music", route: "/music", image: musicImg },
    { title: "Photography", route: "/reading", image: photographyImg },
    { title: "Reading", route: "/blogs", image: readingImg },
    { title: "Contact Me", route: "/contact-me", image: contactMe1Img },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans overflow-x-hidden">
      
      <Navbar />

      {/* Hero/Header Section with video */}
      <header className="relative w-full h-[60vh] flex items-center bg-black overflow-hidden">
        <video
          src={RecruiterVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Buttons */}
        <div className="relative z-10 flex items-center space-x-4 pl-10">
          <button 
            onClick={() => navigate('/resume')}
            className="bg-white/90 text-black font-semibold px-6 py-2 rounded-md hover:bg-white/100 transition"
          >
            Resume
          </button>

          <div className="group relative">
            <button className="bg-white/90 text-black font-bold w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/100 transition">
              !
            </button>
            <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md whitespace-nowrap transition-opacity">
              Resume
            </span>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-8 bg-gray-900/95">
        <div className="max-w-full mx-auto">
          {/* Top Picks: Square Tiles */}
          <TileRow 
            title="Today's Top Picks for recruiter"
            tiles={topPicks}
            navigate={navigate}
          />

          {/* Continue Watching: Rectangular Tiles */}
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
