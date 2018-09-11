import * as types from './actionTypes';
import todoApi from '../api/todoApi';

export function loadItemsSuccess(items){
    return{
        type: types.LOAD_TODO,
        items
    }
}

export function addItem(item){
    return{
        type: types.ADD_TODO,
        item
    }
}

export function markComplete(item){
    return{
        type: types.MARK_COMPLETE,
        item
    }
}

export function loadItems(){
    return function(dispatch){
        return todoApi.getAllItems().then(items =>{
            dispatch(loadItemsSuccess(items));
        }).catch(error => {
            throw(error);
        });
    }
}