// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
  },
});

export default store;
