import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { modals } from "../constants/modals";
import { toggleModal } from "./modalSlice";
import { addTodo } from "./todoSlice";
import { TodoInput } from "./TodoInput";
import { TodoTextArea } from "./TodoTextArea";
import { TodosListItem } from "./todoListItem";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalInput,
  ModalButton,
  ModalLabel,
} from "./NewTodoModal.styles";
import {
  TodoItem,
  TodoItemTitle,
  TodoListItemCheck,
} from "../features/todoListItem.styles";
type TodoModalProps = {
  postId: string;
};

export function NewTodoModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);
  const [secret, setSecret] = useState(false);
  const [important, setImportant] = useState(false);
  const openModalId = useAppSelector((state) => state.modal.openModalId);

  const dispatch = useAppDispatch();
  const handleAction = () => {
    if (title.length !== 0 && content.length !== 0) {
      dispatch(addTodo(title, content, completed, secret, important));
      dispatch(toggleModal({ openModalId: "", todoId: "" }));
      setContent("");
      setTitle("");
      setCompleted(false);
      setSecret(false);
      setImportant(false);
    }
  };
  if (openModalId !== modals.ADD_MODAL) {
    return null;
  }
  return ReactDOM.createPortal(
    <Modal
      onClick={() => {
        dispatch(toggleModal({ openModalId: "", todoId: "" }));
      }}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>New todo</ModalHeader>

        <ModalBody>
          <div>
            <TodosListItem
              onChange={() => setCompleted((prev) => !prev)}
              checked={completed}
              title="Completed"
            />

            <TodoItem>
              <TodoListItemCheck
                type="checkbox"
                checked={secret}
                onChange={() => setSecret((prev) => !prev)}
              />
              <TodoItemTitle
                onClick={() => setSecret((prev) => !prev)}
                isActive={secret}
              >
                {"Secret"}
              </TodoItemTitle>
            </TodoItem>
            <TodoItem>
              <TodoListItemCheck
                type="checkbox"
                checked={important}
                onChange={() => setImportant((prev) => !prev)}
              />
              <TodoItemTitle
                onClick={() => setImportant((prev) => !prev)}
                isActive={important}
              >
                {"Important"}
              </TodoItemTitle>
            </TodoItem>
          </div>
          <div>
            <TodoInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Title"}
              autocomplete={"off"}
            />

            <TodoTextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={"Content"}
              autocomplete={"off"}
            />
          </div>
        </ModalBody>

        <ModalButton onClick={handleAction}>New Todo</ModalButton>
      </ModalContent>
    </Modal>,
    document.body
  );
}
