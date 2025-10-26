import React from 'react';

const TileRow = ({ title, tiles, placeholderImages, navigate }) => {
  return (
    <div className="py-8">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4 text-gray-100 px-6 sm:px-8">
        {title}
      </h2>

      {/* Horizontal Scroll Container */}
      {/* The key is 'overflow-x-scroll' and 'whitespace-nowrap' */}
      <div 
        className="flex overflow-x-scroll overflow-y-hidden whitespace-nowrap space-x-4 pb-4 px-6 sm:px-8 custom-scrollbar"
      >
        {tiles.map((tile) => (
          // Individual Tile (Card)
          <div
            key={tile.title}
            onClick={() => navigate(tile.route)}
            // 'inline-block' allows them to sit side-by-side without wrapping
            // 'w-52' (or similar) gives it a fixed width for the scrolling effect
            className="group relative w-52 h-48 rounded-lg overflow-hidden shadow-xl 
                       transform hover:scale-[1.05] transition duration-300 
                       ease-in-out cursor-pointer inline-block flex-shrink-0"
          >
            {/* Card Background Image */}
            <img
              src={placeholderImages[tile.image] || tile.image}
              alt={tile.title}
              className="w-full h-full object-cover transition duration-500 group-hover:opacity-75"
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300" />
            
            {/* Card Title Text */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-xl font-bold text-white text-center tracking-wider z-10">
                {tile.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add custom CSS for 'custom-scrollbar' to hide the scrollbar while keeping functionality */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default TileRow;