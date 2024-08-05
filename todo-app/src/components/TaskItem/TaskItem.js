// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdate(task.id, title, description);
    setIsEditing(false);
  };

  return (
    <div>
      <h3 onClick={() => onToggle(task.id)}>
        {task.completed ? <s>{task.title}</s> : task.title}
      </h3>
      {task.isExpanded && (
        <div>
          {isEditing ? (
            <div>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
              <button onClick={handleUpdate}>Save</button>
            </div>
          ) : (
            <div>
              <p>{task.description}</p>
              <p>{new Date(task.lastUpdated).toLocaleString()}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
