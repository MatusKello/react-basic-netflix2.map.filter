import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A10E25',
    },
    secondary: {
      main: '#09090D',
    },
    tertiary: {
      main: '#FFF',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

export default theme;
