import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { modals } from "../../../constants/modals";
import { toggleModal, toggleConfirm } from "../../Slices/modalSlice";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "./ConfirmModal.styles";
import { ModalButton } from "../NewTodoModal/NewTodoModal.styles";
type ConfirmModalProps = {
  postId?: string;
  setConfirm?: () => void;
  openConfirm?: (value: boolean) => void;
};
enum confirmModalsActions {
  CONFIRM = "CONFIRM",
  CANCEL = "CANCEL",
}
export function ConfirmModal({ setConfirm, openConfirm }: ConfirmModalProps) {
  //   const openModalId = useAppSelector((state) => state.modal.openModalId);
  //   const existingTodoId = useAppSelector((state) => state.modal.todoId);
  //   const existingTodo = useAppSelector((state) =>
  //     state.todos.find((todo) => todo.id === existingTodoId)
  //   );
  //   const dispatch = useAppDispatch();

  //   const modalRef = useRef<HTMLDivElement>(null);
  //   function handleKey(event: React.KeyboardEvent<HTMLDivElement> | any) {
  //     if (event.key == "Escape") {
  //       dispatch(toggleModal({ openModalId: "", todoId: "" }));
  //     }
  //   }

  function handleClick(action: string) {
    if (action === confirmModalsActions.CONFIRM) {
      setConfirm && setConfirm();
    } else if (action === confirmModalsActions.CANCEL) {
      openConfirm && openConfirm(false);
    }
  }
  // useEffect(() => {
  //   window.addEventListener("keyup", handleKey);
  //   return () => {
  //     window.removeEventListener("keyup", handleKey);
  //   };
  // }, []);
  //   useEffect(() => {
  //     if (openModalId === modals.ADD_MODAL) {
  //       console.log(modalRef.current);
  //       modalRef?.current?.focus();
  //     }
  //   }, [openModalId]);

  return ReactDOM.createPortal(
    <Modal>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        // ref={modalRef}
        // onKeyDown={handleKey}
        // tabIndex={0}
      >
        <ModalHeader>{"Are you sure about this action?"}</ModalHeader>
        <ModalBody>
          <ModalButton
            onClick={() => handleClick(confirmModalsActions.CONFIRM)}
          >
            Confirm
          </ModalButton>
          <ModalButton onClick={() => handleClick(confirmModalsActions.CANCEL)}>
            Cancel
          </ModalButton>
        </ModalBody>
      </ModalContent>
    </Modal>,
    document.body
  );
}
