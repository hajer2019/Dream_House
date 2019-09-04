import postReducer from "./postReducer";
import userReducer from "./userReducer";
import reducerSearch from "./reducerSearch";
import { combineReducers } from "redux";
// import { house } from "../../data";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  reducerSearch
});

export default rootReducer;
