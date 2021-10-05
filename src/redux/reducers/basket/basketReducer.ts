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
    case actionTypes.FETCHING_COMPANIES: {
      return { ...state, products: action.companies };
    }
    case actionTypes.ADD_TO_BASKET: {
      let addedProduct: Product | undefined = state.products.find(
        (product: Product) => product.slug === action.slug
      );
      if (addedProduct) {
        let newTotalCost: number = state.totalCost + addedProduct.price;
        console.log("add item: ", {
          ...state,
          productsInTheBasket: [
            ...state.productsInTheBasket,
            { ...addedProduct, productCount: 1 },
          ],
          totalCost: (Number(newTotalCost.toFixed(2))),
        });
        return {
          ...state,
          productsInTheBasket: [
            ...state.productsInTheBasket,
            { ...addedProduct, productCount: 1 },
          ],
          totalCost: (Number(newTotalCost.toFixed(2))),
        };
      } else {
        return { ...state };
      }
    }
   
    case actionTypes.INCREASE_ITEMS: {
      let newTotalCost = 0;
      let increasedItem: Product | undefined = state.productsInTheBasket.find(
        (product: Product) => product.slug === action.slug
      );
      let increasedItemIndex: number = state.productsInTheBasket.findIndex(
        (product: Product) => product.slug === action.slug
      );
      let newState = { ...state };
      if (increasedItem && increasedItem.productCount) {
        increasedItem.productCount += 1;
        newTotalCost = state.totalCost + increasedItem.price;
      } else if (increasedItem) {
        increasedItem.productCount = 1;
      }
      if (increasedItem) {
        newState.productsInTheBasket[increasedItemIndex] = increasedItem;
      }
      return {
        ...newState,
        totalCost: (Number(newTotalCost.toFixed(2))),
      };
    }
    case actionTypes.DECREASE_ITEMS: {
      let newTotalCost = 0;
      let decreasedItem: Product | undefined = state.productsInTheBasket.find(
        (product: Product) => product.slug === action.slug
      );
      let decreasedItemIndex: number = state.productsInTheBasket.findIndex(
        (product: Product) => product.slug === action.slug
      );
      let newState = { ...state };
      if (decreasedItem && decreasedItem.productCount) {
        decreasedItem.productCount -= 1;
        if (decreasedItem.productCount === 0) { 
          newState.productsInTheBasket.splice(decreasedItemIndex, 1);
        }
        newTotalCost =
          state.totalCost - decreasedItem.price > 0
            ? state.totalCost - decreasedItem.price
            : 0;
      }
      return {
        ...newState,
        totalCost: (Number(newTotalCost.toFixed(2))),
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
