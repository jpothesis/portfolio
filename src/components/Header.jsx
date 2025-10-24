import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ scrolled, activeSection }) => {
  const navigate = useNavigate();

  const sections = [
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-12 py-3">
        <div className="flex items-center gap-8">
          <h1
            onClick={() => navigate('/profiles')}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            JAANVI CHOUDHARY
          </h1>
          <nav className="flex gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => navigate(`/dashboard/${section.id}`)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-white ${
                  activeSection === section.id ? 'text-white' : 'text-gray-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-cyan-400 transition-all duration-300">
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              JC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
