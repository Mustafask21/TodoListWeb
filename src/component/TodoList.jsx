import React from "react";
import Todo from "../component/Todo";
import "../css/todoList.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList({ todos, onRemoveTodo }) {
  return (
    <div className="container-box-todoList col-6">
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
    </div>
  );
}

export default TodoList;
