import { Box } from "@mui/material";

const TabPanel = ({ children, value, index }) => {

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{
        display: value === index ? "block" : "none",
      }}
    >
      {value === index && <Box sx={{ width: "100%" }}>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
