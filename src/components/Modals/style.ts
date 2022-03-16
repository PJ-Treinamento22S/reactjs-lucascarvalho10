import styled from "styled-components";

export const BlurBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: #000;
  opacity: 0.9;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 10.4rem;
  left: 28.6rem;

  width: 80rem;
  height: 50rem;
  background: #e9ecef;

  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const HeaderModalPiu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 3.2rem 6.4rem 2.4rem 9.7rem;
`;

export const SendingWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 0 9.8rem 3.2rem 9.8rem;
`;

export const PiuText = styled.textarea`
  display: inline-block;
  resize: none;

  width: 56rem;
  height: 20rem;

  padding: 1.6rem;

  background: #f8f9fa;

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 1.6rem;

  margin: -2rem 6.4rem 3.2rem 6.4rem;

  font-family: Poppins;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 3.2rem;

  color: #212529;
`;

export const AlignBottom = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const RulesText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 3.2rem;
  color: #0077b6;
`;

export const SearchBtn = styled.input`
  width: 12rem;
  height: 4rem;

  background: #48cae4;
  border-radius: 1rem;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 auto;

  border: none;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 3.2rem;

  color: #f8f9fa;
  transition: background 0.3s;
  &:hover {
    background: #82c4f4;
    cursor: pointer;
  }
`;

export const SearchText = styled.input`
  width: 32rem;
  height: 4rem;

  padding: 1.6rem;

  background: #f8f9fa;
  margin: 4.8rem auto 1.6rem auto;
  border: 0.04rem solid rgb(82, 82, 82);

  border-radius: 1.6rem;

  font-family: Poppins;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 3.2rem;
`;
