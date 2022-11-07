import { Box } from '@mui/material';
import { useStyles } from './styles';
import React from 'react';
import Navbar from './Navbar/Navbar';
import PostSection from './PostSection/PostSection';
import BannerSection from './BannerSection/BannerSection';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <Navbar />
        <BannerSection />
        <Box>
          <PostSection />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
