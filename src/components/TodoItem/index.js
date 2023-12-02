// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Edit
      </button>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Save
      </button>
    </li>
  )
}

export default TodoItem
