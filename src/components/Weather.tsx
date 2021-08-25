import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router-dom";
import store from "../store/weather";
import CurrentWeather from "./CurrentWeather";
import FiveDayForecast from "./FiveDayForecast";

const Weather: React.FC = observer(() => {
  const { loading, error, errorText } = store;
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
      flexDirection: "column",
    },
  });
  const { container, btnBack, flex } = useStyles();

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
          <>
            <CurrentWeather />
            <FiveDayForecast />
          </>
        )}
      </Container>
    </Container>
  );
});

export default Weather;
