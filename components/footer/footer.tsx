import NavigationMenu from "@components/widgets/NavigationMenu";
import { FooterStyled } from "@styledComponents/footer";
import { SmallText } from "@styledComponents/typography";

const Footer = () => {
  return (
    <FooterStyled>
      <NavigationMenu renderIcon={false} className="footerMenu" />
      <SmallText>Built with Next.js, Styled Components and Vercel</SmallText>
    </FooterStyled>
  );
};

export default Footer;
