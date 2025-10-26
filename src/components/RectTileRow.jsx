import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const RectTileRow = ({ title, tiles, placeholderImages = {}, navigate }) => {
  const scrollRef = useRef(null);
  const effectiveNavigate = navigate || useNavigate();

  // Scroll left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-8 relative">
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 px-6 sm:px-8 flex items-center text-gray-100">
        {title}
        <span
          className="text-blue-400 text-sm font-normal ml-3 flex items-center cursor-pointer hover:text-blue-300"
          onClick={() => console.log("See more clicked for:", title)}
        >
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 rounded-full hover:bg-blue-500 transition"
      >
        &#8592;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 rounded-full hover:bg-blue-500 transition"
      >
        &#8594;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden whitespace-nowrap space-x-4 pb-4 pl-6 sm:pl-8 lg:pl-10 custom-scrollbar"
      >
        {tiles.map((tile, index) => {
          // Safe image resolution
          const imageSrc =
            typeof tile.image === "string"
              ? placeholderImages[tile.image] || tile.image
              : tile.image;

          return (
            <div
              key={index}
              onClick={() => effectiveNavigate(tile.route)}
              className="group relative flex-none w-[18%] min-w-[200px] sm:min-w-[220px] lg:min-w-[240px] rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500 hover:shadow-2xl"
            >
              {/* Blue Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-blue-500 blur-xl transition duration-300 z-0"></div>

              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                <img
                  src={
                    imageSrc ||
                    "https://via.placeholder.com/240x320?text=No+Image"
                  }
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:opacity-75 z-10"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300 z-10" />

              {/* Title */}
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <h3 className="text-white font-semibold text-lg tracking-wide truncate">
                  {tile.title}
                </h3>
              </div>

              {/* Optional "NEW" Badge */}
              {tile.isNew && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-30">
                  NEW
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Hide Scrollbars */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default RectTileRow;
