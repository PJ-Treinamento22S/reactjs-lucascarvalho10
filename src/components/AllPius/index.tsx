import React, { useEffect, useContext, useState } from "react";
import * as S from "../Main/style";
import { PiuCard } from "../Piu/index";
import { AllPostsStyle } from "./style";
import { SearchPiu } from "../Modals";
import { SearchModalContext, PiuContext } from "../../App";
import { Piu } from "../../interfaces/piu";

import api from "../../services/api";

// Contexto para exportação de condições do Piu

export const AllPosts: React.FC = () => {
  const { pius, getPius } = useContext(PiuContext);

  const { searchState } = useContext(SearchModalContext);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    reload ? setReload(false) : setReload(true);
    async function getPosts() {
      const response = await api.get("/pius");
      getPius(response.data);
      console.log(response.data);
    }
    getPosts();
  }, [reload]);
  // Ordenando os pius cronologicamente
  const inOrder = pius.sort((a, b) => {
    return a.created_at > b.created_at
      ? -1
      : a.created_at < b.created_at
      ? 1
      : 0;
  });
  return (
    <>
      <PiuContext.Provider value={{ pius, getPius }}>
        <S.FeedPostsFrame>
          <AllPostsStyle className="all-posts-style">
            {searchState && <SearchPiu></SearchPiu>}
            {inOrder?.map((piu: Piu) => (
              <PiuCard
                key={piu.id}
                image={piu.user.photo}
                name={piu.user.username}
                text={piu.text}
                id={piu.id}
              />
            ))}
          </AllPostsStyle>

          <S.OtherPostStyle>
            <S.OtherStyle>
              <S.MainHeader>Trending</S.MainHeader>
            </S.OtherStyle>

            <S.OtherStyle>
              <S.MainHeader>Mais Pessoas</S.MainHeader>
            </S.OtherStyle>
          </S.OtherPostStyle>
        </S.FeedPostsFrame>
      </PiuContext.Provider>
    </>
  );
};
