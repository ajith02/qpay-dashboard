import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const ProfileCard = () => {
  const theme = useTheme();
  const progress = 30;

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #eee",
        borderRadius: "12px",
        p: 3,
        width: "100%",
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
        PROFILE
      </Typography>

      {/* Progress + Text */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: " row" },
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {/* Circular Progress with Label - 50% width */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            {/* Grey background circle */}
            <CircularProgress
              variant="determinate"
              value={100}
              size={140}
              thickness={5}
              sx={{
                color: "#e0e0e0",
                position: "absolute",
              }}
            />
            {/* Green progress */}
            <CircularProgress
              variant="determinate"
              value={progress}
              size={140}
              thickness={5}
              sx={{
                color: "#61CE70",
                "& .MuiCircularProgress-circle": {
                  strokeLinecap: "round",
                },
              }}
            />
            {/* Center text */}
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#42794A" }}
              >
                {progress}%
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Text Section - 50% width */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: theme.palette.text.black,
              fontSize: "1.1rem",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Complete your profile
          </Typography>
          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              color: theme.palette.text.secondary,
            }}
          >
            <li>Personal KYC</li>
            <li>Company KYC</li>
            <li>Onboarding details</li>
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
        Next
      </Button>
    </Paper>
  );
};

export default ProfileCard;
