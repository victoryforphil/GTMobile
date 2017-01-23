import {combineReducers} from 'redux';
import events from "./eventReducer"
import bells from "./bellReducer"
export default combineReducers({events, bells});
