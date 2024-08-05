import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onUpdate, onToggle, onToggleExpand, onStartEditing }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div className="task-header">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span onClick={() => onToggleExpand(task.id)} style={{cursor: 'pointer'}}>
              {task.title}
            </span>
            <button onClick={() => onStartEditing(task)}>Edit</button>
          </div>
          { (
            <div className="task-details">
              <p>{task.description}</p>
              <p>Last updated: {new Date(task.lastUpdated).toLocaleString()}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;