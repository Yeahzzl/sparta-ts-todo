import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { todoData } from "../../types/Type";

const initialState: todoData[] = [
  {
    id: uuidv4(),
    title: "리덕스툴킷",
    contents: "복습하기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "리액트쿼리",
    contents: "강의듣기",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "타입스크립트",
    contents: "공부하기",
    isDone: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: todoData[], action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state: todoData[], action): todoData[] => {
      return state.filter(
        (item: todoData): boolean => item.id !== action.payload
      );
    },
    switchTodo: (state: todoData[], action): todoData[] => {
      return state.map((item: todoData): todoData => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, switchTodo } = todoSlice.actions;
