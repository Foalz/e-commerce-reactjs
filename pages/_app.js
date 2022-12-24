import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontWeight: "bold",
          textTransform: "capitalize",
          backgroundColor: "transparent",

          "&:hover": {
            backgroundColor: "transparent",
          },
        }
      },
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          fontWeight: "bold",
          textTransform: "capitalize",
          backgroundColor: "transparent",

          "&:hover": {
            backgroundColor: "transparent",
          },
        }
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    }
  },
  palette:{
    primary: {
      main: '#fff',
    },
    secondary: {
      main: "#121212",
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
