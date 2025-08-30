import React from "react";
import QPayBanner from "../components/dashboard/QPayBanner";
import { Box, Grid } from "@mui/material";
import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  const statsData = [
    { value: "1.5k", label: "Account Holders" },
    { value: "2.1k", label: "Transactions" },
    { value: "2.3k", label: "Settlement" },
    { value: "45k", label: "QR Orders" },
  ];

  return (
    <>
      <QPayBanner />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          paddingBlock: 2
        }}
      >
        {statsData.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
