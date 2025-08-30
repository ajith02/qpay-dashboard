import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        paddingInline: "1rem"
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "64px",
          px: 3,
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
          <Avatar
            alt="User"
            src={user}
            sx={{
              width: 40,
              height: 40,
            }}
          />

          <Box
            sx={{
              display: "flex",
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
              variant="body1"
              sx={{
                fontWeight: theme.typography.h3.fontWeight,
                fontSize: "0.9rem",
                color: theme.palette.text.black,
              }}
            >
              Thomas Shelby
            </Typography>
          </Box>

          <IconButton
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              p: 0.5,
            }}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
