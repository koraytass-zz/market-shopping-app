import { timeStamp } from "console";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { sortedByPrice, sortedByTime } from "../redux/actions";
import { sortProducts } from "../utils/sortingProducts";

const Sorting = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState("PricingToHigh");
  const state = useSelector((state: any) => {
    return {
      ...state.basketReducer,
      ...state.sortedProductsReducer,
      ...state.filteredProductsReducer,
    };
  });

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelect(value);
  };

  useEffect(() => {
    setTimeout(() => {
      const sortWrapper = async () => {
        let products = await sortProducts(select, state.productsOnScreen);
        if (products.actionType === "SORTING_BY_PRICE") {
          dispatch(sortedByPrice(products.sortedproducts));
        } else {
          dispatch(sortedByTime(products.sortedproducts));
        }
      };
      sortWrapper();
    }, 3000);
  }, [select]);

  return (
    <Container>
      <span>Sorting</span>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="PricingToHigh"
          checked={select === "PricingToHigh"}
          onChange={(event: any) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Price low to high</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="PricingToLow"
          checked={select === "PricingToLow"}
          onChange={(event: any) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Price high to low</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="SortingByTimeToNew"
          checked={select === "SortingByTimeToNew"}
          onChange={(event: any) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Old to new</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="SortingByTimeToOld"
          checked={select === "SortingByTimeToOld"}
          onChange={(event: any) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>New to old</div>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  height: 274px;
  width: 296px;
  box-sizing: border-box;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  background-color: white;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      content: "\u2713";
      font-family: "FontAwesome";
      display: block;
      color: #1ea4ce;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: white;
    border: 2px solid #1ea4ce;
  }
  &:checked + ${RadioButtonLabel} {
    background: white;
    border: 1px solid #1ea4ce;
    &::after {
      content: "\u2713";
      font-family: "FontAwesome";
      display: block;
      color: #1ea4ce;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

export default Sorting;
