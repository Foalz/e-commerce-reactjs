import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  main: {
    primary: "#fff",
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
