import {Component} from 'react'

import './index.css'
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

uuidv4()

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    userText: '',
    performanceTime: 0,
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  textChange = event => {
    this.setState({userText: event.target.value})
  }

  addTodo = () => {
    const {userText} = this.state
    const {todosList} = this.state

    const startTime = performance.now()

    const match = userText.match(/(\d+)$/)
    const numberOfItems = match ? parseInt(match[1], 10) : 1

    const newTodos = Array.from({length: numberOfItems}, (_, index) => ({
      id: uuidv4(),
      title: `Todo item ${todosList.length + index + 1}`,
    }))

    const endTime = performance.now()

    this.setState({
      todosList: [...todosList, ...newTodos],
      userText: '',
      performanceTime: endTime - startTime,
    })
  }

  saveTodo = (id, editedTitle) => {
    const {todosList} = this.state
    const updatedTodos = todosList.map(todo =>
      todo.id === id ? {...todo, title: editedTitle} : todo,
    )

    this.setState({
      todosList: updatedTodos,
    })
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList, userText, performanceTime} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.textChange}
              placeholder="what next ?"
              value={userText}
            />
            <button type="button" onClick={this.addTodo}>
              Add
            </button>
          </form>

          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                saveTodo={this.saveTodo}
              />
            ))}
          </ul>

          {performanceTime > 0 && (
            <p>
              Adding {todosList.length} todo items took{' '}
              {performanceTime.toFixed(2)} ms.
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
