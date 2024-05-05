// src/App.js
import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  const handleAddTodo = (newTodo) => {
    // You can update state or perform any necessary actions when a new todo is added
    console.log("New todo added:", newTodo);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList />
    </div>
  );
};

export default App;
