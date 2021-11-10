import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  openModalId: string;
  todoId: string;
}

const initialState: ModalState = {
  openModalId: "",
  todoId: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<any>) => {
      state.openModalId = action.payload.openModalId;
      state.todoId = action.payload.todoId;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
