// Task.js
import React from "react";
import { useTaskContext } from "./TaskContext";

function Task({ task }) {
  const { onTaskDelete } = useTaskContext();
  const { id, text, category } = task;

  const handleDeleteClick = () => {
    onTaskDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
