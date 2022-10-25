import { Route, Routes } from "react-router-dom";
import Saved from "../pages/Saved.js";
import NewsList from "../pages/NewsList";

const Content = ({ search }) => {
  return (
    <Routes>
      <Route path="/" element={<NewsList temp={"top-headlines?country=id"}/>} />
      <Route path="/programming" element={<NewsList temp={"everything?q=programming"}/>} />
      <Route path="/covid-19" element={<NewsList temp={"everything?q=covid19"}/>} />
      <Route path="/saved" element={<Saved />} />
      <Route path={`/search/${search}`} element={<NewsList temp={`everything?q=${search}`}/>} />
    </Routes>
  );
};

export default Content;
