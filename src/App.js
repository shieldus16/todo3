// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import TodoListContainer from './components/TodoListContainer';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/todo-page"
          element={<div><TodoListContainer /></div>}
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
          element={<div><TodoListContainer /></div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
