import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 150,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
  activeCard: {
    borderBottom: "10px solid #0084ff",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
  title: {
    padding: "0 16px",
    fontSize: "17px !important",
    fontWeight: "550 !important",
    lineHeight: "1.2 !important",
  },
  cardActions: {
    padding: "0 16px 8px 16px !important",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
