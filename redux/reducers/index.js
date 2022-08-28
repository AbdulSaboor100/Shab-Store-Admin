import auth from "./auth";
import alert from "./alert";
import product from "./product";
import { combineReducers } from "redux";

export default combineReducers({
  auth,
  alert,
  product,
});
