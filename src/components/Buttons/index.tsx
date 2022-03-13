import React from "react";
import * as S from "./style";

interface ButtonInterface {
  content: string;
}

export const PiuSentBtn: React.FC<ButtonInterface> = ({ content }) => {
  return (
    <>
      <S.PiuBtn>{content}</S.PiuBtn>
    </>
  );
};

export const CancelPiuBtn: React.FC<ButtonInterface> = ({ content }) => {
  return (
    <>
      <S.CancelBtn>{content}</S.CancelBtn>
    </>
  );
};
