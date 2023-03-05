import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    // background: 'linear-gradient(to bottom, #313131, #575757)',
    borderRadius: 24,
    rowGap: 12,
    margin: 12,
    padding: 12,
    maxWidth: 300,
    minHeight: 300,
    boxShadow: '2px 2px 24px rgba(0, 0, 0, 0.45)',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
  descriptionText: {
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      color: '#918F8D',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.90)',
    },
  },
  shortText: {
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontFamily: 'Fjalla One, sans-serif',
      fontWeight: 900,
      fontSize: 16,
      color: '#576BA5',
      textShadow: '2px 2px 3px rgba(0, 0, 0, 0.70)',
    },
  },
}));

export { useStyles };
