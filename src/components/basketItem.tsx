import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import QuantitySelection from "./quantitySelection";

const Basket = () => {
  const state = useSelector((state: any) => {
    return { ...state.basketReducer };
  });

  const OuterContainer = styled.div`
    width: 296px;
    height: 338.25px;
    border: 2px solid #1ea4ce;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1ea4ce;
  `;

  const InnerContainer = styled.div`
    width: 280px;
    height: 321.9px;
    border: 2px solid #ffffff;
    position: relative;
    background: white;
  `;

  const SelectedProductsContainer = styled.div`
    width: 281px;
    height: 40.88px;
    position: absolute;
    margin: 4px;
    position: relative;
  `;

  const TotalCostContainer = styled.div`
    width: 92px;
    height: 51px;
    color: #1ea4ce;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 80%;
    left: 65%;
    border: 2px solid #1ea4ce;
  `;

  const ProductPriceContainer = styled.div`
    height: 19px;
    width: 45px;
    position: absolute;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #1ea4ce;
    top: 15px;
  `;
  const ProductNameContainer = styled.div`
    height: 18px;
    width: 100%;
    position: absolute;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  `;

  const BasketItemsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 260px;
    overflow: auto;
  `;
  const QuantityContainer = styled.div`
    position: absolute;
    top:15%;
    left 84%;
  `;
  const renderProductsOnTheBasket = () => {
    if (state) {
      return state.productsInTheBasket.map((product: any) => {
        return (
          <SelectedProductsContainer>
            <ProductNameContainer>{product.name}</ProductNameContainer>
            <ProductPriceContainer>{product.price}</ProductPriceContainer>
            <QuantityContainer>
              <QuantitySelection product={product} />
            </QuantityContainer>
          </SelectedProductsContainer>
        );
      });
    } else {
      return [];
    }
  };

  return (
    <div>
      <OuterContainer>
        <InnerContainer>
          <BasketItemsContainer>
            {renderProductsOnTheBasket()}
          </BasketItemsContainer>
          <TotalCostContainer>
            <p>₺{state ? state.totalCost : 0}</p>
          </TotalCostContainer>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
};

export default Basket;
