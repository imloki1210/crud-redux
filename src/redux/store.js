import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crudSlice";

export const store = configureStore({
  reducer: { crud: crudReducer },
});
