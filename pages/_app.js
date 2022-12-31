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
          color: "#121212",

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
          color: "#121212",

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
    },
    shadow:{
      main: "#e0e0e0",
    }
  },
  transitions: {
    time: ".2s"
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
