import { NoteType } from "types/note";
import { FlexContainer } from "@styledComponents/flex";
import { NoteCardStyled } from "@styledComponents/noteCard";
import { SmallText, TitleText } from "@styledComponents/typography";

const NoteCard = ({ title, date, noteslug }: NoteType) => (
  <NoteCardStyled href={`notes/${noteslug}`}>
    <FlexContainer fd="column" gp={0.625} ai="flex-start">
      <TitleText>{title}</TitleText>
      <SmallText>{date}</SmallText>
    </FlexContainer>
  </NoteCardStyled>
);

export default NoteCard;
