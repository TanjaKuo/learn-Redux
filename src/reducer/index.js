import counterReducer from "./counter";
import loggedReducer from "./login";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ counterReducer, loggedReducer });

// you can write it as
/*
const rootReducer = combinedReducer({counter : counterReducer, logged: loggedReducer});
*/

export default rootReducer;
