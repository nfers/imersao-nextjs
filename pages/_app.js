import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
  * {
   box-sizing: border-box;
   font-family: 'Yusei Magic', sans-serif;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}