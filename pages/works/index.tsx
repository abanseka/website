import Head from "next/head";
import Bus from "@assets/bus.svg";
import { FlexContainer } from "@styledComponents/flex";
import { TitleText } from "@styledComponents/global";

const index = () => {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="abanseka's projects" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <>
        <FlexContainer gp={1} jc="center" fd="column" className="workpage">
          <Bus width="10rem" height="10rem" />
          <TitleText>Works 🔧</TitleText>
        </FlexContainer>
      </>
    </>
  );
};

export default index;
