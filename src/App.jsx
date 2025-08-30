import React from "react";
import AppRoutes from "./routes/AppRoutes"; // import your routes
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme"; // your custom MUI theme
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline gives consistent styling across browsers */}
      <CssBaseline />

      {/* All routes defined here */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
