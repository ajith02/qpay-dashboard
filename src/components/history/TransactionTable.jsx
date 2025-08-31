import {
  Box,
  Chip,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTransaction } from "../../contexts/TransactionContext";
import { formatDate } from "../../utils/dateFormatter";
import TransactionSkeleton from "../skeleton/TransactionSkeleton";

const TransactionTable = () => {
  const theme = useTheme();
  const { transactions, loading, page, setPage } = useTransaction();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const rowsPerPage = 4;

  const handleChangePage = (event, value) => setPage(value);

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

  // Map transactions for display
  const displayedTransactions = transactions.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  if (loading) {
    return <TransactionSkeleton rows={5} />;
  }

  // Inside your component, before returning MOBILE or DESKTOP view
  if (!loading && displayedTransactions.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="200px"
        sx={{ color: theme.palette.text.secondary }}
      >
        <Typography variant="body1" fontWeight={500}>
          No transactions found.
        </Typography>
      </Box>
    );
  }

  // MOBILE VIEW
  if (isMobile) {
    return (
      <Box>
        {displayedTransactions.map((tx) => (
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

            <Box mb={0.5}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="0.7rem"
              >
                Date & Time:
              </Typography>
              <Typography variant="body2" fontSize="0.75rem">
                {formatDate(tx.created_date)}
              </Typography>
            </Box>

            <Box mb={0.5}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="0.7rem"
              >
                Account:
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5} flexWrap="wrap">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize="0.75rem"
                >
                  From
                </Typography>
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
            </Box>

            <Box mb={0.5}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="0.7rem"
              >
                Amount:
              </Typography>
              <Typography variant="body2" fontWeight={600} fontSize="0.8rem">
                {tx.amount}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                display: "block",
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
        ))}

        <Box
          mt={1.5}
          mb={4}
          display="flex"
          justifyContent="center"
          width="100%"
        >
          <Pagination
            count={Math.ceil(transactions.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            siblingCount={0}
            boundaryCount={1}
            sx={{
              "& .MuiPaginationItem-root": {
                bgcolor: "#ffffff",
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.divider}`,
                minWidth: 28,
                height: 28,
                fontSize: "0.75rem",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: "#ffffff",
              },
              "& .MuiPaginationItem-ellipsis": {
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
              },
            }}
          />
        </Box>
      </Box>
    );
  }

  // DESKTOP VIEW
  return (
    <Box>
      <Paper
        sx={{
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
          mb: 2,
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="transaction table">
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
                <TableRow
                  key={tx.transaction_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      color: theme.palette.text.black,
                      fontWeight: 600,
                      py: 2,
                    }}
                  >
                    {tx.service_ref_id}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.text.black,
                      fontWeight: 600,
                      py: 2,
                    }}
                  >
                    {formatDate(tx.created_date)}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                      py: 2,
                    }}
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
                  <TableCell
                    sx={{
                      color: theme.palette.text.black,
                      fontWeight: 600,
                      py: 2,
                    }}
                  >
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Stack spacing={2} mt={2} mb={5} alignItems="center">
        <Pagination
          count={Math.ceil(transactions.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          siblingCount={0}
          boundaryCount={1}
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
            "& .MuiPaginationItem-ellipsis": {
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: theme.palette.background.paper,
              color: theme.palette.text.secondary,
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default TransactionTable;
