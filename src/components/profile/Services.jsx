import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 2, sm: 3 },
          justifyContent: "flex-start",
        }}
      >
        {data.map((service, index) => (
          <Grid key={index}>
            <Box
              sx={{
                maxWidth: 70,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
                    loading="lazy" // lazy load images
                    style={{
                      objectFit: "contain",
                    }}
                  />
                )}
              </Box>

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
      </Box>
    </Card>
  );
};

export default React.memo(Services);
