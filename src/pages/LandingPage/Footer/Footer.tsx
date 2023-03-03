import React from 'react';

import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';
import { LogoSign } from 'src/assets/img/index';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.logoContainer}>
        <img src={LogoSign} width={64} height={64} />
        <Typography className={classes.logoText}>Nistor Alexandru</Typography>
      </Box>
      
    </Box>
  );
};

export default Footer;
