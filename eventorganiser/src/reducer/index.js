import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import festReducer from "./festReducer";
import profileReducer from "./profileReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  event: eventReducer,
  fest: festReducer,
});
