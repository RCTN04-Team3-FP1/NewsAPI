import "./App.css";
import Title from "./components/Title.js";
import Navbar from "./components/Navbar.js";
import Content from "./components/Content.js";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const onSearch = (value) => setSearch(value);

  return (
    <div className="App">
      <Title />
      <Navbar onSearch={onSearch}/>
      <Content search={search}/>
    </div>
  );
}

export default App;
