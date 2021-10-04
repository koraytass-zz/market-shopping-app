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
  filteredProductsOnScreen : Product[];
}
const initialState: InitialState = {
  products: [],
  productsOnScreen: [],
  filteredProductsOnScreen: [],
};
const filteredProducts = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FILTER: {
      let filteredProductsOnScreen: Product[] = state.productsOnScreen.filter(
        (product: Product) => {
          if (
            action.payload.manufacturer?.length > 0 &&
            action.payload.manufacturer.includes(product.manufacturer)
          ) {
            return true;
          }
          if (action.payload.tags?.length > 0) {
            for (let index = 0; index < action.payload.tags.length; index++) {
              if (action.payload.tags.includes(product.tags[index])) {
                return true;
              }
            }
          }
          if (
            action.payload.itemType?.length > 0 &&
            action.payload.itemType.includes(product.itemType)
          ) {
            return true;
          }
          return false;
        }
      );
      return { ...state, filteredProductsOnScreen: filteredProductsOnScreen };
    }
    case actionTypes.FILTER_BY_ITEM_TYPE: {
      return { ...state, productsOnScreen: action.filteredProducts };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default filteredProducts;
