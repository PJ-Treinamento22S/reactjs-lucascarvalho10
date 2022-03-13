import React from "react";
import * as S from "./style";
import { AllPosts } from "../Piu/frame_feed";

export const Main: React.FC = () => {
  return (
    <>
      <S.FeedFrame>
        <S.MainHeader>O que tá rolando!</S.MainHeader>
        <AllPosts></AllPosts>
      </S.FeedFrame>
    </>
  );
};
