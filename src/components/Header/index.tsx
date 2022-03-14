import React, { useState, useContext } from "react";
import * as S from "./style";
import NewPiuModal from "../Modals";
import { SearchModalContext } from "../../App";

import logoHeader from "../../Assets/piupiuwerlogofeed.svg";
import lupa from "../../Assets/lupa.svg";
import person from "../../Assets/person.svg";
import pius from "../../Assets/pius.svg";

export const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const [openNewPiu, setNewPiu] = useState<boolean>(false);
  const { setSearchState } = useContext(SearchModalContext);
  return (
    <>
      <S.HeaderFeedFrame>
        <div>
          <img src={logoHeader} alt="Logo Piu" />
        </div>
        <S.NavFeed>
          <S.IconFeed
            src={lupa}
            alt="img"
            onClick={() => {
              setSearchState(true);
            }}
          ></S.IconFeed>
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
