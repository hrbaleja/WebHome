import React from 'react';
import CarouselComponent from '../Component/Carousel'
import About from '../Component/Abou'
import { Paper } from '@mui/material';
import WhatWeOffer from '../Component/WhatWeOffer';

function HomePage() {
  return <Paper>
    <CarouselComponent />
    <About/>
    <WhatWeOffer/>
  </Paper>
    
}

export default HomePage;
