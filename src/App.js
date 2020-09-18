import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Banking from "./pages/Banking";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/banking-me" component={Banking} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
