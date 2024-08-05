import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAdd, onUpdate, onCancel, initialTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
      setDueDate(initialTask.dueDate || '');
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      if (initialTask) {
        onUpdate(title, description, dueDate);
      } else {
        onAdd(title, description, dueDate);
      }
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-inputs">
        <div className="task-form-input">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
          />
        </div>
        <div className="task-form-input">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
            required
          />
        </div>
        <div className="task-form-input">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="Due date"
          />
        </div>
      </div>
      <div className="task-form-buttons">
        <button type="submit">
          {initialTask ? 'Update Task' : 'Add Task'}
        </button>
        {initialTask && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;