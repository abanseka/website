import { FC } from "react";
import { WorkCardProps } from "types/common";
import { FlexContainer } from "@styledComponents/flex";
import { font, theme } from "theme";
import { SmallText, TitleText } from "@styledComponents/typography";
import { LinkIcon } from "@styledComponents/links";

const WorkCard: FC<WorkCardProps> = ({
  siteLink,
  repoLink,
  workTitle,
  headerImage,
  codeLinkIcon,
  siteLinkIcon,
  workDescription,
}) => {
  const { primary, highlight } = theme.colors;
  const { bold } = font.fontWeight;

  return (
    <FlexContainer
      mw={50}
      fd="column"
      gp={0.625}
      pd="1rem"
      br="0.625rem"
      fg={1}
      className="workCard"
      bd={`2px solid ${primary}`}
    >
      {headerImage}
      <TitleText>{workTitle}</TitleText>
      <SmallText color={highlight} fw={bold}>
        {workDescription}
      </SmallText>

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
