import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function toggleReducer(state=initialState.toggle, action){
    switch(action.type){
        case types.LOAD_TOGGLE:
            return action.flag;
        default:
            return state;
    }
}