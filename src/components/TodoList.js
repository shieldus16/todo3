import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
