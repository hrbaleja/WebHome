import React from 'react';
import CarouselComponent from '../Component/Carousel'
import About from '../Component/Abou'
import {  Paper } from '@mui/material';
import WhatWeOffer from '../Component/WhatWeOffer';
import CircleNavigation from '../Component/CircleNavigation';
import ServiceCardList from '../Component/Card';

function HomePage() {
  return <Paper>
    <CarouselComponent />
    <About/>
    <WhatWeOffer/>
    <CircleNavigation/>
    <ServiceCardList/>
  </Paper>
    
}

export default HomePage;
