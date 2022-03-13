import styled from "styled-components";

export const PiuTemplate = styled.div`
  display: flex;
  flex-direction: row;

  width: 60rem;
  height: fit-content;

  /* sombra simples */
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.25));

  margin: 1.6rem 0;

  background: #e9ecef;
  border-radius: 3.2rem;

  padding: 2rem;
  position: relative;
  word-wrap: break-word;
`;

export const PiuImg = styled.img`
  width: 8rem;
  height: 8rem;
  left: 3rem;
  top: 1.7rem;
  margin-right: 1.6rem;
  clip-path: circle();

  background: #c4c4c4;
`;

export const PiuInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PiuUserName = styled.h2`
  width: 40rem;
  height: 2.9rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 2.9rem;

  color: #000000;
`;

export const PiuText = styled.p`
  width: 40rem;
  height: fit-content;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.4rem;

  color: #000000;
`;

export const PiuIcons = styled.div`
  display: flex;
  flex-direction: row;

  color: #48cae4;
  float: bottom;
  position: absolute;
  bottom: 1.6rem;
  right: 3.2rem;
`;

export const PiuIconIndividual = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  margin-left: 0.4rem;

  transition: all 0.3s;
`;
