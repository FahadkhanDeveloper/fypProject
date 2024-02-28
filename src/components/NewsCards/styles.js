// styles.js

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  newCategory: {
    marginTop: "20px !important",
    paddingBottom: "60px !important",
    backgroundColor: "lightgray",
  },
  categoryTitle: {
    paddingTop: "100px !important",
    paddingBottom: "30px",
    fontSize: "2.6rem !important",
    color: "#1f9ac7 !important",
  },

  container: {
    padding: "2% 5%",
    width: "100%",
    margin: 0,
    backgroundColor: "lightgray",
  },
  helpCard: {
    border: "0.1rem solid rgb(180, 180, 180)",
    textShadow: "1px 1px #727272",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "55vh",
    padding: "10%",
    borderRadius: "10%",
    color: "white",
    textAlign: "center",
    backgroundColor: "#00acc1",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "all 0.3s ease",
  },
  helpCardHover: {
    "&:hover": {
      transform: "scale(1.05)",
      color: "white",
      backgroundColor: "rgb(19, 210, 149)",
      textShadow: "none",
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
  },
  newsCardsTitle: {
    fontSize: "1.5rem !important",
    fontFamily: "'Josefin Sans', sans-serif !important",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  info: {
    fontSize: "1.2rem !important",
  },
  infoText: {
    fontSize: "1.1rem !important",
  },
});

export default useStyles;
