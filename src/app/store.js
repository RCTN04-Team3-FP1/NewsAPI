import { configureStore } from "@reduxjs/toolkit";
import newsReduce from "../features/news/newsSlice";
import savedReduce from "../features/savedNews/savedNewsSlice";

export const store = configureStore({
  reducer: {
    news: newsReduce,
    saved: savedReduce,
  },
});
