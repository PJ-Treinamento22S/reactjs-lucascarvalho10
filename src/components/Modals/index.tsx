import React, { useState, useContext } from "react";
import { MainHeader } from "../Main/style";
import * as S from "./style";
import "./style.css";
import { PiuSentBtn } from "../Buttons";
import { SearchModalContext } from "../../App";

interface NewPiuModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPiuModal: React.FC<NewPiuModalProps> = ({ setModalOpen }) => {
  const [modalInfos, setModalInfo] = useState<number>(0);

  return (
    <>
      <S.ModalWindow>
        <S.HeaderModalPiu>
          <MainHeader>PiuFriends</MainHeader>
          <img src="" alt="" />
        </S.HeaderModalPiu>
        <S.SendingWindow>
          <S.PiuText
            maxLength={140}
            onInput={(e) => setModalInfo(e.currentTarget.value.length)}
          ></S.PiuText>
          <S.AlignBottom>
            <div>
              <PiuSentBtn content="Piu!"></PiuSentBtn>
              <button
                className="cancel-btn"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
            <div>
              <S.RulesText>
                {modalInfos < 140 ? modalInfos + "/140" : "Tamanho máximo"}
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
