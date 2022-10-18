import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    entities: []
}

export const fetchUs = createAsyncThunk('users/fetchUs', async () => {
    const response = await axios.get(USER_URL)
    return response.data
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUs.fulfilled, (state, action) => {
            state.entities.push(...action.payload)
        })
    }
})

export default userSlice.reducer