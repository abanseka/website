import { useContext } from "react";
import { themeType } from "types/common";
import { ThemeContext } from "styled-components";
import {
  Ring,
  Word,
  NavBar,
  LogoText,
  ProfilePhoto,
} from "@styledComponents/navbar";
import { FlexContainer } from "@styledComponents/flex";
import { NormalText } from "@styledComponents/global";
import NavigationMenu from "@components/widgets/NavigationMenu";
import Button from "@components/button/Button";
import dp from "../../assets/dp_template.jpeg";
import PhoneIcon from "../../assets/phoneInbox.svg";

const Navbar = () => {
  const theme: themeType = useContext(ThemeContext);

  return (
    <NavBar>
      <NavigationMenu className="headerMenu" />

      <FlexContainer
        pd="1.25rem 0.625rem"
        jc="space-between"
        className="navbar"
      >
        <FlexContainer fd="column" ai="flex-start" className="details">
          <LogoText>
            <Word>abanseka</Word>
            <Word cl={theme.colors.highlight}>.dev</Word>
          </LogoText>

          <NormalText ta="center">
            Front-end developer & Digital Nomad
          </NormalText>
        </FlexContainer>

        <FlexContainer fd="column" gp={1}>
          <Ring as={FlexContainer} jc="center" ai="center">
            <ProfilePhoto src={dp} alt="cartoon character" priority />
          </Ring>

          <Button
            label="whatsapp"
            props={{
              sx: 1.025,
              bg: theme.colors.accent,
              cl: theme.colors.offWhite,
              dp: "none",
            }}
            icon={<PhoneIcon fill={theme.colors.offWhite} width="2rem" />}
          />
        </FlexContainer>
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;
