import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodo = localStorage.getItem("todos");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
    return () => {
      localStorage.removeItem("todos");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const todoHandler = () => {
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const clearTodo = () => {
    localStorage.removeItem("todos");
    setTodo([]);
  };

  return (
    <>
      <label htmlFor="todo">Todo:</label>
      <input
        type="text"
        id="todo"
        placeholder="Add Todos:"
        onChange={inputHandler}
        value={input}
      />
      <button onClick={todoHandler}>Add Todo</button>
      <ol>
        {todo.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ol>
      <button onClick={clearTodo}>Clear Todo</button>
    </>
  );
};

export default Home;
