import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: sessionStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token"))
      : null,
    isAdmin: sessionStorage.getItem("isAdmin")
      ? JSON.parse(sessionStorage.getItem("isAdmin"))
      : false,
    isFetching: false,
    isError: false,
  },
  reducers: {
    fetchUserStart(state, action) {
      state.isFetching = true;
    },
    fetchUserSuccess(state, action) {
      state.isFetching = false;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.isError = false;
      sessionStorage.setItem("token", JSON.stringify(action.payload.token));
      sessionStorage.setItem("isAdmin", JSON.stringify(action.payload.isAdmin));
    },
    fetchUserFail(state, action) {
      state.isFetching = false;
      state.isError = true;
    },
    logout(state, action) {
      sessionStorage.clear();
    },
  },
});

export default userSlice;
