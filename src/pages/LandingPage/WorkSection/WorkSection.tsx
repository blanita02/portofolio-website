import { ClassNames } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import PostCard from 'src/components/PostCard/PostCard';
import { useStyles } from './styles';

const WorkSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.postTitle}>Work & Education</Typography>
      </Box>
      <Box className={classes.postCardContainer}>
        <PostCard title='Work' description='Work description' />
        <PostCard title='Education' description='Education description' />
      </Box>
    </Box>
  );
};

export default WorkSection;
