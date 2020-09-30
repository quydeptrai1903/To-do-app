import React from "react";

const Todo = ({ text, todo, setTodo, todo_item }) => {
  const deleteHandler = () => {
    setTodo(todo.filter((ele) => ele.id !== todo_item.id));
  };

  const completeHandler = () => {
    setTodo(
      todo.map((item) => {
        if (item.id === todo_item.id) item.completed = !item.completed;
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo_item.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
