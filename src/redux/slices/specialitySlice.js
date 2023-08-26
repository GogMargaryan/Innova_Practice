import { createSlice } from "@reduxjs/toolkit";
import pizza1 from "../../assets/images/pizza1.jpg";
import pizza2 from "../../assets/images/pizza2.jpg";
import pizza3 from "../../assets/images/pizza3.jpg";

const initialState = {
  speciality: [
    {
      id: 1,
      image: pizza1,
      title: "MEXICAN GREEN WAVE",
    },
    {
      id: 2,
      image: pizza2,
      title: "DOUBLE CHEESE PIZZA",
    },
    {
      id: 3,
      image: pizza3,
      title: "MARGHERITA PIZZA",
    },
  ],
};

const specialitySlice = createSlice({
  name: "speciality",
  initialState,
  reducers: {},
});

export default specialitySlice.reducer;
export const {} = specialitySlice.actions;
