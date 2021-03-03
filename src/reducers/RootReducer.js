import {combineReducers} from "redux";
import CoinListReducer from "./CoinListReducer";

const RootReducer = combineReducers({
  CoinList: CoinListReducer
});

export default RootReducer;