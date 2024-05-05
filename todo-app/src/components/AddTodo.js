import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const response = await axios.post("http://localhost:5000/todos", {
        text,
      });
      onAdd(response.data); // Trigger parent component's update
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
