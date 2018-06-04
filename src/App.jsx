import React, { Component } from 'react';
import './index.css';
import todos from './todos.json';

class ToDoItem extends Component {
  completed = () => {
    if (this.props.completed) {
      return "completed"
    } else {
      return null
    }
  }
  checked = () => {
    if (this.props.completed) {
      return true
    } else {
      return null
    }
  }
  render () {
    console.log(this)
  return (
      <li className={this.completed()}>
        <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={this.checked()} onChange={this.props.taskCompleted(this)}/>
        <label>{this.props.title}</label>
        <button className="destroy"></button>
        </div>
      </li>
  )
  }
}

class ToDoList extends Component {
  render () {
    return (
      <ul className="todo-list">
      {this.props.todos.map( todo => <ToDoItem key={todo.id} completed={todo.completed} title={todo.title} taskCompleted={this.props.taskCompleted}/>)}
      </ul>
    )
  }
}

class App extends Component {
  state = {
    todos: todos.slice()
  }

  taskCompleted = (todo) => {
    console.log(todo)
  }

  addTodo = (e) => {
    const title = document.getElementById("text-input").value;
    if(e.key === "Enter") {
    this.setState({todos: [...this.state.todos, {
      "userId": 1,
      "id": this.state.todos.length + 1,
      "title": title,
      "completed": false
    }]});
    document.getElementById("text-input").value = ""
  }
    console.log(this.state.todos)
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
				  <h1>todos</h1>
				  <input id="text-input" className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={this.addTodo}/>
			  </header>
        <ToDoList todos={this.state.todos} taskCompleted={this.taskCompleted}/>
        <footer className="footer">
          <span className="todo-count"><strong>{0 || this.state.todos.length}</strong> item(s) left</span>
          <button className="clear-completed">Clear Completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
