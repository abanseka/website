import styled from "styled-components";

type FlexContainerProps = {
  ma?: string;
  gp?: number;
  pd?: string;
  fd?: "row" | "column" | "row-reverse" | "column-reverse";
  ai?: "flex-start" | "center" | "flex-end";
  jc?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

export const FlexContainer = styled.div`
  display: flex;
  margin: ${({ ma }: FlexContainerProps) => ma};
  gap: ${({ gp }: FlexContainerProps) => `${gp}rem`};
  flex-direction: ${({ fd }: FlexContainerProps) => fd};
  justify-content: ${({ jc }: FlexContainerProps) => jc};
  align-items: ${({ ai = "center" }: FlexContainerProps) => ai};
  padding: ${({ pd }: FlexContainerProps) => pd};
`;