import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logo from "../assets/logo.png";
import user from "../assets/user.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          paddingInline: "1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "64px",
            px: { xs: 1, md: 3 },
          }}
        >
          {/* Left - Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={logo}
                alt="QPay Logo"
                style={{ height: 40, cursor: "pointer" }}
                loading="lazy"
              />
            </Link>
          </Box>

          {/* Right - Desktop & Mobile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* Hamburger Icon - mobile only */}
            <IconButton
              color="inherit"
              edge="start"
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Avatar */}
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <Avatar alt="User" src={user} sx={{ width: 40, height: 40 }} />
            </IconButton>

            {/* Desktop Details */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                lineHeight: 1.2,
                mr: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.75rem",
                }}
              >
                Hello
              </Typography>
              <Typography
                sx={{
                  fontWeight: theme.typography.h3.fontWeight,
                  fontSize: "0.9rem",
                  color: theme.palette.text.black,
                }}
              >
                Thomas Shelby
              </Typography>
            </Box>

            {/* Desktop Dropdown Icon */}
            <IconButton
              size="small"
              sx={{
                color: theme.palette.text.secondary,
                p: 0.5,
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              <KeyboardArrowDownIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Desktop Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuItem>
            <Box
              sx={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.75rem",
                }}
              >
                Hello
              </Typography>
              <Typography
                sx={{
                  fontWeight: theme.typography.h3.fontWeight,
                  fontSize: "0.9rem",
                  color: theme.palette.text.black,
                }}
              >
                Thomas Shelby
              </Typography>
            </Box>
          </MenuItem>
        </Menu>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Sidebar onItemClick={toggleDrawer(false)} />
      </Drawer>
    </>
  );
};

export default React.memo(Navbar);
