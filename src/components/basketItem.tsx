import React, { useState } from "react";
import styled from "styled-components";

const Basket = (productName: any, quantity: any, price: any) => {
  const [totalCost, setTotalCost] = useState(0);
  const [cost, setCost] = useState({});

  const totalCostCalculation = (quantity: number, price: number) => {
    let balance = quantity * price + totalCost;
    setTotalCost(balance);
  };

  const costCalculation = (
    productName: string,
    quantity: number,
    price: number
  ) => {
    let itemCost = quantity * price;
    setCost({ ...cost, productName, itemCost });
  };
  const OuterContainer = styled.div`
  width: 296px;
  height: 338.25px;
  border: 2px solid #1ea4ce;
  position: absolute;
  left: 72.22%;
  right: 7.22%;
  top: 7.93%;
  bottom: 69.25%;
`;

  const InnerContainer = styled.div`
    width: 280px;
    height: 321.9px;
    border: 2px solid #FFFFFF;
    position: absolute;
    left: 72.78%;
    right: 7.78%;
    top: 8.48%;
    bottom: 69.8%;
  `;

  const SelectedProductsContainer = styled.div`
    width: 231px;
    height: 40.88px;
    position: absolute;
    left: 74.31%;
    right: 9.65%;
    top: 10.27%;
    bottom: 86.97%;
  `;

  const TotalCostContainer = styled.div`
    width: 92px;
    height: 51px;
    color: #1ea4ce;
    display: flex;
    place-self: center;
    position: absolute;
    left: 84.72%;
    right: 8.89%;
    top: 25.65%;
    bottom: 70.9%;
  `;
  const ProductQuantity = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    left: 86.67%;
    right: 11.11%;
    top: 10.69%;
    bottom: 87.11%;
  `;
  return (
    <div>
      <OuterContainer>
          <InnerContainer>
        <SelectedProductsContainer>
          <ProductQuantity />
        </SelectedProductsContainer>
        <TotalCostContainer>₺39,95</TotalCostContainer>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
};

export default Basket;
