import styled from "styled-components";
import { device } from "theme";
import { FlexContainer } from "./flex";

export const WorkPage = styled(FlexContainer)`
  .workpage {
    width: 100%;

    .workCard:first-child {
      .workLinks {
        justify-content: center;
      }
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    .workCard {
      min-width: 50%;
      height: 200px;
    }
  }

  @media ${device.mobileL} {
    .workCard {
      gap: 0.025;
      min-width: 80%;
    }
  }

  @media ${device.mobileM} {
    .workCard {
      min-width: 100%;
    }
  }
`;
