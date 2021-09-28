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
