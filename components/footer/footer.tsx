import NavigationMenu from "@components/widgets/NavigationMenu";
import { FooterStyled } from "@styledComponents/footer";
import { NormalText } from "@styledComponents/global";

const Footer = () => {
  return (
    <FooterStyled>
      <NavigationMenu renderIcon={false} className="footerMenu" />
      <NormalText>Built with Next.js, Styled Components and Vercel</NormalText>
    </FooterStyled>
  );
};

export default Footer;
