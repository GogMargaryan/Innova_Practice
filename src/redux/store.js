// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    order: orderReducer
  },
});

export default store;
