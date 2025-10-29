"use client";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import recruiterImg from "../assets/recruiter.png";
import developerImg from "../assets/developer.png";
import stalkerImg from "../assets/stalker.png";
import adventurerImg from "../assets/adventurer.png";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Professional", path: "/professional" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Hire Me", path: "/contact-me" },
];

const profileImages = {
  recruiter: recruiterImg,
  developer: developerImg,
  stalker: stalkerImg,
  adventurer: adventurerImg,
};

const profilePaths = {
  recruiter: "/recruiter",
  developer: "/developer",
  stalker: "/stalker",
  adventurer: "/adventurer",
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const profileType = localStorage.getItem("selectedProfile") || "recruiter";
  const profileImg = profileImages[profileType];

  const getNavItemClasses = (path, name) => {
    let isActive = false;
    if (name === "Home" && location.pathname === profilePaths[profileType]) {
      isActive = true;
    } else if (location.pathname === path) {
      isActive = true;
    }

    return `
      text-gray-300 text-base md:text-lg font-medium py-2 px-4
      rounded-lg cursor-pointer transition-all duration-300 transform
      hover:scale-105 hover:text-white hover:shadow-lg hover:shadow-blue-500/40
      ${isActive ? "text-white shadow-lg shadow-blue-500/50 scale-105" : ""}
    `;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0a0f2e] via-[#0b133a] to-[#0a0f2e] backdrop-blur-xl shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-6 md:gap-8">
            <img
              src={logo}
              alt="Logo"
              className="w-28 md:w-36 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const path = item.name === "Home" ? profilePaths[profileType] : item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(path)}
                  className={getNavItemClasses(path, item.name)}
                >
                  {item.name}
                </button>
              );
            })}

            <button className="text-gray-300 text-base md:text-lg font-medium py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-1">
              My Stuff
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Profile + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              className={`md:hidden p-3 rounded-full transition-all duration-300 ${
                mobileOpen
                  ? "bg-blue-500/30 text-white ring-2 ring-blue-500 shadow-lg shadow-blue-500/40"
                  : "text-gray-300 hover:text-white hover:bg-blue-500/20"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>

            <div
              className="w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-blue-400 transition-all duration-300"
              onClick={() => navigate("/profiles")}
            >
              <img src={profileImg} alt={profileType} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden flex flex-col bg-gradient-to-b from-[#0b133a]/95 to-[#0a0f2e]/95 backdrop-blur-lg rounded-lg mt-2 p-4 gap-3 border border-blue-500/20 shadow-lg shadow-blue-500/30 animate-slideDown"
          >
            {navItems.map((item) => {
              const path = item.name === "Home" ? profilePaths[profileType] : item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(path);
                    setMobileOpen(false);
                  }}
                  className={getNavItemClasses(path, item.name)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
