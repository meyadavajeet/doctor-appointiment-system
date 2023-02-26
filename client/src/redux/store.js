import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/AlertSlice";
import { userSlice } from "./features/UserSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
  }
})