import React from 'react';
import Button from './Button';

export default function Task({ task, deleteTask }) {
  return (
    <div className="task">
      <div>
        <h1>{task.name}</h1>
        <span onClick={() => deleteTask(task.id)}>X</span>
      </div>
      <p>{task.summary}</p>
    </div>
  );
}
