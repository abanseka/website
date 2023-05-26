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

  fw?: "wrap" | "nowrap";
  fg?: number;

  br?: string;
  bd?: string;
};

export const FlexContainer = styled.div<FlexContainerProps>`
  width: ${({ wd }) => wd + "%"};
  max-width: ${({ mw }) => mw + "%"};
  margin: ${({ ma }) => ma};
  padding: ${({ pd }) => pd};

  display: flex;
  gap: ${({ gp }) => gp + "rem"};
  flex-direction: ${({ fd }) => fd};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai = "center" }) => ai};

  flex-wrap: ${({ fw }) => fw};
  flex-grow: ${({ fg }) => fg};

  border-radius: ${({ br }) => br};
  border: ${({ bd }) => bd};
`;
