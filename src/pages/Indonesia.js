import ArticlesList from "../features/articles/articlesList";

const Indonesia = () => {
  return (
    <div style={styles.container}>
      <ArticlesList temp={"top-headlines?country=id"}/>
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

export default Indonesia;
