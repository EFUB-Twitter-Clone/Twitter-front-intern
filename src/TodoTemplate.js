import "./TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Home</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
