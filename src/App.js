import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IsabelSobeDesce from './pages/IsabelSobeDesce';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/isabel-sobe-desce" element={<IsabelSobeDesce />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
