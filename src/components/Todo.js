import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({
  task,
  toggleCompleted,
  deleteTodo,
  editTodo,
  index,
  selectedDuration, // Add selectedDuration prop
}) => {
  // Filter todos based on the selected duration
  const isTodoVisible =
    selectedDuration === "All" || task.duration === selectedDuration;

  // If the todo is not visible based on the selected duration, return null
  if (!isTodoVisible) {
    return null;
  }
  return (
    <div className="new-todo">
      <div className="index">{index}</div>
      <div className="task">
        <p
          onClick={() => toggleCompleted(task.id)}
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </p>
      </div>
      <div className="buttons">
        <div className="edit-fa">
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
        </div>
        <div className="delete-fa">
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};
