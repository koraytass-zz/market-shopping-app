import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/actions";
import styled from "styled-components";
import QuantitySelection from "./quantitySelection";

const ProductPool = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => {
    return { ...state.basketReducer, ...state.sortedProductsReducer };
  });

  const ProductPoolContainer = styled.div`
    height: 100%;
    width: 100%;
    grid-area: content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: white;
  `;
  const ProductCardContainer = styled.div`
    height: 225px;
    width: 154px;
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
    top: 60%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: #191919;
  `;
  const ProductQuantityContainer = styled.button`
    height: 22px;
    width: 124px;
    position: absolute;
    background: #1ea4ce;
    color: white;
    border: none;
    border-radius: 2px;
    top: 86%;
  `;

  const handleClick = (slug?: string) => {
    if (slug) {
      console.log(slug);
      dispatch(addToBasket(slug));
    }
  };

  const renderQuantitySelection = (currentProduct: any) => {
    let slugsOfBasketProducts: string[] = [];
    state && state.productsInTheBasket.forEach((product: any) => {
      slugsOfBasketProducts.push(product?.slug);
    });
    if (state && state.productsInTheBasket.length > 0) {
        if (slugsOfBasketProducts.includes(currentProduct.slug)) {
          return <QuantitySelection product={currentProduct} />;
        } else {
          return (
            <ProductQuantityContainer onClick={() => handleClick(currentProduct.slug)}>
              Add
            </ProductQuantityContainer>
          );
        }
    } else if (state) {
      return (
        <ProductQuantityContainer onClick={() => handleClick(currentProduct.slug)}>
          Add
        </ProductQuantityContainer>
      );
    } else {
      return [];
    }
  };

  const renderProducts = () => {
    if (state && state.productsOnScreen) {
      return state.productsOnScreen.map((product: any) => {
        return (
          <ProductCardContainer>
            <ImageBackgroundContainer>
              <ImageContainer></ImageContainer>
            </ImageBackgroundContainer>
            <ProductPriceContainer>{product.price}</ProductPriceContainer>
            <ProductNameContainer>{product.name}</ProductNameContainer>
            {renderQuantitySelection(product)}
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
