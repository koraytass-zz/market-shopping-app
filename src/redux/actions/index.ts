import * as actionTypes from "./actionTypes";
//Product array can be removed check again !!
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

export const fetchingProducts = (payload: Product[]) => {
    return {type: actionTypes.FETCHING_PRODUCTS, products: payload}
}