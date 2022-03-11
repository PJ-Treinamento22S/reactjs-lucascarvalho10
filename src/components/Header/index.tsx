import React from "react";
import * as S from "./style";
import logoHeader from "../Assets/piupiuwerlogofeed.svg";

interface PropsInterface {
  isDark?: boolean;
}

export const Header: React.FC<PropsInterface> = (props: PropsInterface) => {
  return (
    <>
      <S.HeaderFeedFrame>
        <div>
          <img src={logoHeader} alt="Logo Piu" />
        </div>
        <S.NavFeed>
          <S.IconFeed src="" alt="img"></S.IconFeed>
          <S.IconFeed src="" alt="img"></S.IconFeed>
          <S.IconFeed src="" alt="img"></S.IconFeed>
        </S.NavFeed>
      </S.HeaderFeedFrame>
    </>
  );
};
