// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import latestNewsReducer from "./slices/latestNewsSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    latestNews: latestNewsReducer,
  },
});

export default store;
