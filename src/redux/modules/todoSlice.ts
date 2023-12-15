import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoData } from "../../types/Type";

const initialState: todoData[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<todoData[]>) => {
      return action.payload;
    },
    addTodo: (
      state: todoData[],
      action: { type: string; payload: todoData }
    ): todoData[] => {
      return [...state, action.payload];
    },
    deleteTodo: (
      state: todoData[],
      action: { type: string; payload: string }
    ): todoData[] => {
      return state?.filter(
        (item: todoData): boolean => item.id !== action.payload
      );
    },
    switchTodo: (
      state: todoData[],
      action: { type: string; payload: string }
    ): todoData[] => {
      return state?.map((item: todoData): todoData => {
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
export const { setTodo, addTodo, deleteTodo, switchTodo } = todoSlice.actions;
