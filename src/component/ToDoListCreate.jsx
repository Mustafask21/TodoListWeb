import React, { useState } from "react";
import "../css/toDoListCreate.css";

import { Button } from "react-bootstrap";

function ToDoListCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
    };

    onCreateTodo(request);
    inputClear();
  };

  const inputClear = () => {
    setNewTodo("");
  };

  return (
    <div className="container row col-6 gap-3 display-flex justify-content-end">
      <input
        value={newTodo}
        className="input col-12"
        type="text"
        placeholder="Todo Giriniz"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary col-3" onClick={createTodo}>
        Oluştur
      </button>
    </div>
  );
}

export default ToDoListCreate;
