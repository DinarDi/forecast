import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router-dom";
import store from "../store/weather";

const Weather: React.FC = observer(() => {
  const { currentWeather, loading, error, errorText } = store;
  const history = useHistory();
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
    },
  });
  const { container, btnBack, card, flex } = useStyles();

  if (error) {
    return (
      <Container className={container}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.goBack()}
          className={btnBack}
        >
          Back
        </Button>
        <Typography variant="h1" component="h1">
          {errorText}
        </Typography>
      </Container>
    );
  }

  return (
    <Container className={container}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.goBack()}
        className={btnBack}
      >
        Back
      </Button>
      <Container className={flex}>
        {loading ? (
          <Typography variant="h1" component="h1">
            Loading...
          </Typography>
        ) : (
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
        )}
      </Container>
    </Container>
  );
});

export default Weather;
