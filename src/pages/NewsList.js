import NewsContainer from "../components/NewsContainer";
import { useNewsList } from "../hooks/NewsList.hook";

const NewsList = ({ temp }) => {
  const { news, error, loading } = useNewsList({ temp });

  if (loading) {
    return <div style={{ fontSize: "30px" }}>A moment please...</div>;
  }
  if (error) {
    return (
      <div
        style={{ fontSize: "30px" }}
      >{`There is a problem fetching the post data - ${error}`}</div>
    );
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
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};

export default NewsList;
