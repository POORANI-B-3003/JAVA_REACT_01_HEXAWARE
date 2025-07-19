import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const clientLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
];

const ClientsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9ff', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, mb: 4 }}
        >
          Trusted by Industry Leaders
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {clientLogos.map((logo, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box
                component="img"
                src={logo}
                alt={`client-logo-${index}`}
                sx={{
                  height: 40,
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    filter: 'grayscale(0%)',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientsSection;
