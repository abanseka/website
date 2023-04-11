import type { AppProps } from "next/app";
import Global from "@/components/styled/global";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global />
      <Component {...pageProps} />
    </Layout>
  );
}
