import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProfileCard = ({ icon, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "12px",
        p: 2,
        backgroundColor: "#EEF8F2",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { backgroundColor: "#e6f3e8" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section: Icon + Text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
          {/* Icon Circle */}
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: theme.palette.primary.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* Right Arrow */}
        <ChevronRightIcon sx={{ color: theme.palette.primary.main }} />
      </Box>

      {/* Text */}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: theme.palette.primary.main,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "0.95rem", color: theme.palette.text.secondary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ProfileCard;
