import * as actionTypes from "../../actions/actionTypes";

interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
  productCount?: number;
}

interface InitialState {
  productsOnScreen: Product[];
}
const initialState: InitialState = {
  productsOnScreen: [],
};
const sortedProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SORTING_BY_PRICE: {
      return { ...state, productsOnScreen: action.sortedProducts };
    }
    case actionTypes.SORTING_BY_TIME: {
      return { ...state, productsOnScreen: action.sortedProducts };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default sortedProductsReducer;
