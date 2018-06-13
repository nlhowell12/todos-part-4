import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx';

class ToDoList extends Component {
    render () {
      const { todos } = this.props
      return (
        <ul className="todo-list">
        {todos.map(todo => <ToDoItem key={todo.id} id={todo.id} completed={todo.completed} title={todo.title}/>)}
        </ul>
      )
    }
  }

  export default ToDoList;