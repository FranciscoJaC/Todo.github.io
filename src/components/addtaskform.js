// src/components/addtaskform.js
import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    if (taskTitle.trim()) {
      addTask(taskTitle); // Llamar a la función para añadir la tarea
      setTaskTitle(''); // Limpiar el campo de entrada
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)} // Actualiza el estado del título
        placeholder="Añadir nueva tarea"
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default AddTaskForm;
