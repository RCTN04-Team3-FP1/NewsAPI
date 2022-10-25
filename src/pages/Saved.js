import { useSelector } from "react-redux";
import NewsContainer from "../components/NewsContainer";

const Saved = () => {
  const { saved } = useSelector((state) => state.saved);
  console.log(saved)

  if (saved.length === 0) {
    return <div style={{ fontSize: "30px" }}>No Saved News</div>;
  }

  return(
    <div style={styles.container}>
      {saved.map((data, i) => (
        <NewsContainer data={data} key={i} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};

export default Saved;