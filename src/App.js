import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Dashboard from "./Components/Dashboard";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <div className="App-header">
          <div className="header">
            <Navigation />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <div>Home works</div>;
}

export default App;
