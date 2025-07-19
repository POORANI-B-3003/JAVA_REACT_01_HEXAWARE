import React from "react";
import { Container, Typography, Box } from "@mui/material";
import '../../styles/IoTSection.css';

const IoTSection = () => {
  const purple = '#6A0DAD';
  const lightPurpleBg = '#f9f6ff';

  return (
    <Box className="iot-section" sx={{ backgroundColor: lightPurpleBg, py: 6 }}>
      <Container maxWidth="lg">
        <Box
          className="iot-wrapper"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 5,
          }}
        >
          {/* Left - Image */}
          <Box className="iot-left" sx={{ flex: 1 }}>
            <img
              src="/iot.png"
              alt="IoT Meter Reading"
              className="iot-img"
              style={{ width: '100%', borderRadius: 12 }}
            />
          </Box>

          {/* Right - Text */}
          <Box className="iot-right" sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              className="iot-title"
              sx={{ color: purple, fontWeight: 700, mb: 2 }}
            >
              IoT Meter Reading
            </Typography>
            <Typography
              className="iot-text"
              sx={{
                color: "#444",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              In traditional asset management, manual readings and routine inspections were
              common, leading to reactive practices and missed intervention opportunities.
              <br /><br />
              <strong style={{ color: purple }}>IoT Meter Reading</strong> changes this by continuously monitoring an asset’s critical
              parameters in real-time — such as temperature, torque, and rotor speed — through
              intelligent sensors. These readings allow the system to detect anomalies and trigger
              intelligent work orders proactively.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default IoTSection;
