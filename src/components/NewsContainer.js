import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { saveNews, deleteNews } from "../features/savedNews/savedNewsSlice";

const NewsContainer = ({ data }) => {
  const { saved } = useSelector((state) => state.persistedReducer.saved);
  const dispatch = useDispatch();

  const isSaved = saved.find((news) => news.url === data.url);

  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={data.urlToImage} style={styles.img} />
      <Card.Body style={styles.content}>
        <div style={styles.text}>
          <Card.Text style={styles.source}>{data.source.name}</Card.Text>
          <Card.Title style={styles.title}>{data.title}</Card.Title>
          <Card.Text style={styles.desc}>{data.description}</Card.Text>
        </div>
        <div style={styles.btns}>
          <button
            style={styles.btnDetail}
            onClick={() =>
              window.open(`${data.url}`, "_blank", "noopener,noreferrer")
            }
          >
            News Page
          </button>
          <Button
            variant={isSaved ? "secondary" : "outline-secondary"}
            style={styles.btnSave}
            onClick={() => {
              isSaved
                ? dispatch(deleteNews(data.url))
                : dispatch(saveNews(data));
            }}
          >
            {isSaved ? "Saved" : "Save"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    display: "flex",
    width: "30%",
    margin: "1%",
    textAlign: "left",
    borderRadius: 20,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px",
    fontFamily: "'Poppins', sans-serif",
  },
  img: {
    width: "90%",
    height: 300,
    margin: "5% 5% 0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    flex: 1,
  },
  source: {
    marginTop: 0,
    fontSize: 14,
    margin: "0 2%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "2%",
  },
  desc: {
    margin: "2%",
  },
  btns: { 
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "'Roboto', sans-serif",
  },
  btnDetail: {
    marginLeft: "1%",
    border: "none",
    backgroundColor: "white",
    color: "purple",
    fontSize: "125%",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  btnSave: {
    alignSelf: "flex-end",
    width: "35%",
    margin: "2%",
  },
};

export default NewsContainer;
