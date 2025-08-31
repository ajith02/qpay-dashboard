import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

import TabPanel from "./TabPanel";
import QRCard from "./QRCard";
import qr from "../../assets/QR.png";


const QRManager = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);

  const tabLabels = ["Active QR Codes", "QR Code Requests"];

  const handleTabChange = (_, newValue) => setTabIndex(newValue);

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "12px",
        padding: 2,
        mb: 2
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          borderRadius: "12px",
          border: `1px solid ${theme.palette.primary.main}`,
          display: "flex",
          backgroundColor: "#fff",
        }}
      >
        {tabLabels.map((label, i) => (
          <Tab
            key={i}
            label={label}
            sx={{
              flex: 1,
              textTransform: "none",
              fontWeight: tabIndex === i ? "bold" : "regular",
              color:
                tabIndex === i ? "#FFF !important" : theme.palette.primary.main,
              borderRadius: "8px",
              m: 0.5,
              backgroundColor: tabIndex === i ? "primary.main" : "transparent",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        {[1, 2, 3, 4].map((num) => (
          <QRCard
            key={num}
            qrImage={qr}
            title={`Q201946579`}
            business="All Marketing Sales - MS1903041155331648980231"
            terminal={`Terminal ${num}`}
            showArrow
          />
        ))}
        <Button
          variant="contained"
          sx={{
            fontSize: "1.1rem",
            mt: 2,
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            textTransform: "none",
            "&:hover": { backgroundColor: "#366b3c" },
          }}
        >
          Request more QR Codes
        </Button>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        {[1, 2].map((req) => (
          <QRCard
            key={req}
            qrImage={qr}
            title="All Marketing Sales"
            business="45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004"
            date="26.04.202"
            status="QR Request Accepted"
            showStatus
          />
        ))}
        <Button
          variant="contained"
          sx={{
            fontSize: "1.1rem",
            mt: 2,
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            textTransform: "none",
            "&:hover": { backgroundColor: "#366b3c" },
          }}
        >
          Request more QR Codes
        </Button>
      </TabPanel>
    </Box>
  );
};

export default QRManager;
