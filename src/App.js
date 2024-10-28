// src/App.js
import React, { useState } from 'react';
import TaskList from './components/tasklist'; // Recuerda usar 'tasklist' en minúsculas
import AddTaskForm from './components/addtaskform'; // También en minúsculas

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudiar React', completed: false },
    { id: 2, title: 'Terminar el proyecto', completed: true },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Mis Tareas</h1>
      {/* Agregar el formulario para añadir tareas */}
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
