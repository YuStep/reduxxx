import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { modals } from "../../../constants/modals";
import { toggleConfirm, toggleModal } from "../../Slices/modalSlice";
import { editTodo } from "../../Slices/todoSlice";
import { TodoInput } from "../../Components/TodoInput/TodoInput";
import { TodoTextArea } from "../../Components/TodoTextArea/TodoTextArea";
import { TodosListItem } from "../../TodoListItem/TodoListItem";
import { FaWindowClose } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalInput,
  ModalButton,
  ModalLabel,
  ContentClose,
} from "./EditTodoModal.styles";
import {
  TodoItem,
  TodoItemTitle,
  TodoListItemCheck,
} from "../../TodoListItem/TodoListItem.styles";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
type TodoModalProps = {
  postId: string;
};

export function EditTodoModal() {
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);
  const [secret, setSecret] = useState(false);
  const [important, setImportant] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openModalId = useAppSelector((state) => state.modal.openModalId);
  const todoId = useAppSelector((state) => state.modal.todoId);

  const existingTodo = useAppSelector((state) =>
    state.todos.find((todo) => todo.id === todoId)
  );

  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    if (title?.length !== 0 && content.length !== 0) {
      setIsConfirmOpen(true);
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);
  function handleKey(event: React.KeyboardEvent<HTMLDivElement> | any) {
    if (event.key == "Escape") {
      dispatch(toggleModal({ openModalId: "", todoId: "" }));
    }
  }

  useEffect(() => {
    if (openModalId === modals.EDIT_MODAL) {
      modalRef?.current?.focus();
    }
  }, [openModalId]);

  useEffect(() => {
    setTitle(existingTodo?.title);
    setContent(existingTodo?.content!);
    setCompleted(existingTodo?.completed!);
    setSecret(existingTodo?.secret!);
    setImportant(existingTodo?.important!);
  }, [todoId]);
  const handleAction = () => {
    if (title?.length !== 0 && content.length !== 0) {
      console.log(todoId, title, completed);
      dispatch(
        editTodo({ id: todoId, title, content, completed, secret, important })
      );
      dispatch(toggleModal({ openModalId: "", todoId: "" }));
      setIsConfirmOpen(false);
      setContent("");
      setTitle("");
      setCompleted(false);
      setSecret(false);
      setImportant(false);
    }
  };

  if (openModalId !== modals.EDIT_MODAL) {
    return null;
  }
  if (isConfirmOpen) {
    return (
      <ConfirmModal setConfirm={handleAction} openConfirm={setIsConfirmOpen} />
    );
  }
  return ReactDOM.createPortal(
    <Modal>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        onKeyDown={handleKey}
        tabIndex={0}
      >
        <ModalHeader>
          Edit todo{" "}
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

        <ModalBody>
          <div>
            <TodosListItem
              id="nocontrols"
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

        <ModalButton onClick={handleConfirm}>Edit Todo</ModalButton>
      </ModalContent>
    </Modal>,
    document.body
  );
}
