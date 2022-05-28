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
        if (response.status === 200) {
          console.log("전체 게시글 받아오기 성공", response.data);

          setTodos(response.data);
        } else {
          console.log("전체 게시글 데이터 받아오기 실패");
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(todos);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(moment());

  const nextId = useRef(4); //이거 추가안했더니 리스트에 아이템 영구 지속안됨 뭘까

  const onInsert = useCallback(
    (content, createdDate, nickname) => {
      const todo = {
        id: nextId.current,
        nickname: "fub2fub",
        content,
        createdDate: "2022-05-28T23:39:06",
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
  //todo.id!==id 만족하는 것만 todo로 받아서 todos에 넣음

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
