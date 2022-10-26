const HandlePage = ({ img, text}) => {
  return(
    <div>
        <img src={img} alt="" style={{ width: "30%" }} />
        <p style={styles.text}>{text}</p>
    </div>
  )
}

const styles = {
  text: {
    fontSize: 30,
    fontFamily: "'Poppins', sans-serif",
  },
}

export default HandlePage;