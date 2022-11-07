import { createSlice } from "@reduxjs/toolkit";
import { getEmails } from "../utils/mockData";

const initialState = {
  data: [],
};

const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    getAllEmails(state, action) {
      state.data = action.payload;
    },
    setEmails(state, action) {
      state.data = action.payload;
    },
  },
});
export const fetchEmails = () => {
  return (dispatch) => {
    const fetchData = () => {
      const data = getEmails();
      dispatch(emailsActions.getAllEmails(data));
    };
    fetchData();
  };
};
export const searchEmails = () => {
  return (dispatch) => {
    const fetchData = () => {
      const data = getEmails();
      dispatch(emailsActions.getAllEmails(data));
    };
    fetchData();
  };
};

export const emailsActions = emailsSlice.actions;
export default emailsSlice;
