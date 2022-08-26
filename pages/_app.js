import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import setAuthToken from "../utils/setAuthToken";
import { getCurrentUser } from "../redux/actions/auth";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      store.dispatch(getCurrentUser());
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Shab Store</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
