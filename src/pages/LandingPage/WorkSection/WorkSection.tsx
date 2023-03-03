import { GraduateCap } from 'src/assets/index';
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
        <PostCard
          title='Faculty of Mathematics and Computer Science'
          description='- Algorithms and Programming - - Data Structures - - OOP - - Geometry/Algebra/Analysis -'
          logo={<GraduateCap width={64} height={64}></GraduateCap>}
        />
        <PostCard
          title='Education'
          description='Education description'
          logo={<GraduateCap width={64} height={64}></GraduateCap>}
        />
      </Box>
    </Box>
  );
};

export default WorkSection;
