import React from "react";
import { useNavigate } from "react-router-dom";

const RectTileRow = ({ title, tiles, placeholderImages, navigate }) => {
  // Ensure navigate is available
  const effectiveNavigate = navigate || useNavigate(); 

  return (
    <div className="py-8">
      {/* Section Title with "See more" */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 px-6 sm:px-8 flex items-center text-gray-100">
        {title}
        <span 
          className="text-blue-400 text-sm font-normal ml-3 flex items-center cursor-pointer hover:text-blue-300"
          onClick={() => console.log('See more clicked for:', title)} // Replace with navigation if needed
        >
          See more 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </h2>

      {/* Scrollable tile container */}
      <div className="flex overflow-x-scroll overflow-y-hidden whitespace-nowrap space-x-3 md:space-x-4 pb-4 pl-6 sm:pl-8 lg:pl-10 no-scrollbar">
        {tiles.map((tile) => (
          <div
            key={tile.title}
            onClick={() => effectiveNavigate(tile.route)}
            className="group relative flex-none w-[160px] sm:w-[180px] lg:w-[200px] rounded-md overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            {/* Aspect Ratio Box (poster style) */}
            <div className="relative pt-[150%] overflow-hidden">
              <img
                src={placeholderImages[tile.image] || tile.image || "https://via.placeholder.com/200x300"}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:opacity-75"
              />

              {/* Optional: "NEW MOVIE" badge */}
              {tile.isNew && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-20">
                  NEW
                </span>
              )}

              {/* Optional logo overlay */}
              <img 
                src="https://via.placeholder.com/40x20?text=prime" 
                alt="Logo" 
                className="absolute bottom-2 left-2 w-10 h-auto opacity-90 z-20" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbars */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default RectTileRow;
