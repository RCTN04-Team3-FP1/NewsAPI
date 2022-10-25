import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div style={styles.searchItem}>
      <Form.Control
        style={styles.form}
        placeholder="Search ..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <Button
        style={styles.button}
        variant="secondary"
        type="submit"
        onClick={() => {
          onSearch(text);
          navigate(`/search/${text}`);
          setText("");
        }}
      >
        Search
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
