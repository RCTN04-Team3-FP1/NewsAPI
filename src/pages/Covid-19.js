import ArticlesList from "../features/articles/articlesList";

const Covid19 = () => {
  return (
    <div style={styles.container}>
      <ArticlesList temp={"everything?q=covid19"}/>
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

export default Covid19;
