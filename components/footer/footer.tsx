import { FlexContainer } from "@components/styled/flex";
import { FooterStyled } from "@components/styled/footer";
import { MediumTypography } from "@components/styled/global";
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

      <MediumTypography>
        Built with Next.js, Styled Components and Vercel
      </MediumTypography>
    </FooterStyled>
  );
};

export default Footer;
