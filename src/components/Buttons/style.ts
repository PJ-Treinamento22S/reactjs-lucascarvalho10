import styled from "styled-components";

export const PiuBtn = styled.button`
  width: 12rem;
  height: 4rem;

  background: #48cae4;
  border-radius: 1rem;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 1.6rem;

  border: none;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 3.2rem;

  color: #f8f9fa;
  transition: background 0.3s;
  &:hover {
    background: #2d7d8d;
    cursor: pointer;
  }
`;

export const CancelBtn = styled.button`
  width: 12rem;
  height: 4rem;

  background: #f8f9fa;
  border-radius: 1rem;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 1.6rem;

  border: none;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 3.2rem;

  color: #e34444;
  transition: background 0.3s;
  &:hover {
    background: #d5d7d8;
    cursor: pointer;
  }
`;
