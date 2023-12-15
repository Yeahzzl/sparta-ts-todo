import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodo } from "./redux/modules/todoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect((): void => {
    const fetchTodos = async (): Promise<void> => {
      const { data } = await axios.get("http://localhost:4000/todos");
      dispatch(setTodo(data));
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
