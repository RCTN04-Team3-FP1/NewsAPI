import NewsContainer from "../../components/NewsContainer";
import { useArticleList } from "../../hooks/articleList.hook";

const ArticlesList = ({ temp }) => {
  const { articles, error, loading } = useArticleList({ temp });

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
      {articles.map((data, i) => (
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

export default ArticlesList;
