import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/features/Slices/todoSlice";
import modalReducer from "../features/todo/features/Slices/modalSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
