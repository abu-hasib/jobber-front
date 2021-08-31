import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import NewJob from "./Components/Job";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/job/new" component={NewJob} />
            <Route path="/profile/new" component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
