import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";

function App(props) {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
