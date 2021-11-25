import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodosState, deleteCompletedTodo } from "../Slices/todoSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { toggleModal } from "../Slices/modalSlice";
import { modals } from "../../constants/modals";
import {
  TodoStats as TodoStat,
  TodoCounts,
  TodoFilters,
  TodoFilter,
  TodoClearCompleted,
  TodoButton,
  TodoFirstHelper,
  TodoSecondHelper,
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
      <TodoFirstHelper>
        <TodoButton
          onClick={() =>
            dispatch(toggleModal({ openModalId: modals.ADD_MODAL, todoId: "" }))
          }
        >
          New Todo
        </TodoButton>
        <TodoButton onClick={toggleView}>
          <FaSlidersH color={"black"}></FaSlidersH>
        </TodoButton>
      </TodoFirstHelper>

      <TodoSecondHelper>
        <TodoCounts>{todosleft} todos left</TodoCounts>
        <TodoFilters>
          <TodoFilter onClick={() => setFilter("All")}>All</TodoFilter>
          <TodoFilter onClick={() => setFilter("Active")}>Active</TodoFilter>
          <TodoFilter onClick={() => setFilter("Completed")}>
            Completed
          </TodoFilter>
        </TodoFilters>
        <TodoClearCompleted onClick={() => dispatch(deleteCompletedTodo())}>
          Clear completed
        </TodoClearCompleted>
      </TodoSecondHelper>
    </TodoStat>
  );
}
