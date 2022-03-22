import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cocktailReducer from './cocktailReducer'

export default combineReducers({
  authState: authReducer,
  cocktailState:  cocktailReducer
});
