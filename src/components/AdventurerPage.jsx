import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const AdventurerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#081018] via-[#0e1a29] to-[#000000] text-white font-sans relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={logo} alt="Logo" className="w-32 md:w-40 opacity-90" />
      </div>

      {/* Hero Section */}
      <div className="h-full flex flex-col md:flex-row items-center justify-center px-8">
        {/* GIF Embed */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            src="https://tenor.com/embed/5440157"
            width="90%"
            height="auto"
            frameBorder="0"
            className="rounded-2xl shadow-xl md:w-[80%]"
            allowFullScreen
            title="Adventurer GIF"
          ></iframe>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Adventurer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Embark on your next great journey. Discover places, people, and stories beyond the horizon.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Start Adventure
            </button>
            <button
              onClick={() => navigate("/profiles")}
              className="border border-gray-400 px-6 py-3 rounded-lg hover:border-white hover:text-white transition-all duration-300"
            >
              Back to Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventurerPage;
