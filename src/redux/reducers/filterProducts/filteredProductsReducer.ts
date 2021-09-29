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
    case actionTypes.FILTER: {
      let filteredProducts: Product[] = state.products.filter(
        (product: Product) =>
          (action.manufacturer.length > 0 && action.manufacturer.includes(product.manufacturer)) &&
          (action.tags.length > 0 && action.tags.includes(product.tags)) &&
          (action.itemType.length > 0 && action.itemType.includes(product.itemType))
      );
      return { ...state, productsOnScreen: filteredProducts };
    }
  }
};

export default filteredProducts;
