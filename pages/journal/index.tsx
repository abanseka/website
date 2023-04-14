import Head from "next/head";
import { MainContainer } from "@components/styled/Main";

const index = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="description" content="abanseka's journal" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <MainContainer>
        <h1>Journal</h1>
      </MainContainer>
    </>
  );
};

export default index;
