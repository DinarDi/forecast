import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import store from "../store/weather";

const FiveDayForecast: React.FC = () => {
  const { fiveDayForecast } = store;
  return (
    <Grid container>
      {fiveDayForecast.map((forecast) => (
        <Card elevation={7}>
          <CardHeader title={forecast.dt_txt} subheader="DATA DATA" />
          <CardContent>
            <Typography variant="h5" component="h5">
              Temperature min: {forecast.main.temp_min}
            </Typography>
            <Typography variant="h5" component="h5">
              Temperature max: {forecast.main.temp_max}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Grid item></Grid>
    </Grid>
  );
};

export default FiveDayForecast;
