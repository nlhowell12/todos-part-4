import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx';

class ToDoList extends Component {
    render () {
      return (
        <ul className="todo-list">
        {this.props.todos.map( todo => <ToDoItem key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} taskCompleted={this.props.taskCompleted} deleteItem={this.props.deleteItem}/>)}
        </ul>
      )
    }
  }

  export default ToDoList;