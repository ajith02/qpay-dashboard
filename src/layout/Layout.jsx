import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar on top */}
      <Navbar />

      {/* Sidebar + Main content */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          gap: "2rem",
          m: "1rem",
          height: "calc(100vh - 64px)",
        }}
      >
        {/* Sidebar - hidden on xs */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            flexShrink: 0,
          }}
        >
          <Sidebar />
        </Box>
        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
