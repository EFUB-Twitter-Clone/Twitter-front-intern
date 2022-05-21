import "./App.css";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import { useCallback, useRef, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초",
      displayName: "sonny jw",
      username: "ssssangha",
    },
    {
      id: 2,
      text: "리액트 중급",
      displayName: "sonny jw",
      username: "ssssangha",
    },
    {
      id: 3,
      text: "리액트 고급",
      displayName: "sonny jw",
      username: "ssssangha",
    },
  ]);

  const nextId = useRef(4); //이거 추가안했더니 리스트에 아이템 영구 지속안됨 뭘까
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
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
