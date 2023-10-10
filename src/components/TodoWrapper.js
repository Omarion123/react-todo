import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import Nav from "./Nav"; // Use a relative import path
uuidv4();
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState("All"); // Initialize with "All"
  const addTodo = (todo, duration) => {
    console.log(todo);
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        duration: duration, // Include the selected duration
        completed: false,
        isEditing: false,
      },
    ]);

    console.log(todos);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // Function to set the selected duration when filter buttons are clicked
  const handleFilterClick = (duration) => {
    setSelectedDuration(duration);
    console.log(duration);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <div className="output">{<Nav />}</div>
      {/* <div className="filter-buttons">
        <button onClick={() => handleFilterClick("All")}>All</button>
        <button onClick={() => handleFilterClick("Daily")}>Daily</button>
        <button onClick={() => handleFilterClick("Weekly")}>Weekly</button>
        <button onClick={() => handleFilterClick("Monthly")}>Monthly</button>
        <button onClick={() => handleFilterClick("Yearly")}>Yearly</button>
      </div> */}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            index={index + 1} // Pass the index prop
            selectedDuration={selectedDuration} // Pass selectedDuration as a prop
          />
        )
      )}
    </div>
  );
};
