import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsReduce from "../features/news/newsSlice";
import savedReduce from "../features/savedNews/savedNewsSlice";
import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  news: newsReduce,
  saved: savedReduce,
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});
