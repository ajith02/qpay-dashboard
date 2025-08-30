import { Close as CloseIcon, Info as InfoIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Bank from "../../assets/bank.png";
import SettledBank from "../../assets/SettledBank.png";

const SettleNow = ({ onClose }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        position: "relative",
        width: "100%",
      }}
    >
      {/* Top-right Cancel Icon */}
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 12, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 3, color: theme.palette.text.black }}
      >
        Manage QR/POS
      </Typography>

      {/* Settlement Info */}
      <Box sx={{ mb: 2, flexDirection: "column", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={Bank}
              alt="Bank"
              sx={{ width: 20, height: 20, objectFit: "contain" }}
            />
            <Typography
              color={theme.palette.text.black}
              sx={{ fontSize: "1rem", fontWeight: 600 }}
            >
              Today's Total Collection
            </Typography>
          </Box>

          <Typography
            color={theme.palette.text.black}
            sx={{ fontSize: "1rem", fontWeight: 600 }}
          >
            ₹1,023
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={SettledBank}
              alt="Bank"
              sx={{ width: 20, height: 20, objectFit: "contain" }}
            />
            <Typography
              color="#61CE70"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
            >
              Already Settled
            </Typography>
          </Box>

          <Typography
            color={theme.palette.text.black}
            sx={{ fontSize: "1rem", fontWeight: 600 }}
          >
            ₹100
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Settlement Calculation */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            mb: 1,
            color: theme.palette.text.secondary,
            fontSize: "0.9rem",
          }}
        >
          SETTLEMENT CALCULATION
        </Typography>

        {[
          { label: "Amount yet to be settled", value: "IBRAHIM MOHAMMEDALI" },
          { label: "Post pending amount", value: "09214241127" },
          { label: "Charges", value: "07, Aug 2024" },
        ].map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 0.5,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {row.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: theme.palette.text.black,
              }}
            >
              {row.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          <Box
            component="img"
            src={Bank}
            alt="Bank"
            sx={{ width: 20, height: 20, objectFit: "contain" }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: theme.palette.text.black,
            }}
          >
            Today’s Total Collection
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: theme.palette.text.black,
            }}
          >
            ₹1,023
          </Typography>
        </Box>
      </Box>

      {/* Info & Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          bgcolor: "#EAF5EE",
          p: 2,
          borderRadius: "12px",
          mt: 3,
          gap: 2,
        }}
      >
        {/* Left Info */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ color: theme.palette.text.black, mb: 1, fontSize: "0.9rem" }}
          >
            Tap <strong>'Settle Now'</strong> to instantly get settlements in
            your bank account.
          </Typography>

          <Typography
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "#61CE70",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}
          >
            <InfoIcon sx={{ fontSize: 16, mr: 0.5 }} /> Settle Now is Chargeable
          </Typography>
        </Box>

        {/* Right Button */}
        <Button
          variant="contained"
          sx={{
            minWidth: 140,
            py: 1.5,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "1rem",
            height: "38px",
            "&:hover": { backgroundColor: "#366b3c" },
          }}
        >
          Settle Now
        </Button>
      </Box>
    </Box>
  );
};

export default SettleNow;
