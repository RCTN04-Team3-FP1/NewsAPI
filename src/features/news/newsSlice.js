import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
  error: "",
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (temp) => {
    let url = `https://newsapi.org/v2/${temp}&apiKey=d1aa61fe9ea74853b0a07e24c6e66e27`;
    const response = await axios.get(url);
    return response.data.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.pending, (state) => {
      return { ...state, loading: true };
    });
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        console.log("fullfiled");
        return { ...state, news: action.payload, loading: false, error: ""};
      })
      .addCase(fetchNews.rejected, (state, action) => {
        console.log("rejected");
        return { ...state, loading: false, error: action.error.message};
      });
  },
});

export default newsSlice.reducer;
