import { createTheme } from "@mui/material/styles";

// Custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#42794A",   // Dark Blue
      light: "#3B82F6",  // Lighter Blue
      dark: "#1E40AF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#10B981",   // Teal / Green
      light: "#34D399",
      dark: "#059669",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF", // Page background
      paper: "#FFFFFF",   // Card background
    },
    text: {
      primary: "#94CA9C",   // Dark text
      secondary: "#999999", // Muted gray
      black: "#252525"
    },
  },
  typography: {
    fontFamily: "Gilroy, Arial, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.5rem", fontWeight: 600 },
    h3: { fontSize: "1.25rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", color: "#6B7280" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "8px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
