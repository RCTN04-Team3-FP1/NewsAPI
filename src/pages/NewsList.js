import NewsContainer from "../components/NewsContainer";
import { useNewsList } from "../hooks/NewsList.hook";
import ReactLoading from "react-loading";
import HandlePage from "./HandlePage";
import noSearch from "../utils/assets/no-search.png";
import errorImg from "../utils/assets/error.png";

const NewsList = ({ temp }) => {
  const { news, error, loading } = useNewsList({ temp });

  if (loading) {
    return (
      <div style={styles.loading}>
        <ReactLoading type="spinningBubbles" color="black" />
      </div>
    );
  }
  if (error) {
    return <HandlePage img={errorImg} text="Ooppsss! There is an error." />;
  }
  if (news.length === 0) {
    return <HandlePage img={noSearch} text="There is no news ..." />;
  }
  return (
    <div style={styles.container}>
      {news.map((data, i) => (
        <NewsContainer data={data} key={i} />
      ))}
    </div>
  );
};

const styles = {
  loading: {
    display: "flex",
    width: "100vw",
    height: "60vh",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};

export default NewsList;
