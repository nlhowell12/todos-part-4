import React, { Component } from 'react';
import './index.css';
import todos from './todos.json';
import ToDoList from './toDoList.jsx';

class App extends Component {
  state = {
    todos: todos
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
    const { todos } = this.state;
    const title = document.getElementById("text-input").value;
    if(e.key === "Enter") {
    this.setState({todos: [...todos, {
      "userId": 1,
      "id": todos[todos.length -1].id + 1,
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
    this.setState({todos: todos.filter(todo => !todo.completed)})
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
