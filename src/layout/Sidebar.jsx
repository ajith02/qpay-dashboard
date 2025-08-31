import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// MUI barrel imports
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

// Assets
import BharatLogo from "../assets/Bharat_Connect_Logo.svg";
import dashboard from "../assets/dashboard.png";
import HistoryIcon from "../assets/History.svg";
import HomeIcon from "../assets/Home.svg";
import ProfileIcon from "../assets/Profile.svg";
import QrIcon from "../assets/Qr.svg";

const Sidebar = ({ onItemClick }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;
  const isMobile = window.innerWidth < 600;
  // current route
  const currentPath = location.pathname;

  // determine open section and selected child automatically
  const isHome = currentPath === "/";
  const isQR = currentPath.startsWith("/qr");
  const isHistory = currentPath.startsWith("/history");
  const isProfile = currentPath.startsWith("/profile");

  const activeStyle = {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    "&:hover": { backgroundColor: theme.palette.background.paper },
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        height: "100%",
        [`& .MuiDrawer-paper`]: {
          width: 260,
          boxSizing: "border-box",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          borderRadius: isMobile ? 0 : "12px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        },
      }}
    >
      <Box sx={{ overflow: "auto", p: 2 }}>
        <List sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {/* Home */}
          <ListItemButton
            onClick={() => {
              navigate("/");
              onItemClick?.();
            }}
            sx={isHome ? activeStyle : {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <img
                src={isHome ? HomeIcon : dashboard} // call isActive with "/"
                alt="Home"
                width={22}
                height={22}
                loading="lazy"
              />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                color: isHome ? theme.palette.primary.main : "inherit",
              }}
            />
          </ListItemButton>

          {/* QR */}
          <ListItemButton
            onClick={() => {
              navigate("/qr");
              onItemClick?.();
            }}
            sx={isQR ? activeStyle : {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <img
                src={QrIcon}
                alt="QR"
                width={22}
                height={22}
                loading="lazy"
              />
            </ListItemIcon>
            <ListItemText
              primary="QR"
              primaryTypographyProps={{
                color: isQR ? theme.palette.primary.main : "inherit",
              }}
            />
          </ListItemButton>

          {/* History */}
          <Box
            sx={{
              borderRadius: "8px",
              backgroundColor: isHistory
                ? theme.palette.background.paper
                : "transparent",
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate("/history");
                onItemClick?.();
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <img
                  src={HistoryIcon}
                  alt="History"
                  width={22}
                  height={22}
                  loading="lazy"
                />
              </ListItemIcon>
              <ListItemText
                primary="History"
                primaryTypographyProps={{
                  color: isHistory ? theme.palette.primary.main : "inherit",
                }}
              />
              {isHistory ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={isHistory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { label: "Transaction History", path: "/history" },
                  { label: "Settlement History", path: "/history" },
                ].map((child) => (
                  <ListItemButton
                    key={child.label}
                    sx={{ pl: 6, ...(path === child.path ? activeStyle : {}) }}
                    onClick={() => navigate(child.path)}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <img
                        src={HistoryIcon}
                        alt={child.label}
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={child.label}
                      primaryTypographyProps={{
                        fontSize: "0.875rem",
                        color:
                          path === child.path
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>

          {/* Profile */}
          <ListItemButton
            onClick={() => {
              navigate("/profile");
              onItemClick?.();
            }}
            sx={isProfile ? activeStyle : {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <img
                src={ProfileIcon}
                alt="Profile"
                width={22}
                height={22}
                loading="lazy"
              />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{
                color: isProfile ? theme.palette.primary.main : "inherit",
              }}
            />
          </ListItemButton>
        </List>
      </Box>

      {/* Logo at the bottom */}
      <Box
        sx={{
          background: theme.palette.background.paper,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          margin: "0 0rem .05rem .05rem",
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottomRightRadius: isMobile ? 0 : "12px",
          borderBottomLeftRadius: isMobile ? 0 : "12px",
        }}
      >
        <img
          src={BharatLogo}
          alt="Bharat Connect"
          style={{ maxWidth: "100%", height: "40px" }}
        />
      </Box>
    </Drawer>
  );
};

export default React.memo(Sidebar);
