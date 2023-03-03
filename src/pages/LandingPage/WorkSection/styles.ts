import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    flex: 1,
    height: 600,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
