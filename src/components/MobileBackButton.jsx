"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MobileBackButton = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount & resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 👈 adjust breakpoint if needed
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don’t render if not mobile
  if (!isMobile) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-5 left-5 z-50 flex items-center gap-2 
      bg-white/10 border border-white/20 text-white 
      px-3 py-2 rounded-full text-sm backdrop-blur-md 
      hover:bg-white/20 hover:border-white/40 
      active:shadow-[0_0_15px_rgba(255,255,255,0.3)] 
      transition-all duration-300"
    >
      <ArrowLeft size={18} className="text-white" />
      Back
    </button>
  );
};

export default MobileBackButton;
