import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, markDone }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} markDone={markDone} />
      ))}
    </ul>
  );
};

export default TodoList;
