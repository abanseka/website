import styled from "styled-components";

type FlexContainerProps = {
  wd?: number;
  mw?: number;
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

  br?: string;
  bd?: string;
};

export const FlexContainer = styled.div`
  width: ${({ wd }: FlexContainerProps) => `${wd}%`};
  max-width: ${({ mw }: FlexContainerProps) => `${mw}%`};
  margin: ${({ ma }: FlexContainerProps) => ma};
  padding: ${({ pd }: FlexContainerProps) => pd};

  display: flex;
  gap: ${({ gp }: FlexContainerProps) => `${gp}rem`};
  flex-direction: ${({ fd }: FlexContainerProps) => fd};
  justify-content: ${({ jc }: FlexContainerProps) => jc};
  align-items: ${({ ai = "center" }: FlexContainerProps) => ai};

  border-radius: ${({ br }: FlexContainerProps) => br};
  border: ${({ bd }: FlexContainerProps) => bd};
`;
