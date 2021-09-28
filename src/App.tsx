import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getCompanies, getProducts } from "./utils/dbManagement";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductsWrapper = async () => {
      const products = await getProducts();
      dispatch({type: 'FETCHING_PRODUCTS', products: products.dbProducts});
    };
    getProductsWrapper();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
