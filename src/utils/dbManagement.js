import axios from "axios";

const SERVER = "http://localhost:3004";
export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${SERVER}/dbProducts`);

    return data;
  } catch (error) {
    console.warn("Could not fetch datas from server " + error);
    throw error;
  }
};
export const getCompanies = async () => {
  try {
    const { data } = await axios.get(`${SERVER}/dbCompanies`);

    return data;
  } catch (error) {
    console.warn("Could not fetch datas from server " + error);
    throw error;
  }
};

export const getFilteredProductsByItemType = async (itemType) => {
  try {
    const { data } = await axios.get(`${SERVER}/dbProducts`);
    let filteredProducts = data.dbProducts.filter(
        (product) => (product.itemType === itemType)
    );
    return filteredProducts;
  } catch (error) {
    console.warn("Could not fetch datas from server " + error);
    throw error;
  }
};

export const getBrands = async () => {
  try {
    let brands = [];
    const { data } = await axios.get(`${SERVER}/dbProducts`);
    data.dbProducts.forEach(
        (product) => {
          if(!brands.includes(product.manufacturer)){
            brands.push(product.manufacturer);
          }
        }
    );
    return brands;
  } catch (error) {
    console.warn("Could not fetch datas from server " + error);
    throw error;
  }
};

export const getTags = async () => {
  try {
    let tags = [];
    const { data } = await axios.get(`${SERVER}/dbProducts`);
    data.dbProducts.forEach(
      (product) => {
        product.tags.forEach((tag) => {
          if(!tags.includes(tag)){
            tags.push(tag);
          }
        });
      }
  );
  return tags;
    
  } catch (error) {
    console.warn("Could not fetch datas from server " + error);
    throw error;
  }
};
