import { createSlice } from "@reduxjs/toolkit";
import news1 from "../../assets/images/news-1.jpg"
import news2 from "../../assets/images/news-2.jpg"
import news3 from "../../assets/images/news-3.jpg"




const initialState = {
  latestNews: [
    {
      id: 1,
      image: news1,
      link: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/blog-detail.html",
      title: "POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION",
      day: "15 JUNE",
      nume: "John Doe",
      commnum: "0"

    },
    {
      id: 2,
      image: news2,
      link: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/blog-detail.html",
      title: "POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION",
      day: "15 JUNE",
      nume: "John Doe",
      commnum: "0"
    },
    {
      id: 3,
      image: news3,
      link: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/blog-detail.html",
      title: "POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION",
      day: "15 JUNE",
      nume: "John Doe",
      commnum: "0"
    },
  ],
};

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState,
  reducers: {},
});

export default latestNewsSlice.reducer;
export const {} = latestNewsSlice.actions;
