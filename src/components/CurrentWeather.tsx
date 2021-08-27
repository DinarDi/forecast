import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../hooks/useStyles";
import store from "../store/weather";

const CurrentWeather: React.FC = () => {
  const { currentWeather } = store;
  const { card } = useStyles();

  return (
    <Card elevation={7} className={card}>
      <CardHeader title={currentWeather[0].name} subheader="Current weather" />
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
