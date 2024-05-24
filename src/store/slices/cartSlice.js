import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: sessionStorage.getItem("cartProducts")
      ? JSON.parse(sessionStorage.getItem("cartProducts"))
      : [],
    size: sessionStorage.getItem("cartSize")
      ? JSON.parse(sessionStorage.getItem("cartSize"))
      : 0,
    total: sessionStorage.getItem("cartTotal")
      ? JSON.parse(sessionStorage.getItem("cartTotal"))
      : 0,
    isFetching: false,
    isError: false,
  },
  reducers: {
    fetchCartStart(state, action) {
      state.isFetching = true;
    },
    fetchCartSuccess(state, action) {
      state.isFetching = false;
      state.cartProducts = action.payload.products;
      state.isError = false;
      sessionStorage.setItem(
        "cartProducts",
        JSON.stringify(action.payload.products)
      );
    },
    fetchCartFail(state, action) {
      state.isFetching = false;
      state.isError = true;
    },
    AddToCart(state, action) {
      const prodExists = state.cartProducts.find(
        (obj) => obj.id === action.payload[0].id
      );

      if (!prodExists) {
        state.cartProducts = [...state.cartProducts, ...action.payload];
        sessionStorage.setItem(
          "cartProducts",
          JSON.stringify(state.cartProducts)
        );
      }
    },
    RemoveFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter((e) => {
        return e.id !== action.payload.id;
      });

      sessionStorage.setItem(
        "cartProducts",
        JSON.stringify(state.cartProducts)
      );
    },
    clearCart(state, action) {
      state.cartProducts = [];
      sessionStorage.setItem("cartProducts", JSON.stringify([]));
    },
  },
});

export default cartSlice;
