import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [duration, setDuration] = useState("daily"); // Default value
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, duration);
    setValue("");
  };
  return (
    // <form className="TodoForm" onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     className="todo-input"
    //     value={value}
    //     placeholder="What is the task today?"
    //     onInput={(e) => {
    //       setValue(e.target.value);
    //     }}
    //   />
    //   <button type="submit" className="todo-btn">
    //     Add Task
    //   </button>
    // </form>
    <form className="TodoForm" onSubmit={handleSubmit}>
      <select
        className="select-box"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="daily">Duration</option>
        <option value="daily">daily</option>
        <option value="weekly">weekly</option>
        <option value="monthly">monthly</option>
        <option value="yearly">yearly</option>
      </select>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Task"
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
