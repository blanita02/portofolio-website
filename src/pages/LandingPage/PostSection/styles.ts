import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    flex: 1,
    height: 700,
    paddingBottom: 128,
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

  imageContainer: {
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(auto-fill,minmax(460px, 1fr)) !important',
    gridAutoColumns: 'minmax(460px, 1fr)',
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
    borderRadius: 8,
    '&:hover': {
      animation: `$fadeIn 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      cursor: 'pointer',
    },
    '&:hover $barImage': {
      opacity: 1,
    },
  },
  barImage: {
    opacity: 0,
  },
  postTitle: {
    '&.MuiTypography-root': {
      fontWeight: 800,
      fontSize: 36,
      color: '#FFFFFF',
      textShadow: '0px 0px 20px rgba(0, 0, 0, 0.70)',
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
}));

export { useStyles };
