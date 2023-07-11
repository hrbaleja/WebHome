import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const solutions = [
  {
    title: 'Artificial Intelligence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo nulla.',
    image: 'https://source.unsplash.com/1920x1080/?Artificial Intelligence',
  },
  {
    title: 'Blockchain Technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo nulla.',
    image: 'https://source.unsplash.com/1920x1080/?Blockchain Technology',
  },
  {
    title: 'Internet of Things',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo nulla.',
    image: 'https://source.unsplash.com/1920x1080/?Internet-of-Things',
  },
];

function SolutionsPage() {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Latest Technology Solutions
      </Typography>

      <Grid container  justifyContent="center">
        {solutions.map((solution) => (
          <Grid item xs={12} sm={6} md={3} key={solution.title}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={solution.image} alt={solution.title} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {solution.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {solution.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SolutionsPage;
