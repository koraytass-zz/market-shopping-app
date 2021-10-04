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
export const fetchingCompanies = (payload: Product[]) => {
    return {type: actionTypes.FETCHING_COMPANIES, companies: payload}
}

export const addToBasket = (payload: string) => {
    return {type: actionTypes.ADD_TO_BASKET, slug: payload}
}

export const sortedByTime = (payload: string) => {
    return {type: actionTypes.SORTING_BY_TIME, sortedProducts: payload}
}
export const sortedByPrice = (payload: string) => {
    return {type: actionTypes.SORTING_BY_PRICE, sortedProducts: payload}
}

export const increaseItems = (payload: string) => {
    return {type: actionTypes.INCREASE_ITEMS, slug: payload}
}

export const decreaseItems = (payload: string) => {
    return {type: actionTypes.DECREASE_ITEMS, slug: payload}
}

export const filterByItemType = (payload: any) => {
    return {type: actionTypes.FILTER_BY_ITEM_TYPE, filteredProducts: payload}
}

export const filterByTag = (payload: any) => {
    return {type: actionTypes.FILTER, payload}
}