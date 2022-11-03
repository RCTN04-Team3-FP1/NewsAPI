import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";

export const useNewsList = ({ temp }) => {
  const { news, error, loading } = useSelector((state) => state.persistedReducer.news);
  const dispatch = useDispatch();

  const doFetchNews = () => {
    dispatch(fetchNews(temp));
  };

  useEffect(() => {
    doFetchNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  return { news, error, loading };
};
