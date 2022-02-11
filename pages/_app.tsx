import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppWrapper } from '../store/AppWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppWrapper>
    </>
  );
}

export default MyApp;
