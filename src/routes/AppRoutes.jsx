import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Workspace from "../pages/Workspace";
import TeacherDashboard from "../pages/TeacherDashboard";
import AIThinkingCoach from "../pages/AIThinkingCoach";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/workspace"
        element={<Workspace />}
      />

      <Route
        path="/teacher-dashboard"
        element={<TeacherDashboard />}
      />
      <Route path="/ai-coach" element={<AIThinkingCoach />} />
    </Routes>
  );
}

export default AppRoutes;