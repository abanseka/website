import React, { useContext } from "react";
import { SmallText, TitleText } from "@components/styled/global";
import { PostCardStyled } from "@components/styled/postCard";
import { ThemeContext } from "styled-components";
import { themeType } from "types/common";
import { FlexContainer } from "@components/styled/flex";

const PostCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const theme: themeType = useContext(ThemeContext);

  return (
    <PostCardStyled
      as={FlexContainer}
      fd="column"
      gp={0.625}
      ai="flex-start"
      colors={theme.colors}
    >
      <TitleText>{title}</TitleText>
      <SmallText>{description}</SmallText>
    </PostCardStyled>
  );
};

export default PostCard;
