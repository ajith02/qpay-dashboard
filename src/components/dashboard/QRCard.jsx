import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import QRImage from "../../assets/Qr.png";
import { useNavigate } from "react-router-dom";

const QRCard = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const listItems = useMemo(
    () => ["Receive Payment", "Order new QRs", "Download QR"],
    []
  );

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #eee",
        borderRadius: "12px",
        p: 3,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: theme.palette.text.secondary,
          mb: 2,
          fontSize: "1rem",
          fontWeight: 500,
        }}
      >
        QR
      </Typography>

      {/* QR + Text */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {/* QR Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={QRImage}
            alt="Order QR"
            sx={{
              width: { xs: 140, sm: 165, md: 150, lg: 140 },
              height: { xs: 140, sm: 165, md: 150, lg: 140 },
              objectFit: "contain",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontSize: "1.1rem",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Order QR
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20, color: theme.palette.text.secondary }}>
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Box>
      </Box>

      <Divider />

      {/* Button */}
      <Button
        onClick={() => navigate("/qr")}
        fullWidth
        variant="contained"
        sx={{
          fontSize: "1rem",
          mt: 3,
          borderRadius: 1,
          backgroundColor: "#42794A",
          textTransform: "none",
          "&:hover": { backgroundColor: "#366b3c" },
        }}
      >
        View more
      </Button>
    </Paper>
  );
};

export default React.memo(QRCard);
