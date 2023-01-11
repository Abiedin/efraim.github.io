import { configureStore } from "@reduxjs/toolkit";
import heightSlice from "../slices/heightSlice"

export const store = configureStore({
  reducer: {
    par: heightSlice,
  },
});
