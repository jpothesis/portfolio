import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; 
import TileRow from "./TileRow";
import RectTileRow from "./RectTileRow"; // New component
import RecruiterVideo from "../assets/recruiter.mp4"; // MP4

const RecruiterPage = () => {
  const navigate = useNavigate();

  const topPicks = [
    { title: "Skills", route: "/work-permit", image: "work-permit.jpg" },
    { title: "Certifications", route: "/skills", image: "skills.jpg" },
    { title: "Projects", route: "/experience", image: "experience.jpg" },
    { title: "Experience", route: "/certifications", image: "certifications.jpg" },
    { title: "Resume", route: "/recommendations", image: "recommendations.jpg" },
    { title: "Contact Me", route: "/projects", image: "projects.jpg" },

  ];

  const continueWatching = [
    { title: "Music", route: "/music", image: "music.jpg" },
    { title: "Photography", route: "/reading", image: "reading.jpg" },
    { title: "Reading", route: "/blogs", image: "blogs.jpg" },
    { title: "Contact Me", route: "/contact-me", image: "contact-me.jpg" },

  ];

  const placeholderImages = {
    "work-permit.jpg": "https://images.unsplash.com/photo-1542281286-9a0837ed72c4",
    "skills.jpg": "https://images.unsplash.com/photo-1542281286-9a0837ed72c4",
    "experience.jpg": "https://images.unsplash.com/photo-1542281286-9a0837ed72c4",
    "certifications.jpg": "https://images.unsplash.com/photo-1542281286-9a0837ed72c4",
    "recommendations.jpg": "https://images.unsplash.com/photo-1542281286-9a0837ed72c4",
    "projects.jpg": "https://images.unsplash.com/photo-1542281286-9a0837ed72c4",
    "music.jpg": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1ae",
    "reading.jpg": "https://images.unsplash.com/photo-1516979187457-63952f4549d5",
    "blogs.jpg": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "contact-me.jpg": "https://images.unsplash.com/photo-1587560445892-0b29c9104b2a",
    "portfolio.jpg": "https://images.unsplash.com/photo-1522814322470-3d7c3468579d",
    "clients.jpg": "https://images.unsplash.com/photo-1529156069894-3a5f988849b2",
    "interests.jpg": "https://images.unsplash.com/photo-1518779774619-389f4f4f0c4a",
    "gallery.jpg": "https://images.unsplash.com/photo-1518704289882-748430761e2b",
    "testimonials.jpg": "https://images.unsplash.com/photo-1522814234032-b7b752243d94",
  };

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
            placeholderImages={placeholderImages}
            navigate={navigate}
          />

          {/* Continue Watching: Rectangular Tiles */}
          <RectTileRow
            title="Continue Watching for recruiter"
            tiles={continueWatching}
            placeholderImages={placeholderImages}
            navigate={navigate}
          />
        </div>
      </section>
    </div>
  );
};

export default RecruiterPage;
