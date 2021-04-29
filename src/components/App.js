import React from "react";
import { Reset } from "styled-reset";
import { HashRouter as Router, Route, } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () =>
  <>
    <Reset />
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  </>

export default App;
