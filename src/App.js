// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calendar from './components/Calendar';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';
import TodoPage from './components/TodoPage';
import UserTodoPage from './components/UserTodoPage';
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/todo-list"
          //element={<div><TodoListContainer /></div>}
          element={<div><TodoList /></div>}
        />
        <Route
          path="/"
          element={
            <div>
              <h1>Todo List & Calendar</h1>
              <div className="app-container">
                <div className="calendar-container">
                  <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/api/todo/"
          //element={<div><TodoListContainer /></div>}
          element={<div><TodoList /></div>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo-page" element={<TodoPage />} />
        <Route path="/user-todo/:userId" element={<UserTodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
