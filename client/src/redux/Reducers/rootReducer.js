import postReducer from "./postReducer";
import userReducer from "./userReducer";
import cartreducer from "./cartreducer";
import reducerSearch from "./reducerSearch";
import { combineReducers } from "redux";
// import { house } from "../../data";

const rootReducer = combineReducers({
  cartreducer,
  userReducer,
  postReducer,
  reducerSearch
});

export default rootReducer;
