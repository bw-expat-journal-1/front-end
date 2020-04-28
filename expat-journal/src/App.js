import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import Posts from "./components/Posts";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path="/" component={Home} />
          <Route path="/post" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
