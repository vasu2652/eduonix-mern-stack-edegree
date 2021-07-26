import { combineReducers  } from "redux";
import CounterReducer from './counter';
import UserReducer from './user';
export default combineReducers({
    user: UserReducer,
    counter: CounterReducer
});
