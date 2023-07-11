import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          required
          type="email"
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
