import styled from "styled-components";

type FlexContainerProps = {
  gp?: number;
  fd?: "row" | "column";
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
  gap: ${({ gp }: FlexContainerProps) => `${gp}rem`};
  flex-direction: ${({ fd }: FlexContainerProps) => fd};
  justify-content: ${({ jc }: FlexContainerProps) => jc};
  align-items: ${({ ai = "center" }: FlexContainerProps) => ai};
`;
