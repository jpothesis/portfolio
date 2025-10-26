"use client";
import React from "react";
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
  { name: "Hire Me", path: "/hire-me" },
];

const profileImages = {
  recruiter: recruiterImg,
  developer: developerImg,
  stalker: stalkerImg,
  adventurer: adventurerImg,
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getProfileType = () => {
    if (location.pathname.includes("recruiter")) return "recruiter";
    if (location.pathname.includes("developer")) return "developer";
    if (location.pathname.includes("stalker")) return "stalker";
    if (location.pathname.includes("adventurer")) return "adventurer";
    if (location.pathname === "/") return "adventurer"; 
    return null;
  };

  const profileType = getProfileType();
  const profileImg = profileType ? profileImages[profileType] : profileImages.adventurer;

  const getNavItemClasses = (path) => {
    const isActive = location.pathname === path;
    let classes =
      "text-gray-200 hover:text-white text-base md:text-lg font-medium py-2 px-4 transition-all duration-200 cursor-pointer";
    if (isActive) classes += " bg-white/20 text-white rounded-lg";
    else classes += " hover:bg-white/10 rounded-lg";
    return classes;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-6 md:gap-8">
<img
  src={logo}
  alt="Logo"
  className="w-28 md:w-36 ml-4 cursor-pointer hover:scale-105 transition-transform duration-300"
  onClick={() => navigate("/")}
/>


            <div className="hidden md:flex gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={getNavItemClasses(item.path)}
                >
                  {item.name}
                </button>
              ))}
              <button className="text-gray-200 hover:text-white text-base md:text-lg font-medium py-2 px-4 transition-all duration-200 cursor-pointer hover:bg-white/10 rounded-lg flex items-center gap-1">
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
          </div>

          {/* Right: Search, Options, Profile */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="text-gray-200 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-200">
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Hamburger / Options */}
            <button className="text-gray-200 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

{/* Profile Icon */}
<div className="w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-cyan-400 transition-all duration-300">
  <img
    src={profileImg}
    alt={profileType}
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-6 py-3 flex justify-between items-center bg-black/80 backdrop-blur-xl border-t border-gray-700">
          <img
            src={logo}
            alt="Logo"
            className="w-24 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex items-center gap-3">
            <button className="text-gray-300 hover:text-white p-2 rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
