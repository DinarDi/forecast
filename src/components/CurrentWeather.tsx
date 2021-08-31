import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStyles } from "../hooks/useStyles";
import store from "../store/weather";
import WeatherImg from "./WeatherImg";

const CurrentWeather: React.FC = observer(() => {
  const { currentWeather } = store;
  const { card } = useStyles();

  return (
    <Card elevation={7} className={card}>
      <CardHeader title={currentWeather[0].name} subheader="Current weather" />
      <CardContent>
        <WeatherImg main={currentWeather[0].weather[0].main} />
        <Typography variant="h5" component="h5">
          Temperature: {currentWeather[0].main.temp} °C
        </Typography>
        <Typography variant="h5" component="h5">
          Feels like: {currentWeather[0].main.feels_like} °C
        </Typography>
      </CardContent>
    </Card>
  );
});

export default CurrentWeather;
