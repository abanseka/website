import { FC } from "react";
import { WorkCardProps } from "types/common";
import { FlexContainer } from "@styledComponents/flex";
import { LinkIcon, SmallText, TitleText } from "@styledComponents/global";
import { theme } from "theme";

const WorkCard: FC<WorkCardProps> = ({
  siteLink,
  repoLink,
  workTitle,
  headerImage,
  codeLinkIcon,
  siteLinkIcon,
  workerDescription,
}) => {
  const { primary, highlight } = theme.colors;

  return (
    <FlexContainer
      mw={50}
      fd="column"
      gp={0.625}
      pd="1rem"
      br="0.625rem"
      className="workCard"
      bd={`2px solid ${primary}`}
    >
      {headerImage}
      <TitleText>{workTitle}</TitleText>
      <SmallText style={{ color: highlight }}>{workerDescription}</SmallText>

      <FlexContainer
        wd={100}
        jc="space-between"
        ai="center"
        ma="1rem 0 0"
        className="workLinks"
      >
        <LinkIcon href={siteLink}>{siteLinkIcon}</LinkIcon>
        <LinkIcon href={repoLink}>{codeLinkIcon}</LinkIcon>
      </FlexContainer>
    </FlexContainer>
  );
};

export default WorkCard;
