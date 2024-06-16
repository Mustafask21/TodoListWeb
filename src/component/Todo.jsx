import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import "../css/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;

  const remove = () => {
    onRemoveTodo(id);
  };

  return (
    <div className="container-box-todo ">
      <div className="text col-9">{content}</div>
      <div className="icons col-2">
        <FiEdit
          style={{
            fontSize: "25px",
            color: "black",
            marginRight: "12%",
            cursor: "pointer",
          }}
        />
        <IoCloseCircleOutline
          onClick={remove}
          style={{ fontSize: "25px", color: "black", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Todo;
