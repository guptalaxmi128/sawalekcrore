import { combineReducers } from "redux";

import accounts from "./account/account";
import dreamHomes from "./dreamhomes/dreamHomes";
import dreamCars from "./dreamcars/dreamCars";

const reducers = combineReducers({
  accounts,
  dreamHomes,
  dreamCars,
});

export default reducers;
