import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodosState, deleteCompletedTodo } from "./todoSlice";
import { useAppDispatch } from "../../../app/hooks";
import { toggleModal } from "./modalSlice";
import { modals } from "../constants/modals";
import {
  TodoStats as TodoStat,
  TodoCounts,
  TodoFilters,
  TodoFilter,
  TodoClearCompleted,
} from "./TodoStats.styles";
import { FaSlidersH } from "react-icons/fa";
type TodoStatsType = {
  state: TodosState[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  toggleView: () => void;
};

export function TodoStats({ state, setFilter, toggleView }: TodoStatsType) {
  const dispatch = useDispatch();

  const todosleft = state.filter((todo) => todo.completed === false).length;

  return (
    <TodoStat>
      <TodoCounts>{todosleft} todos left</TodoCounts>
      <TodoFilters>
        <TodoFilter onClick={() => setFilter("All")}>All</TodoFilter>
        <TodoFilter onClick={() => setFilter("Active")}>Active</TodoFilter>
        <TodoFilter onClick={() => setFilter("Completed")}>
          Completed
        </TodoFilter>
      </TodoFilters>
      <TodoClearCompleted onClick={() => dispatch(deleteCompletedTodo())}>
        Clear Completed
      </TodoClearCompleted>
      <button onClick={toggleView}>
        <FaSlidersH></FaSlidersH>
      </button>
      <button
        onClick={() =>
          dispatch(toggleModal({ openModalId: modals.ADD_MODAL, todoId: "" }))
        }
      >
        New Todo
      </button>
    </TodoStat>
  );
}
