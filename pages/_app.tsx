import type { AppProps } from "next/app";
import Global from "@/components/styled/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
