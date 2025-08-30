import { Box } from "@mui/material";
import ProfileCard from "../components/dashboard/ProfileCard";
import QRCard from "../components/dashboard/QRCard";
import StatCard from "../components/dashboard/StatCard";
import TransactionCard from "../components/dashboard/TransactionCard";
import BannerImage from "../assets/dashboardBanner.png";
import QPayBanner from "../components/common/QPayBanner";

const Dashboard = () => {
  const statsData = [
    { value: "1.5k", label: "Account Holders" },
    { value: "2.1k", label: "Transactions" },
    { value: "2.3k", label: "Settlement" },
    { value: "45k", label: "QR Orders" },
  ];

  const settlementData = [
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
    { name: "Ali", date: "24 Oct, 10:20 AM", amount: 120 },
    { name: "Sara", date: "25 Oct, 11:45 AM", amount: 50 },
  ];

  const transactionsData = [
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
    { name: "Ali", date: "24 Oct, 10:20 AM", amount: 120 },
    { name: "Sara", date: "25 Oct, 11:45 AM", amount: 50 },
  ];

  return (
    <>
      <QPayBanner
        image={BannerImage}
        title="Pay ₹1/month* for the QPay POS Device"
        subtitle="One device for accepting all modes of payments"
        buttonLabel="Download App Now!"
        onButtonClick={() => console.log("Button clicked!")}
      />

      {/* Stats Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          paddingBlock: 2,
        }}
      >
        {statsData.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* ProfileCard */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" },
          }}
        >
          <ProfileCard />
        </Box>

        {/* QRCard */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" },
          }}
        >
          <QRCard />
        </Box>
      </Box>

      {/* Settlement Card */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
        }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" }, // full width on mobile, ~50% on sm+
          }}
        >
          <TransactionCard
            title="SETTLEMENT"
            totalAmount="₹1,23,816.19"
            transactions={settlementData}
            buttonLabel="Settle Now"
            onButtonClick={() => console.log("Settle clicked")}
          />
        </Box>

        {/* Transaction Cards */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 48%" }, // full width on mobile, ~50% on sm+
          }}
        >
          <TransactionCard
            title="Total Transactions"
            totalAmount="₹1,23,816.19"
            transactions={transactionsData}
            buttonLabel="View All"
            onButtonClick={() => console.log("Pay clicked")}
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
