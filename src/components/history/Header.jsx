import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Top Row: Title + Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "flex-start", sm: "space-between" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 1.5,
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: theme.palette.text.black, fontWeight: 600 }}
        >
          Settlement History
        </Typography>

        <Button
          variant="outlined"
          sx={{
            alignSelf: { xs: "flex-end", sm: "auto" },
          }}
        >
          Download Statement
        </Button>
      </Box>

      {/* Search + Filter */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        mt={2}
        mb={2}
        width="100%"
      >
        <TextField
          fullWidth
          placeholder="Search..."
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: theme.palette.text.secondary }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "12px",
              color: theme.palette.text.secondary,
              borderColor: theme.palette.divider,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.divider,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.divider,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />

        <IconButton
          sx={{
            borderRadius: 1.5,
            p: 1,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <FilterListIcon sx={{ color: theme.palette.background.paper }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
