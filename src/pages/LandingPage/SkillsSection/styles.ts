import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    flex: 1,
    rowGap: 24,
    paddingBottom: 128,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 36,
    },
  },
  dividerText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 1200,
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },

  //----------> KEYFRAMES <----------

  //----------> STYLES <----------
  postTitle: {
    '&.MuiTypography-root': {
      fontWeight: 800,
      fontSize: 36,
      color: '#FFFFFF',
      textShadow: '0px 0px 20px rgba(0, 0, 0, 0.70)',
    },
  },
}));

export { useStyles };
