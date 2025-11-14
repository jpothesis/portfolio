import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import "./App.css";

// ⚡ Lazy Loaded Components
const Splash = lazy(() => import("./components/Splash"));
const ProfileSelection = lazy(() => import("./components/ProfileSelection"));

const RecruiterPage = lazy(() => import("./components/RecruiterPage"));
const DeveloperPage = lazy(() => import("./components/DeveloperPage"));
const StalkerPage = lazy(() => import("./components/StalkerPage"));
const AdventurerPage = lazy(() => import("./components/AdventurerPage"));

const Professional = lazy(() => import("./components/Professional"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const ContactMe = lazy(() => import("./components/ContactMe"));

function App() {
  useEffect(() => {
    console.log("Portfolio App Loaded 🚀");

    // If no profile is selected yet, default to "recruiter"
    if (!localStorage.getItem("selectedProfile")) {
      localStorage.setItem("selectedProfile", "recruiter");
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {/* 🌀 Suspense Fallback with Cool Loading Animation */}
        <Suspense
          fallback={
            <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center bg-[#0a0f1c] text-white animate-fadeIn">

              {/* Glowing Spinning Loader */}
              <div className="w-16 h-16 border-4 border-t-transparent border-[#38bdf8] rounded-full animate-spin shadow-[0_0_30px_#38bdf8]"></div>

              <p className="text-xl tracking-wider opacity-80 animate-pulse">
                Loading ...
              </p>
            </div>
          }
        >
          <Routes>
            {/* Home / Splash */}
            <Route path="/" element={<Splash />} />

            {/* Profile Selection */}
            <Route path="/profiles" element={<ProfileSelection />} />

            {/* Profile Pages */}
            <Route path="/recruiter" element={<RecruiterPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/stalker" element={<StalkerPage />} />
            <Route path="/adventurer" element={<AdventurerPage />} />

            {/* Professional */}
            <Route path="/professional" element={<Professional />} />

            {/* Skills */}
            <Route path="/skills" element={<Skills />} />

            {/* Projects */}
            <Route path="/projects" element={<Projects />} />

            {/* Certifications */}
            <Route path="/certifications" element={<Certifications />} />

            {/* Contact Me */}
            <Route path="/contact-me" element={<ContactMe />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
