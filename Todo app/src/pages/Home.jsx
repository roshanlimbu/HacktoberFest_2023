import React from "react";

const Home = () => {
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
