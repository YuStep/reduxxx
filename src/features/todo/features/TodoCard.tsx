import {
  Card,
  Content,
  ContentText,
  ContentTitle,
  Flap,
} from "./TodoCard.styles";
import { toggleComplete, deleteTodo } from "./todoSlice";
import { useAppDispatch } from "../../../app/hooks";
import { toggleModal } from "./modalSlice";
import { modals } from "../constants/modals";
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
