import { Box, Card, Grid, Typography, useTheme } from "@mui/material";

const Services = ({ data, title }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        p: { xs: 2, sm: 3, md: 3 },
        mb: 2,
      }}
    >
      <Typography
        sx={{
          color: theme.palette.text.secondary,
          mb: 2,
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {data.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {/* Parent Card with border */}
            <Box
              sx={{
                maxWidth: 70,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Small inner card for image/icon */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: service.color,
                  mb: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                )}
              </Box>

              {/* Text below inner card */}
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  mb: 0.5,
                  color: theme.palette.text.black,
                  textAlign: "center",
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Services;
