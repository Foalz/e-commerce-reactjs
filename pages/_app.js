import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
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
