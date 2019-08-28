import postReducer from "./postReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  postReducer
});

export default rootReducer;
