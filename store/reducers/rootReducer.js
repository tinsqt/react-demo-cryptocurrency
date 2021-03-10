import {combineReducers} from "redux";
import coinListReducer from "./coinListReducer";
import coinReducer from "./coinReducer";

const rootReducer = combineReducers({
  coinList: coinListReducer,
  coin: coinReducer
});

export default rootReducer;