import React, { Component } from 'react';
import './index.css';
import todos from './todos.json';

class ToDoItem extends Component {
  render () {
  return (
      <li className={this.props.completed ? "completed" : null}>
        <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={this.props.completed} onChange={this.props.taskCompleted(this.props.id)}/>
        <label>{this.props.title}</label>
        <button className="destroy" onClick={this.props.deleteItem(this.props.id)}></button>
        </div>
      </li>
  )
  }
}

class ToDoList extends Component {
  render () {
    return (
      <ul className="todo-list">
      {this.props.todos.map( todo => <ToDoItem key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} taskCompleted={this.props.taskCompleted} deleteItem={this.props.deleteItem}/>)}
      </ul>
    )
  }
}

class App extends Component {
  state = {
    todos: todos.slice()
  }

  taskCompleted = id => evt => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo => todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo)
    });
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
  }

  deleteItem = id => evt => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  deleteAllItems = () => {
    const { todos } = this.state;
    let oldState = todos.slice()
    let newState = oldState.filter(todo => !todo.completed)
    this.setState({todos: newState})
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
				  <h1>todos</h1>
				  <input id="text-input" className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={this.addTodo}/>
			  </header>
        <ToDoList todos={this.state.todos} taskCompleted={this.taskCompleted} deleteItem={this.deleteItem}/>
        <footer className="footer">
          <span className="todo-count"><strong>{0 || this.state.todos.length}</strong> item(s) left</span>
          <button className="clear-completed" onClick={this.deleteAllItems}>Clear Completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
