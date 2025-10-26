"use client";

import React from "react";
import Navbar from "./Navbar";
import { Card } from "./ui/card";
import Button from "./ui/button";
import { ExternalLink } from "lucide-react";

const certificatesData = [
  {
    id: "1",
    name: "Full-Stack Web Development",
    organization: "Coursera",
    orgLogo: "/coursera-logo.png",
    description:
      "Comprehensive course covering HTML, CSS, JS, React, Node.js, and MongoDB.",
    certificateUrl: "https://www.coursera.org/certificate/12345",
  },
  {
    id: "2",
    name: "AI & Machine Learning",
    organization: "edX",
    orgLogo: "/edx-logo.png",
    description:
      "Hands-on projects with AI algorithms, ML pipelines, and real-world data analysis.",
    certificateUrl: "https://www.edx.org/certificate/67890",
  },
  {
    id: "3",
    name: "Cloud Computing Essentials",
    organization: "AWS Training",
    orgLogo: "/aws-logo.png",
    description:
      "Practical knowledge in cloud infrastructure, deployment, and security best practices.",
    certificateUrl: "https://www.aws.training/certificate/abcde",
  },
  {
    id: "4",
    name: "React & Advanced Frontend",
    organization: "Udemy",
    orgLogo: "/udemy-logo.png",
    description:
      "Advanced React concepts, state management, hooks, and performance optimization.",
    certificateUrl: "https://www.udemy.com/certificate/xyz123",
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
                className="relative p-6 border border-gray-700 bg-gray-900 rounded-xl hover:shadow-[0_0_25px_#3b82f6] hover:border-blue-500/60 transition-all duration-300 group overflow-hidden h-72 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                </div>

                {/* External Link Button */}
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto group-hover:bg-blue-500/20"
                >
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </Button>

                {/* Moved logo to bottom-right */}
                <img
                  src={cert.orgLogo}
                  alt={cert.organization}
                  className="absolute bottom-3 right-3 w-12 h-12 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
