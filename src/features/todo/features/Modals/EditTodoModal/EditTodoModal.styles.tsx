import styled, { keyframes } from "styled-components";

const anime = keyframes`
  0% {
    width: 60px;
    height: 60px;
    background: #f0f0f0;
    box-shadow:  0 0 0 #cccccc,
                 0 0 0 #ffffff,
                  10px 10px 10px #cccccc inset,
                  -10px -10px 10px #ffffff inset;
  }
  25% {
    width: 60px;
    height: 60px;
    background: #f8f8f8;
    box-shadow:  10px 10px 10px #cccccc,
                 10px 10px 10px #ffffff,
                 0 0 0 #cccccc inset,
                 0 0 0 #ffffff inset;
  }
  50% {
    width: 60px;
    height: 240px;
    background: #f8f8f8;
    box-shadow:  10px 10px 10px #cccccc,
                 10px 10px 10px #ffffff,
                 0 0 0 #cccccc inset,
                 0 0 0 #ffffff inset;
  }
  100% {
    width: 480px;
    height: 240px;
    background: #fafafa;
    box-shadow:  40px 40px 40px #cccccc,
                 0 0 0 #ffffff,
                 0 0 0 #cccccc inset,
                 2px 2px 2px #ffffff inset;
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 100, 123, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  width: 500px;
  background: #e8ebf3;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  position: relative;
`;

export const ModalHeader = styled.h2`
  margin: 0;
  text-align: center;
  padding-left: 30px;
  padding-top: 20px;
  color: #f92d1c;
`;

export const ModalBody = styled.div`
  padding: 10px;
`;

export const ModalLabel = styled.p`
  display: inline-block;
`;
export const ModalInput = styled.input``;

export const ModalButton = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 2px;
  color: #9394a5;
  text-align: center;
  padding: 10px 20px 10px 20px;
`;

export const ContentClose = styled.div`
  position: absolute;
  z-index: 2;
  right: 4%;
  top: 4%;
  cursor: pointer;
`;
