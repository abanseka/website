import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { themeType } from "types/common";
import NavigationMenu from "@components/widgets/NavigationMenu";
import { FooterStyled } from "@styledComponents/footer";
import { SmallText } from "@styledComponents/typography";
import { font } from "theme";

const Footer = () => {
  const theme: themeType = useContext(ThemeContext);
  const { highlight } = theme.colors;
  const { bold } = font.fontWeight;

  return (
    <FooterStyled>
      <hr />
      <NavigationMenu renderIcon={false} className="footerMenu" />
      <SmallText color={highlight} fw={bold}>
        Built with Next.js, Styled Components and Vercel
      </SmallText>
    </FooterStyled>
  );
};

export default Footer;
