import { configureStore } from "@reduxjs/toolkit";
import articlesReduce from "../features/articles/articlesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReduce,
  },
});
