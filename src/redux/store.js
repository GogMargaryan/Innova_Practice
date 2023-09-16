// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import menuReducer from "./slices/menuSlice";
import orderReducer from "./slices/orderSlice";
import latestNewsReducer from "./slices/latestNewsSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    menu: menuReducer,

    order: orderReducer,
    latestNews: latestNewsReducer,
  },
});

export default store;
