import { useDispatch, useSelector } from "react-redux";
import noSaved from "../utils/assets/no-saved.png";
import Table from "react-bootstrap/Table";
import { deleteNews } from "../features/savedNews/savedNewsSlice";
import HandlePage from "./HandlePage";

const Saved = () => {
  const { saved } = useSelector((state) => state.persistedReducer.saved);
  const dispatch = useDispatch();

  if (saved.length === 0) {
    return <HandlePage img={noSaved} text="Still no saved news now ..." />;
  }

  return (
    <div style={styles.container}>
      <Table striped style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={{ width: "20%" }}>Source</th>
            <th style={{ width: "20%" }}>Title</th>
            <th style={{ width: "50%" }}>Description</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {saved.map((data) => (
            <tr>
              <td>
                {data.source.name} - {data.author}
              </td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>
                <div style={styles.btns}>
                  <button
                    style={styles.btn}
                    onClick={() =>
                      window.open(`${data.url}`, "_blank", "noopener,noreferrer")
                    }
                  >
                    ➤
                  </button>
                  <button style={styles.btn} onClick={() => dispatch(deleteNews(data.url))}>🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  table: {
    fontFamily: "'Poppins', sans-serif",
    margin: "1% 2%",
    textAlign: "left",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 10px",
    borderRadius: 5,
  },
  thead: {
    borderBottom: "3px solid black",
    fontSize: 18,
  },
  btns: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "15vh",
  },
  btn: {
    border: "none",
    color: "black",
    backgroundColor: "transparent",
  },
};

export default Saved;
