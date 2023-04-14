import styled from "styled-components";

export type ButtonStyledProps = {
  cl?: string;
  pd?: string;
  bg?: string;
  sx?: number;
  we?: number;
  bd?: string;
  br?: number;
  dp?: string;
  gp?: number;
};

export const ButtonStyled = styled.button`
  min-width: 2rem;
  outline: none;
  cursor: pointer;
  gap: ${({ gp = 0.025 }: ButtonStyledProps) => `${gp}rem`};
  display: ${({ dp }: ButtonStyledProps) => dp};
  color: ${({ cl }: ButtonStyledProps) => cl};
  font-size: ${({ sx = 0.875 }: ButtonStyledProps) => `${sx}rem`};
  font-weight: ${({ we = 600 }: ButtonStyledProps) => we};
  padding: ${({ pd = "8px 12px" }: ButtonStyledProps) => pd};
  background: ${({ bg = "white" }: ButtonStyledProps) => bg};
  border: ${({ bd = "transparent" }: ButtonStyledProps) => bd};
  border-radius: ${({ br = 0.625 }: ButtonStyledProps) => `${br}rem`};
`;
