import { ButtonStyled, ButtonStyledProps } from "@components/styled/button";
import { FC } from "react";

interface ButtonProps {
  label: string;
  props?: ButtonStyledProps;
}

const Button: FC<ButtonProps> = ({ label, props }) => {
  return <ButtonStyled {...props}>{label}</ButtonStyled>;
};

export default Button;
