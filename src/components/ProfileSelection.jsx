"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import recruiterImg from "../assets/recruiter.png";
import developerImg from "../assets/developer.png";
import stalkerImg from "../assets/stalker.png";
import adventurerImg from "../assets/adventurer.png";
import logo from "../assets/logo.png";

const profiles = [
  { id: "recruiter", name: "Recruiter", image: recruiterImg, path: "/recruiter" },
  { id: "developer", name: "Developer", image: developerImg, path: "/developer" },
  { id: "stalker", name: "Stalker", image: stalkerImg, path: "/stalker" },
  { id: "adventurer", name: "Explorer", image: adventurerImg, path: "/adventurer" },
];

const ProfileSelection = () => {
  const navigate = useNavigate();

  const handleClick = (profile) => {
    // Save selected profile to localStorage
    localStorage.setItem("selectedProfile", profile.id);
    // Navigate to profile page
    navigate(profile.path);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 font-sans relative">
      {/* Top Branding - Logo */}
      <div className="absolute top-6 left-6">
        <img
          src={logo}
          alt="Logo"
          className="w-32 md:w-40 opacity-90 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Who's watching?
        </h2>
      </div>

      {/* Profiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-14">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => handleClick(profile)}
            className="cursor-pointer flex flex-col items-center group transition-transform duration-300"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-transparent group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 shadow-lg">
              <img
                src={profile.image}
                alt={profile.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              {profile.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
