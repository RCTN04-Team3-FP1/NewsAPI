import { Route, Routes } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming.js";
import Covid19 from "../pages/Covid-19.js";
import Search from "../pages/Search";
// import Saved from "../pages/Saved.js";

const Content = ({ search }) => {
  return (
    <Routes>
      <Route path="/" element={<Indonesia />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/covid-19" element={<Covid19 />} />
      {/* <Route path="/saved" element={<Saved />} /> */}
      <Route path={`/${search}`} element={<Search search={search}/>} />
    </Routes>
  );
};

export default Content;
