import { configureStore } from "@reduxjs/toolkit";
import emailsSlice from "./emailsSlice";
import resultListSlice from "./resultListSlice";
import shopItemsSlice from "./shopItemsSlice";

const store = configureStore({
  reducer: {
    emails: emailsSlice.reducer,
    shopItems: shopItemsSlice.reducer,
    resultList: resultListSlice.reducer,
  },
});

export default store;
