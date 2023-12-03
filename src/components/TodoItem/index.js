// Write your code here

import React from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, saveTodo} = props
  const {id, title} = todoDetails

  const [isEditing, setIsEditing] = React.useState(false)
  const [editedTitle, setEditedTitle] = React.useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditClick = () => {
    setIsEditing(true)
  }

  const onSaveClick = () => {
    saveTodo(id, editedTitle)
    setIsEditing(false)
  }

  const onCancelClick = () => {
    // Cancel editing and revert to the original title
    setIsEditing(false)
    setEditedTitle(title)
  }

  const onTitleChange = event => {
    setEditedTitle(event.target.value)
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input type="text" value={editedTitle} onChange={onTitleChange} />
          <button className="delete-btn" type="button" onClick={onSaveClick}>
            Save
          </button>
          <button className="delete-btn" type="button" onClick={onCancelClick}>
            Delete
          </button>
        </>
      ) : (
        <>
          <p className="title">{title}</p>
          <button className="delete-btn" type="button" onClick={onDeleteTodo}>
            Delete
          </button>
          <button className="delete-btn" type="button" onClick={onEditClick}>
            Edit
          </button>
        </>
      )}
    </li>
  )
}

export default TodoItem
