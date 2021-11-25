import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  openModalId: string;
  todoId: string;
  confirm: boolean;
}

const initialState: ModalState = {
  openModalId: "",
  todoId: "",
  confirm: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<any>) => {
      state.openModalId = action.payload.openModalId;
      state.todoId = action.payload.todoId;
    },
    toggleConfirm: (state, action: PayloadAction<boolean>) => {
      state.confirm = action.payload;
    },
  },
});

export const { toggleModal, toggleConfirm } = modalSlice.actions;

export default modalSlice.reducer;
