import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  useTheme,
  Collapse,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const QRCard = ({
  qrImage,
  title,
  business,
  address,
  status,
  date,
  showStatus,
  terminal,
  showArrow = false,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleToggle = () => setOpen((prev) => !prev);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setOpen(false); // Close dropdown after selecting
  };

  return (
    <>
      <Box sx={{ padding: "1rem 0" }}>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          {/* QR Image */}
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <img src={qrImage} alt="QR Code" width={80} loading="lazy"/>
          </Box>

          {/* Text content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
            {title && (
              <Typography
                sx={{ fontWeight: 600, color: theme.palette.text.black }}
              >
                {title}
              </Typography>
            )}
            <Typography
              sx={{ color: theme.palette.text.black, pt: 0.5, pb: 0.5 }}
            >
              {business}
            </Typography>
            <Typography variant="body2">{address}</Typography>
            {date && (
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: "0.9rem" }}
              >
                Requested on {date}
              </Typography>
            )}
            {terminal && (
              <Typography sx={{ color: theme.palette.text.secondary }}>
                {terminal}
              </Typography>
            )}
          </Box>

          {/* Optional arrow */}
          {showArrow && (
            <Box
              sx={{
                mt: { xs: 1, sm: 0 },
                ml: { xs: 0, sm: 1 },
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
            >
              <ChevronRightIcon sx={{ color: theme.palette.text.secondary }} />
            </Box>
          )}
        </Box>

        {/* Status dropdown */}
        {showStatus && (
          <Box mt={2} sx={{ background: "#EEF8F2", borderRadius: "5px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                cursor: "pointer",
                borderRadius: 2,
                px: 1,
                py: 1,
              }}
              onClick={handleToggle}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CheckCircleIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: 25,
                  }}
                />
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  {selectedStatus || status}
                </Typography>
              </Box>

              <IconButton size="small">
                <ExpandMoreIcon
                  sx={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </IconButton>
            </Box>

            <Collapse in={open}>
              <Box mt={1} ml={1}>
                <RadioGroup
                  value={selectedStatus}
                  onChange={handleStatusChange}
                >
                  <FormControlLabel
                    value="Awaiting Production"
                    control={<Radio />}
                    label="Awaiting Production"
                    sx={{ color: theme.palette.text.secondary }}
                  />
                  <FormControlLabel
                    value="Awaiting Dispatch"
                    control={<Radio />}
                    label="Awaiting Dispatch"
                    sx={{ color: theme.palette.text.secondary }}
                  />
                  <FormControlLabel
                    value="Awaiting Delivery"
                    control={<Radio />}
                    label="Awaiting Delivery"
                    sx={{ color: theme.palette.text.secondary }}
                  />
                </RadioGroup>
              </Box>
            </Collapse>
          </Box>
        )}
      </Box>
      <Divider />
    </>
  );
};

export default QRCard;
