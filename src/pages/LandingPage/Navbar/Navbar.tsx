import React from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';
import { useStyles } from './styles';
import { LogoSign, NavButton } from 'src/assets/index';
import NavDrawer from 'src/components/NavDrawer/NavDrawer';

const Navbar = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <Box className={classes.navContainer}>
      <Box className={classes.logoContainer}>
        <Typography className={classes.logoText}>Nistor</Typography>
      </Box>
      <Button
        className={classes.navButtonContainer}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {isModalOpen && <NavDrawer />}
        {<NavButton />}
      </Button>
    </Box>
  );
};

export default Navbar;
