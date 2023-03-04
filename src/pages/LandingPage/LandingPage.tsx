import { Box } from '@mui/material';
import { useStyles } from './styles';
import React from 'react';
import Navbar from './Navbar/Navbar';
import PostSection from './PostSection/PostSection';
import BannerSection from './BannerSection/BannerSection';
import Footer from './Footer/Footer';
import WorkSection from './WorkSection/WorkSection';
import SkillsSection from './SkillsSection/SkillsSection';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <Navbar />
        <BannerSection />
        <WorkSection />
        <SkillsSection />
        <Box>
          <PostSection />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;
