import React, { useState } from 'react'

const TaskItem = ({ task, onUpdate, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(task)

  const handleUpdate = () => {
    onUpdate(editedTask)
    setIsEditing(false)
  }

  const isUrgent = task.deadline && new Date(task.deadline) - new Date() < 24 * 60 * 60 * 1000

  return (
    <div className={`task-card card ${isUrgent ? 'urgent' : ''} ${task.completed ? 'completed' : ''}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          {!isEditing ? (
            <div className="flex-grow-1">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed}
                  onChange={() => onToggleComplete(task.id)}
                />
                <label className={`form-check-label ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}
                  style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                  {task.name}
                </label>
              </div>
            </div>
          ) : (
            <div className="flex-grow-1">
              <input
                type="text"
                className="form-control mb-2"
                value={editedTask.name}
                onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
              />
              <input
                type="datetime-local"
                className="form-control"
                value={editedTask.deadline || ''}
                onChange={(e) => setEditedTask({ ...editedTask, deadline: e.target.value })}
              />
            </div>
          )}
          <div className="task-actions">
            {!isEditing ? (
              <>
                <button
                  className="btn btn-outline-primary btn-sm me-1"
                  onClick={() => setIsEditing(true)}
                >
                  <i className="fas fa-edit" />
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(task.id)}
                >
                  <i className="fas fa-trash" />
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-success btn-sm me-1"
                  onClick={handleUpdate}
                >
                  <i className="fas fa-check" />
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsEditing(false)}
                >
                  <i className="fas fa-times" />
                </button>
              </>
            )}
          </div>
        </div>
        {task.deadline && (
          <div className="mt-2">
            <span className="deadline-badge">
              <i className="fas fa-clock me-1" />
              Due: {new Date(task.deadline).toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskItem;
