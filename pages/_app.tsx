import { useLiveReload } from "next-contentlayer/hooks";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  useLiveReload();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
