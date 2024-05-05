import { combineReducers } from "redux";
import authedUser from "./users/authedUser";
import users from "./users/users";
import questions from "./questions/questions";
//import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  users,
  questions,
 // loadingBar: loadingBarReducer,
});
