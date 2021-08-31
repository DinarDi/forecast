import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStyles } from "../hooks/useStyles";
import store from "../store/weather";
import WeatherImg from "./WeatherImg";

const FiveDayForecast: React.FC = observer(() => {
  const { fiveDayForecast } = store;
  const { cardFive, rootGrid } = useStyles();

  return (
    <Grid container className={rootGrid} spacing={2}>
      {fiveDayForecast.map((forecast) => (
        <Grid key={forecast.dt_txt} item lg={2}>
          <Card elevation={7} className={cardFive}>
            <CardHeader title={forecast.dt_txt.split(" ")[0]} />
            <CardContent>
              <WeatherImg main={forecast.weather[0].main} />
              <Typography variant="h5" component="h5">
                Min: {forecast.main.temp_min} °C
              </Typography>
              <Typography variant="h5" component="h5">
                Max: {forecast.main.temp_max} °C
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});

export default FiveDayForecast;
