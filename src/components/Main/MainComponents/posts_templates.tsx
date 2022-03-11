import React from "react";
import * as S from "./post_fragments";

export const PiuCard: React.FC = () => {
  return (
    <>
      <S.PiuTemplate>
        <S.PiuInfo>
          <S.PiuImg>
            {/* <img src="../Assets/piupiuwerlogofeed.svg" alt="" /> */}
          </S.PiuImg>
          <div>
            <S.PiuUserName>Nome</S.PiuUserName>
            <S.PiuText></S.PiuText>
          </div>
        </S.PiuInfo>
        <S.PiuIcons>
          <S.PiuIconIndividual alt="nada"></S.PiuIconIndividual>
          <S.PiuIconIndividual alt="nada"></S.PiuIconIndividual>
          <S.PiuIconIndividual alt="nada"></S.PiuIconIndividual>
        </S.PiuIcons>
      </S.PiuTemplate>
    </>
  );
};
