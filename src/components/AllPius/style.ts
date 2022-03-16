import styled from "styled-components";

export const AllPostsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: -3.2rem;
  margin-top: 1.6rem;
  overflow-y: scroll;
  height: 56rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.8rem;
  &::-webkit-scrollbar {
    width: 0.8rem;
    background: #f8f9fa;
  }
  &::-webkit-scrollbar-track {
    background-color: #f8f9fa;
    margin-left: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #d5d7d8;
    border-radius: 0.8rem;
    height: 20rem;
  }
`;
