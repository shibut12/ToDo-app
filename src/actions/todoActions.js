import * as types from './actionTypes';

export function loadItemsSuccess(items){
    return{
        type: types.LOAD_TODO,
        items
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