// src/components/TaskList.js
import React from 'react';
import Task from './task';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No hay tareas pendientes</p>
      )}
    </div>
  );
};

export default TaskList;
