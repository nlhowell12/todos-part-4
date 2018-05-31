import React, { Component } from 'react';
import './index.css';
import todos from './todos.json';

const ToDoItem = (props) => {
  return (
      <li className={() => {
        if (props.completed) {
          return "completed"
        } else {
          return null
        }
      }}>
        <div className="view">
        <input className="toggle" type="checkbox"/>
        <label>{props.title}</label>
        <button className="destroy"></button>
        </div>
      </li>
  )
  }

class ToDoList extends Component {
  state = {
    todos
  }

  render () {
    return (
      this.state.todos.map( todo => <ToDoItem completed={todo.completed} title={todo.title}/>)
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
      </section>
    );
  }
}

export default App;
