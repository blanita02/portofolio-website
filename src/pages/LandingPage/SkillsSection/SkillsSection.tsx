import { CodeSVG, GraduateCap } from 'src/assets/index';
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
          title='Java'
          shortText='-'
          description={
            <>
              - Experienced with OOP - <br />
              - Experienced with Data Structures and - <br />
              - Algorithms - <br />
              - Experienced with databases - <br />
            </>
          }
          logo={<CodeSVG width={64} height={64} display={'none'}></CodeSVG>}
        />
        <PostCard
          title='Python'
          shortText='-'
          description={
            <>
              - Experienced with OOP - <br />
              - Experienced with Data Structures and - <br />
              - Algorithms - <br />
              - Basic knowledge with databases - <br />
              - Basic knowledge of testing - <br />
            </>
          }
          logo={<CodeSVG width={64} height={64} display={'none'}></CodeSVG>}
        />
        <PostCard
          title='C/C++'
          shortText='-'
          description={
            <>
              - Experienced with OOP - <br />
              - Experienced with Data Structures and - <br />
              - Algorithms - <br />
              - Basic knowledge of testing - <br />
            </>
          }
          logo={<CodeSVG width={64} height={64} display={'none'}></CodeSVG>}
        />
        <PostCard
          title='JavaScript/TypeScript'
          shortText='HTML/CSS'
          description={
            <>
              - Experienced with React- <br />
              - Experienced with Material UI - <br />
              - Experienced with HTML and CSS - <br />
              - Basic knowledge of Redux - <br />
            </>
          }
          logo={<CodeSVG width={64} height={64} display={'none'}></CodeSVG>}
        />
      </Box>
    </Box>
  );
};

export default SkillsSection;
