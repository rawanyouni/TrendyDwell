import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      //   console.log(`hello ${state.token}`);
    },
    resetToken: (state) => {
      state.token = initialState.token;
      //   console.log(`hellooo ${state.token}`);
    },
  },
});
export const { setToken, resetToken } = tokenSlice.actions;
export default tokenSlice.reducer;
