import { combineReducers } from "redux";
// reducers
import { todoListReducer, visibilityFilterReducer } from "./reducers";

const reducers = combineReducers({
  todos: todoListReducer,
  filter: visibilityFilterReducer
});

export { reducers };
