import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';
import { colors } from 'src/themes/colors';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    padding: '0 16px',
    display: 'flex',
    minHeight: 800,
    paddingBottom: 128,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      rowGap: 36,
      overflow: 'scroll',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    borderRadius: 16,
    minHeight: 420,
    background: `${colors.GREY}`,
    display: 'flex',
    paddingInline: 24,
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    boxShadow: '2px 2px 24px rgba(0, 0, 0, 0.45)',
  },

  //----------> KEYFRAMES <----------\

  '@keyframes slideBackground': {
    '0%': {},
    '100%': {
      backgroundPosition: '0% 40%',
    },
    '50%': {
      backgroundPosition: '100% 40%',
    },
  },

  //----------> STYLES <----------

  title: {
    textTransform: 'uppercase',
    marginBottom: '.5em',
    opacity: 0.4,
    '&.MuiTypography-root': {
      textShadow:
        '-1px -1px 1px rgba(255,255,255,0.2), 2px 2px 5px rgba(0,0,0,1)',
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 800,
      fontSize: 80,
      color: colors.BLACK,
    },
  },
  subtitle: {
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 300,
      fontSize: 28,
      color: '#FFFFFF',
    },
  },
}));

export { useStyles };
