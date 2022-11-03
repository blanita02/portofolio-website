import { Box } from '@mui/material';
import { useStyles } from './styles';
import React from 'react';
import Navbar from './Navbar/Navbar';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <Navbar />
      </Box>
    </Box>
  );
};

export default LandingPage;
