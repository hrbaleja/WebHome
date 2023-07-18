import React from 'react';
import { Container, Typography, Grid, Paper, Card, CardContent, CardHeader } from '@mui/material';

const projectDetails = [
  {
    year: '2022',
    client: 'Client A',
    description: 'Project A - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    year: '2021',
    client: 'Client B',
    description: 'Project B - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: '2022',
    client: 'Client A',
    description: 'Project A - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    year: '2021',
    client: 'Client B',
    description: 'Project B - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: '2022',
    client: 'Client A',
    description: 'Project A - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    year: '2021',
    client: 'Client B',
    description: 'Project B - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more project details here
];

function AboutPage() {
  return (
    <Container maxWidth="lm" sx={{ marginTop: '2rem' , paddingBottom:'2rem'}}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
     

      <Grid container spacing={1}>
        {/* Left Section: Introduction */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">
              Insert your introduction text here. This could be a summary of your company's mission, history, and expertise.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur iure harum provident ipsam, autem dignissimos? Debitis inventore, alias tempore accusantium eum, ut veniam est tenetur ipsum quibusdam similique odit, dolorem hic harum facilis quod ducimus animi! Inventore ad, aperiam maiores, exercitationem, aspernatur a provident illum et sit possimus reprehenderit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur iure harum provident ipsam, autem dignissimos? Debitis inventore, alias tempore accusantium eum, ut veniam est tenetur ipsum quibusdam similique odit, dolorem hic harum facilis quod ducimus animi! Inventore ad, aperiam maiores, exercitationem, aspernatur a provident illum et sit possimus reprehenderit?

            </Typography>
          </Paper>
        </Grid>

        {/* Right Section: Project Details */}
        <Grid item xs={12} md={6}>
        <Grid container spacing={2} direction="row">
            {projectDetails.slice(0, 6).map((project, index) => (
              <Grid item xs={6} md={4}  key={index}>
                <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: '200px' }}>
                  <CardHeader title={project.year} subheader={project.client} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutPage;
