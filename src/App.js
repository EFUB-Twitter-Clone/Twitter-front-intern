import { useCallback, useEffect, useRef, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import GlobalStyle from "./GlobalStyle";
import "./App.css";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getData = () => {
    axios
      .get(`/posts`)
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("투두", todos[1]);

  const nextId = useRef(4); //이거 추가안했더니 리스트에 아이템 영구 지속안됨 뭘까
  const onInsert = useCallback(
    (content, createdDate) => {
      const todo = {
        id: nextId.current,
        login_id: "퍼비",
        nickname: "fub2fub",
        content,
        createdDate: moment(),
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
    <div>
      <div className="LeftSide">
        <GlobalStyle />
        <LeftSideBar />
      </div>
      <div className="RightSide">
        <GlobalStyle />
        <RightSideBar />
      </div>
      <div className="Center">
        <GlobalStyle />
        <TodoTemplate>
          <TodoInsert onInsert={onInsert}></TodoInsert>
          <TodoList todos={todos} onRemove={onRemove}></TodoList>
        </TodoTemplate>
      </div>
    </div>
  );
};
export default App;
