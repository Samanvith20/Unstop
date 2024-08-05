
import React from 'react';
import TaskItem from '../TaskItem/TaskItem';


const TaskList = ({ tasks, onUpdate, onToggle }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
