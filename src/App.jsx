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
  
  completeTask = () => {
    this.props.taskCompleted(this.props)
  }

  deleteItem = () => {
    this.props.deleteItem(this.props)
  }

  render () {
  return (
      <li className={this.completed()}>
        <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={this.props.completed} onChange={this.completeTask}/>
        <label>{this.props.title}</label>
        <button className="destroy" onClick={this.deleteItem}></button>
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

  taskCompleted = (todo) => {
    const modify = this.state.todos.findIndex((found) => {return found.id === todo.id})
    let modifiedArray = this.state.todos.slice()
    modifiedArray[modify].completed = !modifiedArray[modify].completed
    
    this.setState({todos: modifiedArray})
    
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

  deleteItem = (todo) => {
    const modify = this.state.todos.findIndex((found) => {return found.id === todo.id})
    let modifiedArray = this.state.todos.slice()
    modifiedArray.splice(modify, 1);
    this.setState({todos: modifiedArray})
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
