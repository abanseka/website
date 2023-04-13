import { FlexContainer } from "@components/styled/flex";
import { FooterStyled } from "@components/styled/footer";
import { NormalText } from "@components/styled/global";
import NavWidget from "@components/widgets/navigation";
import { theme } from "theme";

const Footer = () => {
  return (
    <FooterStyled
      as={FlexContainer}
      gp={0.625}
      ai="flex-start"
      colors={theme.colors}
    >
      <NavWidget renderIcon={false} />

      <NormalText>
        Built with Next.js, Styled Components and Vercel
      </NormalText>
    </FooterStyled>
  );
};

export default Footer;
