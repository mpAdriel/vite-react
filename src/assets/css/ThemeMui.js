import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const mainTheme = createTheme({
  palette: {
    // mode: 'dark', // add <CssBaseline /> inside <ThemeProvider theme={mainTheme}>
    primary: {
      main: purple[500],
    },
  },
});

export { mainTheme };
