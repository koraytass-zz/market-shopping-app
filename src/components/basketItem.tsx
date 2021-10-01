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
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20%;
    grid-area: sidebarRight;
    left: 18%;
  `;

  const InnerContainer = styled.div`
    width: 280px;
    height: 321.9px;
    border: 2px solid #ffffff;
    position: relative;
  `;

  const SelectedProductsContainer = styled.div`
    width: 281px;
    height: 40.88px;
    position: absolute;
    background-color: red;
    position: relative;
  `;

  const TotalCostContainer = styled.div`
    width: 92px;
    height: 51px;
    color: #1ea4ce;
    display: flex;
    justify-content: center;
    position: relative;
    top: 70%;
    left: 65%;
    border: 2px solid #1ea4ce;
  `;
  const ProductQuantity = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    background-color: blue;
    top: 12%;
    left: 80%;
  `;
  const PlusSign = styled.img`
    place-self: center;
    top: 30%;
    position: relative;
    left: 44%;
  `;
  const MinusSign = styled.img`
    place-self: center;
    top: 18%;
    position: relative;
    left: 27%;
  `;
  return (
    <div>
      <OuterContainer>
        <InnerContainer>
          <SelectedProductsContainer>
            <MinusSign src="/images/minusSign.png" />
            <ProductQuantity />
            <PlusSign src="/images/plusSign.png" />
          </SelectedProductsContainer>
          <TotalCostContainer>
            <p>₺39,95</p>
          </TotalCostContainer>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
};

export default Basket;
