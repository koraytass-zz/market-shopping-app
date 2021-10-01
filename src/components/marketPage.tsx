import React from "react";
import MarketHeader from "./header";
import Toggle from "./productTypeSelection";
import SearchingByBrands from "./searchingByBrands";
import SearchingByTag from "./searchingByTag";
import Sorting from "./sortingProducts";
import styled from "styled-components";
import Basket from "./basketItem";
import ProductPool from "./productPool";

const MarketPage = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 18% 43% 35%;
    grid-auto-columns: 200px;
    grid-gap: 2%;
    backgroud: #E5E5E5;
    grid-template-areas:
               "header header header"
							 "sidebarLeft content sidebarRight"
               "sidebarLeft content sidebarRight";
  `;
  const LeftPanelContainer = styled.div`
    display: grid;
    height: 100%;
    grid-area: sidebarLeft;
    width: 100%;
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
    <>
      <Container>
      <MarketHeader />
        <ProductPool />
        <Basket />
        <Toggle />
        <LeftPanelContainer>
          <Sorting />
          <SearchingByTag />
          <SearchingByBrands />
        </LeftPanelContainer>
      </Container>
    </>
  );
};

export default MarketPage;
