import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import axios from 'axios';

const TodoListContainer = () => {
  const [userTodos, setUserTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
        const response = await axios.get('http://localhost:8000/api/todo/', {
          params: {
            date: formattedDate,
          },
          headers: {
    'Timezone-Offset': new Date().getTimezoneOffset(),
  },
        });

        console.log('Selected date in TodoListContainer:', formattedDate);
        console.log('Server response:', response.data);
  
        const todos = response.data;
        const userTodosMap = todos.reduce((acc, todo) => {
          const userId = todo.fields.user;
          if (!acc[userId]) {
            acc[userId] = [];
          }
          acc[userId].push(todo);
          return acc;
        }, {});
  
        const userTodosArray = Object.entries(userTodosMap).map(([userId, todos]) => ({
          user: userId,
          todos: todos,
        }));
        setUserTodos(userTodosArray);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
  
    fetchData();
  }, [selectedDate]);

  // 날짜를 클릭할 때 호출되는 함수
  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newDate);  // 날짜를 업데이트
    console.log('Selected date:', newDate);
  };

  return (
    <div>
      <h1>Todo Lists</h1>
      {userTodos.map(userTodo => (
        <TodoList key={userTodo.user} userId={userTodo.user} todos={userTodo.todos} />
      ))}
    </div>
  );
};

export default TodoListContainer;
