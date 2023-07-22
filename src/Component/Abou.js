import React from 'react';
import { CssBaseline, Typography, Box, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutPage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* About Us Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '5%', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '2%' }}>
            <Typography variant="h3" sx={{ color: '#ED2939' }}>
              About Us
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'gray', mt: '1%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', sm: '45%' }, mr: { xs: 0, sm: '2%' } }}>
              <img
                src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1141&q=80"
                alt="About Us"
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0px 6px 16px -6px rgba(1,1,1,0.5)' }}
              />
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '45%' }, ml: { xs: 0, sm: '2%' } }}>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Box sx={{ display: 'flex', mt: '2%', justifyContent: 'flex-start' }}>
              <Button href="#" variant="contained" sx={{ display: 'inline-flex', alignItems: 'center', color: '#FFFFFF', backgroundColor: '#ED2939', borderRadius: '4px', padding: '10px ', fontSize: '14px', fontWeight: 'bold', '&:hover': { backgroundColor: '#FF2E63' } }}>
                  Know More <ArrowForwardIcon sx={{ marginLeft: '0.3rem' }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Our Mission Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '5%', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '2%' }}>
            <Typography variant="h3" sx={{ color: '#ED2939' }}>
              Our Mission
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'gray', mt: '1%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row-reverse' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', sm: '45%' }, mr: { xs: 0, sm: '2%' } }}>
              <img
                src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our Mission"
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0px 6px 16px -6px rgba(1,1,1,0.5)' }}
              />
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '45%' }, ml: { xs: 0, sm: '2%' } }}>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Box sx={{ display: 'flex', mt: '2%', justifyContent: 'flex-end' }}>
              <Button href="#" variant="contained" sx={{ display: 'inline-flex', alignItems: 'center', color: '#FFFFFF', backgroundColor: '#ED2939', borderRadius: '4px', padding: '10px ', fontSize: '14px', fontWeight: 'bold', '&:hover': { backgroundColor: '#FF2E63' } }}>
                  Know More <ArrowForwardIcon sx={{ marginLeft: '0.3rem' }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
