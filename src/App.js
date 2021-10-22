import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  let i = Date.now().toString();
  let jour = parseInt(i);
  const LOcal_Storage = "todoApp.todos";
  console.log(localStorage);
  const timestamp = jour.toDateString();
  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(LOcal_Storage));
    if (storeTodos) setTodos(storeTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOcal_Storage, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: i, name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div id="main">
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>add todo</button>
      <br></br>
      <button onClick={handleClearTodos}>clear clompeted todos</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
      <p>{timestamp}</p>
    </div>
  );
}

export default App;
