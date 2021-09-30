import React from "react";
import MarketHeader from "./header";
import Toggle from "./productTypeSelection";
import SearchingByBrands from "./searchingByBrands";
import SearchingByTag from "./searchingByTag";
import Sorting from "./sortingProducts";
import styled from "styled-components";
import Basket from "./basketItem";

const MarketPage = () => {
  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;
  const LeftPanelContainer = styled.div`
    display: flex;
    height: 100vh;
  `;

  const ProductsContainer = styled.div`
    display: flex;
    height: 100vh;
  `;

  const BasketContainer = styled.div`
    display: flex;
    height: 100vh;
  `;

  return (
    <div>
      <Basket />
      <MarketHeader />
      <Toggle />
      <Sorting />
      <SearchingByTag />
      <SearchingByBrands />
    </div>
  );
};

export default MarketPage;
