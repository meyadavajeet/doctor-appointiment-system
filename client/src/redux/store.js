import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/AlertSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
  }
})