import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
