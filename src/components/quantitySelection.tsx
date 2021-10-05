import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { decreaseItems, increaseItems } from "../redux/actions";

const QuantitySelection = (props: any) => {
  const ProductQuantity = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    background: #1ea4ce;
    color: white;
    top: 86%;
    left: 30%;
  `;
  const PlusSign = styled.button`
    place-self: center;
    top: -15px;
    position: relative;
    left: 100%;
    border: none;
    background: white;
    color: #1ea4ce;
  `;
  const MinusSign = styled.button`
    place-self: center;
    top: 2px;
    position: relative;
    left: -70%;
    border: none;
    background: white;
    color: #1ea4ce;
  `;

  const Container = styled.div`
    display: inline-flex;
    position: relative;
    left: -6px;
    top: 3px;
  `;
  const dispatch = useDispatch();
  
  const quantity = (event: any) => {
    if (event === "increase") {
      dispatch(increaseItems(props.product.slug));
    } else {
      dispatch(decreaseItems(props.product.slug));
    }
  };

  return (
    <>
      <ProductQuantity>
        <MinusSign onClick={() => quantity("decrease")}>-</MinusSign>
        <Container>{props.product.productCount}</Container>
        <PlusSign onClick={() => quantity("increase")}>+</PlusSign>
      </ProductQuantity>
    </>
  );
};

export default QuantitySelection;
