import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import App from './components/App';
import {loadItems} from './actions/todoActions';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadItems());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
