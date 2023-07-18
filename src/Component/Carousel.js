import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper, Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image1 from './Image/ai-development.png';
import Image2 from './Image/metaverse-development.png';
import Image3 from './Image/web-development.png';
import Image4 from './Image/mobile-app-development.png';

export default function CarouselComponent() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const carouselItems = [
        {
            
            image: Image1,
            description: 'AI Development',
            headline: 'Transforming Industries with Artificial Intelligence',
        },
        {
            image: Image3,
            description: 'Web Development',
            headline: 'Crafting Beautiful and Responsive Websites',
        },
        {
            image: Image4,
            description: 'Mobile App Development',
            headline: 'Empowering Businesses with Mobile Applications',

            
        },
        {
            image: Image2,
            description: 'Metaverse Development',
            headline: 'Building Immersive Virtual Experiences',
        },
       
    ]

    return (
        <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showArrows={!isMobile}
            showThumbs={false}
            showStatus={false}
            emulateTouch
        >
            {carouselItems.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
    );
}

function Item({ item }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>

            {isMobile ? (
                <><Paper
                    sx={{
                        height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        alignItems: 'center', padding: '2rem', color: '#000000',
                    }}
                >
                    <Box sx={{ width: '100%', marginRight: '0' }}>
                        <img src={item.image} alt={item.description} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '2%', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <Typography variant="h3" component="div" sx={{ mb: 2 }}>
                            {item.description}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                            {item.headline}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Learn More
                        </Button>
                    </Box></Paper>
                </>
            ) : (
                <><Paper
                    sx={{
                        height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',
                        alignItems: 'center', padding: '2rem', color: '#000000',
                    }}
                >
                    <Box sx={{ width: '40%', marginBottom: '4%', paddingTop: '10rem' }}>
                        <Typography variant="h3" component="div" sx={{ mb: 2 }}>
                            {item.description}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                            {item.headline}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Learn More
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%', marginRight: '5%' }}>
                        <img src={item.image} alt={item.text} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Paper>
                </>
            )
            }


        </Box>
    );
}
