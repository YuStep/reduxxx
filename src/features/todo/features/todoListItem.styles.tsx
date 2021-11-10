import styled, { keyframes } from "styled-components";
import { TodosListItem } from "./todoListItem";

type TodoItemTitleProps = {
  readonly isActive: boolean;
};

type TodoItemProps = {
  readonly isBlack: boolean;
};

const move = keyframes`
50% {
  padding-left: 8px;
  padding-right: 0px;
}
100% {
  padding-right: 4px;
}
`;

const slice = keyframes`
60% {
  width: 100%;
  left: 4px;
}
100% {
  width: 100%;
  left: -2px;
  padding-left: 0;
}
`;

const firework = keyframes`
0% {
  opacity: 1;
  box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;
}
30% {
  opacity: 1;
}
100% {
  opacity: 0;
  box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;
}
`;

const check1 = keyframes`
0% {
  width: 4px;
  top: auto;
  transform: rotate(0);
}
50% {
  width: 0px;
  top: auto;
  transform: rotate(0);
}
51% {
  width: 0px;
  top: 8px;
  transform: rotate(45deg);
}
100% {
  width: 10px;
  top: 8px;
  transform: rotate(45deg);
}
`;

const check2 = keyframes`
0% {
  width: 4px;
  top: auto;
  transform: rotate(0);
}
50% {
  width: 0px;
  top: auto;
  transform: rotate(0);
}
51% {
  width: 0px;
  top: 8px;
  transform: rotate(-45deg);
}
100% {
  width: 20px;
  top: 8px;
  transform: rotate(-45deg);
}
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 2px;
  color: #9394a5;
  text-align: center;
`;

export const TodoItemTitle = styled.h2<TodoItemTitleProps>`
  user-select: none;
  color: white;

  width: 96%;
  text-decoration: ${(props) => (props.isActive ? "line-through" : "none")};
  display: flex;
  color: #414856;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    height: 2px;
    width: 12px;
    left: -27px;
    top: 13px;
    background: #4f29f0;
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  &:after {
    height: 5px;
    width: 5px;
    top: 8px;
    left: -20px;
    border-radius: 50%;
  }
`;

export const TodoListItemCheck = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 10px 0 10px;
  cursor: ponter;
  background: #ffffff;
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    top: auto;
    background: #4f29f0;
    border-radius: 2px;
  }
  &::before {
    width: 0px;
    right: 60%;
    transform-origin: right bottom;
  }
  &::after {
    width: 0px;
    left: 40%;
    transform-origin: left bottom;
  }
  &:checked {
    &::before {
      animation: ${check1} 0.4s ease forwards;
    }
    &::after {
      animation: ${check2} 0.4s ease forwards;
    }
    + ${TodoItemTitle} {
      color: #c3c8de;
      animation: ${move} 0.3s ease 0.1s forwards;
      &::before {
        background: #c3c8de;
        animation: ${slice} 0.4s ease forwards;
      }
      &::after {
        animation: ${firework} 0.5s ease forwards 0.1s;
      }
    }
  }
`;
