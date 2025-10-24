import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Splash from "./components/Splash";
import ProfileSelection from "./components/ProfileSelection";
import Dashboard from "./components/Dashboard";

function App() {
  // Optional: Any startup logic can go inside useEffect
  useEffect(() => {
    console.log("Portfolio App Loaded 🚀");
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home / Splash Page */}
          <Route path="/" element={<Splash />} />

          {/* Profile Selection Page */}
          <Route path="/profiles" element={<ProfileSelection />} />

          {/* Dashboard with dynamic section (e.g. /dashboard/projects) */}
          <Route path="/dashboard/:section" element={<Dashboard />} />

          {/* Catch-all route to redirect unknown paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
