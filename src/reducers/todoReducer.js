import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function todoReducer(state=initialState.items, action){
    switch(action.type){
        case types.LOAD_TODO:
            return action.items;
        case types.ADD_TODO:
            return[
                ...state,
                Object.assign({}, action.item)
            ];
        case types.MARK_COMPLETE:
            return[
                
            ];
        default:
            return state;
    }
}