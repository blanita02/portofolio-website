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
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    borderRadius: 16,
    outline: `12px solid ${colors.GREY}`,
    display: 'flex',
    paddingInline: 24,
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
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
        '-1px -1px 1px rgba(255,255,255,0.8), 2px 2px 5px rgba(0,0,0,1)',
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 800,
      fontSize: 80,
      color: colors.GREY,
    },
  },
  subtitle: {
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 300,
      fontSize: 28,
      color: '#FFFFFF',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.70)',
    },
  },
}));

export { useStyles };
