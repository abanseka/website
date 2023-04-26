import Head from "next/head";
import { theme } from "theme";
import { FlexContainer } from "@styledComponents/flex";
import { TitleText } from "@styledComponents/typography";
import MicroScopeImage from "@assets/404.svg";

export default function Index() {
  return (
    <>
      <Head>
        <title>Dead End!</title>
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <FlexContainer fd="column" ai="center" gp={0.625}>
        <MicroScopeImage
          width={320}
          height={320}
          fill={theme.colors.highlight}
        />
        <TitleText>Dead end!</TitleText>
      </FlexContainer>
    </>
  );
}
