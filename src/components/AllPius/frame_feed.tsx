import React, { useEffect, useState, useContext } from "react";
import * as S from "../Main/style";
import { PiuCard } from ".";
import { SearchPiu } from "../Modals";
import { SearchModalContext } from "../../App";

import api from "../../services/api";
import "./style.css";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDcxOTMzODIsImV4cCI6MTY0NzI3OTc4Miwic3ViIjoiOWUyMzIzZjEtMGQ0MS00ZWI1LWI4NDAtMTAzMGZiZGQ2ZTdmIn0.i048J9bfmxB7WplEB7MmEip0b75Qpw1UJrJVAh7i5mY`;

interface PiuLike {
  id: string;
  user: User;
  piu: Piu;
}

interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  about: string;
  photo: string;
  pius: Piu[];
  likes: PiuLike[];
  following: User[];
  followers: User[];
  favorites: Piu[];
}

interface Piu {
  id: string;
  user: User;
  likes: PiuLike[];
  text: string;
  created_at: Date;
  updated_at: Date;
}

export const AllPosts: React.FC = () => {
  const [pius, getPius] = useState<Piu[]>([]);
  const { searchState } = useContext(SearchModalContext);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get("/pius", {
        headers: { Authorization: `Bearer ${token}` },
      });
      getPius(response.data);
      console.log(response.data);
    }
    getPosts();
  }, []);
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
      <S.FeedPostsFrame>
        <S.AllPostsStyle className="all-posts-style">
          {searchState && <SearchPiu></SearchPiu>}
          {inOrder.map((piu: Piu) => (
            <PiuCard
              key={piu.id}
              image={piu.user.photo}
              name={piu.user.username}
              text={piu.text}
              // totalLikes={piu.likes}
            />
          ))}
        </S.AllPostsStyle>

        <S.OtherPostStyle>
          <S.OtherStyle>
            <S.MainHeader>Trending</S.MainHeader>
          </S.OtherStyle>

          <S.OtherStyle>
            <S.MainHeader>Mais Pessoas</S.MainHeader>
          </S.OtherStyle>
        </S.OtherPostStyle>
      </S.FeedPostsFrame>
    </>
  );
};
