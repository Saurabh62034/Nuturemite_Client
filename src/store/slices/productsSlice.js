import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: sessionStorage.getItem("products")
      ? JSON.parse(sessionStorage.getItem("products"))
      : [],
    searchProducts: sessionStorage.getItem("products")
      ? JSON.parse(sessionStorage.getItem("products"))
      : [],
    isFetching: false,
    isError: false,
  },
  reducers: {
    fetchProductsStart(state, action) {
      state.isFetching = true;
    },
    fetchProductsSuccess(state, action) {
      state.isFetching = false;
      state.products = action.payload.products;
      state.isError = false;
      sessionStorage.setItem(
        "products",
        JSON.stringify(action.payload.products)
      );
    },
    fetchProductsFail(state, action) {
      state.isFetching = false;
      state.isError = true;
    },
    searchProducts(state, action) {
      if (action.payload.query.length <= 0) {
        state.searchProducts = sessionStorage.getItem("products")
          ? JSON.parse(sessionStorage.getItem("products"))
          : [];
      } else {
        const productsData = sessionStorage.getItem("products")
          ? JSON.parse(sessionStorage.getItem("products"))
          : [];
        state.searchProducts = productsData.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(action.payload.query.trim().toLowerCase());
        });
      }
    },
    filterByPrice(state, action) {
      if (action.payload.query === "") {
        return;
      } else if (action.payload.query === "lowTohigh") {
        state.searchProducts = state.searchProducts.sort(
          (a, b) => a.price - b.price
        );
      } else {
        state.searchProducts = state.searchProducts.sort(
          (a, b) => b.price - a.price
        );
      }
    },
  },
});

export default productsSlice;
