import { ButtonStyled, ButtonStyledProps } from "@styledComponents/button";
import { FlexContainer } from "@styledComponents/flex";
import { FC } from "react";

interface ButtonProps {
  label: string;
  icon?: JSX.Element;
  props?: ButtonStyledProps;
}

const Button: FC<ButtonProps> = ({ label, icon, props }) => {
  return (
    <ButtonStyled {...props}>
      <FlexContainer gp={0.025}>
        {icon}
        {label}
      </FlexContainer>
    </ButtonStyled>
  );
};

export default Button;
