import styled from "styled-components";

export const FeedFrame = styled.div`
  margin: auto 8rem;
`;

export const MainHeader = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  line-height: 6rem;

  color: #0077b6;
`;

export const FeedPostsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin: 0 0 2.4rem 0;
`;

export const AllPostsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: -3.2rem;
`;

export const OtherPostStyle = styled.div`
  width: 48rem;
  margin-top: -0.8rem;
`;

export const OtherStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4rem 3rem;

  width: 48rem;

  background: #e9ecef;
  border-radius: 3.2rem;

  margin-top: 3.2rem;
`;
