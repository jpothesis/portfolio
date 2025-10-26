import React from "react";

const Badge = ({ children, color = "blue", className = "" }) => {
  const colors = {
    blue: "bg-blue-600 text-white",
    purple: "bg-purple-600 text-white",
    green: "bg-green-600 text-white",
    red: "bg-red-600 text-white",
    gray: "bg-gray-600 text-white",
  };

  const colorClass = colors[color] || colors.blue;

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
