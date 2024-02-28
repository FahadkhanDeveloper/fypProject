import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    fontFamily: "Josefin Sans, sans-serif",
    width: "100%",
    color: "white",
    height: "7rem",
    backgroundColor: "#1f9ac7 !important",
    borderTop: "1px solid rgba(236, 236, 236, 0.541)",
    boxShadow: "0 0 80px rgba(110, 202, 255, 0.568)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  createdBy: {
    marginTop: "2.5rem",
    fontSize: "1.3rem",
  },
});

export default useStyles;
