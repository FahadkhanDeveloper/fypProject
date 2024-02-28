import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    // height: "100%",
    minHeight: "100vh",
    flexWrap: "wrap",
    // marginBottom: "110px",
    // marginTop: "90px",
  },
  leftSection: {
    padding: 40,
    width: 590,
    marginTop: "3rem",
  },
  rightSection: {
    width: "max-content",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: "4.8rem !important",
    letterSpacing: 1,
    // margin: "10px",
  },
  subtitle: {
    color: "white",
    fontSize: "3rem !important",
    letterSpacing: "4px !important",
    margin: "0 0 20px 0 !important",
  },
  description: {
    fontSize: "1.1rem !important",
    margin: "0 20px 35px 0 !important",
    color: "whitesmoke",
  },
  btn: {
    padding: "15px 30px",
    marginTop: "20px",
    backgroundColor: "#00acc1 !important",
    color: "white !important",
    cursor: "pointer",
    border: "none",
    outline: "none",
    borderRadius: "30px !important",
    transition: "0.6s",
    "&:hover": {
      background: "rgba(194, 194, 194, 0.247) !important",
      border: "2px solid rgba(255, 255, 255, 0.1)",
    },
  },
  img: {
    width: 390,
    margin: "0 auto 20px auto !important",
    display: "block",
    borderRadius: "45%",
  },
  "@media (max-width: 960px)": {
    leftSection: {
      width: "100%",
      textAlign: "center",
      marginTop: "200px",
    },
    rightSection: {
      width: "100%",
      textAlign: "center",
      marginBottom: "70px",
    },
  },
  "@media (min-width: 961px)": {
    rightSection: {
      marginLeft: "180px !important",
      marginTop: "65px",
    },
  },
}));

export default useStyles;
