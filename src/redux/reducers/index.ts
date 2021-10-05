import { combineReducers } from "redux";
import basketReducer from "./basket/basketReducer";
import filteredProductsReducer from "./filterProducts/filteredProductsReducer";

export default combineReducers({
  basketReducer, filteredProductsReducer
});
