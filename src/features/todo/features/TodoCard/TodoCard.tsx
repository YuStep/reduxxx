import {
  Card,
  Content,
  ContentText,
  ContentClose,
  Flap,
} from "./TodoCard.styles";
import { toggleComplete, deleteTodo } from "../Slices/todoSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { toggleModal } from "../Slices/modalSlice";
import { modals } from "../../constants/modals";
import { FaWindowClose } from "react-icons/fa";

type TodosListItemType = {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  secret: boolean;
  important: boolean;
};

export function TodoCard({
  id,
  title,
  content,
  completed,
  secret,
  important,
}: TodosListItemType) {
  const dispatch = useAppDispatch();

  return (
    <Card
      onClick={() => {
        dispatch(toggleModal({ openModalId: modals.INFO_MODAL, todoId: id }));
      }}
    >
      <Content>
        <ContentClose
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteTodo(id));
          }}
        >
          <FaWindowClose color={"red"}></FaWindowClose>
        </ContentClose>
        <ContentText>{content.slice(0, 100)}</ContentText>
      </Content>
      <Flap
        text={title}
        secret={secret}
        completed={completed}
        important={important}
      />
    </Card>
  );
}
