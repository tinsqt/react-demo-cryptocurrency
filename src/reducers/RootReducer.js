import {combineReducers} from "redux";
import CoinListReducer from "./CoinListReducer";
import CoinReducer from "./CoinReducer";

const RootReducer = combineReducers({
  CoinList: CoinListReducer,
  Coin: CoinReducer
});

export default RootReducer;