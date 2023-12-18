import axios from "axios";
import { todoData } from "../types/Type";

// 가져오기
const fetchTodos = async (): Promise<todoData[]> => {
  const response = await axios.get<todoData[]>(
    `${process.env.REACT_APP_SERVER_URL}/todos`
  );
  return response.data;
};

// 추가
const addTodos: (newtodo: todoData) => Promise<void> = async (
  newtodo: todoData
) => {
  await axios.post<todoData>(
    `${process.env.REACT_APP_SERVER_URL}/todos`,
    newtodo
  );
};

// 삭제
const deleteTodos = async (id: string): Promise<void> => {
  await axios.delete<todoData>(
    `${process.env.REACT_APP_SERVER_URL}/todos/${id}`
  );
};

// 수정
const updateTodos = async ({
  id,
  isDone,
}: {
  id: string;
  isDone: boolean;
}): Promise<void> => {
  await axios.patch<todoData>(
    `${process.env.REACT_APP_SERVER_URL}/todos/${id}`,
    {
      isDone: !isDone,
    }
  );
};

export { fetchTodos, addTodos, deleteTodos, updateTodos };
