import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, markComplete } from './actions';


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

  const mapDispatchToProps = (dispatch) => {
    return {
      markComplete: (id) => dispatch(markComplete(id)),
      deleteTodo: (id) => dispatch(deleteTodo(id))
    }
  }

  const mapStateToProps = (state) => {
    return {
        todo: state.todos[state.todos.length - 1]
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem)