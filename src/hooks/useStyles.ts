import { colors, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: "35vh",
    border: `2px solid ${colors.blueGrey[700]}`,
    padding: "35px",
  },
  textFieldMargin: {
    marginBottom: "15px",
  },

  container: {
    marginTop: "15px",
  },
  btnBack: {
    marginBottom: "15px",
  },
  card: {
    maxWidth: "400px",
    marginBottom: "25px",
  },
  flexColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  },

  cardFive: {
    maxWidth: "350px",
  },
  rootGrid: {
    flexGrow: 1,
    justifyContent: "center",
  },
  weatherImg: {
    maxWidth: "350px",
    height: "100px",
    marginBottom: "10px",
  },
});
