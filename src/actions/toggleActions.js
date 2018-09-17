import * as types from './actionTypes';

export function loadToggleSuccess(flag){
    return{
        type: types.LOAD_TOGGLE,
        flag
    }
}

export function loadToggle(){
    return function(dispatch){
        dispatch(loadToggleSuccess('test'));
    }
}