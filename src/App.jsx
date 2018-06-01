import React, { Component } from 'react';
import './index.css';
import todos from './todos.json';

const ToDoItem = (props) => {
  const completed = () => {
    if (props.completed) {
      return "completed"
    } else {
      return null
    }
  }
  const checked = () => {
    if (props.completed) {
      return true
    } else {
      return null
    }
  }
  return (
      <li className={completed()}>
        <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={checked()}/>
        <label>{props.title}</label>
        <button className="destroy"></button>
        </div>
      </li>
  )
  }

class ToDoList extends Component {
  state = {
    todos: todos.slice()
  }

  render () {
    return (
      <ul className="todo-list">
      {this.state.todos.map( todo => <ToDoItem key={todo.id} completed={todo.completed} title={todo.title}/>)}
      </ul>
    )
  }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
				  <h1>todos</h1>
				  <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
			  </header>
        <ToDoList/>
        <footer className="footer">
          <span className="todo-count"><strong>{0 || todos.length}</strong> item(s) left</span>
          <button className="clear-completed">Clear Completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
