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
  products: Product[];
  productsOnScreen: Product[];
}
const initialState: InitialState = {
  products: [],
  productsOnScreen: [],
};
const filteredProducts = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCHING_PRODUCTS: {
      return { ...state, products: action.products };
    }
    case actionTypes.FILTER_BY_BRAND: {
      let filteredProductsOnScreen: Product[];
      if (action.payload.manufacturer?.length === 0) {
        filteredProductsOnScreen = state.products;
      } else {
        filteredProductsOnScreen = state.productsOnScreen.filter(
          (product: Product) => {
            if (action.payload.manufacturer?.length > 0) {
              for (
                let index = 0;
                index < action.payload.manufacturer.length;
                index++
              ) {
                if (
                  action.payload.manufacturer.includes(product.manufacturer)
                ) {
                  return true;
                }
              }
            } else {
              return true;
            }
          }
        );
      }
      return { ...state, productsOnScreen: filteredProductsOnScreen };
    }

    case actionTypes.FILTER_BY_TAG: {
      let filteredProductsOnScreen: Product[];
      if (action.payload.tags?.length === 0) {
        filteredProductsOnScreen = state.products;
      } else {
        filteredProductsOnScreen = state.productsOnScreen.filter(
          (product: Product) => {
            if (action.payload.tags?.length > 0) {
              for (let index = 0; index < action.payload.tags.length; index++) {
                if (action.payload.tags.includes(product.tags[index])) {
                  return true;
                }
              }
            } else {
              return true;
            }
          }
        );
      }
      return { ...state, productsOnScreen: filteredProductsOnScreen };
    }

    case actionTypes.FILTER_BY_ITEM_TYPE: {
      return { ...state, productsOnScreen: action.filteredProducts };
    }
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

export default filteredProducts;
