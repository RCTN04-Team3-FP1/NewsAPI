import { configureStore } from "@reduxjs/toolkit";
import userReduce from '../features/users/usersSlice'
import articleReduce from '../features/users/articleSlice'

export const store = configureStore({
    reducer: {
        user: userReduce,
        article: articleReduce
    }
})