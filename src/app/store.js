import { configureStore } from "@reduxjs/toolkit";
import userReduce from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        user: userReduce
    }
})