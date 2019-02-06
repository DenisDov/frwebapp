import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line

import RootReducer from '../Redux';

const middlewares = [thunk];

const Store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;
