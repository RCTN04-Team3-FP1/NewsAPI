import { Route, Routes } from "react-router-dom";
import Saved from "../pages/Saved.js";
import ArticlesList from "../features/articles/articlesList";

const Content = ({ search }) => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesList temp={"top-headlines?country=id"}/>} />
      <Route path="/programming" element={<ArticlesList temp={"everything?q=programming"}/>} />
      <Route path="/covid-19" element={<ArticlesList temp={"everything?q=covid19"}/>} />
      <Route path="/saved" element={<Saved />} />
      <Route path={`/search/${search}`} element={<ArticlesList temp={`everything?q=${search}`}/>} />
    </Routes>
  );
};

export default Content;
