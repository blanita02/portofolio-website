import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';

const BannerSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography>Banner Section</Typography>
    </Box>
  );
};

export default BannerSection;
