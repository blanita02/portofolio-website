import React from 'react';

import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';
import { LogoSign } from 'src/assets/img/index';
import { LinkedinSVG } from 'src/assets/index';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.logoContainer}>
        <img src={LogoSign} width={64} height={64} />
        <Typography className={classes.logoText}>
          Copyright © 2023 - All Right Reserved.
        </Typography>
      </Box>
      <Box className={classes.socialMediaContainer}>
        <LinkedinSVG
          className={classes.socialMediaIcon}
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/alexandru-nistor-135b89232/'
            )
          }
        />
      </Box>
    </Box>
  );
};

export default Footer;
