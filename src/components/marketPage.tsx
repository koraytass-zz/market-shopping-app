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
    max-width: 100%;
    display: grid;
    grid-template-columns: 24% 43% 32%;
    grid-auto-columns: 200px;
    grid-gap: 50px 1%;
    background: #e5e5e5;
    grid-template-areas:
      "header header header"
      "sidebarLeft content sidebarRight"
      "sidebarLeft content sidebarRight";
  `;
  const LeftPanelContainer = styled.div`
    max-width: 100%;
    display: grid;
    padding-left: 15px;
    height: 100%;
    grid-area: sidebarLeft;
    width: 100%;
    grid-gap: 226px 1%;
    grid-template-rows: repeat(auto-fill, 1vw);
  `;

  const CenterContainer = styled.div`
    display: flex;
    height: 100%;
    grid-area: content;
    width: 100%;
    top: 20px;
    grid-gap: 226px 1%;
    grid-template-rows: repeat(auto-fill, 1vw);
  `;

  const BasketContainer = styled.div`
    display: flex;
    grid-area: sidebarRight;
    left: 72%;
    width: 100%;
    top: 20%;
    height: 100%;
    position: fixed; ;
  `;

  return (
    <>
      <Container>
        <MarketHeader />
        <CenterContainer>
          <ProductPool />
          <Toggle />
        </CenterContainer>
        <BasketContainer>
          <Basket />
        </BasketContainer>
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
