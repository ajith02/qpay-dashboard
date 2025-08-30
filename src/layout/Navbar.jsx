import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      top="0"
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
          <img src={logo} alt="QPay Logo" style={{ height: 40 }} />
        </Box>

        {/* Right - User Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {/* Avatar - always visible */}
          <IconButton onClick={handleOpen} sx={{ p: 0 }}>
            <Avatar
              alt="User"
              src={user}
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </IconButton>

          {/* Desktop Details */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // hide on mobile
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
              display: { xs: "none", sm: "inline-flex" }, // hide on mobile
            }}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Popup Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ display: { xs: "block", sm: "none" } }} // only mobile
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
  );
};

export default Navbar;
