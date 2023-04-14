import Head from "next/head";
import { MainContainer } from "@components/styled/Main";

const index = () => {
  return (

    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="abanseka's projects" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <MainContainer>
        <h1>Work </h1>
      </MainContainer>
    </>
  );
};

export default index;
