import React from 'react';
import { experience } from '../data/mockData';


const ExperienceView = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">Professional Journey</h1>
          <p className="text-xl text-gray-400">Building innovative solutions across diverse projects</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-teal-500"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-20 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-5 top-0 w-7 h-7 bg-cyan-500 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300"></div>

                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-xl text-cyan-400 mb-2">{exp.company}</h4>
                    </div>
                    <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-lg border border-gray-700">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-400 text-lg mb-6">
              Passionate about creating impactful solutions and collaborating with talented teams
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;