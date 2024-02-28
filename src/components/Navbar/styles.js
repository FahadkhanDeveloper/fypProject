import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#1f9ac7 !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between", // Align items horizontally with space in between
    "@media (max-width: 700px)": {
      flexDirection: "column", // Change flex direction to column for screens <= 700px
      alignItems: "center", // Align items horizontally centered
    },
  },
  // header: {
  //   display: "flex",
  //   justifyContent: "center",
  //   margin: 0,
  //   padding: "1rem",
  // },
  logo: {
    height: "5rem",
    marginRight: "1rem",
    marginLeft: "1rem",
    marginTop: "1.2rem",
  },
  navLinks: {
    display: "flex",
    marginRight: "3rem !important",
    "@media (max-width: 700px)": {
      marginBottom: "15px",
      marginLeft: "50px !important",
    },
  },
  navLink: {
    marginLeft: "1rem", // Add margin between navigation links
    color: "#ffffff !important",
    textDecoration: "none",
    fontSize: "1.1rem !important",
  },
}));

export default useStyles;
