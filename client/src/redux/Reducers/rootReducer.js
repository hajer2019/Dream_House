import postReducer from "./postReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

export default rootReducer;
