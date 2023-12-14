import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todoSlice";
import { RootState } from "../redux/config/configStore";

const TodoList = ({ isActive }: { isActive: any }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState): any => state.todoSlice);

  const deleteButtonHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const switchButtonHandler = (id: string) => {
    dispatch(switchTodo(id));
  };
  return (
    <div>
      <StContainer>
        <StListTitle>{isActive ? "Done🙆🏻‍♀️" : "Working🙅🏻‍♀️"}</StListTitle>
        <StTodoWrap>
          {todos
            ?.filter((todo: any): boolean => {
              return todo.isDone === isActive;
            })
            .map((todo: any) => {
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
  width: 100vw;
  height: 100%;
  margin: 50px;
  /* background-color: gray; */
`;

const StListTitle = styled.h1`
  font-size: 30px;
  text-align: left;
`;

const StTodoWrap = styled.div`
  display: flex;
  gap: 50px;
`;
const StTodoBox = styled.div`
  width: 250px;
  height: 170px;
  background-color: #f9dfa7;
  padding: 10px 20px;
  border-radius: 10px;
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
  gap: 30px;
`;
const Button = styled.button`
  width: 100px;
  height: 25px;
  border-style: none;
  background-color: white;
  border-radius: 5px;
  &:hover {
    background-color: #676767;
    color: white;
  }
`;
export default TodoList;
