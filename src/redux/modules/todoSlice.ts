import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
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
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
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
