const _ = require("lodash");

export const sortProducts = async (products) => {
  let sortedByPrice = _.sortBy(products, ["price"]);
};
