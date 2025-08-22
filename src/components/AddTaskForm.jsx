import React, { useState } from 'react'

const AddTaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('')
  const [deadline, setDeadline] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskName.trim()) {
      onAdd({
        id: Date.now(),
        name: taskName.trim(),
        deadline: deadline || null,
        completed: false
      })
      setTaskName('')
      setDeadline('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h4 className="mb-3">Add New Task</h4>
      <div className="row">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="datetime-local"
            className="form-control"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2">
          <button type="submit" className="btn btn-primary w-100">
            <i className="fas fa-plus me-2" />
            Add
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddTaskForm;
