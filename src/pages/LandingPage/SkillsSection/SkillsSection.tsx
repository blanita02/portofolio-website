import { GraduateCap } from 'src/assets/index';
import { ClassNames } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import PostCard from 'src/components/PostCard/PostCard';
import { useStyles } from './styles';
import { LineDivider } from 'src/assets/img/index';

const SkillsSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.postTitle}>Skills</Typography>
      </Box>
      <Box className={classes.dividerText}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Box>
      <Box className={classes.postCardContainer}>
        <PostCard
          title='Faculty of Mathematics and Computer Science'
          shortText='2021-2024'
          description={
            <>
              - Algorithms and Programming - <br />
              - Data Structures - <br />
              - OOP - <br />
              - Geometry/Algebra/Analysis - <br />
            </>
          }
          logo={<GraduateCap width={64} height={64}></GraduateCap>}
        />
      </Box>
    </Box>
  );
};

export default SkillsSection;
