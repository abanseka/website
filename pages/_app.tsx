import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import GlobalStyles from "@components/styled/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles colors={theme.colors} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
