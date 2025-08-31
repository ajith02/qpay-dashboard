import React from "react";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import ManageQrPos from "../components/qr/ManageQrPos";
import QRManager from "../components/qr/QRManager";

const QrPage = () => {
  const theme = useTheme();

  return (
    <div>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 600,
          color: theme.palette.text.black,
          letterSpacing: "1px",
        }}
      >
        Manage QR/POS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 0, sm: 3 },
          mt: 2,
        }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" },
          }}
        >
          <ManageQrPos />
        </Box>
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" },
          }}
        >
          <QRManager />
        </Box>
      </Box>
    </div>
  );
};

export default QrPage;
