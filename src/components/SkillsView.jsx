import React from 'react';
import { skills } from '../data/mockData';

const SkillsView = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-400">Expertise across the full development stack</p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">{category}</h2>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-400 group-hover:to-blue-400"
                        style={{
                          width: `${skill.level}%`,
                          transition: 'width 1s ease-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-cyan-500 transition-colors duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-2">Fast Learner</h3>
            <p className="text-gray-400">
              Quick to adapt to new technologies and frameworks
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-cyan-500 transition-colors duration-300">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-2">Problem Solver</h3>
            <p className="text-gray-400">
              Analytical approach to complex technical challenges
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-cyan-500 transition-colors duration-300">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-2">Team Player</h3>
            <p className="text-gray-400">
              Collaborative mindset with excellent communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;