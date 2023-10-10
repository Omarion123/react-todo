import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [duration, setDuration] = useState("daily"); // Default value
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, duration);
    setValue("");
    setDuration("daily"); // Reset the duration select to its default value
  };
  return (
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
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
