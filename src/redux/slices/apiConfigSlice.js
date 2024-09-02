import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseUrl: "http://localhost:5000",
};

const apiConfigSlice = createSlice({
  name: "apiConfig",
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload;
    },
  },
});

export const { setBaseUrl } = apiConfigSlice.actions;
export default apiConfigSlice.reducer;
