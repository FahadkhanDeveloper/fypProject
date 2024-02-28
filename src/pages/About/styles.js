import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "100px 0",
    marginTop: "20px",
  },
  leftSection: {
    padding: "20px",
    color: "white",
    marginTop: "18px",
    marginLeft: "100px",
  },
  rightSection: {
    color: "white",
    margin: "90px 0 0 90px",
  },
  title: {
    color: "white",
    fontSize: "3.8rem !important",
    letterSpacing: 1,
    margin: "10px 10px 10px 0 !important",
  },
  description: {
    fontSize: "1.1rem !important",
    color: "whitesmoke",
    letterSpacing: 2.4,
    width: 380,
    marginTop: "25px !important",
  },
  bannerImage: {
    width: "65%",
    minWidth: "65%",
    height: "auto",
  },

  // Media query for screens below 960px width
  "@media (max-width: 960px)": {
    container: {
      textAlign: "center",
    },
    leftSection: {
      margin: "60px auto 0 auto", // Center horizontally
    },
    rightSection: {
      margin: "30px auto 0 auto", // Center horizontally
    },
    description: {
      fontSize: "1.1rem !important",
      color: "whitesmoke",
      letterSpacing: 2.4,
      width: 430,
      textAlign: "center", // Align center horizontally
      margin: "20px auto", // Align center horizontally
    },
  },
}));

export default useStyles;
