import React from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';
import { useStyles } from './styles';
import { NavButton } from 'src/assets/index';
import { LogoSign } from 'src/assets/img/index';
import NavDrawer from 'src/components/NavDrawer/NavDrawer';

const Navbar = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <Box className={classes.navContainer}>
      <Box className={classes.logoContainer}>
        <img src={LogoSign} width={64} height={64} />
        <Typography className={classes.logoText}>
          Nistor <br /> Alexandru
        </Typography>
      </Box>
      {/* <Button
        className={classes.navButtonContainer}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {isModalOpen && <NavDrawer />}
        {<NavButton />}
      </Button> */}
    </Box>
  );
};

export default Navbar;
