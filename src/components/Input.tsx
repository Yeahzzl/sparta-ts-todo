import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "../redux/modules/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Input = () => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const dispatch = useDispatch();

  const titleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setContents(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!title) {
      toast("제목을 입력해주세요");
      return;
    }
    if (!contents) {
      toast("내용을 입력해주세요");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    Swal.fire({
      title: "등록되었습니다",
      icon: "success",
    });

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
        <ToastContainer
          position="top-right" // 알람 위치 지정
          autoClose={3000} // 자동 off 시간
          hideProgressBar={false} // 진행시간바 숨김
          closeOnClick // 클릭으로 알람 닫기
          rtl={false} // 알림 좌우 반전
          pauseOnFocusLoss // 화면을 벗어나면 알람 정지
          draggable // 드래그 가능
          pauseOnHover // 마우스를 올리면 알람 정지
          theme="light"
          // limit={1} // 알람 개수 제한
        />
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
    background-color: #f9dfa7;
    color: white;
  }
`;

export default Input;
