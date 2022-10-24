import ArticlesList from "../features/articles/articlesList";

const Programming = () => {
  return (
    <div style={styles.container}>
      <ArticlesList temp={"everything?q=programming"}/>
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

export default Programming;
