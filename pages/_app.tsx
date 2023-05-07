import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import Layout from "@components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Kanit", sans-serif;
          letter-spacing: 1px;
          color: ${theme.colors.accent};
          background: ${theme.colors.offWhite};
          position: relative;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        .noisePattern {
          width: 100vw;
          height: 100vh;
          position: fixed;
          z-index: 300;
          opacity: 0.8;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
      `}</style>
    </>
  );
}
