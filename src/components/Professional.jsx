import React from "react";
import Navbar from "./Navbar"; // Import your existing Navbar
import { Card } from "./ui/card"; // Your Card component

const timelineData = [
  {
    id: "1",
    type: "education",
    title: "Schooling",
    organization: "Modern Convent School, Delhi",
    period: "2010 - 2024",
    description:
      "Completed my schooling with a strong academic foundation in science and mathematics.",
    details: [
      "Graduated in 2024 with a focus on Science stream ",
      "Developed an early interest in programming and AI",
    ],
  },
  {
    id: "2",
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    organization: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
    period: "2024 - 2028 (Ongoing)",
    description:
      "Currently pursuing my B.Tech degree with specialization in Computer Science and Engineering.",
    details: [
      "Currently in 2nd year of the program - CGPA:",
      "Studying core CS subjects like Data Structures, Algorithms, and AI",
    ],
  },
  {
    id: "3",
    type: "work",
    title: "AI-Powered Full Stack Development Intern",
    organization: "Summer Internship Program",
    period: "June - July 2025",
    description:
      "Completed an 8-week internship focused on AI-powered full stack web development.",
    details: [
      "Built scalable applications using React, Node.js, and AI integrations",
      "Gained hands-on experience in backend APIs, deployment, and model integration",
    ],
  },
  {
    id: "4",
    type: "project",
    title: "College Resource Website",
    organization: "IGDTUW Internal Project",
    period: "2025",
    description:
      "Developed a resource-sharing web platform for students, potentially serving 1000–2000 users.",
    details: [
      "Designed responsive UI using React and TailwindCSS",
      "Integrated authentication and database functionality",
      "Collaborated with a team for UI/UX and backend development",
    ],
  },
  {
    id: "5",
    type: "achievement",
    title: "Mobile Application Development Hackathon - 2nd Place",
    organization: "IGDTUW Hackathon",
    period: "2025",
    description:
      "Secured 2nd position in a university-level hackathon focused on mobile application development.",
    details: [
      "Built an innovative Android app prototype within 24 hours",
      "Led UI design and backend integration using Kotlin and Firebase",
    ],
  },
  {
    id: "6",
    type: "experience",
    title: "Tech Team Member - Taraangana Annual Fest",
    organization: "IGDTUW",
    period: "March 2025",
    description:
      "Worked as part of the technical team for IGDTUW’s annual cultural fest, Taraangana.",
    details: [
      "Contributed to website maintenance and digital coordination",
      "Handled on-ground tech support during fest events",
    ],
  },
  {
    id: "7",
    type: "community",
    title: "Mentee - Google Developer Group (GDG) on Campus",
    organization: "IGDTUW Chapter",
    period: "2025 - Present",
    description:
      "Selected as a mentee under GDG on Campus focusing on AI/ML and Competitive Programming.",
    details: [
      "Engaging in mentorship sessions on machine learning and problem-solving",
      "Collaborating with peers and mentors on tech-based projects",
    ],
  },
  {
    id: "8",
    type: "contribution",
    title: "Contributor - Open Source Connect",
    organization: "Open Source Program",
    period: "2025",
    description:
      "Actively contributing to open source repositories and collaborative projects.",
    details: [
      "Worked on front-end and documentation tasks",
      "Learned Git, version control, and community collaboration",
    ],
  },
  {
    id: "9",
    type: "creative",
    title: "Photography Society Member",
    organization: "Prekshya - IGDTUW",
    period: "2024 - Present",
    description:
      "Member of Prekshya, the Photography Society of IGDTUW, combining creativity with visual storytelling.",
    details: [
      "Captured campus events and fests for official media",
      "Developed skills in editing and composition",
    ],
  },
];


const Professional = () => {
  return (
    <div className="bg-[#0a1128] min-h-screen text-white">
      <Navbar />

      <section className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fadeIn">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto opacity-0 animate-fadeIn delay-200"></div>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative md:flex items-start md:items-center opacity-0 animate-fadeIn delay-${index * 200} ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a1128] transform -translate-x-2 md:-translate-x-2 md:translate-y-6"></div>

                  {/* Timeline Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="relative p-6 bg-gray-900/70 border border-gray-700 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#3b82f6]">
                      <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-xl -z-10 pointer-events-none"></div>

                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.type === "work"
                              ? "bg-blue-600 text-white"
                              : "bg-purple-600 text-white"
                          }`}
                        >
                          {item.type === "work" ? "Work" : "Education"}
                        </span>
                        <span className="text-sm text-gray-400">{item.period}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-blue-400 font-semibold mb-3">{item.organization}</p>
                      <p className="text-gray-300 mb-3">{item.description}</p>

                      {item.details && item.details.length > 0 && (
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-fadeIn {
          animation: fadeInUp 0.8s forwards;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Professional;
