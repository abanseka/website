import { SmallText, TitleText } from "@components/styled/global";
import { PostCardStyled } from "@components/styled/postCard";
import { FlexContainer } from "@components/styled/flex";

const PostCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {

  return (
    <PostCardStyled
      as={FlexContainer}
      fd="column"
      gp={0.625}
      ai="flex-start"
    >
      <TitleText>{title}</TitleText>
      <SmallText>{description}</SmallText>
    </PostCardStyled>
  );
};

export default PostCard;
