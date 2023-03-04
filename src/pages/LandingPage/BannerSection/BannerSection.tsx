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
          - Highly motivated Computer Science & Mathematics Student - <br />
          - Second year of college at UBB Cluj-Napoca - <br /> - Web Developer -{' '}
          <br />
          - Seeking to grow my knowledge and skills on a daily basis -
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerSection;
