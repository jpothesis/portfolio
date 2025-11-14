import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black overflow-hidden relative">
      
      {/* 🌠 Twinkling Background Stars (More variety) */}
      <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-60 top-10 left-1/4"></div>
      <div className="absolute w-3 h-3 bg-white rounded-full animate-twinkle opacity-80 -top-16 left-10"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle opacity-70 top-1/2 left-20"></div>
      <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-50 bottom-10 right-1/4"></div>
      <div className="absolute w-4 h-4 bg-white rounded-full animate-twinkle opacity-90 top-16 right-12"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle opacity-70 bottom-10 -right-10"></div>
      <div className="absolute w-3 h-3 bg-white rounded-full animate-twinkle opacity-80 bottom-1/4 left-5"></div>

      {/* 🪐 Main Orbital System Container */}
      <div className="relative flex items-center justify-center">

        {/* 🌍 Main Planet (Detailed) */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-pink-800 shadow-[0_0_80px_15px_rgba(255,0,255,0.6)] relative overflow-hidden">
          {/* Subtle Shadow Overlay for Depth */}
          <div className="absolute w-full h-full rounded-full bg-black/30"></div>
          {/* Atmospheric Glow */}
          <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-purple-400/50 blur-xl opacity-50"></div>
        </div>

        {/* 💫 Outer Orbit Ring (Slow Spin) */}
        <div className="absolute w-64 h-64 border-4 border-purple-500/30 rounded-full animate-spin-slow"></div>

        {/* 🌀 Middle Orbit Ring (Reverse Spin) */}
        <div className="absolute w-48 h-48 border-4 border-pink-500/40 rounded-full animate-spin-reverse"></div>

        {/* 🌙 Inner Orbit Ring (Fast Spin) */}
        <div className="absolute w-32 h-32 border-2 border-yellow-300/50 rounded-full animate-spin-fast"></div>

        {/* 🚀 First Orbiting Satellite (Larger) */}
        <div className="absolute w-5 h-5 bg-cyan-400 rounded-full animate-satellite-large shadow-[0_0_10px_3px_rgba(0,255,255,0.7)]"></div>
        
        {/* ☄️ The Comet (Uses animation for movement and requires custom 'comet' class for the tail) */}
        {/* Note: The 'comet' class would typically use ::after pseudo-element for the tail */}
        <div className="absolute w-3 h-3 bg-red-400 rounded-full animate-comet shadow-[0_0_10px_3px_rgba(255,0,0,0.7)]"></div>

      </div>
    </div>
  );
};

export default Loader;