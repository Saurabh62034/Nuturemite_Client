import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

export const productsActions = productsSlice.actions;
export const cartActions = cartSlice.actions;
export const userActions = userSlice.actions;

const productsReducer = productsSlice.reducer;
const cartReducer = cartSlice.reducer;
const userReducer = userSlice.reducer;

export const store = configureStore({
  reducer: { productsReducer, cartReducer, userReducer },
});
