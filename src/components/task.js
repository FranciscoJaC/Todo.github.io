// src/components/Task.js
import React from 'react';
import './task.css';

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;
