import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  return (
    <div style={styles.searchItem}>
      <Form.Control
        style={styles.form}
        placeholder="Search ..."
        onChange={(e) => setText(e.target.value)}
      />

      <Button
      style={styles.button}
        variant="secondary"
        type="submit"
        onClick={() => {
          onSearch(text);
        }}
      >
        <Link
          to={`/${text}`}
          style={{textDecoration: "none", color: "white"}}
        >
          Search
        </Link>
      </Button>
    </div>
  );
};

const styles = {
  searchItem: {
    display: "flex",
    marginLeft: "25%",
  },
  form: {
    marginRight: 5,
  },
  button: {
    width: "35%",
    marginRight: "10%",
  },
};

export default SearchBar;
