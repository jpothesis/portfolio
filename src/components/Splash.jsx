"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust if needed

const Splash = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fade out after 2.5 seconds
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Navigate to /profiles after fade completes
    const timer2 = setTimeout(() => {
      navigate("/profiles");
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Centered Logo */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="animate-pulse-slow">
          <img
            src={logo}
            alt="Logo"
            className="animate-glow-logo w-[700px] max-w-[90vw] h-auto object-contain" // ✅ Bigger and responsive
          />
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx="true">{`
        @keyframes glow-logo {
          0%,
          100% {
            filter: drop-shadow(0 0 25px rgba(56, 189, 248, 0.6))
                    drop-shadow(0 0 45px rgba(56, 189, 248, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(56, 189, 248, 0.9))
                    drop-shadow(0 0 65px rgba(56, 189, 248, 0.6));
          }
        }

        .animate-glow-logo {
          animation: glow-logo 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Splash;
