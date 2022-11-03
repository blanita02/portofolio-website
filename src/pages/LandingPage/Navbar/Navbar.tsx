import React from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';
import { useStyles } from './styles';
import { LogoSign, NavButton } from 'src/assets/index';

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.logoContainer}>
        <Typography className={classes.logoText}>Nistor</Typography>
      </Box>
      <Box className={classes.navButtonContainer}>
        <NavButton />
      </Box>
    </Box>
  );
};

export default Navbar;
