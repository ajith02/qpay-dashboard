import { Box, Typography, Button, useTheme } from "@mui/material";
import Banner from "../../assets/banner.png";

const QPayBanner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        border: { xs: "none", sm: "1px solid" },
        borderRadius: "12px",
        overflow: "hidden",
        background: theme.palette.background.paper,
      }}
    >
      {/* Left Gradient Section */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(to right, #42794A ,  #61CE70 )",
          color: theme.palette.background.paper,
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          clipPath: {
            xs: "none",
            sm: "polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0% 100%)",
          },
          width: "100%",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            lineHeight: 1.4,
            mb: 1,
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          Pay ₹1/month* for the QPay POS Device
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            color: theme.palette.text.primary,
            mb: 2,
          }}
        >
          One device for accepting all modes of payments
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#42794A",
            textTransform: "none",
            fontWeight: 500,
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            borderRadius: "8px",
            width: { xs: "100%", sm: "max-content" },
            alignSelf: { xs: "center", sm: "flex-start" },
            px: { xs: 2, sm: 3 },
            py: 1,
            "&:hover": { backgroundColor: "#f3f4f6" },
          }}
        >
          Download App Now!
        </Button>
      </Box>

      {/* Right Image Section */}
      <Box
        sx={{
          flex: { xs: "unset", sm: 0.6 },
          display: { xs: "none", sm: "flex" }, // 👈 hides on mobile
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            position: { xs: "relative", sm: "absolute" },
            bottom: { sm: -10 },
            right: { sm: 50, lg: 100 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={Banner}
            alt="QPay POS Device Illustration"
            sx={{
              maxHeight: { xs: 120, sm: 150 },
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default QPayBanner;
