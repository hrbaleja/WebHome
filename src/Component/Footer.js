import React from 'react';
import { Typography, Container, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';





const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hashtag.software@outlook.com';
  };
  
  const handlePhoneClick = () => {
    window.location.href = 'tel:+9998646898';
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" component="h6" gutterBottom>
            HashTag Software Solutions          </Typography>
          <ul>
            <li>
              <Link href="/privacy-policy" color="inherit">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" color="inherit">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/faqs" color="inherit">
                FAQs
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" component="h6" gutterBottom>
            Follow Us
          </Typography>
          <div>
            <IconButton href="#" target="_blank" rel="noopener" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" rel="noopener" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" rel="noopener" color="inherit">
              <InstagramIcon />
            </IconButton>
          </div>
          {/* Email and Phone Number */}

        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          {/* Copyright */}
          <Typography variant="h6" component="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
        <span style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={handleEmailClick}>
          Email: hashtag.software@outlook.com
        </span>
      </Typography>
      <Typography variant="body2">
        <span style={{ cursor: 'pointer', textDecoration: 'none'}} onClick={handlePhoneClick}>
          Phone: 9998646898
        </span>
      </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3} textAlign="center">
        {/* Copyright */}
        <Typography variant="body2" gutterBottom>
          &copy; 2023  HashTag Software Solutions. All rights reserved.
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
