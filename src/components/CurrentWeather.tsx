import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import store from "../store/weather";

const CurrentWeather: React.FC = () => {
  const { currentWeather } = store;
  const useStyles = makeStyles({
    container: {
      marginTop: "15px",
    },
    btnBack: {
      marginBottom: "15px",
    },
    card: {
      maxWidth: "400px",
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
    },
  });
  const { card } = useStyles();
  return (
    <Card elevation={7} className={card}>
      <CardHeader title={currentWeather[0].name} subheader="DATA DATA" />
      <CardContent>
        <Typography variant="h5" component="h5">
          Temperature: {currentWeather[0].main.temp}
        </Typography>
        <Typography variant="h5" component="h5">
          Feels like: {currentWeather[0].main.feels_like}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
