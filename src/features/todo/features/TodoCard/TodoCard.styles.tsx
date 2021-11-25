import styled from "styled-components";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { divideWord } from "../../utils/divideWord";
type FlapProps = {
  text: string;
  secret: boolean;
  completed: boolean;
  important: boolean;
};

export const Flap = styled.div<FlapProps>`
  width: 100%;
  height: 100%;

  position: relative;
  &::before {
    z-index: 3;
    position: absolute;
    ${(props) =>
      props.secret === false
        ? `content: "${divideWord(props.text)[0]}" `
        : `content:''`};

    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 50%;

    ${(props) =>
      props.secret === true
        ? `background: url(${left}) no-repeat center center white;`
        : `background:${
            props.completed === true
              ? "#8bfc7e"
              : `${props.important === true ? "#d1473d" : "#f5e78c"}`
          }`};
    background-size: contain;
    background-repeat: no-repeat;
    transition: 1s;
  }
  &::after {
    z-index: 3;
    position: absolute;
    ${(props) =>
      props.secret === false
        ? `content: "${divideWord(props.text)[1]}" `
        : `content:''`};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 50%;
    right: 0;
    ${(props) =>
      props.secret === true
        ? `background: url(${right}) no-repeat center center white`
        : `background:${
            props.completed === true
              ? "#8bfc7e"
              : `${props.important === true ? "#d1473d" : "#f5e78c"}`
          }`};

    background-size: contain;
    background-repeat: no-repeat;
    transition: 1s;
  }
`;

export const CardButton = styled.button``;

export const Card = styled.div`
  width: 300px;
  height: 200px;
  transition: all ease 200ms;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 5px 5px #d0d0d0;
  &:hover ${Flap}::after {
    transform: translateX(150px);
  }
  &:hover ${Flap}::before {
    transform: translateX(-150px);
  }
  position: relative;
  &:hover {
    transform: scale(1.1);
    transition: all ease 200ms;
    box-shadow: 0 0 1px 1px #fc037f;
  }
`;

export const Content = styled.div`
  position: absolute;
  text-align: justify;
  color: black;
  z-index: 1;
  font-family: "Merriweather", serif;
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(10, 76, 244, 0.8);
  }
`;

export const ContentClose = styled.div`
  position: absolute;
  z-index: 2;
  right: 10%;
  top: 5%;
`;

export const ContentText = styled.h3`
  text-align: justify;
  padding: 10px;
`;
