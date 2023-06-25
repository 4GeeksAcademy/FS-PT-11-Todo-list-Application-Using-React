import React, { useState } from "react";

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="box">
      <h1>ToDos</h1>
      <ul className="form">
        <li>
          <input
            type="text"
            placeholder="Add new task"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <i
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            >
              <span>X</span>
            </i>
          </li>
        ))}
        <li>{todos.length} tasks</li>
      </ul>
    </div>
  );
};

export default Home;
