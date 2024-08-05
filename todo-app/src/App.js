import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/Searchbar/Searchbar';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/Tasklist/Tasklist';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    // Import the JSON file directly
    import('./data.json')
      .then(data => {
        console.log(data);
        setTasks(data.default);
        setFilteredTasks(data.default);
      })
      .catch(error => console.error('Error loading data:', error));
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
    setFilteredTasks([...filteredTasks, newTask]);
  };

  const updateTask = (id, title, description) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, title, description, lastUpdated: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); // Update filtered tasks as well
    setEditingTask(null);
    console.log('Task updated:', updatedTasks.find(task => task.id === id)); // Debugging log
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const toggleExpandTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isExpanded: !task.isExpanded } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = tasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      task.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <SearchBar onSearch={handleSearch} />
      {editingTask ? (
        <TaskForm
          onUpdate={(title, description) => updateTask(editingTask.id, title, description)}
          onCancel={cancelEditing}
          initialTask={editingTask}
        />
      ) : (
        <TaskForm onAdd={addTask} />
      )}
      <TaskList 
        tasks={filteredTasks} 
        onToggle={toggleTask}
        onToggleExpand={toggleExpandTask}
        onStartEditing={startEditing}
      />
    </div>
  );
};

export default App;