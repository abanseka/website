import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { themeType } from "types/common";
import { FlexContainer } from "@styledComponents/flex";
import { TitleText } from "@styledComponents/typography";
import MicroScopeImage from "@assets/404.svg";

export default function Index() {
  const theme: themeType = useContext(ThemeContext);
  const { primary } = theme.colors;

  return (
    <>
      <Head>
        <title>Dead End!</title>
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <FlexContainer fd="column" ai="center" gp={0.625}>
        <MicroScopeImage width={320} height={320} fill={primary} />
        <TitleText>Dead end!</TitleText>
      </FlexContainer>
    </>
  );
}
