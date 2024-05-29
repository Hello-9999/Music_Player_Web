import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Auth_Details: [],
};

export const auth_Slice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    add_UserInfo: (state, actions) => {
      state.Auth_Details.push(actions.payload);
    },
  },
});

export const { add_UserInfo } = auth_Slice.actions;
export default auth_Slice.reducer;
