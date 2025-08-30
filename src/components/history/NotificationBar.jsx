import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Time from "../../assets/time.png";

const NotificationBar = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "center", sm: "center" }}
      bgcolor="#EEF8F2"
      border={`1px solid ${theme.palette.primary.main}`}
      p={2}
      borderRadius={3}
      mb={3}
      gap={2}
    >
      {/* Text Section with AccessTimeIcon */}
      <Typography
        sx={{
          color: theme.palette.text.secondary,
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <AccessTimeIcon
          sx={{
            display: { xs: "none", sm: "block" },
            color: theme.palette.primary.main,
          }}
        />
        Today's total collection will be auto-settled by{" "}
        <Box
          component="span"
          sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
        >
          08:00AM, 23rd Oct'22
        </Box>{" "}
        Tomorrow.
      </Typography>

      {/* Button with image instead of icon */}
      <Button
        variant="contained"
        startIcon={
          <Box
            component="img"
            src={Time}
            alt="Time"
            sx={{ width: 20, height: 20, objectFit: "contain" }}
          />
        }
        sx={{
          fontSize: "1rem",
          bgcolor: theme.palette.primary.main,
          mt: { xs: 1, sm: 0 },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        Settle Now!
      </Button>
    </Box>
  );
};

export default NotificationBar;
