import React from "react";
import * as S from "./style";
import heart from "../Assets/heart-post.svg";
import trash from "../Assets/more-option.svg";
import share from "../Assets/share.svg";

interface PiuProps {
  image: string;
  name: string;
  text: string;
  totalLikes?: number;
}

export const PiuCard: React.FC<PiuProps> = ({
  image,
  name,
  text,
  totalLikes,
}) => {
  return (
    <>
      <S.PiuTemplate>
        <S.PiuInfo>
          <S.PiuImg>{/*  */}</S.PiuImg>
          <div>
            <S.PiuUserName>{name}</S.PiuUserName>
            <S.PiuText>{text}</S.PiuText>
          </div>
        </S.PiuInfo>
        <S.PiuIcons>
          <S.PiuIconIndividual alt="nada" src={share}></S.PiuIconIndividual>
          <span>{totalLikes}0</span>
          <S.PiuIconIndividual alt="nada" src={heart}></S.PiuIconIndividual>
          <S.PiuIconIndividual alt="nada" src={trash}></S.PiuIconIndividual>
        </S.PiuIcons>
      </S.PiuTemplate>
    </>
  );
};
