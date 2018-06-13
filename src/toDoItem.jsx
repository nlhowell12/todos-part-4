import React, { Component } from 'react'
import { deleteTodo, markComplete } from './actions';
import { connect } from 'react-redux';

class ToDoItem extends Component {
    render () {
      const { id, completed, title, dispatch } = this.props
    return (
        <li className={completed ? "completed" : null}>
          <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={completed} onChange={evt => dispatch(markComplete(id))}/>
          <label>{title}</label>
          <button className="destroy" onClick={evt => dispatch(deleteTodo(id))}></button>
          </div>
        </li>
    )
    }
  }

  export default connect()(ToDoItem)