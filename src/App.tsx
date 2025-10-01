import "./index.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResourcesPage from "./pages/ResourcesPage";
import PrayerTimesPage from "./pages/PrayerTimesPage";
import JamiaPrayerTimesPage from "./pages/JamiaPrayerTimesPage";
import RegisterPopulatorPage from "./pages/RegisterPopulatorPage";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RandomStatsPage from "./pages/RandomStatsPage";
import JamiaCurrentPrayerTimesPage from "./pages/JamiaCurrentPrayerTimesPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="random-stats" element={<RandomStatsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="register-populator" element={<RegisterPopulatorPage />} />
        <Route path="jrt" element={<Outlet />}>
          <Route index element={<JamiaCurrentPrayerTimesPage />} />
          <Route path="downloads" element={<JamiaPrayerTimesPage />} />
        </Route>

        <Route path="resources" element={<Outlet />}>
          <Route index element={<ResourcesPage />} />

          <Route path="mcr-prayer-times" element={<Outlet />}>
            <Route index element={<PrayerTimesPage />} />
            <Route path="jamia" element={<Outlet />}>
              <Route index element={<JamiaCurrentPrayerTimesPage />} />
              <Route path="downloads" element={<JamiaPrayerTimesPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
