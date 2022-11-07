import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  navContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    paddingInline: 24,
    alignItems: 'center',
    columnGap: 64,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  drawerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  closeDrawerButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  //` ----------> KEYFRAMES <----------

  //----------> STYLES <----------
  logoText: {
    '&.MuiTypography-root': {
      fontWeight: 800,
      cursor: 'pointer',
      fontFamily: 'Poppins',
      fontSize: 36,
    },
  },
}));

export { useStyles };
