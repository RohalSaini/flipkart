import { createTheme } from '@mui/material/styles';
import { green, purple ,orange, yellow} from '@mui/material/colors';
import { red } from '@mui/material/colors';

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900]

const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
        main: dangerColor
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: dangerColor,
          marginBottom: 100
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: 36
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


export default customTheme;