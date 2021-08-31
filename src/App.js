import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Auth/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
