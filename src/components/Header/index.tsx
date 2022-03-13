import React, { useState } from "react";
import * as S from "./style";
import NewPiuModal from "../Modals";
import logoHeader from "../Assets/piupiuwerlogofeed.svg";
import lupa from "../Assets/lupa.svg";
import person from "../Assets/person.svg";
import pius from "../Assets/pius.svg";

export const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <S.HeaderFeedFrame>
        <div>
          <img src={logoHeader} alt="Logo Piu" />
        </div>
        <S.NavFeed>
          <S.IconFeed src={lupa} alt="img"></S.IconFeed>
          <S.IconFeed
            src={pius}
            alt="img"
            onClick={() => {
              setOpenModal(true);
            }}
          ></S.IconFeed>
          <S.IconFeed src={person} alt="img"></S.IconFeed>
        </S.NavFeed>
      </S.HeaderFeedFrame>
      {openModal && <NewPiuModal setModalOpen={setOpenModal} />}
    </>
  );
};
