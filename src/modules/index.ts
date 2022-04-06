import { combineReducers } from "redux";
import catReducer, { CatState } from "./cat";

export interface RootState {
  cat: CatState;
}

const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;
