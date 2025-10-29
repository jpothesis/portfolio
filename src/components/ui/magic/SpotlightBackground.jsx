// components/ui/magic/SpotlightBackground.jsx
"use client";
import { motion } from "framer-motion";

export default function SpotlightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-700/10 to-transparent blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
