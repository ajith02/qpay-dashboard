// TransactionCard.jsx
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const TransactionCard = ({
  title = "SETTLEMENT",
  totalAmount,
  transactions = [],
  buttonLabel, // dynamic button label
  onButtonClick, // optional click handler
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #eee",
        borderRadius: "12px",
        p: 3,
        width: "100%",
        mb: 2
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          {title.toUpperCase()}
        </Typography>
        <ChevronRightIcon sx={{ color: theme.palette.text.black }} />
      </Box>

      {/* Amount */}
      <Typography
        variant="h6"
        sx={{ color: theme.palette.text.black, fontWeight: 700, mb: 2 }}
      >
        {totalAmount}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Transaction List */}
      {transactions.map((tx, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: index !== transactions.length - 1 ? 1.5 : 2,
          }}
        >
          <Box>
            <Typography
              sx={{ color: theme.palette.text.black, fontWeight: 600 }}
            >
              {tx.name}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.secondary, fontSize: "0.875rem" }}
            >
              {tx.date}
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 600, color: theme.palette.text.black }}>
            +₹{tx.amount}
          </Typography>
        </Box>
      ))}

      {/* Button */}
      {buttonLabel && (
        <Button
          fullWidth
          variant="contained"
          onClick={onButtonClick}
          sx={{
            fontSize: "1rem",
            mt: 1,
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            textTransform: "none",
            "&:hover": { backgroundColor: "#366b3c" },
          }}
        >
          {buttonLabel}
        </Button>
      )}
    </Paper>
  );
};

export default TransactionCard;
