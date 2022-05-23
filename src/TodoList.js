import TodoListItem from "./TodoListItems";
import "./TodoList.css";

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.user_key}
          onRemove={onRemove}
        ></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
