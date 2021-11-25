import styled from "styled-components";

type TodoListProps = {
  view: string;
};
export const TodoList = styled.ul<TodoListProps>`
  overflow-y: auto;
  height: calc(100% - 250px);
  margin: 0 auto;
  background-color: #e8ebf3;
  padding: 0;

  max-width: 1600px;
  padding-top: 20px;
  display: ${(props) => {
    if (props.view === "list") {
      return "flex";
    } else if (props.view === "grid") {
      return "grid";
    }
  }};
  ${(props) =>
    props.view === "grid"
      ? `
  
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-template-rows: repeat(auto-fit, minmax(200px, 200px));
  grid-gap: 20px;
  
  justify-content: center;
  `
      : ""};

  flex-flow: ${(props) => (props.view === "list" ? "column nowrap" : "unset")};

  align-items: center;

  position: relative;
  box-shadow: 0 10px 30px rgba(164, 237, 235, 0.05);
`;
