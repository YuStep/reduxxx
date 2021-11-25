import styled, { keyframes } from "styled-components";

export const TodoStats = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 40%;
  padding-top: 20px;
  margin: 0 auto;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const TodoCounts = styled.p``;

export const TodoFilters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  @media only screen and (max-width: 500px) {
    width: 60%;
  }
`;

export const TodoFilter = styled.p`
  cursor: pointer;
  user-select: none;
`;

export const TodoClearCompleted = styled.p`
  cursor: pointer;
  user-select: none;
`;

const animate = keyframes`
0% {
  background-position-y: 0;
}
100% {
  background-position-y: -480px;
}
`;
export const TodoButton = styled.button`
  position: relative;
  width: 50px;
  height: 40px;
  margin: 0 20px;
  line-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
  color: black;
  trasnition: 0.5s;
  border: 1px solid #ec1840;

  position: absolute;
  right: 30%;
  @media only screen and (max-width: 500px) {
    right: 10%;
  }
  &:hover {
    border: 1px solid transparent;
    background: #ec1840 url(https://i.postimg.cc/wBXGXbWN/pixel.png);
    transition-delay: 0.8s;
    background-size: 180px;
    animation: ${animate} 0.8s steps(8) forwards;
  }
  &:first-of-type {
    width: 130px;
    border: 1px solid #7a18ec;
    &:hover {
      background: #7a18ec url(https://i.postimg.cc/FzBWFtKM/pixel2.png);
    }
    position: static;
  }
`;

export const TodoFirstHelper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TodoSecondHelper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 500px) {
    flex-flow: column;

    align-items: center;
  }
`;
