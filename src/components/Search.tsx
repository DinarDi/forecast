import {
  Button,
  Container,
  TextField,
  makeStyles,
  colors,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import store from "../store/weather";

const Search: React.FC = observer(() => {
  const { fetchCurrentWeather, currentWeather } = store;
  const history = useHistory();
  const [city, setCity] = useState<string>("");
  const useStyles = makeStyles({
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
  });
  const { flex, innerContainer, textFieldMargin } = useStyles();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCurrentWeather(city);
    history.push("/weather");
  };

  return (
    <Container className={flex}>
      <Container maxWidth="sm" className={innerContainer}>
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
          <TextField
            label="City name"
            variant="outlined"
            color="primary"
            fullWidth
            className={textFieldMargin}
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
          />
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Search
          </Button>
        </form>
      </Container>
    </Container>
  );
});

export default Search;
