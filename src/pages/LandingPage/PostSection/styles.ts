import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    flex: 1,
    height: 720,
    paddingBottom: 96,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    gridAutoFlow: 'column',
    gridTemplateColumns: 'minmax(500px, 1fr) !important',
    gridAutoColumns: 'minmax(500px, 1fr) !important',
    '&.MuiImageList-root': {
      paddingTop: 48,
      padding: 20,
      overflow: 'hidden',
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
    display: 'flex',
    flex: 1,
    borderRadius: 12,
    '&:hover': {
      animation: `$fadeIn 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      cursor: 'pointer',
    },
    '&:hover $barImage': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  barImage: {
    opacity: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    transform: 'translateY(100%)',
    transition: 'transform 0.2s',
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
