import React, { useState, useEffect } from "react";
import "./App.css";

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterTodo, setFilterTodo] = useState([]);

  //USE EFFECT
  useEffect(() => {
    getLocalTodo();
  }, []);
  useEffect(() => {
    saveLocalTodo();
    filterTodoHandler();
  }, [todo, status]);

  //SAVE LOCAL TODO LIST
  const saveLocalTodo = () => {
    if (typeof Storage !== null) {
      localStorage.setItem("todoData", JSON.stringify(todo));
    } else console.log("Your browser does not support Web storage");
  };

  const getLocalTodo = () => {
    let todoData = JSON.parse(localStorage.getItem("todoData"));
    setTodo(todoData);
  };

  const filterTodoHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todo.filter((todo_item) => todo_item.completed === true));
        console.log("i am here");
        break;
      case "uncompleted":
        setFilterTodo(
          todo.filter((todo_item) => todo_item.completed === false)
        );
        break;
      default:
        setFilterTodo(todo);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todo={todo} setTodo={setTodo} filterTodo={filterTodo} />
    </div>
  );
}

export default App;
