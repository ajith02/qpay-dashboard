import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useTransaction } from "../../contexts/TransactionContext";
import { formatDate } from "../../utils/dateFormatter";
import TransactionSkeleton from "../skeleton/TransactionSkeleton";


// Helper for status colors
const getStatusColor = (status) => {
  switch (status.toUpperCase()) {
    case "SUCCESS":
      return "#61CE70";
    case "PENDING":
      return "#EDB823";
    case "FAILED":
      return "#E87474";
    default:
      return "#ccc";
  }
};

// Mobile Row
const MobileTransactionRow = React.memo(({ tx, theme }) => (
  <Paper
    key={tx.transaction_id}
    sx={{
      p: 1.5,
      mb: 1.5,
      borderRadius: 2,
      boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
    }}
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={0.5}
    >
      <Typography fontWeight={600} fontSize="0.85rem">
        {tx.service_ref_id}
      </Typography>
      <Chip
        label={tx.status}
        variant="outlined"
        size="small"
        sx={{
          border: `1px solid ${getStatusColor(tx.status)}`,
          color: getStatusColor(tx.status),
          borderRadius: 1,
          minWidth: 70,
          fontWeight: 500,
          height: 24,
          fontSize: "0.7rem",
        }}
      />
    </Box>
    <Typography variant="body2" color="text.secondary" fontSize="0.7rem">
      Date & Time:
    </Typography>
    <Typography variant="body2" fontSize="0.75rem">
      {formatDate(tx.created_date)}
    </Typography>

    <Typography
      variant="body2"
      color="text.secondary"
      fontSize="0.7rem"
      mt={0.5}
    >
      Account:
    </Typography>
    <Box display="flex" alignItems="center" gap={0.5}>
      <span>From</span>
      {tx.wallet?.image && (
        <img
          src={tx.wallet.image}
          alt="wallet"
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
    </Box>

    <Typography
      variant="body2"
      color="text.secondary"
      fontSize="0.7rem"
      mt={0.5}
    >
      Amount:
    </Typography>
    <Typography variant="body2" fontWeight={600} fontSize="0.8rem">
      {tx.amount}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        mt: 0.5,
        color: theme.palette.primary.main,
        fontWeight: 600,
        fontSize: "0.8rem",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      View
    </Typography>
  </Paper>
));

// Desktop Row
const DesktopTransactionRow = React.memo(({ tx, theme }) => (
  <TableRow
    key={tx.transaction_id}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell sx={{ color: theme.palette.text.black, fontWeight: 600, py: 2 }}>
      {tx.service_ref_id}
    </TableCell>
    <TableCell sx={{ color: theme.palette.text.black, fontWeight: 600, py: 2 }}>
      {formatDate(tx.created_date)}
    </TableCell>
    <TableCell
      sx={{ color: theme.palette.text.secondary, fontWeight: 500, py: 2 }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <span>From</span>
        {tx.wallet?.image ? (
          <img
            src={tx.wallet.image}
            alt="wallet"
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          "-"
        )}
      </Box>
    </TableCell>
    <TableCell sx={{ color: theme.palette.text.black, fontWeight: 600, py: 2 }}>
      {tx.amount}
    </TableCell>
    <TableCell sx={{ py: 2 }}>
      <Chip
        label={tx.status}
        variant="outlined"
        sx={{
          border: `1px solid ${getStatusColor(tx.status)}`,
          color: getStatusColor(tx.status),
          minWidth: 80,
          fontWeight: 500,
          borderRadius: 1,
          height: 28,
          justifyContent: "center",
          textAlign: "center",
        }}
      />
    </TableCell>
    <TableCell sx={{ py: 2 }}>
      <Typography
        variant="body2"
        sx={{
          ml: 0.5,
          color: theme.palette.primary.main,
          fontWeight: 600,
          textDecoration: "underline",
        }}
      >
        View
      </Typography>
    </TableCell>
  </TableRow>
));

const TransactionTable = () => {
  const theme = useTheme();
  const { transactions, loading, page, setPage } = useTransaction();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const rowsPerPage = 4;

  const handleChangePage = React.useCallback(
    (e, value) => setPage(value),
    [setPage]
  );

  const displayedTransactions = React.useMemo(
    () => transactions.slice((page - 1) * rowsPerPage, page * rowsPerPage),
    [transactions, page]
  );

  if (loading) return <TransactionSkeleton rows={5} />;
  if (!loading && displayedTransactions.length === 0)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="200px"
      >
        <Typography variant="body1" fontWeight={500} color="text.secondary">
          No transactions found.
        </Typography>
      </Box>
    );

  return (
    <Box>
      {isMobile ? (
        <>
          {displayedTransactions.map((tx) => (
            <MobileTransactionRow
              key={tx.transaction_id}
              tx={tx}
              theme={theme}
            />
          ))}
          <Box mt={1.5} mb={4} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(transactions.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              siblingCount={0}
              boundaryCount={1}
            />
          </Box>
        </>
      ) : (
        <Box sx={{  mb: 5 }}>
          <TableContainer
            sx={{
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  {[
                    "Transaction ID",
                    "Date & Time",
                    "Account",
                    "Amount",
                    "Status",
                    "Details",
                  ].map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.75rem",
                        py: 2,
                        fontWeight: 500,
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedTransactions.map((tx) => (
                  <DesktopTransactionRow
                    key={tx.transaction_id}
                    tx={tx}
                    theme={theme}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={2} mt={2} mb={5} alignItems="center">
            <Pagination
              count={Math.ceil(transactions.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              siblingCount={0}
              boundaryCount={1}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(TransactionTable);
