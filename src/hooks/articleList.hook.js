import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../features/articles/articlesSlice";

export const useArticleList = ({ temp }) => {
  const { articles, error, loading } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const doFetchArticles = () => {
    dispatch(fetchArticles(temp));
  };

  useEffect(() => {
    doFetchArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  return { articles, error, loading };
};
