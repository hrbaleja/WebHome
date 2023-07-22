import { Box } from '@mui/material';

const ServiceCard = () => {
  const cardStyles = {
    width: '200px',
    height: '200px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
  };

  return (
    <Box sx={cardStyles}>
      <h3>Service Title</h3>
      <p>Service Description</p>
    </Box>
  );
};

const ServiceCardList = () => {
  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    paddingBottom:'2rem'
  };

  return (
    <Box sx={containerStyles}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      
    </Box>
  );
};

export default ServiceCardList;
