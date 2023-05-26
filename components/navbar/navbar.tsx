import { useContext } from "react";
import { themeType } from "types/common";
import { ThemeContext } from "styled-components";
import {
  LogoText,
  NavBar,
  ProfilePhoto,
  Ring,
  Word,
} from "@styledComponents/navbar";
import { FlexContainer } from "@styledComponents/flex";
import { NormalText, SmallText } from "@styledComponents/typography";
import { NavLink } from "@styledComponents/links";
import NavigationMenu from "@components/widgets/NavigationMenu";
import dp from "@assets/dp_template.jpeg";
import BlockIcon from "@assets/block.svg";
import { font } from "theme";

const Navbar = () => {
  const theme: themeType = useContext(ThemeContext);
  const { highlight } = theme.colors;
  const { bold } = font.fontWeight;

  const workprops = {
    href: "https://archisacademy.com",
    target: "blank",
    className: "company",
  };

  return (
    <NavBar>
      <NavigationMenu className="headerMenu" />

      <FlexContainer
        pd="1.25rem 0.625rem"
        jc="space-between"
        className="navbar"
      >
        <FlexContainer
          fd="column"
          ai="flex-start"
          className="details"
          gp={0.125}
        >
          <LogoText>
            <Word>abanseka</Word>
            <Word color={highlight}>.dev</Word>
          </LogoText>

          <NormalText color={highlight} fw={bold}>
            Front-end developer
          </NormalText>

          <NavLink {...workprops}>
            <BlockIcon />
            <SmallText>@archisacademy</SmallText>
          </NavLink>
        </FlexContainer>

        <FlexContainer fd="column" gp={1}>
          <Ring jc="center" ai="center">
            <ProfilePhoto src={dp} alt="cartoon character" priority />
          </Ring>
        </FlexContainer>
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;
