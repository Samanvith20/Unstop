// src/App.js
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './App.css';
import SearchBar from './components/Searchbar/Searchbar';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/Tasklist/Tasklist';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('/data.json')
      .then(response => setTasks(response.data));
  }, []);

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
      lastUpdated: new Date().toISOString(),
      isExpanded: false
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, title, description) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, title, description, lastUpdated: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleExpandTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isExpanded: !task.isExpanded } : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <SearchBar onSearch={handleSearch} />
      <TaskForm onAdd={addTask} />
      <TaskList 
        tasks={filteredTasks} 
        onUpdate={updateTask} 
        onToggle={toggleTask}
        onToggleExpand={toggleExpandTask}
      />
    </div>
  );
};

export default App;
