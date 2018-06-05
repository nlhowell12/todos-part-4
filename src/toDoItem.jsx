import React, { Component } from 'react'

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

  export default ToDoItem