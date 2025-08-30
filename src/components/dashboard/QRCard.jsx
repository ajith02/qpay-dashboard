import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import QRImage from "../../assets/qr.png";

const QRCard = () => {
  const theme = useTheme();

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
          flexDirection: { xs: "column", sm: " row" },
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {/* QR Image - 50% width */}
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
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Text Section - 50% width */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.black,
              fontSize: "1.1rem",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Order QR
          </Typography>
          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              color: theme.palette.text.secondary,
            }}
          >
            <li>Receive Payment</li>
            <li>Order new QRs</li>
            <li>Download QR</li>
          </ul>
        </Box>
      </Box>

      <Divider />
      {/* Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          fontSize: "1rem",
          mt: 3,
          borderRadius: "8px",
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

export default QRCard;
