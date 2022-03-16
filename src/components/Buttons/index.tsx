import React from "react";
import * as S from "./style";

interface ButtonInterface {
  content: string;
  onClick?: () => Promise<void>;
  offClick?: () => void;
}

export const PiuSentBtn: React.FC<ButtonInterface> = ({ content, onClick }) => {
  return (
    <>
      <S.PiuBtn onClick={onClick}>{content}</S.PiuBtn>
    </>
  );
};

export const CancelPiuBtn: React.FC<ButtonInterface> = ({
  content,
  offClick,
}) => {
  return (
    <>
      <S.CancelBtn onClick={offClick}>{content}</S.CancelBtn>
    </>
  );
};
