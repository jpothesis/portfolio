import React, { useState } from 'react';

// Mock data to replace the external import (profiles from "../data/mockData")
const mockProfiles = [
  { 
    id: 'user_bhanu', 
    name: 'bhānu', 
    // Custom SVG for the astronaut-like profile icon
    avatar: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="9" r="4" fill="#E0F2F7"/>
        <path d="M12 13c-2.76 0-5 2.24-5 5v2h10v-2c0-2.76-2.24-5-5-5z" fill="#B3E0EB"/>
        <path d="M17.5 7.5L16 6l-2.5 1.5L12 6.5L9 8l-1.5-1L6 8l-1.5-1.5L3 8V5l2-2h14l2 2v3L18 6l-2 1.5z" fill="#FFC0CB"/>
        <path d="M17 5L15 3.5L13 5L11 3.5L9 5L7 3.5L5 5V3L7 1h10l2 2v2z" fill="#FFFFFF" opacity="0.7"/>
        <path d="M12.5 10L11.5 10L11.5 8L12.5 8L12.5 10ZM14.5 9L13.5 9L13.5 7L14.5 7L14.5 9ZM9.5 9L8.5 9L8.5 7L9.5 7L9.5 9Z" fill="#757575"/>
      </svg>
    ),
    colors: 'bg-gradient-to-br from-cyan-400 to-pink-500' // Matches the light blue/pink circle in image
  },
  { 
    id: 'user_a', 
    name: 'a', 
    // SVG path for a generic user icon
    avatar: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    colors: 'bg-red-700' // Deep red/maroon
  },
  { 
    id: 'user_kids', 
    name: 'Kids', 
    // SVG path for a star/kids icon
    avatar: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.009 5.5l1.09 2.21 2.44.36-1.77 1.73.42 2.43L12 14.2l-2.18 1.15.42-2.43L7.47 10.07l2.44-.36L12.009 7.5z" />
      </svg>
    ),
    colors: 'bg-yellow-500' // Vibrant yellow/orange
  },
  { 
    id: 'add_new', 
    name: 'Add new', 
    // SVG path for a plus sign
    avatar: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    ),
    isAddNew: true,
    colors: 'bg-gray-700' // Darker gray
  },
];

// Custom Modal for simulating navigation (replacing the need for 'alert()' and 'react-router-dom')
const Modal = ({ message, onClose }) => {
  if (!message) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-sm w-full border border-blue-500">
        <h3 className="text-xl font-semibold text-white mb-4">Action Taken</h3>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-200 shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main component, renamed to App for default export in this environment
const App = () => {
  const [hoveredProfile, setHoveredProfile] = useState(null);
  const [modalMessage, setModalMessage] = useState(null);

  // Simulates navigation, replacing 'useNavigate'
  const handleProfileClick = (profile) => {
    if (profile.isAddNew) {
      setModalMessage(`Simulating: Opening 'Add new profile' screen.`);
    } else {
      setModalMessage(`Simulating: Navigating to Dashboard for profile: ${profile.name} (ID: ${profile.id}).`);
    }
  };

  // Simulates the 'Edit profile' button click
  const handleManageProfiles = () => {
    setModalMessage("Simulating: Opening 'Edit profile' management screen.");
  };

  return (
    // Main container now uses h-screen w-full for full-screen coverage
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <Modal message={modalMessage} onClose={() => setModalMessage(null)} />

      {/* Top Left Branding: JANVI CHOUDHARY */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <h1 className="text-xl font-extrabold text-white tracking-wider opacity-80">
          JANVI CHOUDHARY
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center pt-16 pb-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Who's watching?
          </h2>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 max-w-4xl">
          {mockProfiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleProfileClick(profile)}
              onMouseEnter={() => setHoveredProfile(profile.id)}
              onMouseLeave={() => setHoveredProfile(null)}
              className="cursor-pointer group flex flex-col items-center transition-transform duration-300"
            >
              {/* Profile Avatar Container (Circular) */}
              <div
                className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
                  profile.colors
                } ${
                  hoveredProfile === profile.id
                    ? 'scale-110 ring-4 ring-blue-400 shadow-2xl shadow-blue-500/50'
                    : 'scale-100 ring-4 ring-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`w-16 h-16 ${profile.isAddNew ? 'text-gray-300' : 'text-white'}`}>
                    {profile.avatar}
                  </span>
                </div>
              </div>

              {/* Profile Name */}
              <div className="mt-4 text-center">
                <h3
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    hoveredProfile === profile.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {profile.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Profile Button */}
        <div className="mt-16">
          <button 
            onClick={handleManageProfiles}
            className="px-8 py-2 border-2 border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white transition-all duration-300 text-lg tracking-wider font-semibold rounded-md uppercase"
          >
            Edit profile
          </button>
        </div>
      </div>
      {/* Removed bottom branding */}
    </div>
  );
};

export default App;