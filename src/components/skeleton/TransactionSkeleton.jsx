import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery, useTheme } from "@mui/material";

const TransactionSkeleton = ({ rows = 5 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return Array.from({ length: rows }).map((_, index) => (
      <Paper
        key={index}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Skeleton width="60%" height={30} mb={1} />
        <Skeleton width="40%" height={28} mb={1} />
        <Skeleton width="50%" height={20} mb={1} />
        <Skeleton width="80%" height={20} mb={1} />
        <Skeleton width="30%" height={28} />
      </Paper>
    ));
  }

  return (
    <Paper sx={{ borderRadius: 2, boxShadow: "0px 4px 10px rgba(0,0,0,0.05)", mb: 2 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="transaction table">
          <TableHead>
            <TableRow>
              {["Transaction ID", "Date & Time", "Account", "Amount", "Status", "Details"].map((header) => (
                <TableCell key={header}>
                  <Skeleton width="100%" height={24} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: rows }).map((_, idx) => (
              <TableRow key={idx}>
                {Array.from({ length: 6 }).map((__, i) => (
                  <TableCell key={i}>
                    <Skeleton width="100%" height={24} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TransactionSkeleton;
