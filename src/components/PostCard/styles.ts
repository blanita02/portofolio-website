import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 640,
    maxHeight: 300,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //----------> STYLES <----------
  titleText: {
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 300,
      fontSize: 20,
      color: '#FFFFFF',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.70)',
    },
  },
}));

export { useStyles };
