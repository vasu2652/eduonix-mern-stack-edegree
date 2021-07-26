import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducers'
/**
 * 1.Reducers
 * 2.applyMiddleware -> Fn
 * 3.enhancers -> fn
 */
export default createStore(Reducer, applyMiddleware(thunkMiddleware));