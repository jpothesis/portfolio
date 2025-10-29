import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const TileRow = ({ title, tiles, placeholderImages = {}, navigate }) => {
  const scrollRef = useRef(null);
  const effectiveNavigate = navigate || useNavigate();

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
      <h2 className="text-3xl font-bold mb-4 text-gray-100 px-6 sm:px-8">
        {title}
      </h2>

      {/* Scroll Arrows */}
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

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden whitespace-nowrap space-x-4 pb-4 px-6 sm:px-8 custom-scrollbar"
      >
        {tiles.map((tile, index) => {
          // 🧠 Fix: Safe image resolution
          const imageSrc =
            typeof tile.image === "string"
              ? placeholderImages[tile.image] || tile.image
              : tile.image;

          return (
            <div
              key={index}
              onClick={() => {
  if (tile.external && tile.link) {
    window.open(tile.link, "_blank", "noopener,noreferrer");
  } else if (tile.route) {
    effectiveNavigate(tile.route);
  }
}}

              className="group relative w-[18%] min-w-[180px] h-56 rounded-lg overflow-hidden shadow-xl
                         cursor-pointer inline-block flex-shrink-0
                         transform transition duration-300 ease-in-out
                         hover:scale-[1.05] hover:shadow-blue-500 hover:shadow-2xl"
            >
              {/* Blue Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-blue-500 blur-xl transition duration-300 z-0"></div>

              {/* Image */}
              <img
                src={imageSrc}
                alt={tile.title}
                className="w-full h-full object-cover transition duration-500 group-hover:opacity-75 relative z-10"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300 z-10" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
                <h3 className="text-xl font-bold text-white text-center tracking-wider">
                  {tile.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

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

export default TileRow;
