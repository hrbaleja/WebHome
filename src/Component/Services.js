import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const serviceCategories = [
  {
    name: 'Web Development',
    image: 'https://source.unsplash.com/400x300/?Web-Development',
    description: 'Creating stunning and responsive websites using modern web technologies.',
    features: ['Frontend Development', 'Backend Development', 'Responsive Design'],
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Software Development',
    image: 'https://source.unsplash.com/400x300/?Software-Development',
    description: 'Building robust and scalable software solutions tailored to your business needs.',
    features: ['Custom Software Development', 'Quality Assurance', 'Maintenance & Support'],
    languages: ['Java', 'Python', 'C#'],
  },
  {
    name: 'Cloud Computing',
    image: 'https://source.unsplash.com/400x300/?Cloud-Computing',
    description: 'Leveraging the power of cloud platforms to optimize your infrastructure and applications.',
    features: ['Cloud Migration', 'Scalability & Flexibility', 'Cost Optimization'],
    languages: ['AWS', 'Azure', 'Google Cloud'],
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 4 }}>
        IT Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {serviceCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" src={category.image} alt={category.name} height="200" />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {category.description}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  Key Features:
                </Typography>
                <ul>
                  {category.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
                  Languages & Tools:
                </Typography>
                <ul>
                  {category.languages.map((language, idx) => (
                    <li key={idx}>{language}</li>
                  ))}
                </ul>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
