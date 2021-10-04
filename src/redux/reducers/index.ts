import { combineReducers } from "redux";
import basketReducer from "./basket/basketReducer";
import sortedProductsReducer from "./sortedProducts/sortedProductsReducer";
import filteredProductsReducer from "./filterProducts/filteredProductsReducer";

export default combineReducers({
  basketReducer, sortedProductsReducer, filteredProductsReducer
});
