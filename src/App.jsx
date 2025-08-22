import React, { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import AnalogClock from './components/AnalogClock'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="display-4 fw-bold mb-3">
          <i className="fas fa-check-circle me-3" />
          Modern To-Do App
        </h1>
        <p className="lead">Stay organized and productive with our beautiful task manager</p>
      </div>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-8">
            <AddTaskForm onAdd={addTask} />
            <TaskList
              tasks={tasks}
              onUpdate={updateTask}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
            />
          </div>
          <div className="col-lg-4">
            <AnalogClock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
