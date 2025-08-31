import React, { useMemo } from "react";
import { Close as CloseIcon, Info as InfoIcon } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography, useTheme } from "@mui/material";
import Bank from "../../assets/bank.png";
import SettledBank from "../../assets/SettledBank.png";

const settlementRows = [
  { label: "Amount yet to be settled", value: "IBRAHIM MOHAMMEDALI" },
  { label: "Post pending amount", value: "09214241127" },
  { label: "Charges", value: "07, Aug 2024" },
];

const InfoRow = React.memo(({ icon, label, value, labelColor, valueColor }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5, flexWrap: "wrap" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box component="img" src={icon} alt={label} sx={{ width: 20, height: 20, objectFit: "contain" }} loading="lazy" />
        <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: labelColor || theme.palette.text.black }}>
          {label}
        </Typography>
      </Box>
      {value && (
        <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: valueColor || theme.palette.text.black }}>
          {value}
        </Typography>
      )}
    </Box>
  );
});

const SettleNow = ({ onClose }) => {
  const theme = useTheme();

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, position: "relative", width: "100%" }}>
      {/* Top-right Cancel Icon */}
      <IconButton onClick={onClose} sx={{ position: "absolute", top: 12, right: 8 }}>
        <CloseIcon />
      </IconButton>

      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: theme.palette.text.black }}>
        Manage QR/POS
      </Typography>

      {/* Settlement Info */}
      <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <InfoRow icon={Bank} label="Today's Total Collection" value="₹1,023" />
        <InfoRow icon={SettledBank} label="Already Settled" value="₹100" labelColor="#61CE70" />
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Settlement Calculation */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ mb: 1, color: theme.palette.text.secondary, fontSize: "0.9rem" }}>
          SETTLEMENT CALCULATION
        </Typography>
        {settlementRows.map((row) => (
          <Box key={row.label} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5, flexWrap: "wrap" }}>
            <Typography variant="body2" color="textSecondary">
              {row.label}
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: theme.palette.text.black }}>
              {row.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Info & Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", sm: "row" }, bgcolor: "#EAF5EE", p: 2, borderRadius: "12px", mt: 3, gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: theme.palette.text.black, mb: 1, fontSize: "0.9rem" }}>
            Tap <strong>'Settle Now'</strong> to instantly get settlements in your bank account.
          </Typography>
          <Typography sx={{ display: "inline-flex", alignItems: "center", color: "#61CE70", fontWeight: 600, fontSize: "0.85rem" }}>
            <InfoIcon sx={{ fontSize: 16, mr: 0.5 }} /> Settle Now is Chargeable
          </Typography>
        </Box>

        <Button variant="contained" sx={{ minWidth: 140, py: 1.5, borderRadius: 2, fontWeight: "bold", textTransform: "none", fontSize: "1rem", height: "38px", "&:hover": { backgroundColor: "#366b3c" } }}>
          Settle Now
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(SettleNow);
