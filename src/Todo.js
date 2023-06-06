import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className={`todo ${todo.isCompleted ? 'completed' : ''}`}
    >
      <span className="todo-text">{todo.text}</span>
      <div className="buttons">
        <button className="complete-btn" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="delete-btn" onClick={() => removeTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo({
        text: value,
        isCompleted: false,
      });
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Add a new todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-btn" type="submit">
        Add Todo
      </button>
    </form>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="app-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
