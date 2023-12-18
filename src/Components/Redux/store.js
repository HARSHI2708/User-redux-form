import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  users: userReducer,
  errors: errorReducer,
});

const store = createStore(rootReducer);
export default store;
