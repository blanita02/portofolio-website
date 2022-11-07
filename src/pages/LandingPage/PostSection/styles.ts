import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    flex: 1,
    height: 600,
    flexDirection: 'column',
    overflowX: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(auto-fill,minmax(600px,1fr)) !important',
    gridAutoColumns: 'minmax(160px, 1fr)',
    '&.MuiImageList-root': {
      paddingTop: 48,
      padding: 20,
    },
  },
  //----------> KEYFRAMES <----------

  '@keyframes fadeIn': {
    '0%': {
      transform: 'translateZ(0)',
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
    },
    '100%': {
      transform: 'translateZ(50px)',
      boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.70)',
    },
  },

  //----------> STYLES <----------
  imageItem: {
    '&:hover': {
      animation: `$fadeIn 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
  },
  postTitle: {
    '&.MuiTypography-root': {
      fontWeight: 800,
      fontFamily: 'Poppins',
      fontSize: 36,
      color: '#000000',
      textShadow: '0px 0px 20px rgba(0, 0, 0, 0.70)',
    },
  },
}));

export { useStyles };
