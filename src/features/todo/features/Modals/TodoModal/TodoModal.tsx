import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { modals } from "../../../constants/modals";
import { toggleModal } from "../../Slices/modalSlice";
import { FaWindowClose } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ContentClose,
} from "./TodoModal.styles";
type TodoModalProps = {
  postId: string;
};

export function TodoModal() {
  const openModalId = useAppSelector((state) => state.modal.openModalId);
  const existingTodoId = useAppSelector((state) => state.modal.todoId);
  const existingTodo = useAppSelector((state) =>
    state.todos.find((todo) => todo.id === existingTodoId)
  );

  const modalRef = useRef<HTMLDivElement>(null);
  function handleKey(event: React.KeyboardEvent<HTMLDivElement> | any) {
    if (event.key === "Escape") {
      dispatch(toggleModal({ openModalId: "", todoId: "" }));
    }
  }

  function handleEdit() {
    dispatch(
      toggleModal({ openModalId: modals.EDIT_MODAL, todoId: existingTodoId })
    );
  }
  // useEffect(() => {
  //   window.addEventListener("keyup", handleKey);
  //   return () => {
  //     window.removeEventListener("keyup", handleKey);
  //   };
  // }, []);
  useEffect(() => {
    if (openModalId === modals.INFO_MODAL) {
      console.log(modalRef.current);
      modalRef?.current?.focus();
    }
  }, [openModalId]);

  const dispatch = useAppDispatch();

  if (openModalId !== modals.INFO_MODAL) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal
      onClick={() => {
        dispatch(toggleModal({ openModalId: "", todoId: "" }));
      }}
    >
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        onKeyDown={handleKey}
        tabIndex={0}
      >
        <ModalHeader>
          {existingTodo?.title}
          <FaPen cursor="pointer" onClick={handleEdit} />
          <ContentClose
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleModal({ openModalId: "", todoId: "" }));
            }}
            ref={modalRef}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            <FaWindowClose color={"red"}></FaWindowClose>
          </ContentClose>
        </ModalHeader>
        <ModalBody>{existingTodo?.content}</ModalBody>
      </ModalContent>
    </Modal>,
    document.body
  );
}
