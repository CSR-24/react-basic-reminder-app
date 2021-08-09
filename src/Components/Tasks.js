import React from 'react';
import Task from './Task';

export default function Tasks({ tasks, deleteTask }) {
  return tasks.map(task => {
    return <Task className="tasks" task={task} deleteTask={deleteTask} />;
  });
}
