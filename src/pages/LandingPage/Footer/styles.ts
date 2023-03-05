import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';
import { colors } from 'src/themes/colors';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    flex: 1,
    minHeight: 128,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //----------> KEYFRAMES <----------\

  //----------> STYLES <----------
  logoText: {
    padding: '0 16px',
    '&.MuiTypography-root': {
      fontWeight: 300,
      color: '#FFFFFF',
      fontSize: 20,
    },
  },
  socialMediaIcon: {
    borderRadius: 16,
    width: 48,
    height: 48,
    '&:hover': {
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.70)',
    },
  },
}));

export { useStyles };
