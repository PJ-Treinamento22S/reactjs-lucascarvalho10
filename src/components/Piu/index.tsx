import React, { useState, useMemo } from "react";
import * as S from "./style";
import heart from "../../Assets/heart-post.svg";
import heart_fill from "../../Assets/heart-post-fill.svg";

import trash from "../../Assets/more-option.svg";
import share from "../../Assets/share.svg";

import api from "../../services/api";

interface PiuProps {
  image: string;
  name: string;
  text: string;
  id: string;
}

export const PiuCard: React.FC<PiuProps> = ({ image, name, text, id }) => {
  //Alterar cor ao clicar no like
  const [likeBtn, setLikeBtn] = useState(heart);

  async function handleLikes(id: string) {
    await api
      .post("/pius/like", {
        piu_id: id,
      })
      .then((response) =>
        response.data.operation === "like"
          ? setLikeBtn(heart_fill)
          : setLikeBtn(heart)
      )
      .catch((err) => console.log(err));
  }

  // const memoizedErrors = useMemo(() => <Errors active={showErrors} />, [showErrors]);
  const memoizedLikes = useMemo(
    () => (
      <S.PiuIconIndividual
        alt="like"
        src={likeBtn}
        onClick={() => handleLikes(id)}
      ></S.PiuIconIndividual>
    ),
    [likeBtn]
  );

  async function handleDelete(id: string) {
    await api.delete(`/pius`, {
      data: { piu_id: id },
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
          <S.PiuIconIndividual alt="favorite" src={share}></S.PiuIconIndividual>

          {memoizedLikes}
          <S.PiuIconIndividual
            alt="del"
            src={trash}
            onClick={() => handleDelete(id)}
          ></S.PiuIconIndividual>
        </S.PiuIcons>
      </S.PiuTemplate>
    </>
  );
};
