import React from 'react';
import { Container, Typography,  Grid } from '@mui/material';

function About() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        <Typography variant="h4" component="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" component="p" paragraph>
              Brief company introduction: 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam auctor orci ac dignissim.
              Fusce gravida mauris ut urna cursus consequat. Ut gravida elit elit, vitae bibendum ex sodales non.
              Nullam eget gravida felis. Morbi a luctus ex. Sed vehicula sapien at faucibus efficitur. 
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" component="p" paragraph>
              Unique Selling Points:
              <ul>
                <li>Innovation: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Quality: Sed aliquam auctor orci ac dignissim.</li>
                <li>Customer Service: Fusce gravida mauris ut urna cursus consequat.</li>
                <li>Reliability: Ut gravida elit elit, vitae bibendum ex sodales non.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
   
  );
}

export default About;
