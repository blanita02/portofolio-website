import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: ['Lobster', 'cursive'].join(','),
  },
  palette: {},

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            fontWeight: 900,
            backgroundColor: colors.WHITE,
            borderRadius: 32,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: colors.WHITE,
            },
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
