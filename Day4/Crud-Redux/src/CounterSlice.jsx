import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count:0
  },
  reducers: {
    increaseCounter(state, action) {
      state.count += action.payload;
    },
    decreaseCounter(state, action) {
      state.count -= action.payload;
    },
    resetCounter(state, action) {
      state.count = 0;
    },
  },
});

export const { increaseCounter, decreaseCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
