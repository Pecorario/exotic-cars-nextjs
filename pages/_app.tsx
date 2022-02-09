import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import AppContext from '../store/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{}}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
