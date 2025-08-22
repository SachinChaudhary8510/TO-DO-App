import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onUpdate, onDelete, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <i className="fas fa-clipboard-list" />
        <h4>No tasks yet!</h4>
        <p>Add your first task to get started</p>
      </div>
    )
  }

  return (
    <div className="row">
      {tasks.map(task => (
        <div key={task.id} className="col-lg-6 col-xl-4 mb-3">
          <TaskItem
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        </div>
      ))}
    </div>
  )
}

export default TaskList;
