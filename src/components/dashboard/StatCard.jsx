import { Paper, Typography, useTheme } from "@mui/material";

const StatCard = ({ value, label }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #EEEEEE",
        borderRadius: "12px",
        flex: 1,
        minWidth: "200px",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: ".9rem",
          color: theme.palette.text.secondary,
        }}
      >
        {label}
      </Typography>
    </Paper>
  );
};

export default StatCard;
