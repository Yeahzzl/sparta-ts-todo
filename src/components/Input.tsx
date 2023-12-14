import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "../redux/modules/todoSlice";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const dispatch = useDispatch();

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <div>
      <StInputForm onSubmit={onSubmit}>
        <StText>제목</StText>
        <StInput
          value={title}
          type="text"
          onChange={titleChangeHandler}
          placeholder="제목을 입력해주세요"
        />
        <StText>내용</StText>
        <StInput
          value={contents}
          type="text"
          onChange={contentChangeHandler}
          placeholder="내용을 입력해주세요"
        />
        <StButton type="submit">등록</StButton>
      </StInputForm>
    </div>
  );
};

const StInputForm = styled.form`
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9079a4;
  gap: 20px;
`;

const StInput = styled.input`
  width: 230px;
  height: 40px;
  border-radius: 10px;
  border-style: none;
  padding: 0 10px;
`;

const StText = styled.p`
  font-size: 20px;
  font-family: GmarketSansMedium;
  color: white;
`;

const StButton = styled.button`
  border-style: none;
  width: 80px;
  height: 40px;
  border-radius: 10px;
  &:hover {
    background-color: #ffd16d;
    color: white;
  }
`;

export default Input;
