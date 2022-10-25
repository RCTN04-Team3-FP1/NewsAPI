import { Link } from "react-router-dom";
import { useNav } from "../hooks/Navbar.hook";
import { getCategories } from "../utils/datas/getCategories";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  const categories = getCategories();
  const { str } = useNav();

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        {categories.map((category, i) => (
          <Link
            key={i}
            style={styles.navItem}
            to={`${category.route}`}
            className="navItem"
          >
            {category.name}
          </Link>
        ))}
      </nav>
      <div style={styles.news}>{str} News</div>
      <div style={styles.search}>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#EEEEEE",
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "5px double black",
    position: "sticky",
    top: 0,
    zIndex: 1,
    fontFamily: "'Roboto', sans-serif",
  },
  nav: {
    display: "flex",
    flex: 1,
  },
  navItem: {
    padding: "0 5%",
    color: "black",
  },
  news: {
    flex: 1,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "'Domine', serif",
  },
  search: {
    flex: 1,
  },
};

export default Navbar;
