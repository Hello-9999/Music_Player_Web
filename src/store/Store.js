import { configureStore } from "@reduxjs/toolkit";
import auth_Reducer from "../reducer/AuthSlice";

export const Store = configureStore({
  reducer: {
    user_LoggedIn_Info: auth_Reducer,
  },
});
