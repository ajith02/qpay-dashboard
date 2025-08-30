import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 🔹 Icons (SVG imports)
import HomeIcon from "../assets/Home.svg";
import QrIcon from "../assets/Qr.svg";
import HistoryIcon from "../assets/History.svg";
import ProfileIcon from "../assets/Profile.svg";
import BharatLogo from "../assets/Bharat_Connect_Logo.svg";

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [openSection, setOpenSection] = useState("Home");

  // current route
  const currentPath = location.pathname;

  // determine open section and selected child automatically
  const isHome = currentPath === "/";
  const isQR = currentPath.startsWith("/qr");
  const isHistory = currentPath.startsWith("/history");
  const isProfile = currentPath.startsWith("/profile");

  const selectedChild =
    currentPath === "/history/transactions"
      ? "Transaction History"
      : currentPath === "/history/settlements"
      ? "Settlement History"
      : null;
  const activeStyle = {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    "&:hover": { backgroundColor: theme.palette.background.paper },
  };

  // 🔹 Navigation handler
  const handleMainClick = (section, path) => {
    if (section === "History") {
      setOpenSection(openSection === "History" ? null : "History");
    } else {
      setOpenSection(section);
      navigate(path);
    }
  };

  const handleChildClick = (child, path) => {
    setOpenSection("History");
    navigate(path);
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
          borderRadius: "12px",
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
            onClick={() => navigate("/")}
            sx={isHome ? activeStyle : {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <img src={HomeIcon} alt="Home" width={22} height={22} />
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
            onClick={() => navigate("/qr")}
            sx={isQR ? activeStyle : {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <img src={QrIcon} alt="QR" width={22} height={22} />
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
            <ListItemButton onClick={() => navigate("/history")}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <img src={HistoryIcon} alt="History" width={22} height={22} />
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
                <ListItemButton
                  sx={{
                    pl: 6,
                    ...(selectedChild === "Transaction History"
                      ? activeStyle
                      : {}),
                  }}
                  onClick={() => navigate("/history")}
                >
                  <ListItemText
                    primary="Transaction History"
                    primaryTypographyProps={{
                      fontSize: "0.875rem",
                      color:
                        selectedChild === "Transaction History"
                          ? theme.palette.primary.main
                          : "inherit",
                    }}
                  />
                </ListItemButton>

                <ListItemButton
                  sx={{
                    pl: 6,
                    ...(selectedChild === "Settlement History"
                      ? activeStyle
                      : {}),
                  }}
                  onClick={() => navigate("/history")}
                >
                  <ListItemText
                    primary="Settlement History"
                    primaryTypographyProps={{
                      fontSize: "0.875rem",
                      color:
                        selectedChild === "Settlement History"
                          ? theme.palette.primary.main
                          : "inherit",
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>

          {/* Profile */}
          <ListItemButton
            onClick={() => navigate("/profile")}
            sx={isProfile ? activeStyle : {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <img src={ProfileIcon} alt="Profile" width={22} height={22} />
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
          borderBottomRightRadius: "12px",
          borderBottomLeftRadius: "12px",
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

export default Sidebar;
