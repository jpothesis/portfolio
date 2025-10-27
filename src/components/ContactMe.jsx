"use client";

import React from "react";
import Navbar from "./Navbar";
import { Card } from "./ui/card";
import { ExternalLink, Github, Mail, Phone } from "lucide-react";
import myselfImg from "../assets/myself.png"; // ✅ Correct image import

const ContactMe = () => {
  return (
    <div className="bg-[#0a1128] min-h-screen text-white flex flex-col items-center justify-start">
      <Navbar />

      <section className="pt-36 pb-16 px-4 md:px-8 flex flex-col items-center justify-center w-full">
        <div className="max-w-4xl w-full mx-auto space-y-10">
          {/* Contact Card */}
          <Card className="flex flex-col md:flex-row items-center bg-gray-900/70 border border-gray-700 rounded-xl overflow-hidden shadow-[0_0_25px_#3b82f6]">
            
            {/* Left Side - Text */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">Jaanvi Choudhary</h2>
              <p className="text-md text-blue-400 font-medium">Full Stack Developer</p>
              <p className="text-gray-300">
                Skilled in <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Tailwind CSS</strong>, and AI-powered integrations.
              </p>
              <div className="text-gray-500 text-sm">College Projects | Personal Portfolio</div>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/jaanvi-choudhary-9277872a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition text-white shadow-md"
                >
                  <ExternalLink className="w-5 h-5" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/jpothesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2 bg-black hover:bg-gray-800 rounded-md font-semibold transition text-white shadow-md"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Side - Circular Profile Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
              <img
                src={myselfImg}
                alt="Jaanvi Choudhary"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_25px_#3b82f6] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>

          {/* Email & Call Me Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full max-w-md mx-auto">
            <a
              href="mailto:jaanvich1@gmail.com"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition text-white shadow-md"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="tel:+919717009487"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition text-white shadow-md"
            >
              <Phone className="w-5 h-5" />
              Contact Me
            </a>
          </div>

          <p className="text-gray-400 mt-4 text-center">
            Or catch up over a coffee! ☕
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
