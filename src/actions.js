export const MARK_COMPLETE = 'MARK_COMPLETE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = (todos, title) => {
    return {
        type: ADD_TODO,
        todo: {
        'userId': 1,
        'id': todos[todos.length - 1].id + 1,
        'title': title,
        'completed': false
    }
}
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};

export const markComplete = (id) => {
    return {
        type: MARK_COMPLETE,
        id
    }
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
};
