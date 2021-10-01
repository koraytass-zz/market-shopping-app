import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/actions";
import styled from "styled-components";

const ProductPool = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.basketReducer);

  const ProductPoolContainer = styled.div`
    height: 100%;
    width: 100%;
    grid-area:content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  const ProductCardContainer = styled.div`
    height: 225px;
    width: 124px;
    position: relative;
    left: 3%;
  `;
  const ImageBackgroundContainer = styled.div`
    height: 124px;
    width: 124px;
    position: absolute;

    background: #fefefe;
    border: 1.17666px solid #f3f0fe;
    border-radius: 12px;
  `;
  const ImageContainer = styled.img`
    position: absolute;
    width: 92px;
    height: 92px;
    top: 20%;
    right: 14%;

    background: #c4c4c4;
  `;
  const ProductPriceContainer = styled.div`
    height: 23px;
    width: 124px;
    position: absolute;
    background-color: red;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    top: 77%;

    color: #1ea4ce;
  `;
  const ProductNameContainer = styled.div`
    height: 40px;
    width: 124px;
    position: absolute;
    background: blue;
    top: 60%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: #191919;
  `;
  const ProductQuantityContainer = styled.div`
    height: 22px;
    width: 124px;
    position: absolute;
    background: #1ea4ce;
    border-radius: 2px;
    top: 86%;
  `;
  const handleClick = (slug?: string) => {
    if (slug) {
      console.log(slug);
      dispatch(addToBasket(slug));
    }
  };

  const renderProducts = () => {
    if (state) {
      return state.products.map((product: any) => {
        return (
          <ProductCardContainer>
            <ImageBackgroundContainer>
              <ImageContainer></ImageContainer>
            </ImageBackgroundContainer>
            <ProductPriceContainer>{product.price}</ProductPriceContainer>
            <ProductNameContainer>{product.productName}</ProductNameContainer>
            <ProductQuantityContainer>
              <button onClick={() => handleClick(product.slug)}>Add</button>
            </ProductQuantityContainer>
          </ProductCardContainer>
        );
      });
    } else {
      return [];
    }
  };

  return <ProductPoolContainer>{renderProducts()}</ProductPoolContainer>;
};

export default ProductPool;
