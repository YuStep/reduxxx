import {
  TodoItem,
  TodoItemTitle,
  TodoListItemCheck,
} from "../TodoListItem/TodoListItem.styles";

import { FaWindowClose } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { deleteTodo } from ".././Slices/todoSlice";
type TodosListItemType = {
  id: string;
  title: string;
  content?: string;

  checked: boolean;
  onChange: () => void;
};

export function TodosListItem({
  id,
  title,
  content,
  checked,
  onChange,
}: TodosListItemType) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(deleteTodo(id));
  }
  return (
    <TodoItem>
      <TodoListItemCheck
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <TodoItemTitle isActive={checked} onClick={onChange}>
        {title}
      </TodoItemTitle>
      {id !== "nocontrols" && <FaWindowClose onClick={handleClick} />}
    </TodoItem>
  );
}
