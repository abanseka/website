import Image from "next/image";
import Button from "@components/button/Button";
import { FlexContainer } from "@components/styled/flex";
import { HeadLine, LogoText, NavBar, Span } from "@components/styled/navbar";
import dp from "../../assets/dp_template.jpeg";
import styled from "styled-components";

const accent: string = "#865671";

const Navbar = () => {
  return (
    <NavBar pd="1.25rem 0.625rem">
      <FlexContainer jc="space-between">
        <FlexContainer fd="column" ai="flex-start">
          <LogoText>
            <Span>abanseka</Span>
            <Span color={accent}>.dev</Span>
          </LogoText>

          <HeadLine>Front-end developer & Digital Nomad</HeadLine>
        </FlexContainer>

        <FlexContainer fd="column" gp={1}>
          <Ring
            as={FlexContainer}
            jc="center"
            ai="center"
            children={<ProfilePhoto src={dp} alt="cartoon character" />}
          />

          <Button
            label="Hire Me"
            props={{ bg: accent, cl: "#fff", sx: 1.025 }}
          />
        </FlexContainer>
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;

const ProfilePhoto = styled(Image)`
  width: 5rem;
  border-radius: 3rem;
  color: transparent;
`;

const Ring = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 3rem;
  background-color: ${accent};
`;
