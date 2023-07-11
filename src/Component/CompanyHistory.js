import React from 'react';
import { Typography, Container, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';

const CompanyHistory = () => {
    const milestones = [
        { year: '2005', event: 'Website Launch' },
        { year: '2010', event: 'Reached 1 Million Users' },
        { year: '2015', event: 'Expansion into International Markets' },
        { year: '2020', event: 'Received Travel Excellence Award' },
    ];

    return (
        <section style={{ padding: '2rem 0', marginBottom: '1rem', marginTop: '1rem' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Company History
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our travel website was founded with a vision to revolutionize the way people explore and experience the
                            world. It all started with a passion for travel and a desire to create a platform that provides comprehensive
                            and personalized travel solutions to individuals and families.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Over the years, we have achieved significant milestones and witnessed remarkable growth. Here are some of
                            our key achievements:
                        </Typography>
                        <List>
                            {milestones.map((milestone) => (
                                <ListItem key={milestone.year}>
                                    <ListItemText primary={`${milestone.year}: ${milestone.event}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '2rem' }}>
                            <Typography variant="h4" component="h4" gutterBottom>
                                Our Growth and Success
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We are proud to have served millions of travelers around the globe, helping them create unforgettable
                                memories and discover new horizons. Our commitment to excellence and customer satisfaction has earned us
                                recognition in the industry.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We have formed valuable partnerships with renowned travel providers and received accolades such as the
                                Travel Excellence Award for our exceptional services. These achievements inspire us to continue our
                                pursuit of excellence and deliver the best travel experiences to our customers.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default CompanyHistory;
