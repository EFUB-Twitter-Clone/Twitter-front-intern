import "./App.css";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import { useCallback, useRef, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      user_key: 1,
      createdDate: "리액트 기초",
      nickname: "sonny jw",
      login_id: "ssssangha",
    },
    {
      user_key: 2,
      createdDate: "리액트 중급",
      nickname: "sonny jw",
      login_id: "ssssangha",
    },
    {
      user_key: 3,
      createdDate: "리액트 고급",
      nickname: "sonny jw",
      login_id: "ssssangha",
    },
  ]);

  const nextId = useRef(4); //이거 추가안했더니 리스트에 아이템 영구 지속안됨 뭘까
  const onInsert = useCallback(
    (text) => {
      const todo = {
        user_key: nextId.current,
        text,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (user_key) => {
      setTodos(todos.filter((todo) => todo.user_key !== user_key));
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove}></TodoList>
    </TodoTemplate>
  );
};
export default App;
