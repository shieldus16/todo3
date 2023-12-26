// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import TodoPage from './components/TodoPage';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [todos, setTodos] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // fetchTodos(date);
  };

  return (
    <Router>
      <Routes>
        <Route path="/todo-page" element={<TodoPage />} />
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
      </Routes>
    </Router>
  );
};

export default App;
