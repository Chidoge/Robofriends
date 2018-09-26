import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';

import App from './container/App';
import 'tachyons';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


/* Prepare redux logger */
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

/* Create store to contain state, also add redux-logger for debugging and thunk middlware for async actions
 The store uses the root reducer to create the store/ the object tree of the state */
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

/* Wrap container in Provider and pass store down */
ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
