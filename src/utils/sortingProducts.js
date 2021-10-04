
export const sortProducts = async (event, productsOnScreen) => {
  const products = productsOnScreen;
  let actionType;
  const sortedproducts = products.slice();
  if (event === "PricingToHigh") {
    sortedproducts.sort((a, b) => a.price - b.price);
    actionType = "SORTING_BY_PRICE";
  } else if (event === "PricingToLow") {
    sortedproducts.sort((a, b) => b.price - a.price);
    actionType = "SORTING_BY_PRICE";
  } else if (event === "SortingByTimeToNew") {
    sortedproducts.sort((a, b) => a.added - b.added);
    actionType = "SORTING_BY_TIME";
  } else if (event === "SortingByTimeToOld") {
    sortedproducts.sort((a, b) => b.added - a.added);
    actionType = "SORTING_BY_TIME";
  }
  return { sortedproducts, actionType };
};
