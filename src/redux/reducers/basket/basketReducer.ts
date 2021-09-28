import * as actionTypes from "../../actions/actionTypes";
// check can use it general Product array
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
  totalCost: number;
  products: Product[];
  productsInTheBasket: Product[];
}
const initialState: InitialState = {
  totalCost: 0,
  products: [],
  productsInTheBasket: [],
};
const basketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCHING_PRODUCTS: {
      return { ...state, products: action.products };
    }
    case actionTypes.ADD_TO_BASKET: {
      let addedProduct: Product | undefined = state.products.find(
        (product: Product) => product.slug === action.slug
      );
      if (addedProduct) {
        let newTotalCost: number = state.totalCost + addedProduct.price;
        return {
          ...state,
          productsInTheBasket: [
            ...state.products,
            { ...addedProduct, productCount: 1 },
          ],
          totalCost: newTotalCost,
        };
      } else {
        return { ...state };
      }
    }
    case actionTypes.REMOVE_FROM_BASKET: {
      let removedProduct: Product | undefined = state.products.find(
        (product: Product) => product.slug === action.slug
      );
      let remainingProducts: Product[] = state.productsInTheBasket.filter(
        (product: Product) => product.slug !== action.product.slug
      );
      if (removedProduct && removedProduct.productCount) {
        let newTotalCost: number =
          state.totalCost - removedProduct.price * removedProduct.productCount;
        return {
          ...state,
          productsInTheBasket: [...remainingProducts],
          totalCost: newTotalCost,
        };
      } else {
        return { ...state };
      }
    }
    case actionTypes.INCREASE_ITEMS: {
      let newTotalCost;
      let increasedItem: Product | undefined = state.products.find(
        (product: Product) => product.slug === action.slug
      );
      if (increasedItem && increasedItem.productCount) {
        increasedItem.productCount += 1;
        newTotalCost = state.totalCost + increasedItem.price;
      } else if (increasedItem) {
        increasedItem.productCount = 1;
      }
      return {
        ...state,
        //productsInTheBasket: [...state.productsInTheBasket],
        totalCost: newTotalCost,
      };
    }
    case actionTypes.DECREASE_ITEMS: {
      let newTotalCost;
      let decreasedItem: Product | undefined = state.products.find(
        (product: Product) => product.slug === action.slug
      );
      if (
        decreasedItem &&
        decreasedItem.productCount &&
        decreasedItem.productCount > 1
      ) {
        decreasedItem.productCount -= 1;
        newTotalCost = state.totalCost - decreasedItem.price;
      }
      return {
        ...state,
        //productsInTheBasket: [...state.productsInTheBasket],
        totalCost: newTotalCost,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default basketReducer;
