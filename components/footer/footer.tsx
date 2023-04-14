import { FlexContainer } from "@components/styled/flex";
import { FooterStyled } from "@components/styled/footer";
import { NormalText } from "@components/styled/global";
import NavWidget from "@components/widgets/navigation";

const Footer = () => {
  return (
    <FooterStyled
      as={FlexContainer}
      fd="column"
      ai="flex-start"
      gp={0.625}
    >
      <NavWidget ma="0"  renderIcon={false} />

      <NormalText>
        Built with Next.js, Styled Components and Vercel
      </NormalText>
    </FooterStyled>
  );
};

export default Footer;
