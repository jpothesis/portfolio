"use client";

import React from "react";
import Navbar from "./Navbar";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

// Import local logos
import igdtuwLogo from "../assets/igdtuwlogo.png";
import microsoftLogo from "../assets/microsoftlogo.png";
import tsscLogo from "../assets/tssclogo.png";
const codeclauseLogo = igdtuwLogo; // temporary placeholder

const certificatesData = [
  {
    id: "1",
    name: "Internship Completion – AI Powered Full Stack Development",
    organization: "IGDTUW & CodeClause",
    orgLogo: codeclauseLogo,
    description:
      "Successfully completed a full-stack development internship focusing on AI integration and scalable app architecture (2025).",
    certificateUrl:
      "https://drive.google.com/file/d/1NejoHUju4uIen2GOZLayFuhVUWnhX9W3/view?usp=sharing",
  },
  {
    id: "2",
    name: "Career Essentials in Cybersecurity",
    organization: "Microsoft & LinkedIn Learning",
    orgLogo: microsoftLogo,
    description:
      "Learned fundamental cybersecurity concepts including network defense, threat modeling, and secure software practices (2025).",
    certificateUrl:
      "https://drive.google.com/file/d/1XeEb3o8wvMs-FqHQydqg9twQNxx11g2G/view?usp=sharing",
  },
  {
    id: "3",
    name: "Mobile Application Development Hackathon Winner",
    organization: "IGDTUW",
    orgLogo: igdtuwLogo,
    description:
      "Winner of the 2025 MAD Hackathon for designing and prototyping an innovative app solution with a strong user interface.",
    certificateUrl:
      "https://drive.google.com/file/d/18H9lGTpiiH9dSIuq9o6-PK8-JIqyfQ0_/view?usp=sharing",
  },
  {
    id: "4",
    name: "Telecom Sector Skill<br /> Council – Introduction to Internet of Things",
    organization: "TSSC",
    orgLogo: tsscLogo,
    description:
      "Gained understanding of IoT systems, sensors, and connectivity technologies with practical insights into smart applications (2024).",
    certificateUrl:
      "https://drive.google.com/file/d/1tXGg_Q627bklKNOXEfbxdYkwQInJBddK/view?usp=sharing",
  },
  {
    id: "5",
    name: "Mobile Application Development Workshop",
    organization: "IGDTUW",
    orgLogo: igdtuwLogo,
    description:
      "Participated in a hands-on workshop on Android app development using modern frameworks and tools (2025).",
    certificateUrl:
      "https://drive.google.com/file/d/1qk5NXqUmEf-7_4TDfA0rVJG5sbHaqf7U/view?usp=sharing",
  },
  {
    id: "6",
    name: "Career Essentials in<br />Generative AI",
    organization: "Microsoft & LinkedIn Learning",
    orgLogo: microsoftLogo,
    description:
      "Explored AI fundamentals and GenAI tools including prompt engineering, ethical AI, and automation concepts (2024).",
    certificateUrl:
      "https://drive.google.com/file/d/1XeEb3o8wvMs-FqHQydqg9twQNxx11g2G/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <>
      <Navbar />
      <section className="pt-24 pb-16 px-4 md:px-8 bg-[#0a0f25] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-10">
            My Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificatesData.map((cert) => (
              <Card
                key={cert.id}
                className="relative flex flex-col justify-between p-6 border border-gray-700 bg-gray-900 rounded-xl hover:shadow-[0_0_25px_#3b82f6] hover:border-blue-500/60 transition-all duration-300 group overflow-hidden h-[320px]" // fixed height
              >
                {/* Logo at top-right */}
                <img
                  src={cert.orgLogo}
                  alt={cert.organization}
                  className="absolute top-3 right-3 w-12 h-12 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />

                {/* Content */}
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    dangerouslySetInnerHTML={{ __html: cert.name }}
                  ></h3>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>

                {/* Button pinned at bottom */}
                <div className="mt-auto pt-4">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-md overflow-hidden transition-all duration-300 hover:text-white group/button"
                  >
                    <span className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover/button:opacity-100 transition-all duration-300"></span>
                    <span className="absolute inset-0 rounded-md border border-transparent group-hover/button:border-blue-400 blur-sm opacity-0 group-hover/button:opacity-100 transition-all duration-300"></span>
                    <ExternalLink className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">View Certificate</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
