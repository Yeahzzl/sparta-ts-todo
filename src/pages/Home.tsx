import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Input />
      <TodoList isActive={false} />
      <TodoList isActive={true} />
      <Footer />
    </div>
  );
};

export default Home;
