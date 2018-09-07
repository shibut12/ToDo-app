import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function todoReducer(state=initialState.items, action){
    switch(action.type){
        case types.LOAD_TODO:
            return action.items;
        default:
            return state;
    }
}