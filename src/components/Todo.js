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
}) => {
  return (
    // <div className="Todo">
    //   <p
    //     onClick={() => toggleCompleted(task.id)}
    //     className={`${task.completed ? "completed" : ""}`}
    //   >
    //     {task.task}
    //   </p>
    //   <div>
    //     <FontAwesomeIcon
    //       icon={faPenToSquare}
    //       onClick={() => editTodo(task.id)}
    //     />
    //     <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    //   </div>
    // </div>
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
