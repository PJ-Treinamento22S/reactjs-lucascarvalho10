import React, { useState, useContext } from "react";
import { MainHeader } from "../Main/style";
import * as S from "./style";
import "./style.css";
import { PiuSentBtn, CancelPiuBtn } from "../Buttons";
import { SearchModalContext } from "../../App";
import api from "../../services/api";

interface NewPiuModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPiuModal: React.FC<NewPiuModalProps> = ({ setModalOpen }) => {
  const [piuText, setPiuText] = useState("");

  async function handlePost() {
    if (piuText.length > 0) {
      setModalOpen(false);
      await api.post("/pius", {
        text: piuText,
      });
    }
  }

  return (
    <>
      <S.BlurBackground></S.BlurBackground>
      <S.ModalWindow>
        <S.HeaderModalPiu>
          <MainHeader>PiuFriends</MainHeader>
          <img src="" alt="" />
        </S.HeaderModalPiu>
        <S.SendingWindow>
          <S.PiuText
            maxLength={140}
            onInput={(e) => setPiuText(e.currentTarget.value)}
          ></S.PiuText>
          <S.AlignBottom>
            <div>
              <PiuSentBtn
                content="Piu!"
                onClick={() => handlePost()}
              ></PiuSentBtn>

              <CancelPiuBtn
                content="Cancelar"
                offClick={() => setModalOpen(false)}
              ></CancelPiuBtn>
            </div>
            <div>
              <S.RulesText>
                {piuText.length < 140
                  ? piuText.length + "/140"
                  : "Tamanho máximo"}
              </S.RulesText>
            </div>
          </S.AlignBottom>
        </S.SendingWindow>
      </S.ModalWindow>
    </>
  );
};

export const SearchPiu: React.FC = () => {
  const { setSearchState } = useContext(SearchModalContext);
  return (
    <>
      <input type="text" placeholder="username" className="search-text"></input>
      <input
        type="submit"
        value="Pesquisar"
        className="search-btn"
        onClick={() => {
          setSearchState(false);
        }}
      ></input>
    </>
  );
};

export default NewPiuModal;
