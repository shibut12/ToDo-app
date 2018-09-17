import { combineReducers } from 'redux';
import items from './todoReducer';
import toggle from './toggleReducer';

const rootReducer = combineReducers({
    items,
    toggle
});

export default rootReducer;