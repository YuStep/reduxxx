import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  secret: boolean;
  important: boolean;
}

const initialState: TodosState[] = [
  {
    id: nanoid(),
    title: "Hello",
    content: "123",
    completed: false,
    secret: false,
    important: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<TodosState>) {
        state.push(action.payload);
      },
      prepare(
        title: string,
        content: string,
        completed: boolean,
        secret: boolean,
        important: boolean
      ) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            completed,
            secret,
            important,
          },
        };
      },
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteCompletedTodo: (state) => {
      return state.filter((todo) => todo.completed === false);
    },
    toggleComplete: (state, action: PayloadAction<any>) => {
      const toggledTodo = state.find((todo) => todo.id === action.payload);
      toggledTodo!.completed = !toggledTodo!.completed;
    },

    editTodo: (state, action) => {
      const { id, title, content, completed, secret, important } =
        action.payload;
      const existingPost = state.find((post) => post.id === id);

      console.log(id, existingPost);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
        existingPost.completed = completed;
        existingPost.secret = secret;
        existingPost.important = important;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
  deleteCompletedTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
