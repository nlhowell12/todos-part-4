import React, { Component } from 'react';
import './index.css';
import ToDoList from './toDoList.jsx';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo, clearCompleted } from './actions.js'
import { withRouter } from 'react-router';

class App extends Component {

  render() {
    const { todos, dispatch } = this.props;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input id="text-input" className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={evt => evt.key==='Enter' ? dispatch(addTodo(todos, evt.target.value)) : null}/>
        </header>
        <Switch>
          <Route exact path='/' render={() => <ToDoList todos={todos}/>}/>
          <Route path='/active' render={() => <ToDoList todos={todos.filter(todo => !todo.completed)}/>}/>
          <Route path='/completed' render={() => <ToDoList todos={todos.filter(todo => todo.completed)}/>}/>
        </Switch>
        <footer className="footer">
          <span className="todo-count"><strong>{0 || todos.length}</strong> item(s) left</span>
          <ul className="filters">
            <li>
              <a href="#/">
              All
              </a>
            </li>
            <li>
              <a href="#/active">
              Active
              </a>
            </li>
            <li>
              <a href="#/completed">
              Completed
              </a>
            </li>
          </ul>
          <button className="clear-completed" onClick={evt => dispatch(clearCompleted())}>Clear Completed</button>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state}
}
export default withRouter(connect(mapStateToProps)(App));
