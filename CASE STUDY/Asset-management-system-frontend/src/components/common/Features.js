import React from "react";
import { Container, Typography, Box } from "@mui/material";
import '../../styles/Features.css';

const Features = () => {
  const primaryPurple = '#6A0DAD';
  const lighterPurple = '#ede7f6';

  return (
    <Box className="features-section" sx={{ backgroundColor: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          sx={{ color: primaryPurple, fontWeight: 700, mb: 2 }}
        >
          What are the Features of Asset Hub’s Asset Management Software
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: "1.05rem",
            color: "#444",
            mb: 2,
            maxWidth: "900px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Asset Sphere's Asset Management Software Solution empowers your maintenance team to perform
          at their best. Reduce maintenance costs, improve productivity, and optimize operations.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontWeight: "bold",
            color: primaryPurple,
            mb: 5,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
              color: "#5a0ca1",
            },
          }}
        >
          Explore All Features &gt;
        </Typography>

        <Box
          className="feature-wrapper"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            backgroundColor: lighterPurple,
            borderRadius: 3,
            p: 4,
            transition: '0.3s',
            "&:hover": {
              boxShadow: "0px 6px 20px rgba(106, 13, 173, 0.1)",
            },
          }}
        >
          <Box className="feature-img" sx={{ flex: 1 }}>
            <img
              src="/feature.png"
              alt="Financial Management"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          <Box className="feature-text" sx={{ flex: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: primaryPurple, fontWeight: 600, mb: 1 }}
            >
              Financial Management
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.8 }}
            >
              With Asset Sphere, track spending, reduce downtime costs, and forecast asset expenses
              across your organization. Our platform helps streamline financial tracking and
              reporting for all your equipment. You can allocate budgets effectively, monitor
              real-time usage trends, and get insights to improve ROI — all from a centralized dashboard.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
