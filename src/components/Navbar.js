import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Isabel Sobe e Desce
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Contato</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 