import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

// Core Components
import Splash from "./components/Splash";
import ProfileSelection from "./components/ProfileSelection";


// Profile Components (moved from ./pages to ./components)
import RecruiterPage from "./components/RecruiterPage";
import DeveloperPage from "./components/DeveloperPage";
import StalkerPage from "./components/StalkerPage";
import AdventurerPage from "./components/AdventurerPage";

function App() {
  // Optional: Any startup logic
  useEffect(() => {
    console.log("Portfolio App Loaded 🚀");
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home / Splash Page */}
          <Route path="/" element={<Splash />} />

          {/* Profile Selection */}
          <Route path="/profiles" element={<ProfileSelection />} />

          {/* Individual Profile Pages */}
          <Route path="/recruiter" element={<RecruiterPage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          <Route path="/stalker" element={<StalkerPage />} />
          <Route path="/adventurer" element={<AdventurerPage />} />



          {/* Catch-all Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
