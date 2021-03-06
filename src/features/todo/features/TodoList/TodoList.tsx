import React, { useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { TodosListItem } from ".././TodoListItem/TodoListItem";
import { TodoList } from "./TodoList.styles";
import { TodoStats } from "../TodoStats/TodoStats";
import { TodoCard } from "../TodoCard/TodoCard";
import { TodoModal } from "../Modals/TodoModal/TodoModal";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../Slices/todoSlice";
import { NewTodoModal } from "../Modals/NewTodoModal/NewTodoModal";
import { ConfirmModal } from "../Modals/ConfirmModal/ConfirmModal";
import { EditTodoModal } from "../Modals/EditTodoModal/EditTodoModal";
export const TodosList = () => {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("list");
  const dispatch = useDispatch();
  const todos = useAppSelector((state) => state.todos);
  const renderedTodos = todos
    .filter((todo) => {
      if (filter === "All") {
        return true;
      } else if (filter === "Active") {
        return todo.completed === false;
      } else {
        return todo.completed === true;
      }
    })
    .map((todo) =>
      view === "grid" ? (
        <TodoCard key={todo.id} {...todo}></TodoCard>
      ) : (
        <TodosListItem
          key={todo.id}
          {...todo}
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
        />
      )
    );
  console.log("render");
  function toggleView() {
    console.log("view");
    if (view === "list") {
      setView("grid");
    } else {
      setView("list");
    }
  }
  return (
    <>
      <TodoStats state={todos} setFilter={setFilter} toggleView={toggleView} />

      <TodoList view={view}>
        {renderedTodos.length > 0 ? renderedTodos : "No todos "}
      </TodoList>
      <TodoModal />
      <NewTodoModal />
      <EditTodoModal />
    </>
  );
};
