import * as types from './actionTypes';

export function loadTodos(todos){
    return{
        type: types.LOAD_TODO,
        todos
    }
}