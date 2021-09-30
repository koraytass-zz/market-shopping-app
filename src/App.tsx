import React, { useEffect } from "react";
import "./App.css";
import { getCompanies, getProducts } from "./utils/dbManagement";
import { useDispatch } from "react-redux";
import { fetchingCompanies, fetchingProducts } from "./redux/actions";
import MarketPage from "./components/marketPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductsWrapper = async () => {
      const products = await getProducts();
      dispatch(fetchingProducts(products.dbProducts));
    };
    const getCompaniesWrapper = async () => {
      const companies = await getCompanies();
      dispatch(fetchingCompanies(companies.dbCompanies));
    };
    getProductsWrapper();
    getCompaniesWrapper();
  }, []);
  return (
    <div className="App">
      <MarketPage/>
    </div>
  );
}

export default App;
