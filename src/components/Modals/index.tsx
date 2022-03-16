import React, { useState, useContext } from "react";
import { MainHeader } from "../Main/style";
import * as S from "./style";

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
                {piuText.length === 0 ? "Piu Vazio!" : piuText.length + "/140"}
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
      <S.SearchText type="text" placeholder="username" />

      <S.SearchBtn
        type="submit"
        value="Pesquisar"
        onClick={() => {
          setSearchState(false);
        }}
      ></S.SearchBtn>
    </>
  );
};

export default NewPiuModal;
