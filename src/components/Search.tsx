import { Button, Container, TextField } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";
import store from "../store/weather";

const Search: React.FC = observer(() => {
  const { fetchWeather } = store;
  const history = useHistory();
  const [city, setCity] = useState<string>("");
  const { flex, innerContainer, textFieldMargin } = useStyles();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeather(city);
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
