import ArticlesList from "../features/articles/articlesList";

const Search = ({ search }) => {
  return (
    <div style={styles.container}>
      <ArticlesList temp={`everything?q=${search}`}/>
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

export default Search;
