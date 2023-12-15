import axios from "axios";
import { todoData } from "../types/Type";

// 가져오기
const fetchTodos = async (): Promise<todoData[]> => {
  const response = await axios.get<todoData[]>("http://localhost:4000/todos");
  return response.data;
};

// 추가
const addTodos: (newtodo: todoData) => Promise<void> = async (
  newtodo: todoData
) => {
  await axios.post<todoData>("http://localhost:4000/todos", newtodo);
};

// 삭제
const deleteTodos = async (id: string) => {
  await axios.delete<todoData>(`http://localhost:4000/todos/${id}`);
};

// 수정
const updateTodos = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  await axios.patch<todoData>(`http://localhost:4000/todos/${id}`, {
    isDone: !isDone,
  });
};

export { fetchTodos, addTodos, deleteTodos, updateTodos };
