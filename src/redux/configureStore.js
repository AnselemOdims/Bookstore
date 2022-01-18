/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

// combine one or more reducers
const reducer = combineReducers({
  booksReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger));

export default store;
