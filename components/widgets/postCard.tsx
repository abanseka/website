import { FlexContainer } from "@styledComponents/flex";
import { SmallText, TitleText } from "@styledComponents/global";
import { PostCardStyled } from "@styledComponents/postCard";

const PostCard = ({ title, date }: { title: string; date: string }) => {
  return (
    <PostCardStyled>
      <FlexContainer fd="column" gp={0.625} ai="flex-start">
        <TitleText>{title}</TitleText>
        <SmallText>{date}</SmallText>
      </FlexContainer>
    </PostCardStyled>
  );
};

export default PostCard;
