"use client";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import splashSound from "../assets/splash.mp3"; // 🎵 Sound file

const Splash = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const startSplash = async () => {
    setHasStarted(true);

    // 🎧 Create and play splash sound
    const audio = new Audio(splashSound);
    audio.volume = 1.0;
    audioRef.current = audio;

    try {
      await audio.play(); // Works since triggered by user tap
    } catch (err) {
      console.warn("Playback error:", err);
    }

    // 🌫️ Fade out animation and sound
    setTimeout(() => {
      setFadeOut(true);

      // Smooth sound fade
      const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          clearInterval(fadeInterval);
          audio.pause();
        }
      }, 100);
    }, 2500);

    // ⏩ Navigate after fade-out
    setTimeout(() => {
      navigate("/profiles");
    }, 3200);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#081831] to-[#000814] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      onClick={!hasStarted ? startSplash : undefined} // 👆 Start on tap
    >
      {/* Show "Click" text before animation starts */}
      {!hasStarted && (
        <p className="text-white text-sm opacity-70 animate-pulse absolute bottom-20">
          click
        </p>
      )}

      {/* Logo animation */}
      {hasStarted && (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="animate-pulse-slow">
            <img
              src={logo}
              alt="Logo"
              className="animate-glow-logo w-[700px] max-w-[90vw] h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Custom Animations */}
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
          0%,
          100% {
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
