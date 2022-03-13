import React from "react";
import { MainHeader } from "../Main/style";
import * as S from "./style";
import "./style.css";
import { PiuSentBtn } from "../Buttons";

interface NewPiuModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPiuModal: React.FC<NewPiuModalProps> = ({ setModalOpen }) => {
  return (
    <>
      <S.ModalWindow>
        <S.HeaderModalPiu>
          <MainHeader>PiuFriends</MainHeader>
          <img src="" alt="" />
        </S.HeaderModalPiu>
        <S.SendingWindow>
          <S.PiuText></S.PiuText>
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
              <S.RulesText>Leia nossas regras!</S.RulesText>
            </div>
          </S.AlignBottom>
        </S.SendingWindow>
      </S.ModalWindow>
    </>
  );
};

export default NewPiuModal;
