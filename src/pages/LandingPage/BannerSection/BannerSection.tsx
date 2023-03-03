import { BannerPhoto } from 'src/assets/img/index';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';

const BannerSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.imageContainer}>
        <img src={BannerPhoto} width={400} />
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.title}>About Me</Typography>
        <Typography className={classes.subtitle}>
          - Highly motivated Computer Science & Mathematics Student - <br /> -
          Web Developer -
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerSection;
