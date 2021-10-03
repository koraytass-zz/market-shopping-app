import { combineReducers } from "redux";
import basketReducer from "./basket/basketReducer";
import sortedProductsReducer from "./sortedProducts/sortedProductsReducer";

export default combineReducers({
  basketReducer, sortedProductsReducer
});
