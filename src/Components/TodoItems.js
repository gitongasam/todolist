import React from 'react';

const TodoItem = ({ todo, deleteTodo, markDone }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleMarkDone = () => {
    markDone(todo.id);
  };

  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <div className={`todo-text ${todo.done ? 'line-through' : ''}`}>
        <div>{todo.title}</div>
        <div>{todo.time}</div>
        <div>{todo.date}</div>
      </div>
      {!todo.done && (
        <button className="done-button" onClick={handleMarkDone}>
          Done
        </button>
      )}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
