import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy, faDharmachakra, faTasks, faTachometerAlt, faRecycle, faHeadset } from '@fortawesome/free-solid-svg-icons';

const offerItems = [
    {
      icon: faPenFancy,
      title: 'Project creation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: faDharmachakra,
      title: 'Software Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: faTasks,
      title: 'Project Management',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: faTachometerAlt,
      title: 'Project Implementation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: faRecycle,
      title: 'Software Update',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

function WhatWeOffer() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '4rem' ,paddingBottom:'2rem'}}>
      <Typography variant="h2" align="center" gutterBottom>
        What we <span style={{ color: '#ED2939' }}>Offer</span>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {offerItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                backgroundColor: '#ffffff',
                borderLeft: '2px solid #ED2939',
                boxShadow: '0 0 10px #cccccc',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#ED2939',
                  color: '#ffffff',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  transform: 'scale(1.05)',
                },
                '&:hover::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  zIndex: -1,
                  borderRadius: 'inherit',
                },
              }}
            >
              <FontAwesomeIcon icon={item.icon} size="4x" className="icon" style={{ marginBottom: '1rem', color: '#000000' }} />
              <Typography variant="h5" fontWeight="600" sx={{ color: '#000000' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" margin="0" sx={{ color: '#000000' }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WhatWeOffer;
