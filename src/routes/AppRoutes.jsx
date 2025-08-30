import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import QrPage from "../pages/QrPage";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Layout from "../layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes inside Layout share Navbar + Sidebar */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
