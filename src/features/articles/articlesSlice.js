import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  loading: false,
  error: "",
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (temp) => {
    let url = `https://newsapi.org/v2/${temp}&apiKey=9e5f9785232c458cbd9016f5816d05a8`;
    const response = await axios.get(url);
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      return { ...state, loading: true };
    });
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        console.log("fullfiled");
        return { ...state, articles: action.payload, loading: false };
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        console.log("rejected");
        return { ...state, loading: false, error: action.error.message};
      });
  },
});

export default articlesSlice.reducer;
