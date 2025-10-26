import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

// Core Components
import Splash from "./components/Splash";
import ProfileSelection from "./components/ProfileSelection";

// Profile Pages
import RecruiterPage from "./components/RecruiterPage";
import DeveloperPage from "./components/DeveloperPage";
import StalkerPage from "./components/StalkerPage";
import AdventurerPage from "./components/AdventurerPage";

// Other Pages
import Professional from "./components/Professional";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";


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
          
          {/* Contact Me / Hire Me */}
          <Route path="/contact-me" element={<ContactMe />} />

          {/* Catch-all redirects to Splash */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
