import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { TodoInput } from "./TodoInput";
import {
  NewTodoButton,
  NewTodoForm as TodoForm,
  NewTodoInput,
} from "./NewTodoForm.styles";
import { FaCheck } from "react-icons/fa";

type newTodoFormType = {};

export function NewTodoForm() {
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(false);
  const [secret, setSecret] = useState(false);
  const [important, setImportant] = useState(false);
  const dispatch = useDispatch();

  const handleAction = () => {
    if (input.trim().length) {
      dispatch(addTodo(input, input, completed, secret, important));
      setInput("");
      setCompleted(false);
      setSecret(false);
      setImportant(false);
    }
  };

  return (
    <TodoForm>
      <NewTodoInput
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted((prev) => !prev)}
      />
      <NewTodoInput
        type="checkbox"
        checked={secret}
        onChange={() => setSecret((prev) => !prev)}
      />
      <NewTodoInput
        type="checkbox"
        checked={important}
        onChange={() => setImportant((prev) => !prev)}
      />
      <NewTodoInput
        placeholder="Create new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <NewTodoButton onClick={handleAction}>
        <FaCheck />
      </NewTodoButton>
    </TodoForm>
  );
}
