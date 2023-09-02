// Logic of store js

import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./slices/specialitySlice";
import menuReducer from "./slices/menuSlice";

const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    menu: menuReducer,
  },
});

export default store;
