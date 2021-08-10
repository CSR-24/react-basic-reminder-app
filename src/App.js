import React from 'react';
import { useState } from 'react';
import './style.css';
import Tasks from './Components/Tasks';
import Button from './Components/Button';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Go to Library',
      summary: 'Go to the library.',
      time: '20-08-2021',
      reminder: false
    },
    {
      id: 2,
      name: 'Buy groceries',
      summary: 'Buy essential from market or online.',
      time: '20-08-2021',
      reminder: false
    },
    {
      id: 3,
      name: 'Finish assignment',
      summary: 'Finish the assignment on react JS.',
      time: '20-08-2021',
      reminder: false
    }
  ]);

  const onClickHandler = () => {
    alert('Add');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="taskContainer">
      <div style={{ textAlign: 'center' }}>
        Add tasks from here...
        <Button text="Add" color="red" onClick={onClickHandler} />
      </div>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        'No Tasks to display!'
      )}
    </div>
  );
}
