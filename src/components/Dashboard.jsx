import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProjectCarousel from '../components/ProjectCarousel';
import SkillsView from '../components/SkillsView';
import ExperienceView from '../components/ExperienceView';
import ContactView from '../components/ContactView';
import { projectCategories } from '../data/mockData';


const Dashboard = () => {
  const { section } = useParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (section) {
      case 'work':
        return (
          <div className="space-y-12">
            {projectCategories.map((category) => (
              <ProjectCarousel key={category.id} category={category} />
            ))}
          </div>
        );
      case 'skills':
        return <SkillsView />;
      case 'experience':
        return <ExperienceView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <div className="space-y-12">
            {projectCategories.map((category) => (
              <ProjectCarousel key={category.id} category={category} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header scrolled={scrolled} activeSection={section} />
      
      {section === 'work' && (
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
          <div className="relative h-full flex items-end pb-24 px-12">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-6xl font-bold text-white mb-4">Featured Work</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore a collection of innovative projects showcasing full-stack development, 
                UI/UX design, and cutting-edge technologies.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  View Projects
                </button>
                <button className="px-8 py-3 bg-gray-600 bg-opacity-70 text-white font-semibold rounded hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-12 py-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;