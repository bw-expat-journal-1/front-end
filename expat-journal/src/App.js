import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Register } from "./Components/Register";
import { Home } from "./Components/Home";
import { Nav } from "./Components/Nav";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import UpdatePostForm from "./Components/UpdatePostForm";
import Login from "./Components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/post" component={Posts} />
          <Route exact path="/postform" component={PostForm}  />
          <Route exact path="/api/posts/:id" component={UpdatePostForm}  />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
