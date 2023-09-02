import { createSlice } from "@reduxjs/toolkit";
import order1 from "../../assets/Icons/order-1.svg";
import order2 from "../../assets/Icons/order-2.svg";
import order3 from "../../assets/Icons/order-3.svg";

const initialState = {
  order: [
    {
      id: 1,
      icon: order1,
      header: "ORDER YOUR FOOD",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-",
    },
    {
      id: 2,
      icon: order2,
      header: "DELIVERY OR PICK UP",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-",
    },
    {
      id: 3,
      icon: order3,
      header: "DELICIOUS RECEIPE",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-",
    },
  ],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
export const {} = orderSlice.actions;