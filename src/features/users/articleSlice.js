import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const USER_URL = 'https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=9e5f9785232c458cbd9016f5816d05a8'
const initialState = {
    entities: []
}

export const fetchUs = createAsyncThunk('article/fetchUs', async (hay) => {
    const response = await axios.get(hay)
    return response.data.articles
})

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUs.fulfilled, (state, action) => {
            if (state.entities.length !== 0) {
                state.entities = []
                state.entities.push(...action.payload)
            }
            else {
                state.entities.push(...action.payload)
            }

        })
    }
})

export default articleSlice.reducer