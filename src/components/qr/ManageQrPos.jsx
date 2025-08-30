import {
    ContentCopy as CopyIcon
} from "@mui/icons-material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import {
    Box,
    Button,
    Card,
    IconButton,
    Typography,
    useTheme,
} from "@mui/material";
import LogoImage from "../../assets/logo.png";
import QRImage from "../../assets/qr.png";

const ManageQrPos = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 3 }}>
      
      <Card
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: "12px",
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={LogoImage}
            alt="Logo"
            sx={{
              mb: 2,
              objectFit: "contain",
            }}
          />

          {/* QR Image */}
          <Box
            component="img"
            src={QRImage}
            alt="QR Code"
            sx={{
              width: 250,
              height: 250,
              mb: 2.5,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* UPI ID with copy icon */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography
              sx={{
                color: theme.palette.text.black,
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              UPI ID: 9876543210@qpay
            </Typography>
            <IconButton
              size="small"
              sx={{ color: "#61CE70" }}
              onClick={() => navigator.clipboard.writeText("9876543210@qpoy")}
            >
              <CopyIcon sx={{fontSize: "0.9rem"}} />
            </IconButton>
          </Box>

          {/* User Name */}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "0.75rem",
              color: theme.palette.text.secondary,
              mb: 2,
            }}
          >
            liorehim Mohammadali
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={<FileDownloadOutlinedIcon />}
            fullWidth
            sx={{
              fontSize: "0.9rem",
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              background: "#EEEEEE",
              color: theme.palette.text.black,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            Download
          </Button>

          <Button
            variant="contained"
            startIcon={<ShareOutlinedIcon />}
            fullWidth
            sx={{
              fontSize: "0.9rem",
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              background: "#EEEEEE",
              color: theme.palette.text.black,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            Share
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ManageQrPos;
