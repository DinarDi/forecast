import React from "react";
import { observer } from "mobx-react-lite";
import { Redirect, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App = observer(() => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/weather" component={Weather} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
});

export default App;
