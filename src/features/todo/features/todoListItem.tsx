import {
  TodoItem,
  TodoItemTitle,
  TodoListItemCheck,
} from "../features/todoListItem.styles";
type TodosListItemType = {
  id?: string;
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
    </TodoItem>
  );
}
