import React from "react";

const Button = ({ children, href, className = "", icon: Icon, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 hover:scale-105 shadow-md";

  // If it's a link button
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export default Button;
