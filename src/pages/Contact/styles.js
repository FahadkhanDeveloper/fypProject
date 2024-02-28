import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(15),
    backgroundColor: "lightgray",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  socialIcon: {
    marginRight: theme.spacing(1),
    marginTop: "10px",
  },
  title: {
    marginBottom: "7rem",
    color: "#1f9ac7",
    fontSize: "2.6rem",
  },
  leftContent: {
    marginLeft: "40px",
    marginTop: "17px",
  },
  centerTitle: {
    margin: "1.5rem 0 0 6.4rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },

  customListItemText: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0.8,
    paddingBottom: 0.8,
  },
  lists: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  phone: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  phoneNumber: {
    marginTop: "0.7rem",
  },
  email: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  emailAddress: {
    marginTop: "0.6rem",
  },
  rightText: {
    marginLeft: "12px",
  },
}));

export default useStyles;
