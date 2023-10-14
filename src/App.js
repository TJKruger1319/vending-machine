import React from "react";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./home";
import Pizza from "./pizza";
import Tea from "./tea";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pizza">
        <Pizza />
      </Route>
      <Route exact path="/tea">
        <Tea />
      </Route>
      <Route exact path="/desire">
        <p>You just wished to be loved, don't you?</p>
        <p>...If only someone did.</p>
        <p>:(</p>
        <a href="/">Go back and try again</a>
      </Route>
    </BrowserRouter>
  );
}

export default App;
