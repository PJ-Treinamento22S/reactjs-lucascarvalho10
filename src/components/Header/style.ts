import styled from "styled-components";

export const HeaderFeedFrame = styled.div`
  margin: 6rem 12rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  background: #f8f9fa;
`;

export const NavFeed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.4rem;
`;

export const IconFeed = styled.img`
  cursor: pointer;
  transition: 0.4s;
  transform: scale(0.8);
  &:hover {
    transform: scale(1);
  }
`;
