import { combineReducers } from 'redux';
import items from './todoReducer';

const rootReducer = combineReducers({
    items
});

export default rootReducer;