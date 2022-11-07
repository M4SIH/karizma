import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const resultListSlice = createSlice({
  name: "resultList",
  initialState,
  reducers: {
    setItem(state, action) {
      const result = action.payload;
      state.data.push(result);
    },
    removeItem(state, action) {
      const item = action.payload;
      const objWithIdIndex = state.data.findIndex((obj) => obj.id === item.id);
      state.data.splice(objWithIdIndex, 1);
    },
    removeAllItem(state) {
      state.data = [];
    },
  },
});

export const resultListActions = resultListSlice.actions;
export default resultListSlice;
