import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";

import Posts from "./components/Posts";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/post" component={Posts} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
