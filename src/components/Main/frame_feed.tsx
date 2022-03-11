import React from "react";
import * as S from "./style";
import { PiuCard } from "./MainComponents/posts_templates";

export const AllPosts: React.FC = () => {
  return (
    <>
      <S.FeedPostsFrame>
        {/* Aqui, ficam os piuwers */}
        <S.AllPostsStyle>
          <PiuCard></PiuCard>
        </S.AllPostsStyle>

        <S.OtherPostStyle>
          {/* Páginas do menu esquerdo */}
          <S.OtherStyle>
            <S.MainHeader>Trending</S.MainHeader>
          </S.OtherStyle>

          <S.OtherStyle>
            <S.MainHeader>Mais Pessoas</S.MainHeader>
          </S.OtherStyle>
        </S.OtherPostStyle>
      </S.FeedPostsFrame>
    </>
  );
};
