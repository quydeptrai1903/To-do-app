import React from "react";

//import components
import Todo from "./Todo";
const TodoList = ({ todo, setTodo, filterTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo_item) => (
          <Todo
            todo={todo}
            setTodo={setTodo}
            todo_item={todo_item}
            key={todo_item.id}
            text={todo_item.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
