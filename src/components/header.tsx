import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HeaderMain = styled.div`
  display: flex;
  width: 100%;
  height: 76.64px;
  background: #1ea4ce;
  justify-content: center;
  text-align: center;
  grid-area: header;
`;

const MarketDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 50%;
  width: 50%;
  place-self: center;
`;
const BasketDiv = styled.div`
  width: 129px;
  height: 100%;
  display: flex;
  background: #147594;
  place-self: center;
  justify-content: center;
  position: relative;
  left: 180px;
`;
const BasketIcon = styled.img`
  place-self: center;
`;

const TotalCost = styled.div`
  color: #ffffff;
  display: flex;
  place-self: center;
`;

const MarketHeader = () => {
  const state = useSelector((state: any) => {
    return { ...state.basketReducer };
  });
  return (
    <HeaderMain>
      <MarketDiv>
        <img src="/images/Logo.png" alt="Header" />
      </MarketDiv>
      <BasketDiv>
        <BasketIcon src="/images/basket.png" />
        <TotalCost>₺{state ? state.totalCost : 0}</TotalCost>
      </BasketDiv>
    </HeaderMain>
  );
};

export default MarketHeader;
