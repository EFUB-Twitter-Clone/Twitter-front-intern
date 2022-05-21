import TodoListItem from "./TodoListItems";
import "./TodoList.css";

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
        ></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
