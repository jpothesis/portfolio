import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const StalkerPage = () => {
  const navigate = useNavigate();

  // Load Tenor embed script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#0a0e1b] via-[#0f1628] to-[#000000] text-white font-sans relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={logo} alt="Logo" className="w-32 md:w-40 opacity-90" />
      </div>

      {/* Hero Section */}
      <div className="h-full flex flex-col md:flex-row items-center justify-center px-8">
        {/* Embedded Tenor GIF */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="tenor-gif-embed rounded-2xl shadow-xl overflow-hidden w-[90%] md:w-[80%]"
            data-postid="14262916807378672132"
            data-share-method="host"
            data-aspect-ratio="1.58599"
            data-width="100%"
          >
            <a href="https://tenor.com/view/bazinga-sheldon-bazinga-ball-pit-bazinga-sheldon-ball-pit-big-bang-theory-gif-14262916807378672132">
              Bazinga Sheldon Bazinga GIF
            </a>{" "}
            from{" "}
            <a href="https://tenor.com/search/bazinga-gifs">Bazinga GIFs</a>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Stalker
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Uncover hidden stories. Observe, analyze, and explore digital footprints like never before.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Now
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

export default StalkerPage;
