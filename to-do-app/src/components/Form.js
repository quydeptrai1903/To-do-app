import React from "react";

const Form = ({ setInputText, inputText, todo, setTodo, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    setTodo([
      ...todo,
      {
        text: inputText,
        completed: false,
        id: Math.ceil(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  const FilterStatusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div onChange={FilterStatusHandler} className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
