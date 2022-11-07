import { createSlice } from "@reduxjs/toolkit";
import { getShopItems } from "../utils/mockData";

const initialState = {
  data: [],
};

const shopItemsSlice = createSlice({
  name: "shopItems",
  initialState,
  reducers: {
    getAllShopItems(state, action) {
      state.data = action.payload;
    },
  },
});
export const fetchshopItems = () => {
  return (dispatch) => {
    const fetchData = () => {
      const data = getShopItems();
      dispatch(shopItemsActions.getAllShopItems(data));
    };
    fetchData();
  };
};

export const shopItemsActions = shopItemsSlice.actions;
export default shopItemsSlice;
