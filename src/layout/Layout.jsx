import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const layoutStyles = {
  container: { display: "flex", flexDirection: "column", height: "100vh" },
  contentWrapper: {
    display: "flex",
    flex: 1,
    gap: "2rem",
    m: "1rem",
    height: "calc(100vh - 64px)",
  },
  mainContent: { flexGrow: 1 },
  sidebar: { display: { xs: "none", md: "block" }, flexShrink: 0, zIndex: 1 },
};

const Layout = () => {
  return (
    <Box sx={layoutStyles.container}>
      <Navbar />
      <Box sx={layoutStyles.contentWrapper}>
        <Box sx={layoutStyles.sidebar}>
          <Sidebar />
        </Box>
        <Box component="main" sx={layoutStyles.mainContent}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
