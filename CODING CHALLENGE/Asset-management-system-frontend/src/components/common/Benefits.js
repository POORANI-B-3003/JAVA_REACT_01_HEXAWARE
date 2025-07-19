import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Collapse,
  Box,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import '../../styles/Benefits.css';

const benefitData = [
  {
    title: "Improves Asset Life Cycle",
    description:
      "Track every stage of the asset journey—from procurement to retirement. Gain full control over asset performance.",
  },
  {
    title: "Maximize Asset Lifetime",
    description:
      "Perform preventive maintenance to extend equipment life and reduce capital replacement costs.",
  },
  {
    title: "Minimize Downtime and MTTR",
    description:
      "Detect issues early and fix them faster using real-time analytics and automation workflows.",
  },
  {
    title: "Increased Productivity",
    description:
      "Empower your team with a centralized platform, reducing time spent searching for asset details or paperwork.",
  },
  {
    title: "Eliminate Paperwork",
    description:
      "Digitize work orders, maintenance logs, and asset records to reduce manual errors and clutter.",
  },
  {
    title: "Reduces Maintenance Expenses",
    description:
      "Lower costs by minimizing emergency repairs, enabling predictive maintenance, and automating alerts.",
  },
];

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const purple = '#6A0DAD';
  const lightPurpleBg = '#f9f6ff';

  return (
    <Box sx={{ backgroundColor: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 2, color: purple, fontWeight: 700 }}
        >
          What are the Benefits of Asset Hub Management Software
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{
            mb: 5,
            color: "#555",
            maxWidth: "700px",
            mx: "auto",
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Asset Hub Software is designed to transform how you manage your valuable
          assets. Optimize your entire asset life cycle and track maintenance proactively.
        </Typography>

        <Box className="benefits-wrapper">
          {benefitData.map((benefit, index) => (
            <Box
              className="benefit-box"
              key={index}
              onClick={() => handleToggle(index)}
              sx={{
                mb: 2,
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.01)',
                },
              }}
            >
              <Paper
                elevation={1}
                className="benefit-card"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: activeIndex === index ? lightPurpleBg : '#fff',
                  border: `1px solid ${activeIndex === index ? purple : '#ddd'}`,
                  transition: 'all 0.3s ease',
                }}
              >
                <Box className="card-title" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {activeIndex === index ? (
                    <Remove className="card-icon" sx={{ color: purple, mr: 1 }} />
                  ) : (
                    <Add className="card-icon" sx={{ color: purple, mr: 1 }} />
                  )}
                  <Typography
                    className="card-heading"
                    sx={{ fontWeight: 600, fontSize: '1.1rem', color: purple }}
                  >
                    {benefit.title}
                  </Typography>
                </Box>
                <Collapse in={activeIndex === index}>
                  <Typography
                    className="card-description"
                    sx={{ color: '#444', fontSize: '0.95rem', pl: 4 }}
                  >
                    {benefit.description}
                  </Typography>
                </Collapse>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
