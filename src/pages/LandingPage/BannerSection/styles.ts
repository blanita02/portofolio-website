import { makeStyles } from '@mui/styles';
import { keyframes, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  //----------> CONTAINER <----------
  mainContainer: {
    display: 'flex',
    minHeight: 800,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export { useStyles };
