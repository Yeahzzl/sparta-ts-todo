import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todoSlice";
import { RootState } from "../redux/config/configStore";
import { todoData } from "../types/Type";
import Swal from "sweetalert2";

const TodoList = ({ isActive }: { isActive: boolean }) => {
  const dispatch = useDispatch();
  const todos: todoData[] = useSelector(
    (state: RootState): todoData[] => state.todoSlice
  );

  const deleteButtonHandler = (id: string): void => {
    Swal.fire({
      title: "정말로 삭제하시겠습니까?",
      text: "삭제하면 되돌릴 수 없습니다",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffc76c",
      cancelButtonColor: "#9079a4",
      confirmButtonText: "Yes",
    }).then((result): void => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "삭제되었습니다",
          icon: "success",
        });
        dispatch(deleteTodo(id));
      } else {
        return;
      }
    });
  };

  const switchButtonHandler = (id: string): void => {
    dispatch(switchTodo(id));
  };
  return (
    <div>
      <StContainer>
        <StListTitle>{isActive ? "Done🙆🏻‍♀️" : "Working🙅🏻‍♀️"}</StListTitle>
        <StTodoWrap>
          {todos
            ?.filter((todo: todoData): boolean => {
              return todo.isDone === isActive;
            })
            .map((todo: todoData) => {
              return (
                <StTodoBox key={todo.id}>
                  <StTitle>{todo.title}</StTitle>
                  <Stcontent>{todo.contents}</Stcontent>
                  <StButtonWrap>
                    <Button
                      type="button"
                      onClick={() => {
                        switchButtonHandler(todo.id);
                      }}
                    >
                      {isActive ? "취소" : "완료"}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        deleteButtonHandler(todo.id);
                      }}
                    >
                      삭제
                    </Button>
                  </StButtonWrap>
                </StTodoBox>
              );
            })}
        </StTodoWrap>
      </StContainer>
    </div>
  );
};

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StListTitle = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const StTodoWrap = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 50px;
  margin: 20px auto 20px auto;
`;
const StTodoBox = styled.div`
  width: 250px;
  height: 170px;
  background-color: #f9dfa7;
  padding: 10px 20px;
  border-radius: 10px;
  flex-wrap: wrap;
`;

const StTitle = styled.h2`
  font-size: 20px;
  font-family: GmarketSansBold;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
`;

const Stcontent = styled.p`
  font-size: 15px;
  font-family: GmarketSansMedium;
  height: 30%;
  line-height: 20px;
`;

const StButtonWrap = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;
const Button = styled.button`
  width: 120px;
  height: 28px;
  border-style: none;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #9079a4;
    color: white;
  }
`;
export default TodoList;
