import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
import Sorting from "../components/sortingProducts";

test("Product adding in basket", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const addButton = await screen.findByTestId("add-Sleek Building Mug");
  await waitFor(() => expect(addButton).toBeInTheDocument());
  fireEvent.click(addButton);
  const basketItem = await screen.queryByTestId("Basket-Sleek Building Mug");
  await waitFor(() => expect(basketItem).toBeInTheDocument());
  expect(
    basketItem
  ).toHaveTextContent("Sleek Building Mug");
});

test("Sorting products in product pool", async () => {
  render(
    <Provider store={store}>
      <Sorting />
    </Provider>
  );
  const sortPriceToHigh = await screen.findByRole('radio', {name: 'radio'});
  await waitFor(() => expect(sortPriceToHigh).toBeInTheDocument());
  if(sortPriceToHigh){
    fireEvent.click(sortPriceToHigh);
  }
  
  const productOnScreen = await screen.queryByTestId("sorted-Tasty Architecture Mug");
  await waitFor(() => expect(productOnScreen).toBeInTheDocument());
  expect(
    productOnScreen
  ).toHaveTextContent("Tasty Architecture Mug");

});