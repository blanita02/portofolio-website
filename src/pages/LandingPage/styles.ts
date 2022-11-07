import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    },
  },
  //----------> CONTAINER <----------
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    postion: 'relative',
    backgroundImage: `linear-gradient( -25deg, rgba(5,5,5,1) 0%, rgba(30,30,30,1) 25%, rgba(47,47,47,1) 51%, rgba(71,71,71,1) 100%)`,
    backgroundSize: '300% 300%',
    animation: `$colorPulse 7s ease infinite`,
  },

  container: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    maxWidth: 1440,
  },

  //----------> KEYFRAMES <----------

  '@keyframes colorPulse': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

export { useStyles };
