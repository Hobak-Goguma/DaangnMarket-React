import GlobalStyled from '@common/themes/GlobalStyles';
import theme from '@common/themes/Theme';
import App, { AppContext, AppProps, Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <GlobalStyled />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Container>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
