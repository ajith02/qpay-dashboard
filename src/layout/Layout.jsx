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
      <Box sx={{ display: "flex", flex: 1, gap: "10px", margin: "1rem" }}>
        {/* Sidebar full height */}
        <Sidebar />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 2,
            bgcolor: "background.default",
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
