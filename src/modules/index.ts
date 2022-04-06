import { combineReducers } from "redux";
import catReducer from "./cat";

const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;
