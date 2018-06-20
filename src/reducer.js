import todos from './todos.json';
import { MARK_COMPLETE, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED } from './actions';
import * as R from 'ramda';
import { createStore } from 'redux';

const initialState = todos
  
const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case MARK_COMPLETE:
        console.log(action.id)
            return (state.map(todo => todo.id === action.id ? {
                ...todo,
                completed: !todo.completed
            } : todo
            )
            );
        case ADD_TODO:  
            return R.append(action.todo, state);
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);
        default:
        return state;
}
}

const store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store


