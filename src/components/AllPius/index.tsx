import React, { useState } from "react";
import * as S from "./style";
import heart from "../../Assets/heart-post.svg";
import trash from "../../Assets/more-option.svg";
import share from "../../Assets/share.svg";

import api from "../../services/api";

interface PiuProps {
  image: string;
  name: string;
  text: string;
}

export const PiuCard: React.FC<PiuProps> = ({ image, name, text }) => {
  // const [likeCounter, setLikeCounter] = useState<string>("");
  async function handleLikes() {
    await api.post("/pius/like", {
      piu_id: "profcarvalho",
    });
  }

  return (
    <>
      <S.PiuTemplate>
        <S.PiuInfo>
          <S.PiuImg src={image}>{/*  */}</S.PiuImg>
          <div>
            <S.PiuUserName>{name}</S.PiuUserName>
            <S.PiuText>{text}</S.PiuText>
          </div>
        </S.PiuInfo>
        <S.PiuIcons>
          <S.PiuIconIndividual alt="share" src={share}></S.PiuIconIndividual>

          <S.PiuIconIndividual
            alt="like"
            src={heart}
            onClick={() => handleLikes()}
          ></S.PiuIconIndividual>
          <S.PiuIconIndividual alt="del" src={trash}></S.PiuIconIndividual>
        </S.PiuIcons>
      </S.PiuTemplate>
    </>
  );
};
