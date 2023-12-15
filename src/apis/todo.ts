import axios from "axios";
import { todoData } from "../types/Type";

// 가져오기
// const fetchTodos = async (): Promise<todoData[]> => {
//   const response = await axios.get("http://localhost:4000/todos");
//   return response.data;
// };

// 추가
const addTodos = async (): Promise<todoData[]> => {
  const response = await axios.post("http://localhost:4000/todos");
  return response.data;
};

// 삭제
const deleteTodos = async (): Promise<todoData[]> => {
  const response = await axios.delete("http://localhost:4000/todos");
  return response.data;
};

// 수정
const updateTodos = async (): Promise<todoData[]> => {
  const response = await axios.patch("http://localhost:4000/todos");
  return response.data;
};

export { addTodos, deleteTodos, updateTodos };
