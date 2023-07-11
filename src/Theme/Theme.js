import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8, // Sets the base spacing unit to 8 pixels (optional)
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
    MuiListItemText: {
      root: {
        fontWeight: 800,
        
      },
    },
  },
});

export default theme;
