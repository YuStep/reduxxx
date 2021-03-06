import styled from "styled-components";

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
`;

export const ModalHeader = styled.h2`
  margin: 0;
  text-align: center;

  padding-top: 20px;
  color: #f92d1c;
  word-wrap: break-word;
`;

export const ModalBody = styled.div`
  padding: 10px;
  height: auto;
  word-wrap: break-word;
`;

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
