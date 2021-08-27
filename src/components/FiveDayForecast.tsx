import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "../hooks/useStyles";
import store from "../store/weather";

const FiveDayForecast: React.FC = () => {
  const { fiveDayForecast } = store;
  const { cardFive, rootGrid } = useStyles();
  return (
    <Grid container className={rootGrid} spacing={2}>
      {fiveDayForecast.map((forecast) => (
        <Grid item lg={2}>
          <Card elevation={7} className={cardFive}>
            <CardHeader title={forecast.dt_txt} />
            <CardContent>
              <Typography variant="h5" component="h5">
                Min: {forecast.main.temp_min}
              </Typography>
              <Typography variant="h5" component="h5">
                Max: {forecast.main.temp_max}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FiveDayForecast;
