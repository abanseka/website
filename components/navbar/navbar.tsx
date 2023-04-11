import { useContext } from "react";
import { themeType } from "types/common";
import { ThemeContext } from "styled-components";
import { FlexContainer } from "@components/styled/flex";
import Button from "@components/button/Button";
import dp from "../../assets/dp_template.jpeg";
import {
  Ring,
  Word,
  NavBar,
  LogoText,
  ProfilePhoto,
} from "@components/styled/navbar";
import { MediumTypography, NavLink } from "@components/styled/global";

const Navbar = () => {
  const theme: themeType = useContext(ThemeContext);

  return (
    <NavBar as={FlexContainer} pd="1.25rem 0.625rem" jc="space-between">
      <FlexContainer fd="column" ai="flex-start" className="details">
        <NavLink href="/" colors={theme.colors}>
          <LogoText>
            <Word>abanseka</Word>
            <Word cl={theme.colors.highlight}>.dev</Word>
          </LogoText>
        </NavLink>

        <MediumTypography ta="center">
          Front-end developer & Digital Nomad
        </MediumTypography>
      </FlexContainer>

      <FlexContainer fd="column" gp={1}>
        <Ring as={FlexContainer} jc="center" ai="center" colors={theme.colors}>
          <ProfilePhoto src={dp} alt="cartoon character" priority />
        </Ring>

        <Button
          label="Hire Me"
          props={{
            sx: 1.025,
            bg: theme.colors.accent,
            cl: theme.colors.offWhite,
            dp: "none",
          }}
        />
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;
