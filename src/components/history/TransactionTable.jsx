import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Typography,
  Box,
  Pagination,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const TransactionTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const transactions = [
    { id: 1, name: "Liso", date: "03 Sep, 2021", account: "From %", amount: "¥1,06,023", status: "Pending" },
    { id: 2, name: "Liso", date: "03 Sep, 2021", account: "From $", amount: "¥1,023", status: "Failed" },
    { id: 3, name: "Liso", date: "03 Sep, 2021", account: "From $", amount: "¥1,023", status: "Success" },
    { id: 4, name: "Liso", date: "03 Sep, 2021", account: "From $", amount: "¥1,06,023", status: "Failed" },
    { id: 5, name: "Liso", date: "03 Sep, 2021", account: "From $", amount: "¥1,023", status: "Failed" },
    { id: 6, name: "John", date: "04 Sep, 2021", account: "From %", amount: "¥50,000", status: "Success" },
    { id: 7, name: "Anna", date: "05 Sep, 2021", account: "From $", amount: "¥2,500", status: "Pending" },
  ];

  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const pageCount = Math.ceil(transactions.length / rowsPerPage);
  const handleChangePage = (event, value) => setPage(value);
  const displayedTransactions = transactions.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case "Success": return "#61CE70";
      case "Pending": return "#EDB823";
      case "Failed": return "#E87474";
      default: return "default";
    }
  };

  // Mobile card view
  if (isMobile) {
    return (
      <Box>
        {displayedTransactions.map((transaction) => (
          <Paper
            key={transaction.id}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontWeight={600}>{transaction.name}</Typography>
              <Chip
                label={transaction.status}
                variant="outlined"
                sx={{
                  border: `1px solid ${getStatusColor(transaction.status)}`,
                  color: getStatusColor(transaction.status),
                  borderRadius: 1,
                  minWidth: 80,
                  fontWeight: 500,
                  height: 28,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              />
            </Box>

            <Box mb={1}><Typography variant="body2" color="text.secondary">Date & Time:</Typography>
              <Typography variant="body2">{transaction.date}</Typography>
            </Box>

            <Box mb={1}><Typography variant="body2" color="text.secondary">Account:</Typography>
              <Typography variant="body2">{transaction.account}</Typography>
            </Box>

            <Box mb={1}><Typography variant="body2" color="text.secondary">Amount:</Typography>
              <Typography variant="body2" fontWeight={600}>{transaction.amount}</Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: theme.palette.primary.main,
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              View
            </Typography>
          </Paper>
        ))}

        {/* Pagination */}
        <Stack spacing={2} mt={2} mb={4} alignItems="center">
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                bgcolor: "#ffffff",
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.divider}`,
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: "#ffffff",
              },
            }}
          />
        </Stack>
      </Box>
    );
  }

  // Desktop table view
  return (
    <Box>
      <Paper sx={{ borderRadius: 2, boxShadow: "0px 4px 10px rgba(0,0,0,0.05)", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="transaction table">
            <TableHead>
              <TableRow>
                {["NAME", "DATE & TIME", "ACCOUNT", "AMOUNT", "STATUS", "DETAILS"].map((header) => (
                  <TableCell key={header} sx={{ color: theme.palette.text.secondary, fontSize: "0.75rem", py: 2, fontWeight: 500 }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedTransactions.map((transaction) => (
                <TableRow key={transaction.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell sx={{ color: theme.palette.text.black, fontWeight: 600, py: 2 }}>{transaction.name}</TableCell>
                  <TableCell sx={{ color: theme.palette.text.black, fontWeight: 600, py: 2 }}>{transaction.date}</TableCell>
                  <TableCell sx={{ color: theme.palette.text.secondary, fontWeight: 500, py: 2 }}>{transaction.account}</TableCell>
                  <TableCell sx={{ color: theme.palette.text.black, fontWeight: 600, py: 2 }}>{transaction.amount}</TableCell>
                  <TableCell sx={{ py: 2 }}>
                    <Chip
                      label={transaction.status}
                      variant="outlined"
                      sx={{
                        border: `1px solid ${getStatusColor(transaction.status)}`,
                        color: getStatusColor(transaction.status),
                        minWidth: 80,
                        fontWeight: 500,
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: 1,
                        height: 28,
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ py: 2 }}>
                    <Typography variant="body2" sx={{ ml: 0.5, color: theme.palette.primary.main, fontWeight: 600, textDecoration: "underline" }}>
                      View
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination */}
      <Stack spacing={2} mt={2} mb={4} alignItems="center">
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": { bgcolor: "#ffffff", color: theme.palette.primary.main, border: `1px solid ${theme.palette.divider}` },
            "& .MuiPaginationItem-root.Mui-selected": { bgcolor: theme.palette.primary.main, color: "#ffffff" },
          }}
        />
      </Stack>
    </Box>
  );
};

export default TransactionTable;
