import { combineReducers } from "redux";
import auth from './authReducers';
import profile from './profileReducer'

export default combineReducers({
  auth,
  profile
})