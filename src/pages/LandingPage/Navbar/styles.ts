import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  container: {
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
  //----------> STYLES <----------
  logoText: {
    '&.MuiTypography-root': {
      fontWeight: 800,
      fontFamily: 'Poppins',
      fontSize: 36,
    },
  },
  navButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

export { useStyles };
